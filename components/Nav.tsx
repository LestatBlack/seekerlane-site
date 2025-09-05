// components/Nav.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Fast (≈300ms) smooth scroll for in-page anchors
  const fastScroll = (hash: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!hash.startsWith("#")) return; // external link
    e.preventDefault();
    setOpen(false);

    const el = document.querySelector(hash) as HTMLElement | null;
    if (!el) return;

    const headerOffset = 96; // ~6rem; matches scroll-mt-24
    const targetY = Math.max(0, el.getBoundingClientRect().top + window.scrollY - headerOffset);

    const startY = window.scrollY;
    const dist = targetY - startY;
    const duration = 300; // ms
    const start = performance.now();

    const ease = (t: number) => t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2) / 2;

    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const y = startY + dist * ease(p);
      window.scrollTo(0, y);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-semibold tracking-tight">SeekerLane</Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/#about" onClick={fastScroll("#about")} className="hover:opacity-80">About</Link>
            <Link href="/#services" onClick={fastScroll("#services")} className="hover:opacity-80">Services</Link>
            <Link href="/jobs" className="hover:opacity-80">Jobs</Link>
            <Link
              href="/#contact"
              onClick={fastScroll("#contact")}
              className="rounded-xl px-4 py-2 font-medium bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Contact
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            className="md:hidden rounded-md p-2 hover:bg-white/5"
          >
            <svg className={`h-6 w-6 ${open ? "hidden" : "block"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className={`h-6 w-6 ${open ? "block" : "hidden"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-3">
            <div className="mt-2 space-y-1 rounded-lg border border-white/10 bg-slate-900/90 p-2 shadow-lg">
              <Link href="/#about" onClick={fastScroll("#about")} className="block rounded-md px-3 py-2 hover:bg-white/5">About</Link>
              <Link href="/#services" onClick={fastScroll("#services")} className="block rounded-md px-3 py-2 hover:bg-white/5">Services</Link>
              <Link href="/jobs" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 hover:bg-white/5">Jobs</Link>
              <Link href="/#contact" onClick={fastScroll("#contact")} className="block rounded-md px-3 py-2 text-center bg-indigo-600 text-white hover:bg-indigo-700">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
