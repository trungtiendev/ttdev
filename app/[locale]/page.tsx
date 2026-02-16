import Hero from "@/components/hero"
import Features from "@/components/features"
import About from "@/components/about"
import CTA from "@/components/cta"
import Services from "@/components/services"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <CTA />
    </main>
  )
}
