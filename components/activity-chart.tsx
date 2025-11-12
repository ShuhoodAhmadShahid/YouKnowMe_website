"use client"

import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Mon", value: 2400 },
  { name: "Tue", value: 2210 },
  { name: "Wed", value: 2290 },
  { name: "Thu", value: 2000 },
  { name: "Fri", value: 2181 },
  { name: "Sat", value: 2500 },
  { name: "Sun", value: 2100 },
]

export default function ActivityChart() {
  return (
    <Card className="border-primary/20 bg-card glass-effect p-6">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-foreground">Events This Week</h3>
        <p className="text-sm text-muted-foreground">Real-time tracking data</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="name" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1E293B",
              border: "1px solid #334155",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#F8FAFC" }}
          />
          <Bar dataKey="value" fill="#14B8A6" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}
