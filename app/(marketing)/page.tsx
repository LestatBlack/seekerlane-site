// app/(marketing)/page.tsx
export const dynamic = "force-dynamic";   // ⬅️ disables prerender for this route
export const revalidate = 0;              // ⬅️ no static cache

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <h1 className="text-3xl font-bold">Marketing Home (dynamic test)</h1>
    </main>
  );
}

