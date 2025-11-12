"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Database, Zap, Shield, BarChart3, Cpu, Lock } from "lucide-react"

const features = [
  {
    icon: Database,
    title: "Realtime Event Tracking",
    description: "Supabase Realtime channels push live user events to your dashboard instantly.",
  },
  {
    icon: Lock,
    title: "Cross-Tenant Identity Linking",
    description: "SHA256 hashed user identifiers maintain privacy while linking data across platforms.",
  },
  {
    icon: Cpu,
    title: "AI Recommender Engine",
    description: "Advanced ALS (Alternating Least Squares) algorithm powers intelligent personalization.",
  },
  {
    icon: BarChart3,
    title: "Scalable Data Pipeline",
    description: "MVP uses direct DB writes; roadmap includes Kafka for massive scale.",
  },
  {
    icon: Zap,
    title: "API-First Architecture",
    description: "RESTful endpoints for tracking events and retrieving recommendations with millisecond latency.",
  },
  {
    icon: Shield,
    title: "Privacy & Compliance",
    description: "GDPR and CCPA compliant with end-to-end encryption and data anonymization.",
  },
]

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-5xl font-bold text-foreground sm:text-6xl">Powerful Features Built for Scale</h1>
            <p className="text-lg text-muted-foreground">
              Enterprise-grade infrastructure for personalization at any scale
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="border-primary/20 bg-card glass-effect p-8 transition hover:border-primary/50"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
