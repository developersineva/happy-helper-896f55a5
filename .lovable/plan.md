

## Add Logo to Remodel Hero Section

### Change
Add the Future Land Capital logo to the hero section of `/remodel`, positioned above the headline.

### File: `src/pages/Remodel.tsx`

1. Add import for the logo asset:
   ```typescript
   import futureLandLogo from "@/assets/Future_Land_Logo.png";
   ```

2. Insert an `<img>` tag inside the hero's content container, before the `<h1>`, wrapped in a framer-motion div for consistent fade-up animation:
   - Logo displayed at ~120px height, centered
   - Uses the same `fadeUp` animation variant with `custom={0}`, shifting the existing elements' custom delays by 1

### No other files changed.

