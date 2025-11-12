"use client"
import AdminNav from "@/components/admin-nav"
import AdminTenants from "@/components/admin-tenants"
import AdminUsageStats from "@/components/admin-usage-stats"
import AdminTrainingLogs from "@/components/admin-training-logs"
import AdminApiKeys from "@/components/admin-api-keys"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function AdminPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  // TODO: Add admin role verification here
  // For now, just redirect authenticated users

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground">System administration and tenant management</p>
        </div>

        <Tabs defaultValue="tenants" className="w-full">
          <TabsList className="mb-8 bg-card border-border">
            <TabsTrigger value="tenants">Tenants</TabsTrigger>
            <TabsTrigger value="usage">Usage Stats</TabsTrigger>
            <TabsTrigger value="logs">Training Logs</TabsTrigger>
            <TabsTrigger value="keys">API Keys</TabsTrigger>
          </TabsList>

          <TabsContent value="tenants">
            <AdminTenants />
          </TabsContent>

          <TabsContent value="usage">
            <AdminUsageStats />
          </TabsContent>

          <TabsContent value="logs">
            <AdminTrainingLogs />
          </TabsContent>

          <TabsContent value="keys">
            <AdminApiKeys />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
