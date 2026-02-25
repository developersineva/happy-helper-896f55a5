

## Create Standalone Remodeling Landing Page

### Overview
Build a dedicated landing page at `/remodel` with no header or footer — a self-contained, conversion-focused page for South Florida home remodeling services with financing options.

### Route
Add `/remodel` route in `src/App.tsx` pointing to a new `src/pages/Remodel.tsx` page component.

### Page Structure (single file: `src/pages/Remodel.tsx`)
No `<Layout>` wrapper — no header, no footer. The page will use the existing design system (Cormorant Garamond headings, Lato body, gold/green brand colors) with framer-motion animations.

**Section 1 — Hero**
- Full-viewport hero with a luxury kitchen remodel background image (Unsplash)
- Dark overlay
- Headline: "Remodel Your Home Today. Pay After 90 Days*"
- Subheadline about luxury kitchen, bathroom & impact window remodeling
- 3 checkmark bullet points (premium design, flexible financing, licensed & insured)
- Gold CTA button: "Book Your Free Design Consultation"
- Micro-text below: "Financing subject to approval. Projects starting at $20,000+."

**Section 2 — Problem + Positioning**
- Headline: "Your Home Should Reflect the Life You've Built."
- Body copy about South Florida homeowners, outdated spaces, and structured financing
- Clean typography on cream/off-white background

**Section 3 — Remodeling Expertise (4-column grid)**
- Section title: "Our Remodeling Expertise"
- 4 cards with icons: Luxury Kitchen, Bathroom Transformations, Impact Windows & Doors, Full Interior Renovations
- Each card has title + short description
- CTA: "Request My Free Estimate"

**Section 4 — Financing**
- Headline: "Flexible Financing Designed for Smart Homeowners"
- 3 bullet items: 90-day deferral, 12–60 month plans, competitive rates
- Gold CTA: "Check If I Qualify"
- Footer note about credit approval

**Section 5 — Trust**
- Headline: "Trusted Across South Florida"
- 4 trust badges with checkmarks: Licensed & Insured, 5-Star Reviews, High-End Craftsmanship, Transparent Pricing

**Section 6 — Before/After Transformations**
- Side-by-side before/after image pairs (Unsplash images of remodels)
- CTA: "Start My Remodel"

**Section 7 — Final CTA / Footer strip**
- Simple bottom bar with company name, phone, and a final CTA button
- No full site footer

### SEO
- Uses `useDocumentTitle` hook with title: "Remodel Your Home | Future Land Capital" and description about South Florida remodeling.

### Files to Create/Modify
1. **`src/pages/Remodel.tsx`** — New file, entire landing page
2. **`src/App.tsx`** — Add route: `<Route path="/remodel" element={<Remodel />} />`

### Technical Details
- Uses existing dependencies: `framer-motion`, `lucide-react`, `react-router-dom`
- Uses existing UI components: `Button` from `@/components/ui/button`
- Uses existing design tokens (gold, forest green, cream backgrounds)
- Responsive: mobile-first with grid breakpoints at `sm`, `md`, `lg`
- All CTA buttons will link to `/contact` (or anchor-scroll to a form if preferred)
- Unsplash images for hero, expertise cards, and before/after section

