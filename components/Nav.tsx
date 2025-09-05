// components/Nav.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="text-xl font-semibold tracking-tight">
            SeekerLane
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/#about" className="hover:opacity-80 px-3 py-2 rounded-md">
              About
            </Link>

            {/* Our Services (replaces Services) */}
            <Link
              href="/#services"
              className="rounded-xl px-4 py-2 font-medium bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Our Services
            </Link>

            {/* Browse Jobs (replaces Jobs) */}
            <Link
              href="/jobs"
              className="rounded-xl px-4 py-2 font-medium bg-white/90 text-slate-900 hover:bg-white"
            >
              Browse Jobs
            </Link>

            {/* Contact */}
            <Link
              href="/#contact"
              className="rounded-xl px-4 py-2 font-medium bg-violet-600 text-white hover:bg-violet-700"
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            className="md:hidden rounded-md p-2 hover:bg-white/5"
          >
            {/* bars */}
            <svg className={`h-6 w-6 ${open ? "hidden" : "block"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {/* X */}
            <svg className={`h-6 w-6 ${open ? "block" : "hidden"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden pb-3">
            <div className="mt-2 space-y-1 rounded-lg border border-white/10 bg-slate-900/90 p-2 shadow-lg">
              <Link href="/#about" onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 hover:bg-white/5">
                About
              </Link>
              <Link
                href="/#services"
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Our Services
              </Link>
              <Link
                href="/jobs"
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 bg-white/90 text-slate-900 hover:bg-white"
              >
                Browse Jobs
              </Link>
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-center bg-violet-600 text-white hover:bg-violet-700"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
