import Image from "next/image";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 border-b border-slate-200 supports-[backdrop-filter]:bg-white/70">
      <div className="container flex items-center justify-between py-3">
        <a href="/" className="flex items-center gap-3">
          {/* optional placeholder logo */}
          {/* <Image src="/logo.svg" alt="SeekerLane" width={24} height={24} /> */}
          <span className="text-xl md:text-2xl font-bold text-brand-700">SeekerLane</span>
        </a>
        <nav className="flex items-center gap-5">
          <a className="nav-link" href="/about">About</a>
          <a className="nav-link" href="/services">Services</a>
          <a className="nav-link" href="/jobs">Jobs</a>
          <a className="btn btn-primary" href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
