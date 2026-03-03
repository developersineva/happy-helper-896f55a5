

## Fix "View Our Projects" Button Visibility

The button uses the `outline` variant which applies `bg-background` (white/light color) by default. On the dark green CTA section, this makes the button background blend and the white text invisible.

### Fix
In `src/pages/Services.tsx` (line 330), add `bg-transparent` to the button's className to override the outline variant's default background:

```
className="border-white bg-transparent text-white hover:bg-white hover:text-[#2D5A3D] px-8 py-6 text-lg"
```

Single line change -- just adding `bg-transparent` to the existing classes.

