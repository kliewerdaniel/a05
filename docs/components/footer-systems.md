# Footer System Specification

## Purpose

The footer provides navigation redundancy, brand reinforcement, newsletter capture, social proof, and legal coverage. It is the last touchpoint before a visitor leaves and should offer clear next actions.

## Component: `SiteFooter`

### Props

```typescript
interface SiteFooterProps {
  navigation: {
    services: { href: string; label: string }[]
    company: { href: string; label: string }[]
    resources: { href: string; label: string }[]
    social: { href: string; label: string; icon: LucideIcon }[]
  }
  newsletter?: {
    enabled: boolean
    placeholder?: string
    buttonText?: string
  }
}
```

### Variants

| Variant | Layout | Use Case |
|---|---|---|
| Default | 4-column grid + bottom bar | All main pages |
| Minimal | Single row, copyright only | Lab pages, checkout |
| Blog | 4-column grid + newsletter emphasis | Blog listing, post pages |

### Default Layout

```
┌────────────────────────────────────────────────────────────┐
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ Brand    │  │ Services │  │ Company  │  │ Resources│  │
│  │           │  │          │  │          │  │          │  │
│  │ Name      │  │ Knowledge│  │ About    │  │ Blog     │  │
│  │ Tagline   │  │ Systems  │  │ Case Stud│  │ Lab      │  │
│  │           │  │ Automatn │  │ Contact  │  │ Resources│  │
│  │ Social    │  │ Websites │  │          │  │          │  │
│  │ icons     │  │ Local AI │  │          │  │          │  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Newsletter email input  [Subscribe]                   │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  ───────────────────────────────────────────────────────── │
│  © 2026 Daniel Kliewer  ·  Privacy  ·  Terms  ·  RSS       │
└────────────────────────────────────────────────────────────┘
```

### Section Specifications

#### Brand Column
- **Name:** Daniel Kliewer — Inter Bold, text-base
- **Tagline:** "AI Infrastructure & Systems Engineering" — Inter, text-sm, muted
- **Social icons:** GitHub, Twitter/X, LinkedIn, YouTube
- **Layout:** Stacked, generous spacing

#### Link Columns
- **Headers:** Inter SemiBold, text-sm, uppercase tracking-wider, muted
- **Links:** Inter, text-sm, 1.5 line-height
- **Hover:** Color shift to blue accent, no underline
- **Active:** Slightly darker

#### Newsletter Section (Phase 4+)
- **Header:** "Stay in the loop" — Inter, text-sm, semibold
- **Copy:** "Monthly AI insights, tools, and systems thinking." — Inter, text-xs, muted
- **Input:** Inline email field + submit button
- **State:** idle, focused, submitting, success, error
- **Success:** "Thanks! Check your inbox." with checkmark
- **Error:** "Please enter a valid email." inline validation
- **Privacy note:** "No spam. Unsubscribe anytime." — text-xs, muted

#### Bottom Bar
- **Copyright:** "© 2026 Daniel Kliewer"
- **Auto-updating year:** `new Date().getFullYear()`
- **Legal links:** Privacy Policy, Terms of Service (Phase 5+), RSS Feed
- **Separator:** Centered dot `·` between links
- **Background:** Slightly darker than footer (or top border)

### Responsive Behavior

| Breakpoint | Layout |
|---|---|
| < 768px | 2-column grid (brand stacks, link columns 2x2), newsletter full-width |
| < 640px | Single column, all stacked vertically |
| 768px+ | 4-column grid |
| 1024px+ | 4-column grid + inline newsletter |

### Animations

- No entrance animation (footer should not draw attention)
- Newsletter submit: button loading spinner, success fade-in
- Social icons: subtle color shift on hover
- Link hovers: color transition, 200ms

### States

| State | Behavior |
|---|---|
| Default | Static, muted colors, readable |
| Hover (links) | Color shift to blue, cursor pointer |
| Focus (links) | Outline ring, keyboard navigable |
| Focus (input) | Ring border, accessible |
| Error (input) | Red border, error message below |

### Accessibility

- `<footer>` landmark element
- `<nav aria-label="Footer navigation">` for link groups
- All social icons have `aria-label`
- Newsletter form has `<label>` (visually hidden if needed)
- Skip-link bypasses footer on tab navigation
- Minimum contrast ratio: 4.5:1 for all text
- Focus order: brand -> services -> company -> resources -> newsletter -> legal

### Implementation

```typescript
// components/layout/site-footer.tsx
export function SiteFooter({ navigation, newsletter }: SiteFooterProps) {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="container mx-auto max-w-7xl px-6 py-12">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <BrandColumn />
          <LinkColumn heading="Services" links={navigation.services} />
          <LinkColumn heading="Company" links={navigation.company} />
          <LinkColumn heading="Resources" links={navigation.resources} />
        </div>
        {/* Newsletter */}
        {newsletter?.enabled && <NewsletterSection />}
        {/* Bottom bar */}
        <BottomBar copyright={`© ${new Date().getFullYear()} Daniel Kliewer`} />
      </div>
    </footer>
  )
}
```

### Dependencies

- lucide-react (social icons)
- next/link (internal navigation)
- Newsletter form component (shared from `/conversion/contact-forms`)
- Client component only for newsletter (interactive form), server component for static footer
