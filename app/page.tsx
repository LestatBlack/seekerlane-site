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

            {/* Mobile tagline (visible on < lg) */}
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
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-md">
              {/* OPTIONAL: subtle gradient to improve text contrast */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/10" />

              <Image
                src="/hero.jpg" // 👈 replace with your actual image in /public
                alt="SeekerLane hero"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Desktop-only badge */}
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
