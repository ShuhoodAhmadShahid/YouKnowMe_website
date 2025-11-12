"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const events = [
  { id: 1, user: "user_123", event: "click", time: "2 mins ago" },
  { id: 2, user: "user_456", event: "view", time: "5 mins ago" },
  { id: 3, user: "user_789", event: "purchase", time: "12 mins ago" },
  { id: 4, user: "user_012", event: "click", time: "23 mins ago" },
  { id: 5, user: "user_345", event: "view", time: "1 hour ago" },
]

const eventTypes: Record<string, string> = {
  click: "bg-blue-500/20 text-blue-200",
  view: "bg-purple-500/20 text-purple-200",
  purchase: "bg-green-500/20 text-green-200",
}

export default function RecentEvents() {
  return (
    <Card className="border-primary/20 bg-card glass-effect p-6 h-full">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-foreground">Recent Events</h3>
        <p className="text-sm text-muted-foreground">Last 5 activities</p>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="flex items-center justify-between pb-4 border-b border-border last:border-0">
            <div>
              <p className="text-sm font-medium text-foreground">{event.user}</p>
              <p className="text-xs text-muted-foreground">{event.time}</p>
            </div>
            <Badge className={eventTypes[event.event] || "bg-gray-500/20"}>{event.event}</Badge>
          </div>
        ))}
      </div>
    </Card>
  )
}
