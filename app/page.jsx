import Hero from "../components/hero.jsx"
import TechStack from "../components/tech-stack.jsx"
import Services from "../components/services.jsx"
import Pricing from "../components/pricing.jsx"
import Contact from "../components/contact.jsx"
import Navbar from "../components/navbar.jsx"
import Footer from "../components/footer.jsx"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TechStack />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

