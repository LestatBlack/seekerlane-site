// app/api/upload/route.ts
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
  const resume = form.get("resume") as File | null;

  if (!resume) {
    return NextResponse.json({ error: "No file provided." }, { status: 400 });
  }

  const ext = resume.name.split(".").pop() || "pdf";
  const path = `resumes/${Date.now()}-${Math.random()
    .toString(36)
    .slice(2)}.${ext}`;

  const { error: upErr } = await supabase.storage
    .from("Resumes") // bucket name EXACT
    .upload(path, resume, {
      contentType: resume.type || "application/pdf",
      upsert: false,
    });

  if (upErr) {
    return NextResponse.json({ error: upErr.message }, { status: 500 });
  }

  const { data: pub } = supabase.storage.from("Resumes").getPublicUrl(path);
  return NextResponse.json({ ok: true, resumeUrl: pub?.publicUrl ?? null, path });
}
