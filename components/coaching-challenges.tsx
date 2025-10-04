import { AlertTriangle, Brain, Target, Users } from "lucide-react"
import { Card } from "@/components/ui/card"

const challenges = [
  {
    icon: AlertTriangle,
    title: "Lost Context Between Sessions",
    description: "Juggling multiple clients means losing track of important details, breakthrough moments, and subtle patterns that emerged weeks or months ago.",
  },
  {
    icon: Brain,
    title: "Missed Connections",
    description: "Without full context, you miss crucial connections between past challenges and current issues, limiting your ability to guide clients effectively.",
  },
  {
    icon: Target,
    title: "Ineffective Session Prep",
    description: "Preparing for sessions without complete client history leads to generic approaches instead of personalized, targeted coaching strategies.",
  },
  {
    icon: Users,
    title: "Diminished Client Impact",
    description: "When you can't reference past progress or connect current struggles to previous breakthroughs, clients feel unheard and progress stalls.",
  },
]

const solutions = [
  {
    icon: Brain,
    title: "Instant Historical Context",
    description: "Access any client's complete coaching journey in seconds. Ask questions about past sessions, breakthroughs, and patterns instantly.",
  },
  {
    icon: Target,
    title: "Intelligent Session Preparation",
    description: "Get AI-generated insights about recurring themes, resistance patterns, and potential next steps based on their entire history.",
  },
  {
    icon: Users,
    title: "Connected Client Journeys",
    description: "Reference past breakthroughs during current challenges. Show clients their growth trajectory and build on previous momentum.",
  },
]

export function CoachingChallenges() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        {/* Problem Section - Just the emotional paragraphs */}
        <div className="mb-20">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-8 text-balance">
              The Hidden Challenge Every Coach Faces
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-left max-w-3xl mx-auto">
              <p>
                As a coach, you're managing multiple clients, each with their own complex journey. 
                You remember that Sarah had a breakthrough about her confidence last month, but was it 
                in the session before or after she mentioned her relationship with her mother? And what 
                exactly did she say that made you realize she was ready to take that next step?
              </p>
              
              <p>
                You're juggling dozens of sessions, months of history, and countless breakthrough moments. 
                Your notes are scattered across different platforms, your memory is stretched thin, and 
                you're constantly worried you're missing crucial connections that could help your clients 
                move forward faster.
              </p>
              
              <p>
                Sound familiar? You're not alone. Every coach faces this reality: the deeper your client 
                relationships become, the more complex the context becomes. You want to reference that 
                powerful moment from three months ago, but you can't quite remember the details. You 
                sense a pattern emerging, but you can't put your finger on exactly when it started or 
                how it's evolved.
              </p>
              
              <p>
                The result? You end up having surface-level conversations instead of the deep, 
                transformative ones your clients need. You miss opportunities to build on past 
                breakthroughs, and your clients feel like they're starting from scratch every session 
                instead of building on their progress.
              </p>
              
              <p>
                What if there was a way to instantly access the full context of any client's journey? 
                What if you could ask questions about their entire coaching history and get immediate, 
                intelligent answers that help you prepare for every session with complete understanding?
              </p>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h3 className="text-2xl font-bold tracking-tight md:text-4xl mb-6 text-balance">
              What If You Could Have a Conversation with Your Client's Entire History?
            </h3>
            <p className="text-lg text-muted-foreground text-balance leading-relaxed">
              Imagine being able to ask questions about any client's complete coaching journey. 
              Discover patterns, reference past breakthroughs, and prepare for sessions with 
              the full context of their entire relationship with you.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {solutions.map((solution, index) => (
              <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                  <solution.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="mb-3 text-lg font-semibold text-purple-900">{solution.title}</h4>
                <p className="text-sm text-purple-700 leading-relaxed">{solution.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-purple-900 mb-4">
              This is the power of ReQall's proprietary memory graph technology.
            </p>
            <p className="text-purple-700">
              Transform from session-by-session coaching to journey-aware coaching.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
