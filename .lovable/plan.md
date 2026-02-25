

## Save Remodel Form Data Properly

### Problem
Currently the remodel form concatenates the selected services into the `message` column as a text string (e.g., `"Services: Kitchen Remodelling, Bathroom Remodelling"`). This makes it harder to query or filter submissions by service type.

### Solution
Add a `services` text array column to the `contact_submissions` table and update the form to save services properly as structured data.

### Changes

**1. Database Migration**
- Add a `services` column (`text[]`, nullable, default `NULL`) to `contact_submissions`
- Nullable so existing rows aren't affected

**2. `src/pages/Remodel.tsx`**
- Update the `handleCtaSubmit` function to pass `services` as an array in the insert call instead of concatenating into the `message` field
- Send a meaningful message or empty string in the `message` column
- The form UI stays the same (checkboxes for service selection)

### Technical Details
```sql
ALTER TABLE public.contact_submissions 
ADD COLUMN services text[] DEFAULT NULL;
```

```typescript
// Updated insert call
const { error } = await supabase.from("contact_submissions").insert({
  name: ctaForm.name.trim(),
  email: ctaForm.email.trim(),
  phone: ctaForm.phone.trim(),
  project_type: "Remodel",
  message: ctaForm.services.join(", "),
  services: ctaForm.services,
});
```

This keeps backward compatibility (services still readable in `message`) while also storing them as a proper array for filtering/reporting.

