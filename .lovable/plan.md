
## Add Per-Page Meta Titles & Descriptions (On-Page SEO)

### Current State
- The `index.html` has static meta tags (title, description, og:title, og:description) that never change as users navigate between pages — all pages share the same meta description.
- The `useDocumentTitle` hook only updates `document.title` (the browser tab), not the `<meta name="description">`, og tags, or Twitter card tags.

### Approach
Upgrade the existing `useDocumentTitle` hook into a more capable `useSEO` hook that dynamically updates **all** relevant meta tags in the document `<head>` on every page navigation. This is the standard SPA approach for React apps without SSR.

---

### Files to Change

**1. Replace `src/hooks/useDocumentTitle.ts` → rename/upgrade to `src/hooks/useSEO.ts`**

New hook that updates:
- `document.title`
- `<meta name="description">`
- `<meta property="og:title">`
- `<meta property="og:description">`
- `<meta name="twitter:title">`
- `<meta name="twitter:description">`

```typescript
export const useSEO = ({ title, description }: { title: string; description: string }) => {
  useEffect(() => {
    // Page title
    document.title = title;

    // Helper to set or create meta tags
    const setMeta = (selector: string, content: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        // set name or property attribute from selector
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
  }, [title, description]);
};
```

**2. Keep `src/hooks/useDocumentTitle.ts` as a thin wrapper** (for backward compatibility, since it's already imported in several places — we update it to call useSEO internally), OR update all page imports at once. Since there are only 6 pages, we'll update all imports directly.

---

**3. Update each page with unique title + description:**

| Page | File | Title | Meta Description |
|------|------|-------|-----------------|
| Home | `Index.tsx` | Future Land Capital \| Premium Construction in Colombia | Future Land Capital is Bogotá's premier construction company, delivering luxury residential and commercial projects with over 10 years of expertise across Colombia. |
| About | `About.tsx` | About Us \| Future Land Capital | Learn about Future Land Capital's mission, values, and the team behind Colombia's top construction projects. Led by founder Sofía Alejandra Bermúdez Llanos. |
| Services | `Services.tsx` | Our Services \| Future Land Capital | Explore Future Land Capital's full range of construction services — from custom luxury homes and commercial development to sustainable green building in Bogotá, Colombia. |
| Projects | `Projects.tsx` | Projects \| Future Land Capital | Browse Future Land Capital's portfolio of completed residential and commercial construction projects across Colombia. Quality craftsmanship at every scale. |
| Contact | `Contact.tsx` | Contact Us \| Future Land Capital | Get in touch with Future Land Capital. Reach our team in Bogotá, Colombia for project inquiries, consultations, and construction quotes. |
| Not Found | `NotFound.tsx` | Page Not Found \| Future Land Capital | The page you're looking for doesn't exist. Return to Future Land Capital's homepage. |

---

### Technical Details

- The hook will use `document.querySelector` to find existing meta tags and update their `content` attribute — no new tags are created if the tags already exist in `index.html`
- Tags are identified by their `name` or `property` attribute selectors (e.g., `meta[name="description"]`, `meta[property="og:title"]`)
- `useDocumentTitle.ts` is kept but updated internally to use the new logic, so no imports break
- All updates run client-side on route change (standard for SPAs)

### Files Modified
1. `src/hooks/useDocumentTitle.ts` — upgraded to also update meta description + OG/Twitter tags (accepts `{ title, description }`)
2. `src/pages/Index.tsx` — call hook with title + description
3. `src/pages/About.tsx` — call hook with title + description
4. `src/pages/Services.tsx` — call hook with title + description
5. `src/pages/Projects.tsx` — call hook with title + description
6. `src/pages/Contact.tsx` — call hook with title + description
7. `src/pages/NotFound.tsx` — call hook with title + description
