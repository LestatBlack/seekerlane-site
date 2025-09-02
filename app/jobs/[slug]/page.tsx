"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "../../../lib/supabaseClient";
import ApplicationForm from "../../../components/ApplicationForm";


type Job = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  location: string | null;
  remote: boolean | null;
  type: string | null;
  salary_min: number | null;
  salary_max: number | null;
  currency: string | null;
};

export default function JobPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase
        .from("jobs")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();
      if (data) setJob(data as Job);
    })();
  }, [slug]);

  if (!job) return <p className="text-black">Loading…</p>;

  return (
    <article className="space-y-4">
      <h1 className="text-3xl font-bold text-black">{job.title}</h1>
      <p className="text-slate-600">
        {[job.location || "Anywhere", job.remote ? "Remote" : null, job.type].filter(Boolean).join(" • ")}
      </p>
      {job.salary_min && job.salary_max && (
        <p className="text-black">
          <strong>Compensation:</strong> {(job.currency || "USD")} {job.salary_min}–{job.salary_max}
        </p>
      )}
      <div className="card p-6">
        <div className="prose max-w-none text-black whitespace-pre-wrap">{job.description}</div>
      </div>

      <div className="card p-6">
        <h2 className="font-semibold text-lg text-black mb-2">Apply</h2>
        <ApplicationForm jobId={job.id} />
      </div>
    </article>
  );
}
