import Image from "next/image";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="container flex items-center justify-between py-2 sm:py-3">
        <a href="/" className="flex items-center gap-2 sm:gap-3">
          {/* <Image src="/logo.svg" alt="SeekerLane" width={24} height={24} /> */}
          <span className="text-lg sm:text-2xl font-bold text-brand-700">SeekerLane</span>
        </a>

        <nav className="flex items-center gap-3 sm:gap-5 text-sm sm:text-base">
          <a className="nav-link" href="/about">About</a>
          <a className="nav-link" href="/services">Services</a>
          <a className="nav-link" href="/jobs">Jobs</a>
          <a className="btn btn-primary px-4 py-2 sm:px-5 sm:py-3" href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
