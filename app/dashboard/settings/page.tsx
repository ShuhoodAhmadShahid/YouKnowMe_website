"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"

export default function SettingsPage() {
  const [displayName, setDisplayName] = useState("")
  const [company, setCompany] = useState("")
  const [saveLoading, setSaveLoading] = useState(false)

  const handleSaveSettings = async () => {
    setSaveLoading(true)
    try {
      // TODO: Implement settings update to Supabase profiles table
      console.log("Saving settings...", { displayName, company })
    } finally {
      setSaveLoading(false)
    }
  }

  const handleChangePassword = async () => {
    // TODO: Implement password change flow
    console.log("Change password flow")
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="outline" size="sm">
              ← Back
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground">Manage your account and preferences</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card className="border border-border bg-card/50 backdrop-blur-sm p-4">
              <nav className="space-y-2">
                <a
                  href="#profile"
                  className="block px-3 py-2 rounded-lg text-sm font-medium text-foreground bg-primary/10"
                >
                  Profile
                </a>
                <a
                  href="#security"
                  className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  Security
                </a>
                <a
                  href="#notifications"
                  className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  Notifications
                </a>
                <a
                  href="#billing"
                  className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  Billing
                </a>
              </nav>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Profile Section */}
            <Card id="profile" className="border border-border bg-card/50 backdrop-blur-sm p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">Profile Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Display Name</label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="bg-background/50 border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                  <Input
                    type="text"
                    placeholder="Company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="bg-background/50 border-border"
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    onClick={handleSaveSettings}
                    disabled={saveLoading}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {saveLoading ? "Saving..." : "Save Changes"}
                  </Button>
                </div>
              </div>
            </Card>

            {/* Security Section */}
            <Card id="security" className="border border-border bg-card/50 backdrop-blur-sm p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">Security</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Keep your account secure by regularly updating your password.
                  </p>
                  <Button variant="outline" onClick={handleChangePassword} className="bg-transparent">
                    Change Password
                  </Button>
                </div>
              </div>
            </Card>

            {/* API Keys Section */}
            <Card className="border border-border bg-card/50 backdrop-blur-sm p-6">
              <h2 className="text-xl font-bold text-foreground mb-6">API Keys</h2>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">Manage API keys for third-party integrations.</p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Generate New Key</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
