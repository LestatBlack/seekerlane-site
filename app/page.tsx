import Image from "next/image";
import { Reveal, Parallax, Marquee } from "../components/Motion";

export default function Home() {
  return (
    <section className="space-y-16">
      {/* HERO with parallax background */}
      <div className="relative rounded-2xl overflow-hidden">
        <Parallax range={[-20, 20]}>
          <Image
            src="/SLbanner.png"
            alt="Hero"
            width={2400}
            height={1200}
            className="w-full h-[360px] object-cover"
            priority
          />
        </Parallax>
        <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-x-0 bottom-13 flex flex-col items-center text-center px-6">
          <Reveal>
            <div className="space-y-4 max-w-2xl">
              <span className="inline-block rounded-full bg-white/20 text-white px-4 py-1 text-sm">
                LatAm reach • US standards
              </span>
              <div className="flex items-center justify-center gap-3">
                <a href="/services" className="btn btn-primary">Our Services</a>
                <a href="/jobs" className="btn btn-outline bg-white/80">Browse Jobs</a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* SCROLL-REVEAL feature cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {title: "Quality > Volume", text: "3–5 great profiles beat 50 resumes."},
          {title: "Process & KPIs", text: "Clear SLAs, structured interviews, weekly reports."},
          {title: "Candidate Experience", text: "Human-first outreach, fast feedback, high close."},
        ].map((f, i) => (
          <Reveal key={f.title} delay={i * 0.1}>
            <div className="card p-6 hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-slate-600">{f.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* MARQUEE of roles or logos */}
      <div className="card p-6">
        <Marquee>
          {["Frontend", "Backend", "DevOps", "Data", "QA", "Product", "Design"].map((t) => (
            <span key={t} className="px-4 py-2 rounded-full bg-slate-100 text-slate-700">{t}</span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
