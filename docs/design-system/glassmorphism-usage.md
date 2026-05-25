# Glassmorphism Usage Rules

## Philosophy

Glassmorphism (frosted glass effect via backdrop blur) is used sparingly and intentionally. It is NOT a default surface treatment. Overuse creates visual noise, accessibility problems, and degrades performance. When used correctly, it creates depth hierarchy and signals "this element floats above the content."

---

## When to Use Glassmorphism

| Use Case | Justification |
|---|---|
| Navigation bar on scroll | Signals the nav is overlaid on content, maintains readability of background page |
| Mobile menu overlay | Distinguishes the overlay layer from page content beneath |
| Modals / dialogs | Creates clear layer separation |
| Hero section overlays | Shallow backdrop blur on text containers over dynamic backgrounds |

## When NOT to Use Glassmorphism

- Card surfaces (use solid `bg-card` instead)
- Sidebars
- Footer
- Blog content areas
- Form inputs and buttons
- Any area where text readability is critical
- Any area with interactive content below (pointer events become unpredictable)
- Mobile (except navigation) — performance cost is not justified

---

## Implementation

### Navigation Header (Scrolled State)

```tsx
<header className={cn(
  "fixed top-0 z-50 w-full transition-all duration-300",
  isScrolled 
    ? "bg-background/80 backdrop-blur-xl border-b border-border" 
    : "bg-transparent"
)}>
```

- `backdrop-blur-xl` is the only acceptable blur level for glassmorphism
- Low opacity background (`bg-background/80`) ensures text remains readable
- Thin bottom border provides a precise cut line between nav and content

### Mobile Menu Overlay

```tsx
<div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-xl">
  {/* Menu content */}
</div>
```

- Full-screen overlay, frosted background
- Dismiss on backdrop click
- Reduce Motion: skip blur, use solid background

### Modals

```tsx
<div className="fixed inset-0 z-50 flex items-center justify-center">
  {/* Backdrop */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
  {/* Modal content (solid surface) */}
  <div className="relative bg-card border border-border rounded-xl shadow-2xl">
    {/* ... */}
  </div>
</div>
```

- `backdrop-blur-sm` (not xl) — just enough blur to distinguish the modal layer
- Modal itself is SOLID (`bg-card`), not glass
- Dark overlay `bg-black/60` provides contrast

---

## Accessibility Requirements

| Requirement | Implementation |
|---|---|
| Text contrast | Any text on glass surfaces must meet WCAG AA (4.5:1). Test with the actual background content. |
| Reduced motion | `prefers-reduced-motion: reduce` → replace backdrop-blur with solid `bg-background` |
| Touch targets | Glass overlays must not interfere with touch interactions below |
| Focus management | Elements behind glass must not be focusable |
| Screen readers | Glass surface has no ARIA impact; treat as standard surface |

---

## Performance

| Concern | Mitigation |
|---|---|
| `backdrop-blur` is GPU-intensive | Restrict to nav overlay and modals only |
| Blur on scroll | Nav uses `backdrop-blur` only when `position: fixed` and scrolled |
| Mobile battery impact | Reduce blur radius on mobile (`backdrop-blur-md` instead of `xl`) |
| Paint area | Glass elements should never be full-viewport height (except mobile menu) |

---

## Visual Specifications

| Property | Value |
|---|---|
| Blur radius (default) | `backdrop-blur-xl` (24px) |
| Blur radius (modal) | `backdrop-blur-sm` (4px) |
| Background opacity | `bg-background/80` |
| Border | `border-border` (subtle, 1px) |
| Border radius (nav) | 0 (full width) |
| Box shadow | `shadow-2xl` for elevated glass (modals) |
| Transition | `transition-all duration-300` |

---

## Design Review Checklist

Before using glassmorphism, verify:
1. Is this the clearest way to communicate hierarchy? (If solid works, use solid.)
2. Is the text readable against the blurred background? (Test with actual content.)
3. Does the blur degrade the experience on low-end devices?
4. Does this pass the "squint test"? (Squint — can you still read the content?)
5. Is this consistent with the rest of the interface? (No isolated glass surfaces.)
