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
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    setUploadedUrl(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Must include these keys exactly:
    // first_name, last_name, email, linkedin_url (optional), cover_letter (optional), job_id, resume (file)
    data.set("job_id", jobId);

    const res = await fetch("/api/apply", { method: "POST", body: data });
    const json = await res.json();

    if (!res.ok) {
      setError(json.error || "Sorry, something went wrong. Try again.");
      setStatus("error");
    } else {
      setStatus("ok");
      setUploadedUrl(json.resumeUrl || null);
      form.reset();
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4"
      encType="multipart/form-data"
    >
      {/* Which job (read-only) */}
      <div>
        <label className="block text-sm font-medium text-black">Applying to</label>
        <input
          value={jobTitle}
          readOnly
          className="mt-1 w-full rounded-xl border px-3 py-2 bg-slate-50 text-black"
        />
        <input type="hidden" name="job_id" value={jobId} />
      </div>

      {/* First / Last name */}
      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-black">First name</label>
          <input
            name="first_name"
            required
            className="mt-1 w-full rounded-xl border px-3 py-2 text-black"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">Last name</label>
          <input
            name="last_name"
            required
            className="mt-1 w-full rounded-xl border px-3 py-2 text-black"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-black">Email</label>
        <input
          type="email"
          name="email"
          required
          className="mt-1 w-full rounded-xl border px-3 py-2 text-black"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-black">LinkedIn URL</label>
        <input
          name="linkedin_url"
          placeholder="https://linkedin.com/in/..."
          className="mt-1 w-full rounded-xl border px-3 py-2 text-black"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-black">Resume (PDF)</label>
        <input type="file" name="resume" accept="application/pdf" className="mt-1 block" />
      </div>

      <div>
        <label className="block text-sm font-medium text-black">Cover letter</label>
        <textarea
          name="cover_letter"
          rows={6}
          className="mt-1 w-full rounded-xl border px-3 py-2 text-black"
        />
      </div>

      <button disabled={status === "submitting"} className="btn btn-primary">
        {status === "submitting" ? "Submitting..." : "Submit application"}
      </button>

      {status === "ok" && (
        <div className="text-green-600">
          <p>✅ Application received!</p>
          {uploadedUrl && (
            <p className="mt-1">
              ✅ Resume uploaded. <a className="underline" href={uploadedUrl} target="_blank">View file</a>
            </p>
          )}
        </div>
      )}
      {status === "error" && <p className="text-red-600">{error}</p>}
    </form>
  );
}
