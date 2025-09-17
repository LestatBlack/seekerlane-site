// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* HERO — centered, larger, no left title/buttons */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-4xl aspect-[16/9] overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/10" />
              <Image
                src="/hero.png"
                alt="SeekerLane hero"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <span className="hidden lg:block absolute top-5 left-5 rounded-full bg-white/85 backdrop-blur px-3 py-1 text-sm font-medium text-slate-900">
                LatAm reach • US standards
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY SECTIONS (lightweight) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-[20vh] pb-24">
        {/* ABOUT */}
        <section id="about" className="relative min-h-[100vh] scroll-mt-24">
          <div className="lg:sticky top-24">
            <div className="rounded-3xl p-8 sm:p-10 bg-white/5 ring-1 ring-white/10 shadow-xl backdrop-blur">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">About</h2>
              <p className="text-slate-300 leading-relaxed">
                We connect top LATAM engineers and tech talent with US-quality processes:
                structured interviews, clear SLAs, fast shortlists, and weekly reporting.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="relative min-h-[100vh] scroll-mt-24">
          <div className="lg:sticky top-24">
            <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-indigo-600/20 to-fuchsia-600/20 ring-1 ring-white/10 shadow-xl backdrop-blur">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Services</h2>
              <ul className="grid gap-4 text-slate-200">
                <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  <strong>Direct Hire:</strong> 3–5 top candidates in days, not weeks.
                </li>
                <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  <strong>Staff Augmentation:</strong> pre-vetted devs integrated into your team.
                </li>
                <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                  <strong>Recruitment Ops:</strong> process design, scorecards, interview kits, KPIs.
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                {/* keep a CTA here too, optional */}
                <Link
                  href="/#contact"
                  className="rounded-xl px-5 py-3 bg-indigo-600 text-white font-medium hover:bg-indigo-700"
                >
                  Get a proposal
                </Link>
                <Link
                  href="/jobs"
                  className="rounded-xl px-5 py-3 bg-slate-100 text-slate-900 font-medium hover:bg-slate-200"
                >
                  Browse Jobs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="relative min-h-[100vh] scroll-mt-24">
          <div className="lg:sticky top-24">
            <div className="rounded-3xl p-8 sm:p-10 bg-white/5 ring-1 ring-white/10 shadow-xl backdrop-blur">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact</h2>
              <p className="text-slate-300 mb-6">
                Tell us what you need (role, stack, seniority, budget, timeline). We’ll send a shortlist quickly.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:hello@seekerlane.com"
                  className="rounded-xl px-5 py-3 bg-indigo-600 text-white font-medium hover:bg-indigo-700"
                >
                  Email Us
                </a>
                <Link
                  href="/contact"
                  className="rounded-xl px-5 py-3 bg-slate-100 text-slate-900 font-medium hover:bg-slate-200"
                >
                  Open Contact Page
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
