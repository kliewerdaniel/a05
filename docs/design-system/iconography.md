# Iconography System

## Philosophy

Icons serve a single purpose: communicate function faster than text. They are interface elements, not decoration. The icon system is intentionally minimal — fewer icons, used consistently, with clear meaning.

### Rules

1. **One icon library.** lucide-react only. No mixing icon sets.
2. **Standard sizes only.** 16px (inline), 20px (small UI), 24px (default), 32px (cards), 48px (hero/feature).
3. **Same weight.** All icons use lucide's default 2px stroke weight. No filled variants.
4. **Same style.** Line icons only. No filled, duotone, or multicolor icons.
5. **Color is semantic.** Icon color matches text color by default. Accent color only for active/selected state.
6. **No text labels** inside icons or custom icon creation.
7. **Icons never animate.** No spinning, pulsing, or bouncing icons.

---

## Icon Inventory

### Navigation Icons

| Icon | Name (lucide) | Context |
|---|---|---|
| Menu | `Menu` | Mobile nav toggle |
| Close | `X` | Mobile nav close, modals |
| Chevron Right | `ChevronRight` | Breadcrumb separators, "Learn more" |
| Chevron Down | `ChevronDown` | FAQ accordion, dropdowns |
| Arrow Right | `ArrowRight` | CTAs, link arrows |
| External Link | `ExternalLink` | External links |
| Search | `Search` | Search bar |

### Social Icons

| Icon | Name (lucide) | Note |
|---|---|---|
| GitHub | `Github` | — |
| Twitter/X | `Twitter` | Lucide X logo |
| LinkedIn | `Linkedin` | — |
| YouTube | `Youtube` | — |
| RSS | `Rss` | — |

### Content Icons

| Icon | Name (lucide) | Context |
|---|---|---|
| Clock | `Clock` | Reading time |
| Calendar | `Calendar` | Post date |
| Tag | `Tag` | Categories, tags |
| Folder | `Folder` | Blog category navigation |
| BookOpen | `BookOpen` | Resources |
| FileText | `FileText` | Documents, guides |
| Download | `Download` | Lead magnet downloads |
| Mail | `Mail` | Newsletter, contact |
| Check | `Check` | Success states, checkmarks |
| Copy | `Copy` | Code block copy button |

### Feature Icons

Used on service cards and feature sections:

| Icon | Name (lucide) | Service / Feature |
|---|---|---|
| Brain | `Brain` | AI Knowledge Systems |
| Workflow | `Workflow` | Workflow Automation |
| Server | `Server` | Local AI Deployment |
| Globe | `Globe` | AI Websites |
| PenLine | `PenLine` | Content Pipelines |
| Network | `Network` | Knowledge Graph |
| Bot | `Bot` | AI Chat |
| Sparkles | `Sparkles` | Lab / Experiments |
| BarChart3 | `BarChart3` | Analytics / Metrics |
| Shield | `Shield` | Privacy / Security |

### UI Icons

| Icon | Name (lucide) | Context |
|---|---|---|
| Sun | `Sun` | Theme toggle (light) |
| Moon | `Moon` | Theme toggle (dark) |
| Loader2 | `Loader2` | Loading spinner |
| AlertCircle | `AlertCircle` | Error states |
| CheckCircle2 | `CheckCircle2` | Success states |
| Info | `Info` | Info callouts |
| Quote | `Quote` | Pull quotes |
| ChevronLeft | `ChevronLeft` | Back navigation |
| Home | `Home` | Breadcrumb home |
| Share2 | `Share2` | Social share |

---

## Sizing Guidelines

| Context | Size | Tailwind Class |
|---|---|---|
| Inline with text (14px or smaller) | 16px | `h-4 w-4` |
| Button icons, input icons | 16px | `h-4 w-4` |
| Small section icons | 20px | `h-5 w-5` |
| Standard UI icons | 24px | `h-6 w-6` |
| Card feature icons | 32px | `h-8 w-8` |
| Hero / section header | 48px | `h-12 w-12` |
| Social icons (footer) | 20px | `h-5 w-5` |
| Mobile nav icons | 24px | `h-6 w-6` |

---

## Usage Patterns

### Button with Icon

```tsx
<Button>
  <Download className="h-4 w-4 mr-2" />
  Download Guide
</Button>
```

Icon is always 16px, always to the left of text (except chevrons which go right).

### Card Icon

```tsx
<div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
  <Brain className="h-5 w-5 text-blue-400" />
</div>
```

Icon container: 40px, rounded-lg, 10% blue background, centered icon.

### Feature Icon (Hero)

```tsx
<div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-transparent flex items-center justify-center">
  <Server className="h-8 w-8 text-blue-400" />
</div>
```

Larger container: 64px, rounded-2xl, subtle gradient background.

---

## Accessibility

- All icons used without text MUST have `aria-hidden="true"` and a visually hidden `<span>` label
- Icons used WITH text labels get `aria-hidden="true"` (text provides the accessible name)
- Social icons in footer get `aria-label` on the link (e.g., `aria-label="GitHub profile"`)
- Decorative icons (hero background patterns) are hidden from screen readers
- Icon color contrast: minimum 3:1 against background when used as standalone interactive elements

---

## Implementation

```typescript
// lib/icons.ts
export { 
  Menu, X, ChevronRight, ChevronDown, ArrowRight, ExternalLink, Search,
  Github, Twitter, Linkedin, Youtube, Rss,
  Clock, Calendar, Tag, Folder, BookOpen, FileText, Download, Mail, Check, Copy,
  Brain, Workflow, Server, Globe, PenLine, Network, Bot, Sparkles, BarChart3, Shield,
  Sun, Moon, Loader2, AlertCircle, CheckCircle2, Info, Quote, ChevronLeft, Home, Share2,
} from 'lucide-react'
```

Centralized re-export to:
- Make icon inventory visible at a glance
- Enable tree-shaking (only imported icons are bundled)
- Prevent accidental duplicate imports of the same icon
