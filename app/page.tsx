// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
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
                href="/services"
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

              {/* LOCAL image in /public — change src if you used another name */}
              <Image
                src="/hero.png"
                alt="SeekerLane hero"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                // If you use a remote URL instead of /public, you can add:
                // unoptimized
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
  );
}
