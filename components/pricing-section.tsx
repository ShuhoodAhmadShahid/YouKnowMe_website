"use client"

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for getting started",
      features: ["Up to 100K events/month", "Basic analytics", "Email support", "1 API key"],
      cta: "Get Started",
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "For growing businesses",
      highlighted: true,
      features: [
        "Up to 10M events/month",
        "Advanced analytics",
        "Priority support",
        "Unlimited API keys",
        "Custom integrations",
        "SLA guarantee",
      ],
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale deployments",
      features: [
        "Unlimited events",
        "Dedicated support",
        "Custom SLA",
        "On-premises option",
        "Advanced security",
        "Custom training",
      ],
      cta: "Contact Sales",
    },
  ]

  return (
    <section className="border-t border-border bg-muted/30 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">Transparent pricing for every size</h2>
          <p className="mt-4 text-lg text-muted-foreground">Choose the plan that fits your needs. Always scalable.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-lg border p-8 transition ${
                plan.highlighted
                  ? "border-primary/50 bg-background shadow-lg shadow-primary/10"
                  : "border-border bg-background"
              }`}
            >
              <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>

              <div className="mt-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
              </div>

              <button
                className={`mt-6 w-full rounded-lg px-4 py-2 text-center text-sm font-semibold transition ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border text-foreground hover:bg-muted"
                }`}
              >
                {plan.cta}
              </button>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
