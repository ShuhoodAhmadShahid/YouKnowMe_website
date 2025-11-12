"use client"

export default function SocialProofSection() {
  return (
    <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold text-primary">Trusted by industry leaders</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground">
            Used by thousands of companies worldwide
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex items-center justify-center rounded-lg border border-border bg-card p-8 h-20">
              <div className="h-8 w-24 rounded bg-muted"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
