# NY USA Reviews — Web (Next.js rebuild)

The new server-rendered site. Fresh Next.js App Router app that will reuse the existing Supabase backend and add live pricing (PA-API) + full schema. This replaces the Lovable Vite SPA.

## Run it
```bash
cd web
npm install
npm run dev
```
Open http://localhost:3000 — the homepage renders a full **buying-guide money page** (Best Baby Bassinets) demonstrating the design system with mock data.

## What's built so far (Phase 1)
- Next.js 14 (App Router) + Tailwind + TypeScript.
- **Apple-grade design token system** (`app/globals.css`) — color, type (Inter + Fraunces), spacing, shadows, **light + dark mode**, reduced-motion.
- Core components (`components/`): `AwardBadge`, `Stars`, `PriceBlock` (live-price ready, "price dropped" badge, nofollow-sponsored affiliate links), `ProductCard` (conversion-engineered editor pick), `ComparisonTable`, `ProductImage` (placeholder).
- Buying-guide template (`app/page.tsx`) with every BestReviews money-page block: breadcrumb, award-ranked picks, trust stat strip, "ready to buy" list, comparison table, pros/cons + specs, methodology, FAQ, newsletter — plus **`ItemList` + `FAQPage` JSON-LD** (our schema edge).
- Affiliate disclosure bar + honest editorial-team footer.

## Next steps (from NYUSAReviews-BuildSpec.md)
1. Wire Supabase (reuse project `tgxlewuchioatnnpkiqm`) — add `NEXT_PUBLIC_SUPABASE_URL` + anon key to `.env.local`.
2. Add `lib/pricing/` (Amazon PA-API + Keepa + manual fallback) and `lib/affiliate/` — add PA-API keys + Associate tag to `.env.local`.
3. Convert routes to dynamic guide/review/category pages with `generateStaticParams` + `generateMetadata`.
4. Build the Prime Day deal-hub pages (see NYUSAReviews-PrimeDay-Kit.md).
5. Deploy to Vercel; verify; repoint DNS.

## Env (create `web/.env.local`, never commit)
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
AMAZON_PAAPI_ACCESS_KEY=...
AMAZON_PAAPI_SECRET_KEY=...
AMAZON_ASSOCIATE_TAG=...
KEEPA_API_KEY=...        # optional
```
