"use client";
import { useState } from "react";

export default function ApplicationForm({
  jobId,
  jobTitle,
}: {
  jobId: string;
  jobTitle: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  const [resumeStatus, setResumeStatus] =
    useState<"idle" | "uploading" | "ok" | "error">("idle");
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);

  async function handleResumeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setResumeStatus("uploading");
    setError(null);
    setResumeUrl(null);

    const fd = new FormData();
    fd.append("resume", file);

    const res = await fetch("/api/upload", { method: "POST", body: fd });
    const json = await res.json();

    if (!res.ok) {
      setResumeStatus("error");
      setError(json.error || "Resume upload failed.");
      return;
    }

    setResumeUrl(json.resumeUrl || null);
    setResumeStatus("ok");
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    data.set("job_id", jobId);

    // If we already uploaded, send just the URL and NOT the file again
    if (resumeUrl) {
      data.set("resume_url", resumeUrl);
      data.delete("resume");
    }

    const res = await fetch("/api/apply", { method: "POST", body: data });
    const json = await res.json();

    if (!res.ok) {
      setStatus("error");
      setError(json.error || "Sorry, something went wrong.");
    } else {
      setStatus("ok");
      form.reset();
      // keep resumeUrl so the link stays visible (or clear if you prefer)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" encType="multipart/form-data">
      <div>
        <label className="block text-sm font-medium text-black">Applying to</label>
        <input value={jobTitle} readOnly className="mt-1 w-full rounded-xl border px-3 py-2 bg-slate-50 text-black"/>
        <input type="hidden" name="job_id" value={jobId} />
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-black">First name</label>
          <input name="first_name" required className="mt-1 w-full rounded-xl border px-3 py-2 text-black"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Last name</label>
          <input name="last_name" required className="mt-1 w-full rounded-xl border px-3 py-2 text-black"/>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-black">Email</label>
        <input type="email" name="email" required className="mt-1 w-full rounded-xl border px-3 py-2 text-black"/>
      </div>

      <div>
        <label className="block text-sm font-medium text-black">LinkedIn URL</label>
        <input name="linkedin_url" placeholder="https://linkedin.com/in/..." className="mt-1 w-full rounded-xl border px-3 py-2 text-black"/>
      </div>

      {/* Resume upload (instant) */}
      <div>
        <label className="block text-sm font-medium text-black">Resume (PDF)</label>
        <input
          type="file"
          name="resume"
          accept="application/pdf"
          className="mt-1 block"
          onChange={handleResumeChange}
        />
        {resumeStatus === "uploading" && <p className="text-slate-600 mt-1">Uploading…</p>}
        {resumeStatus === "ok" && (
          <p className="text-green-600 mt-1">
            ✅ Resume uploaded. {resumeUrl && (<a className="underline" href={resumeUrl} target="_blank">View</a>)}
          </p>
        )}
        {resumeStatus === "error" && <p className="text-red-600 mt-1">{error}</p>}
        {/* if you want to ensure URL is sent even if user edits fields later */}
        {resumeUrl && <input type="hidden" name="resume_url" value={resumeUrl} />}
      </div>

      <div>
        <label className="block text-sm font-medium text-black">Cover letter</label>
        <textarea name="cover_letter" rows={6} className="mt-1 w-full rounded-xl border px-3 py-2 text-black"/>
      </div>

      <button disabled={status === "submitting"} className="btn btn-primary">
        {status === "submitting" ? "Submitting..." : "Submit application"}
      </button>

      {status === "ok" && (
        <div className="text-green-600">
          <p>✅ Application received!</p>
          {resumeUrl && <p className="mt-1">Resume on file. <a className="underline" href={resumeUrl} target="_blank">Open</a></p>}
        </div>
      )}
      {status === "error" && <p className="text-red-600">{error}</p>}
    </form>
  );
}
