"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for getting started",
    features: ["Up to 1K users", "100K events/month", "Basic analytics", "Community support", "API access"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    description: "For growing businesses",
    features: [
      "Up to 50K users",
      "5M events/month",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "Realtime dashboard",
      "Model insights",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale operations",
    features: [
      "Unlimited users",
      "Unlimited events",
      "Dedicated pipeline",
      "24/7 support",
      "Custom model tuning",
      "SLA guarantee",
      "White-label options",
      "On-premise deployment",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-5xl font-bold text-foreground sm:text-6xl">Simple, Transparent Pricing</h1>
            <p className="text-lg text-muted-foreground">Choose the plan that fits your business. Scale up anytime.</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`border glass-effect transition flex flex-col ${
                  plan.highlighted
                    ? "border-primary bg-gradient-to-b from-card/80 to-card ring-2 ring-primary/20"
                    : "border-primary/20 bg-card"
                }`}
              >
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground ml-2">{plan.period}</span>}
                  </div>
                  <p className="text-sm text-muted-foreground mb-8">{plan.description}</p>

                  <Button
                    asChild
                    className={`mb-8 w-full ${
                      plan.highlighted
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "border-primary/50 hover:bg-primary/10 text-foreground"
                    }`}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    <Link href="/signup">{plan.cta}</Link>
                  </Button>

                  <div className="space-y-4 flex-1">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
