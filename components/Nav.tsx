export default function Nav() {
  return (
    <header className="border-b border-slate-200">
      <div className="container flex items-center justify-between py-4">
        <a href="/" className="text-2xl font-bold text-brand-700">SeekerLane</a>
        <nav className="flex items-center gap-6">
          <a className="nav-link" href="/about">About</a>
          <a className="nav-link" href="/services">Services</a>
          <a className="nav-link" href="/jobs">Jobs</a>
          <a className="btn btn-primary" href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
