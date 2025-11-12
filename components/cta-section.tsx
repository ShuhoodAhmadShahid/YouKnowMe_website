"use client"

export default function CTASection() {
  return (
    <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-foreground">Ready to transform your user experience?</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Join hundreds of companies delivering personalized experiences that drive revenue and engagement.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition">
            Schedule Demo
          </button>
          <button className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-background px-8 text-base font-semibold text-foreground hover:bg-muted transition">
            View Documentation
          </button>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">Free trial available. No credit card required.</p>
      </div>
    </section>
  )
}
