import { Card } from "@/components/ui/card"

export default function AdminUsageStats() {
  return (
    <Card className="border-primary/20 bg-card glass-effect p-6">
      <h2 className="text-xl font-bold text-foreground mb-6">System Usage</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground mb-2">Total Events Today</p>
          <p className="text-3xl font-bold text-primary">12.4M</p>
          <p className="text-xs text-muted-foreground mt-2">+5% from yesterday</p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground mb-2">Active Tenants</p>
          <p className="text-3xl font-bold text-primary">342</p>
          <p className="text-xs text-muted-foreground mt-2">+12 this week</p>
        </div>
        <div className="rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground mb-2">System Health</p>
          <p className="text-3xl font-bold text-green-500">99.9%</p>
          <p className="text-xs text-muted-foreground mt-2">All systems operational</p>
        </div>
      </div>
    </Card>
  )
}
