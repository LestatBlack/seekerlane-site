"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_ANON } from "../../../lib/publicEnv";
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
  const { slug } = useParams<{ slug: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!SUPABASE_URL || !SUPABASE_ANON) {
      setError("Job board is temporarily unavailable.");
      return;
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);

    (async () => {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();

      if (error) setError(error.message);
      else setJob(data as Job);
    })();
  }, [slug]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!job) return <p className="text-slate-300">Loading…</p>;

  return (
    <article className="space-y-4">
      <h1 className="text-3xl font-bold text-white">{job.title}</h1>
      <p className="text-slate-300">
        {[job.location || "Anywhere", job.remote ? "Remote" : null, job.type]
          .filter(Boolean)
          .join(" • ")}
      </p>

      {job.salary_min && job.salary_max && (
        <p className="text-white/90">
          <strong>Compensation:</strong> {(job.currency || "USD")} {job.salary_min}–{job.salary_max}
        </p>
      )}

      <div className="card p-6">
        <div className="prose max-w-none text-black whitespace-pre-wrap">
          {job.description}
        </div>
      </div>

      <div className="card p-6">
        <h2 className="font-semibold text-lg text-black mb-2">Apply</h2>
        <ApplicationForm jobId={job.id} jobTitle={job.title} />
      </div>
    </article>
  );
}
