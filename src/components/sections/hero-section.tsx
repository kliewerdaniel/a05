"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Shield, Sparkles, Layers3, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Surface } from "@/components/ui/surface";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
}

const credibility = [
  { label: "Local-first", icon: Shield },
  { label: "Production systems", icon: Server },
  { label: "Technical writing", icon: Sparkles },
  { label: "Architecture-led", icon: Layers3 },
];

export function HeroSection({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
}: HeroSectionProps) {
  return (
    <section className="section-shell relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="absolute inset-0 -z-10 bg-hero-glow opacity-80" />
      <div className="absolute inset-0 -z-10 bg-mesh bg-[length:28px_28px] opacity-40 [mask-image:linear-gradient(to_bottom,white,transparent_85%)]" />

      <div className="container-page">
        <div className="page-grid items-center">
          <div className="max-w-4xl space-y-8">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              <span>Available for select projects</span>
            </div>

            <div className="space-y-6">
              <motion.h1
                className="display-heading text-balance"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                {headline}
              </motion.h1>
              <motion.p
                className="lead-copy max-w-2xl"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {subheadline}
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button asChild size="lg" className="h-12 px-6 text-base">
                <Link href={primaryCTA.href}>
                  {primaryCTA.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              {secondaryCTA && (
                <Button asChild variant="outline" size="lg" className="h-12 px-6 text-base">
                  <Link href={secondaryCTA.href}>{secondaryCTA.label}</Link>
                </Button>
              )}
            </motion.div>

            <motion.div
              className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {credibility.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl border border-border/70 bg-surface/70 px-4 py-3 shadow-soft backdrop-blur"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <Surface variant="glass" className="relative overflow-hidden p-6 lg:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,140,255,0.18),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(82,211,255,0.12),transparent_25%)]" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  Advisory snapshot
                </div>
                <div className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
                  2026
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-border/70 bg-background/60 p-5 shadow-soft">
                <div className="text-sm text-muted-foreground">Positioning</div>
                <div className="mt-2 text-xl font-semibold tracking-[-0.03em] text-foreground">
                  Local-first AI systems for teams that need control and leverage.
                </div>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  The stack is designed to feel calm: clear hierarchy, restrained motion, and
                  enough depth to read as premium without drifting into decoration.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Private by default", "No unnecessary API dependence."],
                  ["Fast to scan", "Information hierarchy does the work."],
                  ["Accessible", "Keyboard, contrast, and semantics first."],
                  ["Maintainable", "Tokens and primitives are centralized."],
                ].map(([title, body]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-border/70 bg-background/50 p-4 shadow-soft"
                  >
                    <div className="text-sm font-semibold text-foreground">{title}</div>
                    <div className="mt-1 text-sm leading-6 text-muted-foreground">{body}</div>
                  </div>
                ))}
              </div>
            </div>
          </Surface>
        </div>
      </div>
    </section>
  );
}
