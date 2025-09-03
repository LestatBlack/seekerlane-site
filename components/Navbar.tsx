"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="text-xl font-semibold tracking-tight">
            SeekerLane
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="hover:opacity-80">About</Link>
            <Link href="/services" className="hover:opacity-80">Services</Link>
            <Link href="/jobs" className="hover:opacity-80">Jobs</Link>
            <Link
              href="/contact"
              className="rounded-xl px-4 py-2 font-medium bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Contact
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-md p-2 hover:bg-black/5"
          >
            {/* icon toggles */}
            <svg
              className={`h-6 w-6 ${open ? "hidden" : "block"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`h-6 w-6 ${open ? "block" : "hidden"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="mt-2 space-y-1 rounded-lg border border-black/5 bg-white p-2 shadow-sm">
              <Link href="/about" className="block rounded-md px-3 py-2 hover:bg-black/5">About</Link>
              <Link href="/services" className="block rounded-md px-3 py-2 hover:bg-black/5">Services</Link>
              <Link href="/jobs" className="block rounded-md px-3 py-2 hover:bg-black/5">Jobs</Link>
              <Link
                href="/contact"
                className="block rounded-md px-3 py-2 bg-indigo-600 text-white text-center hover:bg-indigo-700"
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
