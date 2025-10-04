import { Upload, Brain, LineChart } from "lucide-react"
import { Card } from "@/components/ui/card"

const steps = [
  {
    icon: Upload,
    title: "Upload Session Transcripts",
    description:
      "Simply upload Zoom transcripts from your one-on-one coaching sessions. Our system securely processes them automatically.",
  },
  {
    icon: Brain,
    title: "AI Analysis & Insights",
    description:
      "Advanced AI analyzes emotional patterns, identifies breakthrough moments, and extracts key themes from each session.",
  },
  {
    icon: LineChart,
    title: "Interactive Memory Networks",
    description:
      "Explore proprietary ReQall memory graphs that track each client's journey, patterns, and breakthroughs. Interact with their history to discover new insights and talking points for future sessions.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-4 text-balance">How ReQall Works</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Three simple steps to transform your coaching practice with AI-powered insights
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="relative p-8 bg-card">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {index + 1}
              </div>
              <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
