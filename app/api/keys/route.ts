import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

function generateApiKey(): string {
  // Generate key in format: sk_live_[random]
  return `sk_live_${crypto.randomBytes(24).toString("hex")}`
}

function hashApiKey(key: string): string {
  // Hash the key for storage
  return crypto.createHash("sha256").update(key).digest("hex")
}

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Fetch user's API keys
    const { data: keys, error } = await supabase
      .from("api_keys")
      .select("id, key_name, key_hash, is_active, last_used_at, created_at, expires_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })

    if (error) throw error

    return NextResponse.json({ keys: keys || [] })
  } catch (error) {
    console.error("Error fetching API keys:", error)
    return NextResponse.json({ error: "Failed to fetch API keys" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { key_name } = await request.json()

    if (!key_name || !key_name.trim()) {
      return NextResponse.json({ error: "Key name is required" }, { status: 400 })
    }

    // Generate new API key
    const apiKey = generateApiKey()
    const keyHash = hashApiKey(apiKey)

    // Store in database
    const { data, error } = await supabase
      .from("api_keys")
      .insert([
        {
          user_id: user.id,
          key_name: key_name.trim(),
          key_hash: keyHash,
          is_active: true,
        },
      ])
      .select("id")
      .single()

    if (error) throw error

    // Return the full key only once (never stored in plaintext)
    return NextResponse.json({
      key: apiKey,
      id: data.id,
      message: "API key created. Save it securely as it will not be shown again.",
    })
  } catch (error) {
    console.error("Error creating API key:", error)
    return NextResponse.json({ error: "Failed to create API key" }, { status: 500 })
  }
}
