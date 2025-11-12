"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

interface SignupInput {
  email: string
  password: string
  companyName?: string
}

export async function handleSignup({ email, password, companyName }: SignupInput) {
  try {
    const result: { error?: string; success?: boolean; user?: any } = { error: undefined }

    try {
      const supabase = createClient()

      const { data, error: signupError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/auth/callback`,
          data: {
            company_name: companyName,
          },
        },
      })

      if (signupError) {
        return { error: signupError.message }
      }

      if (data.user) {
        revalidatePath("/")
        return { success: true, user: data.user }
      }

      return { error: "Signup failed" }
    } catch (supabaseError) {
      if (supabaseError instanceof Error && supabaseError.message.includes("NEXT_PUBLIC_SUPABASE_URL")) {
        return {
          error:
            "Authentication is not configured yet. Please add Supabase environment variables (NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY) to continue.",
        }
      }
      throw supabaseError
    }
  } catch (error) {
    return { error: error instanceof Error ? error.message : "An error occurred during signup" }
  }
}
