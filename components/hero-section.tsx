"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background gradient glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-4 py-2 animate-fade-in-up">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">AI-powered personalization</span>
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-5xl font-bold leading-tight text-foreground sm:text-6xl lg:text-7xl animate-fade-in-up">
            Personalization that{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Knows You
            </span>{" "}
            — Everywhere
          </h1>

          {/* Subheading */}
          <p className="mb-12 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-in-up">
            AI-driven cross-platform recommendations built for your business. Real-time data integration, privacy-first
            design, and scalable intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in-up">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/signup" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/docs">See Demo</Link>
            </Button>
          </div>

          {/* Visual demo placeholder */}
          <div className="mt-20 w-full max-w-3xl rounded-2xl border border-primary/20 bg-card/50 p-8 glass-effect glow-effect">
            <div className="aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="mb-4 text-4xl font-bold text-primary/30">→ ← ↓ ↑</div>
                <p className="text-sm text-muted-foreground">Product demo animation coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
