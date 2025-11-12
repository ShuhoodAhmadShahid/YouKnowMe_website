import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, CheckCircle } from "lucide-react"

export default function CheckEmailPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-background">
      <Card className="w-full max-w-md border border-border bg-card/50 backdrop-blur-sm">
        <div className="p-8 text-center">
          {/* Icon */}
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-green-500/10 p-4">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
          </div>

          {/* Content */}
          <h1 className="text-2xl font-bold text-foreground mb-2">Check Your Email</h1>
          <p className="text-sm text-muted-foreground mb-6">
            We've sent you a confirmation link. Please check your email and click the link to activate your account.
          </p>

          {/* Mail Icon */}
          <div className="mb-8 flex justify-center">
            <Mail className="h-12 w-12 text-primary/50" />
          </div>

          {/* Instructions */}
          <div className="rounded-lg border border-border bg-background/50 p-4 mb-6 text-left">
            <p className="text-xs font-medium text-foreground mb-2">What's next:</p>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>1. Open the email we sent you</li>
              <li>2. Click the confirmation link</li>
              <li>3. You'll be redirected to your dashboard</li>
            </ul>
          </div>

          {/* Button */}
          <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/">← Back to Home</Link>
          </Button>

          {/* Help Text */}
          <p className="text-xs text-muted-foreground mt-6">
            Didn't receive the email? Check your spam folder or{" "}
            <a href="/signup" className="text-primary hover:underline">
              try signing up again
            </a>
          </p>
        </div>
      </Card>
    </div>
  )
}
