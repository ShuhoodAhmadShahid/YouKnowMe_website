"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md glass-effect">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary" />
            <span className="text-xl font-bold text-foreground">YouKnowMe</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/features" className="text-sm text-muted-foreground transition hover:text-foreground">
              Features
            </Link>
            <Link href="/pricing" className="text-sm text-muted-foreground transition hover:text-foreground">
              Pricing
            </Link>
            <Link href="/docs" className="text-sm text-muted-foreground transition hover:text-foreground">
              Docs
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground transition hover:text-foreground">
              Contact
            </Link>
            <Link href="/login" className="text-sm text-muted-foreground transition hover:text-foreground">
              Login
            </Link>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-border pb-4 pt-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link href="/features" className="text-sm text-muted-foreground transition hover:text-foreground">
                Features
              </Link>
              <Link href="/pricing" className="text-sm text-muted-foreground transition hover:text-foreground">
                Pricing
              </Link>
              <Link href="/docs" className="text-sm text-muted-foreground transition hover:text-foreground">
                Docs
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground transition hover:text-foreground">
                Contact
              </Link>
              <Link href="/login" className="text-sm text-muted-foreground transition hover:text-foreground">
                Login
              </Link>
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href="/signup">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
