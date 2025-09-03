// app/layout.tsx
import "./globals.css";
import Providers from "./providers";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  title: "SeekerLane • Tech Recruitment",
  description: "We place top tech talent. Fast.",
};

// ✅ Ensures proper mobile scaling
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white">
        <Providers>
          <Nav />
          {/* Container keeps consistent page padding; extra top padding so content isn't under the sticky nav */}
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-12">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
