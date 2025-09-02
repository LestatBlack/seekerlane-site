"use client";
import { useState } from "react";

export default function ApplicationForm({ jobId }: { jobId: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const fd = new FormData(form);

    try {
      const res = await fetch("/api/apply", { method: "POST", body: fd });
      if (!res.ok) throw new Error(await res.text());
      setStatus("ok");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("err");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-xl">
      <input type="hidden" name="job_id" value={jobId} />
      <div>
        <label className="block text-sm mb-1 text-black">Full name</label>
        <input name="full_name" required className="w-full rounded-xl border border-slate-300 px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm mb-1 text-black">Email</label>
        <input type="email" name="email" required className="w-full rounded-xl border border-slate-300 px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm mb-1 text-black">LinkedIn URL</label>
        <input name="linkedin_url" type="url" placeholder="https://linkedin.com/in/..." className="w-full rounded-xl border border-slate-300 px-3 py-2" />
      </div>
      <div>
        <label className="block text-sm mb-1 text-black">Resume (PDF)</label>
        <input name="resume" type="file" accept="application/pdf" required />
      </div>
      <div>
        <label className="block text-sm mb-1 text-black">Cover letter</label>
        <textarea name="cover_letter" rows={5} className="w-full rounded-xl border border-slate-300 px-3 py-2" />
      </div>
      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Submit application"}
      </button>
      {status === "ok" && <p className="text-green-600">Thanks! We received your application.</p>}
      {status === "err" && <p className="text-red-600">Sorry, something went wrong. Try again.</p>}
    </form>
  );
}
