# Gradients Usage Rules

## Philosophy

Gradients are a controlled substance. Used sparingly, they add depth and visual interest. Used excessively, they create visual noise and dilute brand identity. The site's design language is fundamentally flat and restrained — gradients are reserved for specific, intentional moments.

### Core Constraint

The site uses ONE gradient pattern. Not multiple. Consistency over variety.

---

## Allowed Gradient Usage

### 1. Hero Background (Subtle Radial)

```css
background: radial-gradient(
  ellipse 80% 50% at 50% -20%,
  rgba(59, 130, 246, 0.08),
  transparent
);
```

- Applied to the hero section background
- Creates a subtle blue "glow" at the top center
- Must be low opacity (8% or less)
- Not visible as a gradient — only felt as atmospheric depth
- Present in both dark and light mode (adjust opacity)

### 2. Card Hover State (Extremely Subtle)

```css
/* On hover only */
background-image: linear-gradient(
  to bottom right,
  rgba(59, 130, 246, 0.03),
  transparent 50%
);
```

- Only visible on hover
- 3% opacity — barely perceptible
- Adds a "lit" feeling to interactive surfaces
- Transition: `background 300ms ease`

### 3. Icon Containers

```css
background: linear-gradient(
  135deg,
  rgba(59, 130, 246, 0.15),
  transparent 60%
);
```

- Used inside the 40px or 64px icon containers on cards
- Creates a subtle blue tint in the corner
- Not a primary visual element

### 4. Section Dividers (Optional)

```css
background: linear-gradient(
  to right,
  transparent,
  rgba(59, 130, 246, 0.05),
  transparent
);
```

- Thin horizontal line between major sections
- 1-2px height
- Acts as a subtle visual breath between sections
- May be omitted entirely (a simple border works)

---

## Prohibited Gradient Usage

| Pattern | Why Not |
|---|---|
| Full-page background gradients | Competes with content, increases page weight |
| Text gradients | Reduces readability, trendy, inaccessible |
| Button gradients | Makes buttons look like 2020 SaaS, reduces trust |
| Multi-color gradients (purple → blue → teal) | Brand dilution, looks generic |
| Animated gradients | Performance cost, motion sickness, distracting |
| Bold diagonal gradients | Too aggressive for the brand tone |
| Gradient borders | Over-designed, hard to maintain |
| Gradient on navigation | Destroys contrast for nav links |
| Gradient on blog content | Reduces reading comprehension |
| Rainbow / spectral gradients | Unprofessional |

---

## Light Mode Adaptation

Gradients should remain at the same or lower opacity in light mode:

```css
/* Dark mode */
rgba(59, 130, 246, 0.08)

/* Light mode */  
rgba(59, 130, 246, 0.04)
```

---

## Implementation

### Tailwind Config Extension

```typescript
// tailwind.config.ts
theme: {
  extend: {
    backgroundImage: {
      'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.08), transparent)',
      'card-hover': 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.03), transparent 50%)',
      'section-divider': 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.05), transparent)',
    },
  },
}
```

---

## Design Review Checklist

Before adding a gradient, verify:
1. Does this gradient serve a structural purpose? (Not just decoration.)
2. Is it the same blue-to-transparent pattern? (No other color combinations.)
3. Is the opacity below 10%? (Gradients should be felt, not seen.)
4. Does it work in both dark and light mode?
5. Would a solid color or border work just as well? (If yes, prefer solid.)
6. Would the design suffer if this gradient were removed? (If no, remove it.)
