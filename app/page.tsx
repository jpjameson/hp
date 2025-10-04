import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { CoachingChallenges } from "@/components/coaching-challenges"
import { HowItWorks } from "@/components/how-it-works"
import { Features } from "@/components/features"
import { Benefits } from "@/components/benefits"
import { TrustIndicators } from "@/components/trust-indicators"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto">
        <Hero />
        <CoachingChallenges />
        <HowItWorks />
        <Features />
        <Benefits />
        <TrustIndicators />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
