import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function DELETE(request: NextRequest, { params }: { params: { keyId: string } }) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Verify the key belongs to the user
    const { data: key, error: fetchError } = await supabase
      .from("api_keys")
      .select("user_id")
      .eq("id", params.keyId)
      .single()

    if (fetchError || !key || key.user_id !== user.id) {
      return NextResponse.json({ error: "API key not found" }, { status: 404 })
    }

    // Revoke the key instead of deleting (soft delete)
    const { error } = await supabase.from("api_keys").update({ is_active: false }).eq("id", params.keyId)

    if (error) throw error

    return NextResponse.json({ message: "API key revoked" })
  } catch (error) {
    console.error("Error revoking API key:", error)
    return NextResponse.json({ error: "Failed to revoke API key" }, { status: 500 })
  }
}
