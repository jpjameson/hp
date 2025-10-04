import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { NeuralNetwork } from "./neural-network"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-1.5 text-sm text-purple-700">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Coaching Intelligence</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl">
            Transform Your Coaching Practice with{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI-Powered Insights
            </span>
          </h1>

          <p className="mb-10 text-lg text-muted-foreground text-balance md:text-xl leading-relaxed max-w-3xl mx-auto">
            ReQall helps professional coaches understand their clients better, track progress more effectively, and
            deliver breakthrough moments through intelligent session analysis and memory graphs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="text-base bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent">
              Watch Demo
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required • Secure & confidential • 14-day free trial
          </p>
        </div>
      </div>

      <NeuralNetwork />
    </section>
  )
}
