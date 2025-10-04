import { Shield, Lock, CheckCircle2, Award } from "lucide-react"
import { Card } from "@/components/ui/card"

const indicators = [
  {
    icon: Shield,
    title: "Secure Data Handling",
    description: "Advanced security measures protect your client information",
  },
  {
    icon: Lock,
    title: "Privacy Focused",
    description: "Your client data is handled with the utmost confidentiality",
  },
  {
    icon: CheckCircle2,
    title: "Professional Standards",
    description: "Built to meet the highest coaching industry standards",
  },
  {
    icon: Award,
    title: "Built for Professional Coaches",
    description: "Designed specifically for coaching industry needs",
  },
]

export function TrustIndicators() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-4 text-balance">
            Your Clients' Trust is Our Priority
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Professional-grade security and privacy you can count on
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {indicators.map((indicator, index) => (
            <Card key={index} className="p-6 text-center bg-card">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <indicator.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold">{indicator.title}</h3>
              <p className="text-sm text-muted-foreground">{indicator.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
