import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs"; // needed for file uploads

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // server-only
);

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const job_id = String(form.get("job_id") || "");
    const full_name = String(form.get("full_name") || "");
    const email = String(form.get("email") || "");
    const linkedin_url = form.get("linkedin_url") ? String(form.get("linkedin_url")) : null;
    const cover_letter = form.get("cover_letter") ? String(form.get("cover_letter")) : null;
    const resume = form.get("resume") as File | null;

    if (!job_id || !full_name || !email || !resume) {
      return new NextResponse("Missing fields", { status: 400 });
    }

    // Upload resume
    const cleanEmail = email.replace(/[^a-zA-Z0-9_.-]/g, "");
    const path = `applications/${job_id}/${Date.now()}_${cleanEmail}.pdf`;

    const { error: upErr } = await supabase.storage
      .from("resumes")
      .upload(path, resume, { contentType: "application/pdf", upsert: false });
    if (upErr) return new NextResponse("Upload error: " + upErr.message, { status: 500 });

    const { data: urlData } = supabase.storage.from("resumes").getPublicUrl(path);
    const resume_url = urlData?.publicUrl ?? null;

    // Save application row
    const { error: insErr } = await supabase.from("applications").insert({
      job_id, full_name, email, linkedin_url, cover_letter, resume_url
    });
    if (insErr) return new NextResponse("Insert error: " + insErr.message, { status: 500 });

    return NextResponse.json({ ok: true });
  } catch {
    return new NextResponse("Unexpected error", { status: 500 });
  }
}
