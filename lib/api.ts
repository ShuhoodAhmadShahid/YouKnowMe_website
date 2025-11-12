const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api"

export async function trackEvent(data: {
  tenant_id: string
  user_email: string
  item_id: string
  event_type: string
  metadata?: Record<string, any>
}) {
  const response = await fetch(`${API_BASE_URL}/track-event`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error("Failed to track event")
  return response.json()
}

export async function getRecommendations(tenant_id: string, user_hash: string, top_n = 5) {
  const params = new URLSearchParams({
    tenant_id,
    user_hash,
    top_n: String(top_n),
  })
  const response = await fetch(`${API_BASE_URL}/recommend?${params}`)
  if (!response.ok) throw new Error("Failed to fetch recommendations")
  return response.json()
}

export async function trainModel(tenant_id: string) {
  const response = await fetch(`${API_BASE_URL}/train-model`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tenant_id }),
  })
  if (!response.ok) throw new Error("Failed to start training")
  return response.json()
}

export async function getStats(tenant_id: string) {
  const response = await fetch(`${API_BASE_URL}/stats?tenant_id=${tenant_id}`)
  if (!response.ok) throw new Error("Failed to fetch stats")
  return response.json()
}
