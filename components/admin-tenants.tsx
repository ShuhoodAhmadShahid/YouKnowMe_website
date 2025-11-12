"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus } from "lucide-react"

export default function AdminTenants() {
  return (
    <div>
      <div className="mb-6 flex justify-end">
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Plus className="mr-2 h-4 w-4" />
          New Tenant
        </Button>
      </div>

      <Card className="border-primary/20 bg-card glass-effect p-6">
        <h2 className="text-xl font-bold text-foreground mb-6">Tenant Management</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div>
                <p className="font-medium text-foreground">Tenant {i} - Acme Corp</p>
                <p className="text-xs text-muted-foreground">ID: tenant_{i}@example.com</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  View
                </Button>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
