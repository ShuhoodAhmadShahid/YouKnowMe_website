import { Card } from "@/components/ui/card"

export default function AdminTrainingLogs() {
  return (
    <Card className="border-primary/20 bg-card glass-effect p-6">
      <h2 className="text-xl font-bold text-foreground mb-6">Model Training Logs</h2>
      <div className="space-y-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <p className="font-medium text-foreground">Tenant {i} - ALS Training</p>
              <p className="text-xs text-muted-foreground">Completed 2 hours ago</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-green-500">Success</p>
              <p className="text-xs text-muted-foreground">Accuracy: 94.2%</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
