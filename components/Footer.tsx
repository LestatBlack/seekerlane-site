export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200">
      <div className="container py-8 text-sm text-slate-500">
        © {new Date().getFullYear()} SeekerLane • Tech Recruitment
      </div>
    </footer>
  );
}
