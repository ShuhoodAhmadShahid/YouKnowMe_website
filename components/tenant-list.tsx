"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreVertical } from "lucide-react"

const tenants = [
  {
    id: 1,
    name: "Acme Corporation",
    users: 45230,
    events: "12.4M",
    status: "active",
    joined: "2024-06-15",
  },
  {
    id: 2,
    name: "Tech Innovations Inc",
    users: 12890,
    events: "3.2M",
    status: "active",
    joined: "2024-07-20",
  },
  {
    id: 3,
    name: "Global Retail Co",
    users: 234567,
    events: "89.3M",
    status: "active",
    joined: "2024-05-10",
  },
  {
    id: 4,
    name: "Startup Labs",
    users: 1230,
    events: "120K",
    status: "trial",
    joined: "2024-11-01",
  },
]

export default function TenantList() {
  return (
    <div className="overflow-x-auto">
      <Card className="border-primary/20 bg-card glass-effect">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Tenant Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Users</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Events</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Joined</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tenants.map((tenant, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-card/50 transition">
                  <td className="px-6 py-4 text-sm text-foreground font-medium">{tenant.name}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{tenant.users.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{tenant.events}</td>
                  <td className="px-6 py-4">
                    <Badge
                      className={
                        tenant.status === "active" ? "bg-green-500/20 text-green-200" : "bg-blue-500/20 text-blue-200"
                      }
                    >
                      {tenant.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{tenant.joined}</td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
