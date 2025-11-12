"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Loader2, Copy, Trash2, Plus } from "lucide-react"

interface ApiKey {
  id: string
  key_name: string
  key_hash: string
  is_active: boolean
  last_used_at: string | null
  created_at: string
  expires_at: string | null
}

export default function ApiKeysPage() {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([])
  const [loading, setLoading] = useState(true)
  const [createDialogOpen, setCreateDialogOpen] = useState(false)
  const [newKeyName, setNewKeyName] = useState("")
  const [generatedKey, setGeneratedKey] = useState<string | null>(null)
  const [generatedKeyId, setGeneratedKeyId] = useState<string | null>(null)
  const [creating, setCreating] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  useEffect(() => {
    fetchApiKeys()
  }, [])

  const fetchApiKeys = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/keys")
      if (!response.ok) throw new Error("Failed to fetch API keys")
      const data = await response.json()
      setApiKeys(data.keys || [])
    } catch (error) {
      console.error("Error fetching API keys:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateKey = async () => {
    if (!newKeyName.trim()) {
      alert("Please enter a key name")
      return
    }

    try {
      setCreating(true)
      const response = await fetch("/api/keys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key_name: newKeyName }),
      })

      if (!response.ok) throw new Error("Failed to create API key")
      const data = await response.json()

      setGeneratedKey(data.key)
      setGeneratedKeyId(data.id)
      setNewKeyName("")

      // Refresh the keys list
      await fetchApiKeys()
    } catch (error) {
      console.error("Error creating API key:", error)
      alert("Failed to create API key")
    } finally {
      setCreating(false)
    }
  }

  const handleCopyKey = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleRevokeKey = async (keyId: string) => {
    if (!confirm("Are you sure you want to revoke this API key? This action cannot be undone.")) return

    try {
      const response = await fetch(`/api/keys/${keyId}`, {
        method: "DELETE",
      })

      if (!response.ok) throw new Error("Failed to revoke API key")

      setApiKeys(apiKeys.filter((k) => k.id !== keyId))
      if (generatedKeyId === keyId) {
        setGeneratedKey(null)
        setGeneratedKeyId(null)
      }
    } catch (error) {
      console.error("Error revoking API key:", error)
      alert("Failed to revoke API key")
    }
  }

  const closeGeneratedKeyDialog = () => {
    setGeneratedKey(null)
    setGeneratedKeyId(null)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="outline" size="sm">
              ← Back
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-foreground">API Keys</h1>
            <p className="text-muted-foreground">Create and manage API keys for your integrations</p>
          </div>
          <Button
            onClick={() => setCreateDialogOpen(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Plus className="mr-2 h-4 w-4" />
            Create New Key
          </Button>
        </div>

        {/* Create Key Dialog */}
        {createDialogOpen && (
          <Card className="border border-border bg-card/50 backdrop-blur-sm p-6 mb-8">
            <h2 className="text-lg font-bold text-foreground mb-4">Create New API Key</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Key Name</label>
                <Input
                  type="text"
                  placeholder="e.g., Production API Key"
                  value={newKeyName}
                  onChange={(e) => setNewKeyName(e.target.value)}
                  className="bg-background/50 border-border"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setCreateDialogOpen(false)
                    setNewKeyName("")
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleCreateKey}
                  disabled={creating}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {creating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    "Create Key"
                  )}
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Generated Key Display */}
        {generatedKey && (
          <Card className="border border-green-500/50 bg-green-500/5 backdrop-blur-sm p-6 mb-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Your API Key (Save this securely!)</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  This key will only be displayed once. Copy it now and store it securely.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-background/50 border border-green-500/20 rounded-lg p-4 font-mono text-sm break-all">
                <code className="flex-1 text-foreground">{generatedKey}</code>
                <Button size="sm" variant="ghost" onClick={() => handleCopyKey(generatedKey, "generated")}>
                  <Copy className={`h-4 w-4 ${copiedId === "generated" ? "text-green-500" : ""}`} />
                </Button>
              </div>
              <div className="flex justify-end">
                <Button onClick={closeGeneratedKeyDialog} className="bg-primary hover:bg-primary/90">
                  Done
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* API Keys List */}
        <Card className="border border-border bg-card/50 backdrop-blur-sm p-6">
          <h2 className="text-lg font-bold text-foreground mb-6">Your API Keys</h2>

          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : apiKeys.length === 0 ? (
            <div className="py-8 text-center">
              <p className="text-muted-foreground">No API keys yet. Create your first one to get started.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {apiKeys.map((key) => (
                <div
                  key={key.id}
                  className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-foreground">{key.key_name}</p>
                      {!key.is_active && (
                        <span className="px-2 py-1 text-xs font-medium bg-red-500/10 text-red-500 rounded">
                          Revoked
                        </span>
                      )}
                      {key.is_active && (
                        <span className="px-2 py-1 text-xs font-medium bg-green-500/10 text-green-500 rounded">
                          Active
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-1 text-xs text-muted-foreground">
                      <div className="font-mono">{key.key_hash}</div>
                      <div>
                        Created: {new Date(key.created_at).toLocaleDateString()}
                        {key.last_used_at && (
                          <>
                            {" • "}
                            Last used: {new Date(key.last_used_at).toLocaleDateString()}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleCopyKey(key.key_hash, key.id)}
                      disabled={!key.is_active}
                    >
                      <Copy className={`h-4 w-4 ${copiedId === key.id ? "text-green-500" : ""}`} />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleRevokeKey(key.id)}
                      disabled={!key.is_active}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Documentation Section */}
        <Card className="border border-border bg-card/50 backdrop-blur-sm p-6 mt-8">
          <h3 className="text-lg font-bold text-foreground mb-4">How to Use Your API Key</h3>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>Include your API key in the Authorization header of your requests:</p>
            <pre className="bg-background/50 border border-border rounded-lg p-4 overflow-x-auto">
              <code className="text-xs text-foreground">
                {`curl -H "Authorization: Bearer YOUR_API_KEY" \\
  https://api.youknowme.com/v1/recommend`}
              </code>
            </pre>
            <p>
              For more details, see the{" "}
              <Link href="/docs" className="text-primary hover:underline">
                documentation
              </Link>
              .
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
