"use client";
export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

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
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!url || !anon) {
      setError("Site not configured: missing Supabase env vars.");
      setLoading(false);
      return;
    }

    const supabase = createClient(url, anon);

    (async () => {
      const { data, error } = await supabase
        .from("jobs")
        .select("id,title,slug,location,remote,type,created_at")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (error) setError(error.message);
      else if (data) setJobs(data as Job[]);
      setLoading(false);
    })();
  }, []);

  if (loading) return <p className="text-white">Loading…</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold text-white">Open Roles</h1>
      {jobs.length === 0 ? (
        <p className="text-slate-300">No roles yet. Check back soon.</p>
      ) : (
        <ul className="divide-y divide-slate-700 bg-white/5 rounded-2xl">
          {jobs.map((j) => (
            <li key={j.id} className="p-5 hover:bg-white/10 transition">
              <Link
                href={`/jobs/${j.slug}`}
                className="flex items-center justify-between"
              >
                <div>
                  <div className="font-semibold text-white">{j.title}</div>
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
