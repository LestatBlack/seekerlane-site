// components/marketing/Header.tsx
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/seekerlane-logo.png"   // make sure this file exists in /public
            alt="SeekerLane"
            width={130}
            height={36}
            priority
          />
          <span className="sr-only">SeekerLane</span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          {/* anchor links scroll on the homepage */}
          <Link href="/#about" className="hover:text-slate-900">About</Link>
          <Link href="/#services" className="hover:text-slate-900">Services</Link>
          <Link href="/#why-hire-us" className="hover:text-slate-900">Why Hire Us</Link>
          {/* separate page */}
          <Link href="/jobs" className="hover:text-slate-900">Jobs</Link>
        </nav>

        {/* Contact button */}
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
