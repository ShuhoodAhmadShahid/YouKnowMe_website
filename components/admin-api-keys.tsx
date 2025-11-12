import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AdminApiKeys() {
  return (
    <Card className="border-primary/20 bg-card glass-effect p-6">
      <h2 className="text-xl font-bold text-foreground mb-6">API Key Management</h2>
      <div className="space-y-4">
        {[
          { tenant: "Acme Corp", key: "sk_live_***4f2k", created: "30 days ago" },
          { tenant: "Tech Startup", key: "sk_live_***8x9p", created: "15 days ago" },
          { tenant: "Global Retail", key: "sk_live_***3q5r", created: "7 days ago" },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium text-foreground">{item.tenant}</p>
              <p className="text-xs text-muted-foreground font-mono">{item.key}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Created: {item.created}</p>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm">
                  Revoke
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
