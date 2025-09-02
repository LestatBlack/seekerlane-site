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
        <body className="min-h-screen bg-gradient-to-br from-indigo-100 via-sky-100 to-violet-100">
        <Providers>
          <Nav />
          <main className="container py-10">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
