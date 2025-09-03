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
      else setJobs((data || []) as Job[]);
      setLoading(false);
    })();
  }, []);

  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold text-white">Open Roles</h1>

      {loading && <p className="text-slate-300">Loading…</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <ul className="space-y-4">
          {jobs.map((j) => (
            <li key={j.id}>
              <Link
                href={`/jobs/${j.slug}`}
                className="block rounded-2xl border border-white/10 bg-white/10 hover:bg-white/15 transition p-5"
              >
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {j.title}
                    </h3>
                    <p className="mt-1 text-slate-300">
                      {[j.location || "Anywhere", j.remote ? "Remote" : null, j.type]
                        .filter(Boolean)
                        .join(" • ")}
                    </p>
                  </div>
                  <span className="text-slate-400">→</span>
                </div>
              </Link>
            </li>
          ))}
          {jobs.length === 0 && (
            <li className="text-slate-300">No roles yet. Check back soon.</li>
          )}
        </ul>
      )}
    </section>
  );
}
