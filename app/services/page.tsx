export default function Services() {
  const services = [
    { title: "Contingency Search", desc: "Pay upon hire.", bullets: ["Shortlists fast","Scorecards","References"] },
    { title: "RPO (Monthly)", desc: "Plug-in squad.", bullets: ["Dedicated recruiter","ATS & process","Weekly reporting"] },
    { title: "Contractors / Staff Aug", desc: "Flexible & compliant.", bullets: ["Deel/EOR","Time tracking","Scale quickly"] },
  ];
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Services</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map(s => (
          <div
            key={s.title}
            className="card p-6 transition will-change-transform hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="font-semibold text-lg">{s.title}</h2>
            <p className="text-slate-600 mt-1">{s.desc}</p>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-600">
              {s.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
