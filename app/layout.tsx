import "../app/globals.css"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

export const metadata = {
  title: "SeekerLane • Tech Recruitment",
  description: "We place top tech talent. Fast.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="container py-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
