// app/api/apply/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const service = process.env.SUPABASE_SERVICE_ROLE_KEY!;

  if (!url || !service) {
    return NextResponse.json(
      { error: "Server not configured: missing Supabase env vars." },
      { status: 500 }
    );
  }

  // Server-side (service role) client
  const supabase = createClient(url, service);

  // Read form-data
  const form = await req.formData();
  const jobId = form.get("job_id") as string;
  const fullName = form.get("full_name") as string;
  const email = form.get("email") as string;
  const linkedin = (form.get("linkedin_url") as string) || "";
  const cover = (form.get("cover_letter") as string) || "";
  const resume = form.get("resume") as File | null; // <— lowercase

  // Basic validation
  if (!jobId || !fullName || !email) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  // Upload resume (optional)
  let resumeUrl: string | null = null;
  if (resume) {
    // create a unique path
    const ext = resume.name.split(".").pop() || "pdf";
    const path = `resumes/${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}.${ext}`;

    // IMPORTANT: bucket name must match exactly ("Resumes")
    const { error: upErr } = await supabase.storage
      .from("Resumes")
      .upload(path, resume, {
        contentType: resume.type || "application/pdf",
        upsert: false,
      });

    if (upErr) {
      return NextResponse.json(
        { error: `Upload error: ${upErr.message}` },
        { status: 500 }
      );
    }

    // Public URL (bucket is public in MVP)
    const { data: pub } = supabase.storage.from("Resumes").getPublicUrl(path);
    resumeUrl = pub?.publicUrl ?? null;
  }

  // Insert application row
  const { error: insErr } = await supabase.from("applications").insert({
    job_id: jobId,
    full_name: fullName,
    email,
    linkedin_url: linkedin,
    cover_letter: cover,
    resume_url: resumeUrl,
  });

  if (insErr) {
    return NextResponse.json(
      { error: `DB insert error: ${insErr.message}` },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
