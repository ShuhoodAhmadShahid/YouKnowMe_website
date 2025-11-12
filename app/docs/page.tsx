"use client"

import type React from "react"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy } from "lucide-react"
import { useState } from "react"

const docsections = [
  {
    id: "getting-started",
    title: "Getting Started",
    content: `### Register Your Tenant

First, sign up for a YouKnowMe account and register your business as a tenant.

1. Go to the signup page
2. Create an account with your email
3. Set up your tenant configuration
4. Generate your API key from the dashboard`,
  },
  {
    id: "integrate-sdk",
    title: "Integrate SDK",
    content: `### Install the SDK

\`\`\`bash
npm install @youknowme/sdk
\`\`\`

### Initialize in Your Application

\`\`\`javascript
import { YouKnowMe } from '@youknowme/sdk'

const ykm = new YouKnowMe({
  apiKey: 'your_api_key_here',
  tenantId: 'your_tenant_id'
})
\`\`\`

### Track User Events

\`\`\`javascript
ykm.track({
  userId: 'user_123',
  email: 'user@example.com',
  eventType: 'click',
  itemId: 'ITEM456',
  metadata: {
    category: 'Electronics',
    price: 99.99
  }
})
\`\`\``,
  },
  {
    id: "api-reference",
    title: "API Reference",
    content: `### POST /api/track-event

Track user events in real-time.

**Request:**
\`\`\`json
{
  "tenant_id": "uuid",
  "user_email": "user@example.com",
  "item_id": "ITEM123",
  "event_type": "click",
  "metadata": {"category": "Shoes"}
}
\`\`\`

**Response:**
\`\`\`json
{"status": "success", "message": "Event recorded"}
\`\`\`

### GET /api/recommend

Get recommendations for a user.

**Query Parameters:**
- \`tenant_id\` (required): Your tenant ID
- \`user_hash\` (required): SHA256 hash of user email
- \`top_n\` (optional): Number of recommendations (default: 5)

**Response:**
\`\`\`json
{
  "user_hash": "sha256hash",
  "recommendations": [
    {"item_id": "I123", "score": 0.98},
    {"item_id": "I124", "score": 0.94}
  ]
}
\`\`\``,
  },
  {
    id: "data-schema",
    title: "Data Schema",
    content: `### Users Table

\`\`\`sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL,
  user_hash VARCHAR(255) NOT NULL,
  email_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(tenant_id, user_hash)
);
\`\`\`

### Items Table

\`\`\`sql
CREATE TABLE items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL,
  item_id VARCHAR(255) NOT NULL,
  category VARCHAR(100),
  metadata JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(tenant_id, item_id)
);
\`\`\`

### Activity Table

\`\`\`sql
CREATE TABLE activity (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL,
  user_id UUID NOT NULL,
  item_id UUID NOT NULL,
  event_type VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (item_id) REFERENCES items(id)
);
\`\`\``,
  },
]

export default function DocsPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="mb-2 text-4xl font-bold text-foreground">Documentation</h1>
            <p className="text-lg text-muted-foreground">
              Complete guide to integrating YouKnowMe into your application
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Sidebar Navigation */}
            <div className="hidden lg:block">
              <div className="sticky top-20 space-y-2">
                {docsections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-card hover:text-foreground"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="getting-started" className="w-full">
                <TabsList className="grid w-full grid-cols-2 lg:hidden mb-8 bg-card border-border">
                  {docsections.map((section) => (
                    <TabsTrigger key={section.id} value={section.id}>
                      {section.title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {docsections.map((section) => (
                  <TabsContent key={section.id} value={section.id}>
                    <Card className="border-primary/20 bg-card glass-effect p-8">
                      <div className="prose prose-invert max-w-none">
                        <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                        <DocContent content={section.content} onCopy={copyToClipboard} copiedCode={copiedCode} />
                      </div>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

function DocContent({
  content,
  onCopy,
  copiedCode,
}: {
  content: string
  onCopy: (code: string) => void
  copiedCode: string | null
}) {
  const lines = content.split("\n")
  let inCodeBlock = false
  let currentCode = ""
  const elements: React.ReactNode[] = []

  const flushCode = () => {
    if (currentCode) {
      elements.push(
        <div
          key={`code-${elements.length}`}
          className="relative my-4 overflow-hidden rounded-lg border border-primary/20 bg-background p-4"
        >
          <button
            onClick={() => onCopy(currentCode)}
            className="absolute right-2 top-2 p-2 hover:bg-card rounded transition"
          >
            <Copy className="h-4 w-4 text-muted-foreground" />
          </button>
          <pre className="text-xs overflow-x-auto text-muted-foreground">
            <code>{currentCode}</code>
          </pre>
          {copiedCode === currentCode && <div className="absolute right-12 top-2 text-xs text-primary">Copied!</div>}
        </div>,
      )
      currentCode = ""
    }
  }

  lines.forEach((line, idx) => {
    if (line.startsWith("```")) {
      inCodeBlock = !inCodeBlock
      if (!inCodeBlock) {
        flushCode()
      }
    } else if (inCodeBlock) {
      currentCode += line + "\n"
    } else {
      if (line.startsWith("###")) {
        elements.push(
          <h3 key={`heading-${idx}`} className="text-xl font-bold text-foreground mt-6 mb-3">
            {line.replace(/^### /, "")}
          </h3>,
        )
      } else if (line.startsWith("**")) {
        elements.push(
          <p key={`text-${idx}`} className="text-muted-foreground mb-2 font-bold">
            {line.replace(/\*\*/g, "")}
          </p>,
        )
      } else if (line.trim()) {
        elements.push(
          <p key={`text-${idx}`} className="text-muted-foreground mb-2">
            {line}
          </p>,
        )
      }
    }
  })

  return <div>{elements}</div>
}
