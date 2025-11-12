# YouKnowMe - AI-Powered Recommendation System

A modern, minimalist full-stack web application for real-time personalization powered by AI.

## Project Structure

\`\`\`
├── app/                          # Next.js app router
│   ├── page.tsx                  # Landing page
│   ├── login/                    # Authentication pages
│   ├── signup/
│   ├── dashboard/                # Tenant dashboard
│   ├── features/                 # Features showcase
│   ├── pricing/                  # Pricing page
│   ├── docs/                     # Documentation
│   ├── admin/                    # Admin panel
│   ├── api/                      # API routes
│   └── globals.css               # Global styles & theme tokens
├── components/                   # Reusable React components
│   ├── ui/                       # Shadcn UI components
│   ├── navbar.tsx
│   ├── dashboard-nav.tsx
│   ├── admin-nav.tsx
│   └── ...
├── lib/                          # Utility functions
│   ├── api.ts                    # API client
│   └── utils.ts
└── public/                       # Static assets
\`\`\`

## Key Features

- **Landing Page**: Hero section with product demo, how-it-works flow, and benefits
- **Authentication**: Login/Signup with Supabase integration (TODO)
- **Dashboard**: Real-time analytics with charts, KPIs, and event tracking
- **Admin Panel**: Tenant management, usage stats, training logs, API keys
- **Documentation**: Complete integration guide with code examples
- **Features Page**: Technical capabilities showcase
- **Pricing**: Three-tier pricing model (Starter, Pro, Enterprise)

## Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS v4
- **UI Components**: Shadcn/UI
- **Charts**: Recharts
- **Icons**: Lucide React
- **Styling**: CSS-in-JS with design tokens
- **Backend**: FastAPI (integrate separately)
- **Database**: Supabase (Postgres)
- **Auth**: Supabase Auth (TODO)
- **Deployment**: Vercel (frontend), Render/Railway (backend)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

1. Clone and install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Create `.env.local`:
\`\`\`
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000)

## API Integration Points

### Track Events
\`\`\`javascript
POST /api/track-event
{
  tenant_id, user_email, item_id, event_type, metadata
}
\`\`\`

### Get Recommendations
\`\`\`javascript
GET /api/recommend?tenant_id=xxx&user_hash=xxx&top_n=5
\`\`\`

### Train Model
\`\`\`javascript
POST /api/train-model
{ tenant_id }
\`\`\`

### Get Stats
\`\`\`javascript
GET /api/stats?tenant_id=xxx
\`\`\`

## Design System

### Colors
- **Background**: #0F172A (dark navy)
- **Accent**: #14B8A6 (teal)
- **Secondary**: #3B82F6 (sky blue)
- **Text**: #F8FAFC (off-white)
- **Muted**: #94A3B8

### Typography
- **Headings**: Inter 700
- **Body**: Inter 400
- **Monospace**: JetBrains Mono

### Components
- All components use Tailwind CSS with design tokens
- Glassmorphism effects with backdrop blur
- Smooth animations and transitions
- Responsive mobile-first design

## TODO

- [ ] Integrate Supabase Auth
- [ ] Connect FastAPI backend
- [ ] Implement Supabase Realtime for live updates
- [ ] Add dashboard settings page
- [ ] Create user profile management
- [ ] Add email verification flow
- [ ] Implement password reset
- [ ] Add OAuth (Google, GitHub)
- [ ] Create team management
- [ ] Add billing integration with Stripe
- [ ] Implement webhook handling
- [ ] Add API rate limiting
- [ ] Create monitoring dashboards

## Deployment

### Frontend (Vercel)
\`\`\`bash
npm run build
vercel deploy
\`\`\`

### Backend (Render/Railway)
Deploy FastAPI to your preferred platform and set the API URL in environment variables.

## License

MIT

## Support

For issues and questions, visit [YouKnowMe Documentation](http://localhost:3000/docs)
