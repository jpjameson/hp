import { CheckCircle2 } from "lucide-react"

const benefits = [
  {
    title: "Deeper Client Understanding",
    description: "Move beyond surface-level observations with AI-powered emotional analysis and pattern recognition.",
  },
  {
    title: "Save Time on Session Notes",
    description: "Automated transcript analysis means less time on documentation and more time coaching.",
  },
  {
    title: "Track Progress with Precision",
    description: "Memory graphs provide clear visualization of client growth, setbacks, and breakthrough moments.",
  },
  {
    title: "Data-Driven Coaching Strategies",
    description: "Make informed decisions based on comprehensive client data and AI-generated insights.",
  },
  {
    title: "Identify Patterns Faster",
    description: "Spot recurring themes, triggers, and behaviors across sessions that might otherwise go unnoticed.",
  },
  {
    title: "Enhance Client Outcomes",
    description: "Better insights lead to more targeted interventions and improved client results.",
  },
]

export function Benefits() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-6 text-balance">
              Why Professional Coaches Choose ReQall
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Transform your coaching practice with AI-powered insights that help you understand your clients better and
              deliver breakthrough moments that matter.
            </p>
            <div className="space-y-4">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {benefits.slice(3).map((benefit, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
