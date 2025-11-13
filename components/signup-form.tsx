"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Mail, Lock, CheckCircle, AlertCircle, Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"
import { handleSignup } from "@/app/actions/auth"

interface SignupFormProps {
  isLoading?: boolean
}

export default function SignupForm({ isLoading: externalLoading = false }: SignupFormProps) {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const captchaRef = useRef<HTMLDivElement>(null)

  const passwordRequirements = {
    hasNumber: /\d/.test(password),
    hasLetter: /[a-zA-Z]/.test(password),
    hasMinLength: password.length >= 8,
    passwordsMatch: password === confirmPassword && password.length > 0,
  }

  const isPasswordValid =
    passwordRequirements.hasNumber && passwordRequirements.hasLetter && passwordRequirements.hasMinLength

  // Captcha verification moved to server action
  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Email is required")
      return
    }

    if (!isPasswordValid) {
      setError("Password must be at least 8 characters and contain both letters and numbers")
      return
    }

    if (!passwordRequirements.passwordsMatch) {
      setError("Passwords do not match")
      return
    }

    setIsLoading(true)
    try {
      const result = await handleSignup({
        email,
        password,
        companyName,
      })
      console.log("Signup result:", result)

      if (result.error) {
        setError(result.error)
        return
      }

      console.log("Redirecting to /auth/check-email")
      router.push("/auth/check-email")
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-8 bg-background">
      <Card className="w-full max-w-md border border-border bg-card/50 backdrop-blur-sm">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-2">Create Account</h1>
            <p className="text-sm text-muted-foreground">Join YouKnowMe to power your recommendation engine</p>
          </div>

          <form onSubmit={handleSignupSubmit} className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground pointer-events-none" />
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="pl-10 bg-background/50 border-border focus:border-primary"
                  required
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Company Name (Optional)</label>
              <Input
                type="text"
                placeholder="Your company"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                disabled={isLoading}
                className="bg-background/50 border-border focus:border-primary"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground pointer-events-none" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  className="pl-10 pr-10 bg-background/50 border-border focus:border-primary"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>

              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2">
                  {passwordRequirements.hasMinLength ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="text-xs text-muted-foreground">At least 8 characters</span>
                </div>
                <div className="flex items-center gap-2">
                  {passwordRequirements.hasLetter ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="text-xs text-muted-foreground">Contains letters</span>
                </div>
                <div className="flex items-center gap-2">
                  {passwordRequirements.hasNumber ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="text-xs text-muted-foreground">Contains numbers</span>
                </div>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground pointer-events-none" />
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={isLoading}
                  className="pl-10 pr-10 bg-background/50 border-border focus:border-primary"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {password && !passwordRequirements.passwordsMatch && (
                <p className="mt-2 text-xs text-destructive">Passwords do not match</p>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-3">
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={isLoading || !isPasswordValid}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>

            {/* Terms */}
            <p className="text-xs text-center text-muted-foreground">
              By signing up, you agree to our{" "}
              <a href="/terms" className="text-primary hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </p>
          </form>

          {/* Footer Text */}
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <a href="/login" className="text-primary hover:underline font-medium">
              Sign In
            </a>
          </div>
        </div>
      </Card>
    </div>
  )
}
