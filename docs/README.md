# a04 — Consultancy Platform Documentation

**Repository:** https://github.com/kliewerdaniel/a01
**Domain:** danielkliewer.com
**Status:** Rebuild in planning

## Purpose

This directory contains the complete architectural, strategic, and implementation documentation for rebuilding danielkliewer.com from a personal AI blog into a commercially viable AI consultancy and product platform.

## What This Site Is

- An AI consultancy platform
- A systems engineering studio
- A local-first AI infrastructure company
- A technical authority platform
- A lead-generation engine
- A monetization platform

## What This Site Is Not

- A simple portfolio
- A resume
- An academic blog
- A generic AI landing page

## Documentation Index

| Directory | Purpose | Key Files |
|---|---|---|
| `/architecture` | Next.js App Router structure, data flow, API design, MDX/CMS, deployment | `nextjs-app-router.md`, `data-flow.md`, `mdx-cms.md`, `api-routes.md`, `deployment.md` |
| `/branding` | Visual identity, logo usage, brand voice & tone | `brand-identity.md`, `voice-tone.md` |
| `/components` | Reusable component system — props, variants, animations, accessibility | `hero-sections.md`, `service-cards.md`, `cta-blocks.md`, `navigation-systems.md`, `footer-systems.md`, `timeline-systems.md`, `typography-systems.md`, `architecture-showcases.md`, `metrics-sections.md`, `case-study-cards.md`, `blog-layouts.md`, `animated-grids.md` |
| `/content-strategy` | Blog organization, pillar pages, lead magnets, newsletter | `content-architecture.md`, `pillar-pages.md`, `lead-magnets.md`, `newsletter-strategy.md` |
| `/conversion` | Lead generation, consultation flows, CRM, email workflows | `consultation-flows.md`, `contact-forms.md`, `crm-integration.md`, `email-workflows.md` |
| `/copywriting` | Page-level copy frameworks, tone principles, CTA language | `tone-principles.md` |
| `/design-system` | Typography, spacing, color, animation, dark mode, breakpoints, iconography | `typography.md`, `spacing.md`, `color-philosophy.md`, `animation-language.md`, `iconography.md`, `dark-mode.md`, `responsive-breakpoints.md`, `glassmorphism-usage.md`, `gradients-usage.md` |
| `/development` | Setup, workflow, testing, code conventions | `setup.md`, `code-conventions.md` |
| `/features` | Lead gen, knowledge graph, AI chat, search | `lead-generation.md`, `knowledge-graph.md`, `ai-chat.md`, `search.md` |
| `/implementation` | Phased build roadmap (6 phases) | `phase-1-foundation.md` through `phase-6-advanced-features.md` |
| `/marketing` | SEO, content marketing, social proof, launch | `seo-strategy.md` |
| `/monetization` | Consulting, digital products, courses, pricing, upsell | `pricing-philosophy.md`, `consulting-offers.md`, `digital-products.md`, `email-funnel.md`, `upsell-paths.md` |
| `/pages` | Per-page specs: purpose, layout, CTAs, copy, SEO | `homepage.md`, `services.md`, `case-studies.md`, `about.md`, `contact.md`, `resources.md`, `lab.md`, `blog.md` |
| `/performance` | Budgets, optimization, monitoring | `budgets.md` |
| `/seo` | Metadata, schema, OpenGraph, sitemap, keyword strategy | `metadata-strategy.md`, `schema-org.md`, `semantic-html.md`, `sitemap.md`, `keyword-clustering.md` |
| `/services` | Service definitions with pricing and deliverables | `ai-knowledge-systems.md`, `workflow-automation.md`, `ai-websites.md`, `local-ai-deployment.md`, `content-pipelines.md` |
| `/technical` | Stack decisions, form handling, analytics | `stack-decisions.md`, `form-handling.md` |
| `/user-flows` | Visitor journeys: lead conversion, booking, purchase, reading | `visitor-to-lead.md`, `consultation-booking.md`, `digital-product-purchase.md`, `blog-reading.md` |
| `/visual-direction` | Design principles, cinematic aesthetic, layout system | `design-principles.md`, `layout-system.md` |

## Before Building

Read these root documents first:

1. **PRODUCT_VISION.md** — What we're building and why
2. **BRAND_POSITIONING.md** — Who we are and how we speak
3. **SITE_STRATEGY.md** — How the site achieves business goals
4. **MONETIZATION_STRATEGY.md** — How the site makes money
5. **DEVELOPMENT_ROADMAP.md** — How we build it, phase by phase
6. **docs/pages/homepage.md** — Start here for the page build order

## Stack Summary

| Concern | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS |
| Motion | motion/react (Framer Motion) |
| Components | shadcn/ui (customized) |
| Content | MDX + gray-matter (git-based) |
| Forms | react-hook-form + Zod |
| Icons | lucide-react |
| Theme | next-themes |
| Deployment | Vercel |
| Analytics | Vercel Analytics / PostHog |
| Email | Resend |
| Payments | Stripe / LemonSqueezy |
