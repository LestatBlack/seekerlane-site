import "./globals.css"
import Providers from "./providers"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

export const metadata = {
  title: "SeekerLane • Tech Recruitment",
  description: "We place top tech talent. Fast.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Soft, clean background for the whole site */}
        <body className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white">
        <Providers>
          <Nav />
          <main className="container py-10">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
