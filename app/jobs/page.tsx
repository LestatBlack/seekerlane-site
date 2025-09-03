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
      setError("Job board is temporarily unavailable.");
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
    <section className="space-y-4">
      {/* Responsive heading */}
      <h1 className="text-2xl sm:text-3xl font-bold text-white">Open Roles</h1>

      {loading && <p className="text-slate-300">Loading…</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        jobs.length === 0 ? (
          <p className="text-slate-300">No roles yet. Check back soon.</p>
        ) : (
          <ul className="divide-y divide-slate-700/40 bg-white/10 rounded-2xl backdrop-blur-sm">
            {jobs.map((j) => (
              <li key={j.id} className="p-4 sm:p-5 hover:bg-white/10 transition">
                <Link
                  href={`/jobs/${j.slug}`}
                  className="flex items-center justify-between gap-3"
                  aria-label={`View job: ${j.title}`}
                >
                  <div>
                    {/* Title scales down a bit on small screens */}
                    <div className="font-semibold text-white text-base sm:text-lg">
                      {j.title}
                    </div>
                    <div className="text-sm sm:text-base text-slate-300">
                      {[j.location || "Anywhere", j.remote ? "Remote" : null, j.type]
                        .filter(Boolean)
                        .join(" • ")}
                    </div>
                  </div>
                  <span className="text-slate-400" aria-hidden>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )
      )}
    </section>
  );
}
