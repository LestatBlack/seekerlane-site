import Image from "next/image";
import { Reveal, Marquee } from "../components/Motion";

export default function Home() {
  return (
    <section className="space-y-12 sm:space-y-16">
      {/* HERO */}
      <div className="relative rounded-2xl overflow-hidden">
        <Image
          src="/SLbanner.png"
          alt="Hero"
          width={2400}
          height={1200}
          className="w-full h-[240px] sm:h-[340px] md:h-[420px] object-cover transform-gpu will-change-transform"
          priority
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        <div className="absolute inset-x-0 bottom-6 sm:bottom-7 flex flex-col items-center text-center px-4 sm:px-6">
          <Reveal>
            <div className="space-y-4 max-w-2xl">
              <span className="inline-block rounded-full bg-white/70 text-black px-3 py-1 text-xs sm:text-sm">
                LatAm reach • US standards
              </span>

              {/* stack on mobile, row on sm+ */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="/services" className="btn btn-primary">Our Services</a>
                <a href="/jobs" className="btn btn-light">Browse Jobs</a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Feature cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Quality > Volume", text: "3–5 great profiles beat 50 resumes." },
          { title: "Process & KPIs", text: "Clear SLAs, structured interviews, weekly reports." },
          { title: "Candidate Experience", text: "Human-first outreach, fast feedback, high close." },
        ].map((f, i) => (
          <Reveal key={f.title} delay={i * 0.1}>
            <div className="card p-5 sm:p-6 hover:shadow-md transition">
              <h3 className="font-semibold text-lg sm:text-xl mb-2 text-black">{f.title}</h3>
              <p className="text-slate-700 text-sm sm:text-base">{f.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Marquee */}
      <div className="card p-5 sm:p-6">
        <Marquee>
          {["Frontend", "Backend", "DevOps", "Data", "QA", "Product", "Design"].map((t) => (
            <span key={t} className="px-3 py-2 sm:px-4 rounded-full bg-slate-100 text-slate-700 text-sm sm:text-base">
              {t}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
