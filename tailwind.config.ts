import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        surface: "hsl(var(--surface))",
        "surface-foreground": "hsl(var(--surface-foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        soft: "0 1px 1px hsl(var(--shadow) / 0.06), 0 12px 32px -20px hsl(var(--shadow) / 0.55)",
        lift: "0 1px 1px hsl(var(--shadow) / 0.08), 0 20px 44px -24px hsl(var(--shadow) / 0.65)",
        glow: "0 0 0 1px hsl(var(--primary) / 0.2), 0 24px 56px -28px hsl(var(--primary) / 0.32)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, hsl(var(--primary) / 0.22), transparent 35%), radial-gradient(circle at 80% 20%, hsl(var(--accent) / 0.16), transparent 28%), radial-gradient(circle at 20% 80%, hsl(var(--secondary) / 0.14), transparent 24%)",
        mesh:
          "linear-gradient(to bottom, hsl(var(--background) / 0.2), hsl(var(--background))), radial-gradient(circle at 1px 1px, hsl(var(--border) / 0.9) 1px, transparent 0)",
      },
      maxWidth: {
        prose: "72ch",
        content: "72rem",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "hsl(var(--foreground))",
            "--tw-prose-body": "hsl(var(--muted-foreground))",
            "--tw-prose-headings": "hsl(var(--foreground))",
            "--tw-prose-lead": "hsl(var(--muted-foreground))",
            "--tw-prose-links": "hsl(var(--primary))",
            "--tw-prose-bold": "hsl(var(--foreground))",
            "--tw-prose-counters": "hsl(var(--muted-foreground))",
            "--tw-prose-bullets": "hsl(var(--border))",
            "--tw-prose-hr": "hsl(var(--border))",
            "--tw-prose-quotes": "hsl(var(--foreground))",
            "--tw-prose-quote-borders": "hsl(var(--primary))",
            "--tw-prose-captions": "hsl(var(--muted-foreground))",
            "--tw-prose-code": "hsl(var(--foreground))",
            "--tw-prose-pre-code": "hsl(var(--foreground))",
            "--tw-prose-pre-bg": "hsl(var(--surface))",
            "--tw-prose-th-borders": "hsl(var(--border))",
            "--tw-prose-td-borders": "hsl(var(--border))",
            "h1,h2,h3,h4": {
              color: "hsl(var(--foreground))",
              letterSpacing: "-0.03em",
            },
            a: {
              textDecorationColor: "hsl(var(--primary) / 0.35)",
              textUnderlineOffset: "0.18em",
            },
            pre: {
              borderRadius: "1rem",
              border: "1px solid hsl(var(--border))",
              padding: "1rem 1.1rem",
            },
            code: {
              fontWeight: "500",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            blockquote: {
              borderLeftColor: "hsl(var(--primary))",
              color: "hsl(var(--foreground))",
              fontStyle: "normal",
            },
            table: {
              fontSize: "0.95rem",
            },
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "drift": "drift 18s ease-in-out infinite",
        "pulse-slow": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -12px, 0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
