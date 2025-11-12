"use client"

import { Card } from "@/components/ui/card"
import { Users, Activity, TrendingUp, Zap } from "lucide-react"

const stats = [
  {
    label: "Active Users",
    value: "12,543",
    change: "+12% from last month",
    icon: Users,
  },
  {
    label: "Events Tracked",
    value: "2.4M",
    change: "+24% from last month",
    icon: Activity,
  },
  {
    label: "Recommendation Accuracy",
    value: "94.2%",
    change: "+2.1% from last week",
    icon: TrendingUp,
  },
  {
    label: "API Latency",
    value: "23ms",
    change: "Within SLA",
    icon: Zap,
  },
]

export default function StatsOverview() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index} className="border-primary/20 bg-card glass-effect p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground mt-2">{stat.value}</p>
                <p className="text-xs text-primary mt-2">{stat.change}</p>
              </div>
              <div className="rounded-lg bg-primary/10 p-3">
                <Icon className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
