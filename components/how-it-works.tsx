"use client"

import { Database, Brain, Zap } from "lucide-react"

const steps = [
  {
    icon: Database,
    title: "Integrate SDK",
    description: "Connect your data source to Supabase with real-time event tracking.",
  },
  {
    icon: Brain,
    title: "Train ALS",
    description: "Our AI model learns user preferences and creates personalized profiles.",
  },
  {
    icon: Zap,
    title: "Deliver Recommendations",
    description: "Get smart recommendations via our API in milliseconds.",
  },
]

export default function HowItWorks() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">How it works</h2>
          <p className="text-lg text-muted-foreground">Three simple steps to personalization at scale</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-8 hidden h-1 w-8 bg-gradient-to-r from-primary to-transparent md:block" />
                )}

                <div className="group rounded-xl border border-primary/20 bg-card p-8 transition hover:border-primary/50 hover:bg-card/80 glass-effect">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary/20">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>

                  {/* Step number */}
                  <div className="absolute -left-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-primary font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
