# Timeline System Specification

## Purpose

Timelines visualize sequential processes, career arcs, project histories, and phased approaches. They transform abstract sequences into scannable visual narratives. Used on the About page (career timeline), Services page (engagement process), and Case Studies (implementation timeline).

## Component: `Timeline`

### Props

```typescript
interface TimelineProps {
  items: TimelineItem[]
  variant?: 'default' | 'compact' | 'interactive'
  orientation?: 'vertical' | 'horizontal'
}

interface TimelineItem {
  id: string
  date?: string
  title: string
  subtitle?: string
  description?: string
  icon?: LucideIcon
  tags?: string[]
  href?: string
  metadata?: { label: string; value: string }[]
  active?: boolean
}
```

### Variants

| Variant | Use Case | Layout |
|---|---|---|
| Default | Career timeline, case study process | Vertical, alternating left/right, full details |
| Compact | Sidebar, secondary content | Vertical, single column, condensed |
| Interactive | Services engagement process | Vertical, clickable, expands details |

### Default Layout (Vertical, Alternating)

```
     │
  ───●───  Date / Title
     │     Subtitle
     │     Description line 1
     │     Description line 2
     │     [Tags]
     │
  ───●───  Date / Title
     │     ...
```

### Component Structure

```typescript
// components/ui/timeline.tsx
export function Timeline({ items, variant = 'default' }: TimelineProps) {
  return (
    <div className="relative" role="list" aria-label="Timeline">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-zinc-800" />
      
      {items.map((item, i) => (
        <TimelineItem key={item.id} item={item} index={i} variant={variant} />
      ))}
    </div>
  )
}
```

### Animation

| Element | Animation | Trigger |
|---|---|---|
| Vertical line | Draw from top to bottom | Scroll into view (svg stroke-dashoffset) |
| Each node | Fade in + scale 0→1, staggered 150ms | Scroll into view |
| Content | Slide in from side (left/right alternating) | Scroll into view |
| Line dots | Pulse briefly on appear | Scroll into view |
| Interactive expand | Content height animate | Click on item |

Duration: 400-500ms per item entrance. Stagger: 150ms.

### States

| State | Visual |
|---|---|
| Default | Muted line, dot + content in view |
| Active (current) | Larger dot, blue accent, bold title |
| Hover (clickable) | Dot scales 1.2, cursor pointer |
| Focus (keyboard) | Ring outline on dot |
| Expanded (interactive) | Content panel slides down, icon rotates |

### Responsive Behavior

| Breakpoint | Layout |
|---|---|
| < 768px | Left-aligned single column, line on left side, all content on right |
| 768px+ | Centered line, alternating left/right content |
| 1024px+ | Same as 768px with more horizontal space |

On mobile: no alternating. All items on the right of the line.

### Accessibility

- `role="list"` and `role="listitem"`
- `aria-label="Timeline: [title]"` per item
- Don't rely on visual position alone to convey sequence
- Ensure sufficient color contrast for lines and dots
- Interactive items are `<button>` elements with `aria-expanded`
- `prefers-reduced-motion`: disable all entrance animations, keep expand/collapse

### Copy Rules for Timeline Entries

- **Title:** 3-6 words, action-oriented
- **Subtitle:** Date or short contextual label
- **Description:** 1-3 sentences max
- **Tags:** 2-4 max, lowercase
- Use parallel structure across entries

### Example: Services Engagement Timeline

```
2024 ─── Discovery Call ─── 30-min conversation about needs and approach
        [free] [remote]

2024 ─── Proposal ─── Detailed scope, timeline, and fixed-price quote
        [1-2 days]

2024 ─── Sprint ─── Build phase with weekly check-ins and demos
        [2-8 weeks]

2024 ─── Delivery ─── Deployed system + documentation + handoff
        [includes 30-day support]
```

### Dependencies

- motion/react (entrance animations)
- lucide-react (optional per-item icons)
- Pure CSS for the vertical line (pseudo-element or div)
