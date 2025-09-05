// components/Nav.tsx
"use client";

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

            {/* Our Services button (replaces Services) */}
            <Link
              href="/#services"
              className="rounded-xl px-4 py-2 font-medium bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Our Services
            </Link>

            {/* Browse Jobs button (replaces Jobs) */}
            <Link
              href="/jobs"
              className="rounded-xl px-4 py-2 font-medium bg-white/90 text-slate-900 hover:bg-white"
            >
              Browse Jobs
            </Link>

            {/* Contact stays as a primary pill */}
            <Link
              href="/#c
