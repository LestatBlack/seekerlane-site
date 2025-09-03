"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_ANON } from "../../lib/publicEnv";

type Job = {
  id: string;
  title: string;
  slug: string;
  location: string | null;
  remote: boolean | null;
  type: string | null;
  created_at: string;
};

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Guard once — but don’t show the big scary message unless truly missing
    if (!SUPABASE_URL || !SUPABASE_ANON) {
      setError("Site not configured: missing Supabase env vars.");
      setLoading(false);
      return;
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);

    (async () => {
      const { data, error } = await supabase
        .from("jobs")
        .select("id,title,slug,location,remote,type,created_at")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (error) setError(error.message);
      else setJobs((data ?? []) as Job[]);
      setLoading(false);
    })();
  }, []);

  if (loading) return <p className="text-slate-200">Loading…</p>;
  if (error)     return <p className="text-red-400">{error}</p>;

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold text-white">Open Roles</h1>

      {jobs.length === 0 ? (
        <p className="text-slate-300">No roles yet. Check back soon.</p>
      ) : (
        <ul className="space-y-3">
          {jobs.map((j) => (
            <li key={j.id} className="p-5 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/15 transition">
              <Link href={`/jobs/${j.slug}`} className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white text-lg">{j.title}</div>
                  <div className="text-sm text-slate-300">
                    {[j.location || "Anywhere", j.remote ? "Remote" : null, j.type]
                      .filter(Boolean)
                      .join(" • ")}
                  </div>
                </div>
                <span className="text-slate-400">→</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
