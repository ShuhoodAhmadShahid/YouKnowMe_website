"use client"

export default function ComparisonSection() {
  const metrics = [
    { label: "40% Increase", metric: "in conversion rates", company: "E-Commerce Leaders" },
    { label: "3x Faster", metric: "time to market", company: "Tech Companies" },
    { label: "99.9% Uptime", metric: "platform reliability", company: "Enterprise SaaS" },
    { label: "50+ Integrations", metric: "pre-built connectors", company: "Development Teams" },
  ]

  return (
    <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item, i) => (
            <div key={i} className="flex flex-col space-y-2">
              <p className="text-2xl font-bold text-foreground">{item.label}</p>
              <p className="text-sm text-muted-foreground">{item.metric}</p>
              <p className="text-xs font-medium text-secondary">{item.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
