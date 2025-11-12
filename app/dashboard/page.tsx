import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import DashboardNav from "@/components/dashboard-nav"
import StatsOverview from "@/components/stats-overview"
import ActivityChart from "@/components/activity-chart"
import RecentEvents from "@/components/recent-events"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Settings } from "lucide-react"

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardNav />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Monitor your recommendation engine performance</p>
          </div>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>

        {/* Stats Overview */}
        <StatsOverview />

        {/* Charts and Activity */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ActivityChart />
          </div>
          <div>
            <RecentEvents />
          </div>
        </div>

        {/* Training Section */}
        <Card className="mt-8 border-primary/20 bg-card glass-effect p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-foreground">Model Training</h3>
              <p className="text-sm text-muted-foreground">Last trained: 2 hours ago</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Train New Model</Button>
          </div>
        </Card>
      </main>
    </div>
  )
}
