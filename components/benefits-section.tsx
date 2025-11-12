"use client"

import { Shield, Zap, BarChart3 } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Privacy-First",
    description: "User data is anonymized and encrypted. Full compliance with GDPR and CCPA.",
  },
  {
    icon: Zap,
    title: "Real-Time Updates",
    description: "Supabase realtime channels keep your recommendations fresh and current.",
  },
  {
    icon: BarChart3,
    title: "Cross-Tenant Intelligence",
    description: "Leverage collective insights while maintaining tenant data isolation.",
  },
]

export default function BenefitsSection() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl">Why YouKnowMe</h2>
          <p className="text-lg text-muted-foreground">Built for modern businesses that value privacy and speed</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="rounded-xl border border-border bg-card/50 p-8 glass-effect transition hover:border-primary/50"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
