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

  const supabase = createClient(url, service);

  const form = await req.formData();

  const firstName = (form.get("first_name") as string | null)?.trim() || "";
  const lastName  = (form.get("last_name")  as string | null)?.trim() || "";
  const email     = (form.get("email") as string | null)?.trim() || "";
  const linkedin  = ((form.get("linkedin_url") as string | null) || "").trim();
  const cover     = ((form.get("cover_letter") as string | null) || "").trim();
  const jobId     = (form.get("job_id") as string | null)?.trim() || "";

  // NEW: if resume already uploaded, we’ll get this:
  const resumeUrlProvided = (form.get("resume_url") as string | null)?.trim() || "";

  // Optional file (only if user didn’t pre-upload)
  const resume = form.get("resume") as File | null;

  if (!firstName || !lastName || !email || !jobId) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  let resumeUrl: string | null = null;

  if (resumeUrlProvided) {
    // Already uploaded via /api/upload
    resumeUrl = resumeUrlProvided;
  } else if (resume) {
    // Fallback: upload here if user didn’t pre-upload for some reason
    const ext = resume.name.split(".").pop() || "pdf";
    const path = `resumes/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    const { error: upErr } = await supabase.storage
      .from("Resumes")
      .upload(path, resume, {
        contentType: resume.type || "application/pdf",
        upsert: false,
      });

    if (upErr) {
      return NextResponse.json({ error: `Upload error: ${upErr.message}` }, { status: 500 });
    }

    const { data: pub } = supabase.storage.from("Resumes").getPublicUrl(path);
    resumeUrl = pub?.publicUrl ?? null;
  }

  const { error: insErr } = await supabase.from("applications").insert({
    job_id: jobId,
    first_name: firstName,
    last_name: lastName,
    email,
    linkedin_url: linkedin,
    cover_letter: cover,
    resume_url: resumeUrl,
  });

  if (insErr) {
    return NextResponse.json({ error: `DB insert error: ${insErr.message}` }, { status: 500 });
  }

  // send URL back so form can show link
  return NextResponse.json({ ok: true, resumeUrl });
}
