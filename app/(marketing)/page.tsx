"use client";

export const dynamic = "force-dynamic"; // bypass prerender at build

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Marketing Home (placeholder)</h1>
        <p>Build should pass. We’ll paste Lovable code next.</p>
      </div>
    </main>
  );
}
