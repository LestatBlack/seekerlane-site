import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs"; // required for file uploads on Vercel

export async function POST(req: Request) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const service = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !service) {
    return new NextResponse("Server not configured: missing Supabase env vars.", { status: 500 });
  }

  const supabase = createClient(url, service);

  try {
    const form = await req.formData();

    const job_id = String(form.get("job_id") || "");
    const full_name = String(form.get("full_name") || "");
    const email = String(form.get("email") || "");
    const linkedin_url = form.get("linkedin_url") ? String(form.get("linkedin_url")) : null;
    const cover_letter = form.get("cover_letter") ? String(form.get("cover_letter")) : null;
    const resume = form.get("resume") as File | null;

    if (!job_id || !full_name || !email || !resume) {
      return new NextResponse("Missing required fields.", { status: 400 });
    }
    // Validate file
    if (resume.type !== "application/pdf") {
      return new NextResponse("Resume must be a PDF.", { status: 400 });
    }
    if (resume.size > 5 * 1024 * 1024) {
      return new NextResponse("PDF exceeds 5 MB.", { status: 400 });
    }

    // Upload resume
    const safeEmail = email.replace(/[^a-zA-Z0-9_.-]/g, "");
    const path = `applications/${job_id}/${Date.now()}_${safeEmail}.pdf`;

    const { error: upErr } = await supabase.storage
      .from("Resumes")
      .upload(path, Resume, {
        contentType: Resume.type || "application/pdf",
        upsert: false,
      });

    if (upErr) {
      return new NextResponse("Upload error: " + upErr.message, { status: 500 });
    }

    // Get public URL
    const { data: urlData } = supabase.storage.from("resumes").getPublicUrl(path);
    const resume_url = urlData?.publicUrl ?? null;

    // Insert application
    const { error: insErr } = await supabase.from("applications").insert({
      job_id,
      full_name,
      email,
      linkedin_url,
      cover_letter,
      resume_url,
    });

    if (insErr) {
      return new NextResponse("DB insert error: " + insErr.message, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return new NextResponse("Unexpected server error: " + (e?.message || "unknown"), { status: 500 });
  }
}
