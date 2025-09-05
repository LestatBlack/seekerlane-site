// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            {/* Left: text */}
            <div className="order-2 space-y-4 lg:order-1">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                SeekerLane
              </h1>

              {/* Mobile tagline */}
              <p className="lg:hidden text-base sm:text-lg text-slate-300">
                LatAm reach • US standards
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/#services"
                  className="rounded-xl px-5 py-3 bg-indigo-600 text-white font-medium hover:bg-indigo-700"
                >
                  Our Services
                </Link>
                <Link
                  href="/jobs"
                  className="rounded-xl px-5 py-3 bg-slate-100 text-slate-900 font-medium hover:bg-slate-200"
                >
                  Browse Jobs
                </Link>
              </div>
            </div>

            {/* Right: image */}
            <div className="order-1 lg:order-2">
              {/* The wrapper has a gradient fallback so it never looks broken */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-md bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950">
                {/* Optional subtle overlay for contrast */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/10" />

                <Image
                  src="/hero.png"
                  alt="SeekerLane hero"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Desktop-only floating badge */}
                <span className="hidden lg:block absolute top-4 left-4 rounded-full bg-white/85 backdrop-blur px-3 py-1 text-sm font-medium text-slate-900">
                  LatAm reach • US standards
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY SECTIONS */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-[40vh] pb-24">
        {/* ABOUT */}
        <section id="about" className="relative min-h-[120vh] scroll-mt-24">
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
        <section id="services" className="relative min-h-[120vh] scroll-mt-24">
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
                  <strong>Recruitment Ops:</strong> process design, scorecards, in
