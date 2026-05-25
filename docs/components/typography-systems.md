# Typography System (Component)

## Purpose

Typography components encapsulate the design system's type hierarchy into reusable, consistent components. They ensure every text element on the site follows brand typography rules without requiring manual Tailwind class repetition.

See `/design-system/typography.md` for the base typography scale and font definitions.

---

## Components

### `Heading`

```typescript
interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  variant?: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: React.ReactNode
  className?: string
  tracking?: 'tight' | 'normal' | 'wide'
}
```

| Variant | Size | Weight | Line Height | Letter Spacing | Mobile Size |
|---|---|---|---|---|---|
| display | text-7xl (72px) | Bold (700) | 1.05 | -0.03em | text-5xl (48px) |
| h1 | text-5xl (48px) | Bold (700) | 1.1 | -0.02em | text-4xl (36px) |
| h2 | text-4xl (36px) | SemiBold (600) | 1.15 | -0.02em | text-3xl (30px) |
| h3 | text-3xl (30px) | SemiBold (600) | 1.2 | -0.01em | text-2xl (24px) |
| h4 | text-2xl (24px) | SemiBold (600) | 1.25 | normal | text-xl (20px) |
| h5 | text-xl (20px) | Medium (500) | 1.3 | normal | text-lg (18px) |
| h6 | text-lg (18px) | Medium (500) | 1.35 | normal | text-base (16px) |

```typescript
export function Heading({ as: Component = 'h2', variant, children, className, tracking }: HeadingProps) {
  const size = variant || Component
  
  return (
    <Component className={cn(
      sizeMap[size], // Maps variant to Tailwind classes
      trackingMap[tracking || 'normal'],
      className
    )}>
      {children}
    </Component>
  )
}
```

### `Text`

```typescript
interface TextProps {
  variant?: 'hero' | 'lead' | 'body' | 'small' | 'caption' | 'tiny'
  as?: 'p' | 'span' | 'div'
  muted?: boolean
  children: React.ReactNode
  className?: string
}
```

| Variant | Size | Weight | Line Height | Use Case |
|---|---|---|---|---|
| hero | text-xl (20px) | Normal (400) | 1.5 | Hero subtitle |
| lead | text-lg (18px) | Normal (400) | 1.6 | Section introductions |
| body | text-base (16px) | Normal (400) | 1.7 | Main content, blog posts |
| small | text-sm (14px) | Normal (400) | 1.5 | Metadata, card descriptions |
| caption | text-xs (12px) | Normal (400) | 1.4 | Labels, timestamps, legal |
| tiny | text-[11px] | Medium (500) | 1.3 | Badges, tags, overlay text |

### `Prose`

Blog and long-form content wrapper with Tailwind Typography plugin overrides:

```typescript
interface ProseProps {
  children: React.ReactNode
  className?: string
  size?: 'default' | 'philosophical'
}
```

- **Default:** Standard `prose prose-invert` with custom overrides
- **Philosophical:** Larger body text (text-lg), wider measure, serif display font for pull quotes

Applied customization:
```typescript
// tailwind.config.ts
prose: {
  DEFAULT: {
    css: {
      maxWidth: '72ch',
      '--tw-prose-body': colors.zinc[300],
      '--tw-prose-headings': colors.zinc[100],
      '--tw-prose-links': colors.blue[400],
      '--tw-prose-code': colors.zinc[100],
      '--tw-prose-pre-bg': colors.zinc[900],
      p: { marginBottom: '1.25em' },
      'h2, h3': { scrollMarginTop: '80px' },
    }
  }
}
```

### `CodeBlock`

```typescript
interface CodeBlockProps {
  code: string
  language: string
  filename?: string
  highlightLines?: number[]
  showLineNumbers?: boolean
}
```

- Uses rehype-pretty-code for MDX rendering
- Catppuccin Mocha theme (dark) / Catppuccin Latte (light)
- Copy button in top-right corner
- Filename badge in top-left when provided
- Max height with scroll for long blocks

### `Blockquote`

```typescript
interface BlockquoteProps {
  children: React.ReactNode
  variant?: 'default' | 'pull-quote'
  source?: string
}
```

- **Default:** Left border accent, standard body text
- **Pull-quote:** Larger text, centered, italic, used for emphasis within articles

### `Kicker`

```typescript
interface KickerProps {
  text: string
  variant?: 'default' | 'accent'
}
```

Small uppercase label above headings. Used for section categorization (e.g., "SERVICES", "CASE STUDY").

- **Default:** text-xs, uppercase tracking-widest, muted
- **Accent:** Same but in brand blue

### `CodeInline`

```typescript
interface CodeInlineProps {
  children: string
}
```

Inline code within prose. `bg-zinc-800`, `text-zinc-100`, `rounded`, `px-1.5`, `py-0.5`, `text-sm`, `font-mono`.

---

## Component Hierarchy Rules

1. Every page uses the **Heading** component for section titles (not raw `<h2>` tags)
2. Blog content uses the **Prose** wrapper for consistent typography
3. Card text uses **Text** with `small` or `body` variant
4. Hero sections use **Heading** with `display` variant + **Text** with `hero` variant
5. Blog post body uses **Prose** with `default` size
6. Philosophical/blog content can optionally use **Prose** with `philosophical` size for essay-style posts
7. All page titles (H1) use semantic `<h1>` via the Heading component for SEO
8. Section headings follow proper hierarchy: no skipping levels (h1 -> h2 -> h3)

---

## Accessibility

- Headings use semantic HTML (`<h1>` through `<h6>`) matching visual hierarchy
- Never use Heading component for visual styling alone — use Text variant instead
- Prose wrapper maintains proper heading hierarchy
- Code blocks have `role="region"` and `aria-label` with the language
- Code inline uses `<code>` element
- Font sizes use `rem` units (respects browser zoom)
- Line heights are unitless (relative to font size)
