

## Plan: Create New Landing Page at `/free-assessment`

The existing `/landing` (Remodel) page stays untouched. A **new** standalone landing page will be created with the exact content structure the client provided, using the site's brand fonts and colors.

### New File: `src/pages/FreeAssessment.tsx`

A standalone page (no global header/footer) with these 7 sections:

1. **Hero** -- Dark bg image overlay, logo, headline "Transform Your Property Into a Space That Reflects Luxury, Comfort & Value", subtitle about homeowners/Airbnb hosts/investors in South Florida & Orlando, 4 gold checkmarks, CTA "Book Your Free Design Assessment"

2. **Pain Point** -- Cream bg, headline "Renovating Without The Right Plan Can Be Expensive", 4 bullet points (where to begin, value upgrades, cost, ROI), closing paragraph about strategic assessment, CTA

3. **Solution (How It Works)** -- Muted bg, headline "How Our Renovation Assessment Works", 4-card grid: Design Opportunities, Investment Estimate, Value Optimization, Project Roadmap (icons: Compass, DollarSign, BarChart3, Map)

4. **Financing** -- Dark overlay section, "Renovate Today — Start Paying After 90 Days", 3 checkmarks, CTA

5. **Authority** -- Light bg, "Why Property Owners Choose Futureland Capital", bullet list of specializations, South Florida & Orlando experience paragraph

6. **Final CTA** -- Dark primary bg, "Start Planning Your Property Transformation", CTA "Reserve Your Consultation Today"

7. **Minimal Footer** -- Brand name + CTA button

### Popup Form
Same dialog form as Remodel page (name, email, phone, service checkboxes) submitting to `contact_submissions` table. All CTA buttons open this dialog.

### Route Update: `src/App.tsx`
Add route: `<Route path="/free-assessment" element={<FreeAssessment />} />`

### Technical Details
- Reuse framer-motion `fadeUp` animation pattern
- Brand fonts (Cormorant Garamond headings, Lato body) and colors (Green #2D5A3D, Gold #A67C52, Cream #F5F3EF)
- Fully responsive with Tailwind
- Two files changed: `App.tsx` (add route), new `FreeAssessment.tsx`

