"use client"

export default function FeaturesSection() {
  const features = [
    {
      title: "Real-time Personalization",
      description:
        "Deliver tailored experiences instantly using machine learning algorithms that adapt to user behavior in milliseconds.",
      icon: "⚡",
    },
    {
      title: "Cross-Platform Identity",
      description:
        "Unify user data across web, mobile, and backend systems for seamless personalization across all touchpoints.",
      icon: "🔗",
    },
    {
      title: "Advanced Analytics",
      description:
        "Deep insights into user engagement, recommendation accuracy, and revenue impact with real-time dashboards.",
      icon: "📊",
    },
    {
      title: "Enterprise Security",
      description:
        "SOC 2 Type II certified with encryption at rest and in transit, ensuring your data remains protected.",
      icon: "🔒",
    },
    {
      title: "99.9% SLA",
      description:
        "Built on a globally distributed infrastructure with automatic failover and redundancy across regions.",
      icon: "🌍",
    },
    {
      title: "Developer-First API",
      description: "Simple REST and GraphQL APIs with SDKs in Python, JavaScript, Go, and Java for rapid integration.",
      icon: "👨‍💻",
    },
  ]

  return (
    <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">Built for the modern enterprise</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to deliver world-class personalized experiences at scale
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group rounded-lg border border-border bg-card p-6 hover:border-primary/50 hover:bg-card transition"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
