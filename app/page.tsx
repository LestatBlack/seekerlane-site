export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="text-center py-24">
        <h1 className="text-5xl font-bold mb-4">SeekerLane</h1>
        <p className="text-xl mb-8">Where talent finds its path</p>
        <div className="flex gap-4 justify-center">
          <a href="/jobs" className="bg-blue-600 px-6 py-3 rounded-lg font-semibold">
            Browse Jobs
          </a>
          <a href="/services" className="bg-purple-600 px-6 py-3 rounded-lg font-semibold">
            Our Services
          </a>
        </div>
      </section>
    </main>
  );
}
