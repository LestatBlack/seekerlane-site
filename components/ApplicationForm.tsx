"use client";

import { useRef, useState } from "react";

export default function ApplicationForm({ jobId }: { jobId: string }) {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setOk(false);

    const formEl = e.currentTarget;
    const fd = new FormData(formEl);

    // Ensure we have a file
    const file = fileRef.current?.files?.[0] || (fd.get("resume") as File | null);
    if (!file) {
      setError("Please attach your resume as a PDF.");
      return;
    }
    // Validate file type/size (<= 5 MB)
    if (file.type !== "application/pdf") {
      setError("Resume must be a PDF.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("PDF is too large (max 5 MB).");
      return;
    }

    // Add required fields
    fd.set("job_id", jobId);

    // Submit
    setSubmitting(true);
    try {
      const res = await fetch("/api/apply", { method: "POST", body: fd });
      const text = await res.text(); // route may return JSON or text
      if (!res.ok) {
        setError(text || "Upload failed.");
      } else {
        try {
          const j = JSON.parse(text);
          if (!j?.ok) setError("Server did not confirm success.");
          else setOk(true);
        } catch {
          // plain text ok
          setOk(true);
        }
        // reset form
        formEl.reset();
        if (fileRef.current) fileRef.current.value = "";
      }
    } catch (err: any) {
      setError(err?.message || "Network error.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-black">Full name</label>
          <input name="full_name" required className="input" placeholder="Ada Lovelace" />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Email</label>
          <input name="email" type="email" required className="input" placeholder="ada@example.com" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-black">LinkedIn URL</label>
        <input name="linkedin_url" className="input" placeholder="https://linkedin.com/in/..." />
      </div>

      <div>
        <label className="block text-sm font-medium text-black">Resume (PDF)</label>
        <input
          ref={fileRef}
          name="resume"
          type="file"
          accept="application/pdf"
          required
          className="block"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-black">Cover letter</label>
        <textarea name="cover_letter" className="input h-40" placeholder="(optional)" />
      </div>

      <button disabled={submitting} className="btn btn-primary">
        {submitting ? "Submitting…" : "Submit application"}
      </button>

      {ok && <p className="text-green-600">Thanks! Your application was received.</p>}
      {error && <p className="text-red-600">{error}</p>}
      {/* minimal styles if needed */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          background: white;
        }
      `}</style>
    </form>
  );
}
