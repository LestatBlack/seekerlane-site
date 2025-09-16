HEAD
// app/(marketing)/page.tsx
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <h1 className="text-3xl font-bold">Marketing Home (server test)</h1>
    </main>
  );
}

export { default } from "./marketing/page";
export const dynamic = "force-dynamic";
export const revalidate = 0;
3df69653d4b587656abcffdee0dc16a313e63a6b
