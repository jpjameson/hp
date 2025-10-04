import { Brain, Lightbulb, Network, Calendar, BarChart3, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Brain,
    title: "Emotional Intelligence Mapping",
    description:
      "Deep emotional analysis reveals client's emotional patterns, triggers, and growth areas across all sessions.",
  },
  {
    icon: Lightbulb,
    title: "Breakthrough Detection Engine",
    description:
      "Automatically identifies and highlights breakthrough moments, resistance patterns, and key turning points in client progress.",
  },
  {
    icon: Network,
    title: "ReQall Memory Networks",
    description: "Explore our proprietary memory graph technology that tracks each client's complete journey, patterns, and growth over time.",
  },
  {
    icon: Calendar,
    title: "Smart Session Preparation",
    description: "Get AI-generated talking points, questions, and insights to prepare for your next session with each client.",
  },
  {
    icon: BarChart3,
    title: "Progress Visualization",
    description: "Visual dashboards show client progress, pattern changes, and growth trajectories across multiple sessions.",
  },
  {
    icon: Users,
    title: "Client Relationship Intelligence",
    description: "Gain deeper insights into each client relationship with data-driven coaching strategies and personalized approaches.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-4 text-balance">
            Everything You Need to Coach Better
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Powerful features designed specifically for professional coaches and therapists
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-card hover:shadow-lg transition-shadow">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
