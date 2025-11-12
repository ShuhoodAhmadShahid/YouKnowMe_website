import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      const redirectUrl = request.headers.get("origin")
      return NextResponse.redirect(`${redirectUrl}/dashboard`)
    }
  }

  // return the user to an error page with some instructions
  return NextResponse.redirect(`${request.headers.get("origin")}/auth/error`)
}
