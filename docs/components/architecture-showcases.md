# Architecture Showcase Component Specification

## Purpose

Architecture showcases visually communicate system designs, data flows, and technical architecture to demonstrate engineering depth. They are the primary vehicle for "show, don't tell" — replacing vague claims of expertise with concrete, visual technical communication.

Used on: Case study detail pages, lab experiments, service pages, blog posts.

---

## Component: `ArchitectureDiagram`

### Props

```typescript
interface ArchitectureDiagramProps {
  nodes: ArchNode[]
  edges: ArchEdge[]
  variant?: 'flowchart' | 'layered' | 'topology'
  interactive?: boolean
  animated?: boolean
  height?: number
}

interface ArchNode {
  id: string
  label: string
  type: 'system' | 'data' | 'user' | 'ai' | 'storage' | 'external' | 'process'
  description?: string
  url?: string
  technologies?: string[]
}

interface ArchEdge {
  source: string
  target: string
  label?: string
  direction?: 'forward' | 'bidirectional'
  animated?: boolean
}
```

### Variants

| Variant | Use Case | Visual Style |
|---|---|---|
| Flowchart | Data flow, process pipelines | Top-to-bottom or left-to-right, arrow connections |
| Layered | Stack architecture, infrastructure | Horizontal layers, vertical service stacks |
| Topology | Network diagrams, deployment maps | Free-form with spatial relationships |

### Node Type Visual System

| Type | Icon | Color | Shape |
|---|---|---|---|
| system | Server | Blue (#3b82f6) | Rounded rectangle (8px radius) |
| data | Database | Green (#22c55e) | Cylinder |
| user | User | Amber (#f59e0b) | Circle |
| ai | Brain | Purple (#a855f7) | Hexagon |
| storage | HardDrive | Teal (#14b8a6) | Folder |
| external | Globe | Gray (#71717a) | Cloud |
| process | GitBranch | Zinc (#a1a1aa) | Diamond |

### Layout

```
                    ┌─────────────┐
                    │   User      │
                    │  (Browser)  │
                    └──────┬──────┘
                           │ HTTPS
                    ┌──────▼──────┐
                    │  Next.js    │
                    │  App Router │
                    └──────┬──────┘
                           │
              ┌────────────┼────────────┐
              │            │            │
       ┌──────▼──────┐  ┌──▼───┐  ┌────▼─────┐
       │   Ollama    │  │ MDX  │  │  Stripe  │
       │  (LLM)      │  │ Files│  │          │
       └─────────────┘  └──────┘  └──────────┘
```

### Implementation Approach

**Phase 1-4 (Static):** SVG-based diagrams created inline in MDX. Simple, semantic, accessible, zero JS overhead.

```tsx
// components/ui/architecture-svg.tsx
export function ArchitectureDiagram({ nodes, edges }: ArchDiagramProps) {
  return (
    <figure className="my-8 overflow-x-auto">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto" role="img">
        {/* Edges as paths/lines */}
        {/* Nodes as rect/circle/polygon with text */}
      </svg>
      <figcaption className="text-sm text-zinc-500 mt-2">
        Architecture diagram: {description}
      </figcaption>
    </figure>
  )
}
```

**Phase 6 (Interactive):** ReactFlow-based interactive diagrams on the Lab page.

```tsx
// features/lab/architecture-explorer.tsx
import { ReactFlow, Background, Controls, MiniMap } from '@xyflow/react'
```

### Static Diagram Template (MDX)

For blog posts and case studies, use a declarative helper:

```mdx
<ArchDiagram
  title="RAG Pipeline Architecture"
  nodes={[
    { id: '1', label: 'User Query', type: 'user' },
    { id: '2', label: 'Embedding Model', type: 'ai' },
    { id: '3', label: 'Vector DB', type: 'data' },
    { id: '4', label: 'LLM', type: 'ai' },
    { id: '5', label: 'Response', type: 'system' },
  ]}
  edges={[
    { source: '1', target: '2', label: 'text' },
    { source: '2', target: '3', label: 'vector' },
    { source: '3', target: '4', label: 'context' },
    { source: '4', target: '5', label: 'answer' },
  ]}
/>
```

### States

| State | Behavior |
|---|---|
| Default | Static, fully rendered, readable |
| Loading (interactive) | Skeleton frame with pulse animation |
| Hover (node) | Slight scale (1.05), shadow, label emphasis |
| Selected (interactive) | Blue border, detail panel appears |
| Mobile | Collapsed to single column, scrollable container |

### Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| < 640px | Horizontal scroll wrapper, smaller font sizes |
| 640-1024px | Full width, reduced padding |
| 1024px+ | Native size, max-width container |

### Accessibility

- `<figure>` with `<figcaption>` describing the architecture
- SVG has `role="img"` and `aria-label`
- All text in diagrams meets 4.5:1 contrast ratio
- Color is never the only way information is conveyed (labels on all elements)
- Interactive diagrams have keyboard navigation (Tab between nodes, Enter to select)
- Reduced motion disables edge animation

### Performance

- Static SVGs: inline in HTML, no network requests
- Icon sprites: single sprite SVG for node type icons
- Interactive (Phase 6): lazy-loaded with `dynamic(() => import(...), { ssr: false })`
- ReactFlow: `100KB` gzip, loaded only on Lab page

### Dependencies

- Static: None (pure SVG/JSX)
- Interactive: `@xyflow/react` (Phase 6, Lab page only)
