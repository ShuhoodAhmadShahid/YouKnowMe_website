"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogOut, Menu } from "lucide-react"
import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

export default function DashboardNav() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    setIsLoading(true)
    try {
      const supabase = createClient()
      await supabase.auth.signOut()
      router.push("/")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md glass-effect">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary" />
            <span className="text-xl font-bold text-foreground hidden sm:inline">YouKnowMe</span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <Link href="/dashboard" className="text-sm text-foreground font-medium">
              Dashboard
            </Link>
            <Link href="/dashboard/settings" className="text-sm text-muted-foreground transition hover:text-foreground">
              Settings
            </Link>
            <Link href="/docs" className="text-sm text-muted-foreground transition hover:text-foreground">
              Docs
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex bg-transparent"
              onClick={handleLogout}
              disabled={isLoading}
            >
              <LogOut className="mr-2 h-4 w-4" />
              {isLoading ? "Signing out..." : "Sign Out"}
            </Button>
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="border-t border-border pb-4 pt-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link href="/dashboard" className="text-sm text-foreground font-medium">
                Dashboard
              </Link>
              <Link href="/dashboard/settings" className="text-sm text-muted-foreground">
                Settings
              </Link>
              <Link href="/docs" className="text-sm text-muted-foreground">
                Docs
              </Link>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-center bg-transparent"
                onClick={handleLogout}
                disabled={isLoading}
              >
                <LogOut className="mr-2 h-4 w-4" />
                {isLoading ? "Signing out..." : "Sign Out"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
