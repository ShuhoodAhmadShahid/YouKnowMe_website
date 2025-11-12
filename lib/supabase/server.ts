import { createClient as createSupabaseClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"

let client: ReturnType<typeof createSupabaseClient> | null = null

export async function createClient() {
  if (client) return client

  const cookieStore = await cookies()

  client = createSupabaseClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  ).auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN" || event === "INITIAL_SESSION") {
      cookieStore.set("supabase-auth-token", session?.access_token ?? "", {
        path: "/",
        maxAge: 60 * 60 * 24 * 30, // 30 days
      })
      cookieStore.set("supabase-auth-refresh-token", session?.refresh_token ?? "", {
        path: "/",
        maxAge: 60 * 60 * 24 * 30, // 30 days
      })
    }
  })

  return client
}
