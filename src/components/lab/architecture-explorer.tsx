"use client";

import { useMemo, useState } from "react";
import type { ComponentType } from "react";
import { ArrowRight, Layers3, Shield, Database, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Surface } from "@/components/ui/surface";

type ArchitectureLayer = {
  id: string;
  name: string;
  icon: ComponentType<{ className?: string }>;
  summary: string;
  details: string[];
  label: string;
};

const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    id: "ingest",
    name: "Ingest",
    icon: Database,
    summary: "Collect and normalize content before anything else touches it.",
    details: [
      "Blog posts, projects, and site data are structured as source material.",
      "Normalization keeps content reusable across features.",
      "The lab can inspect the same corpus from multiple angles.",
    ],
    label: "Source material",
  },
  {
    id: "retrieve",
    name: "Retrieve",
    icon: Layers3,
    summary: "Pull only the relevant context for the current task.",
    details: [
      "Knowledge graph and search views surface the strongest matches first.",
      "The working set is explicit instead of hidden.",
      "Relevance is visible so the user can inspect the result path.",
    ],
    label: "Relevance layer",
  },
  {
    id: "reason",
    name: "Reason",
    icon: Sparkles,
    summary: "Synthesize a response from the selected material.",
    details: [
      "The chat sandbox ranks source posts and explains why they match.",
      "There is no black-box retrieval step.",
      "Reasoning is transparent, repeatable, and local in concept.",
    ],
    label: "Answer layer",
  },
  {
    id: "guard",
    name: "Guard",
    icon: Shield,
    summary: "Keep the system understandable, bounded, and maintainable.",
    details: [
      "Architecture decisions are documented alongside the features.",
      "The lab remains a prototype surface rather than a hidden service.",
      "The goal is inspection, not abstraction for its own sake.",
    ],
    label: "Control layer",
  },
];

export function ArchitectureExplorer() {
  const [activeLayerId, setActiveLayerId] = useState(ARCHITECTURE_LAYERS[0].id);
  const activeLayer = useMemo(
    () => ARCHITECTURE_LAYERS.find((layer) => layer.id === activeLayerId) ?? ARCHITECTURE_LAYERS[0],
    [activeLayerId],
  );

  return (
    <Surface variant="outline" className="grid gap-8 p-6 lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
      <div className="space-y-5">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              <span>Architecture</span>
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
              A readable system map.
            </h3>
          </div>
          <Badge variant="warning">Interactive</Badge>
        </div>

        <div className="space-y-3">
          {ARCHITECTURE_LAYERS.map((layer, index) => {
            const Icon = layer.icon;
            const active = layer.id === activeLayer.id;

            return (
              <button
                key={layer.id}
                type="button"
                onClick={() => setActiveLayerId(layer.id)}
                className={`flex w-full items-center gap-4 rounded-[1.5rem] border p-4 text-left transition-all ${
                  active
                    ? "border-primary/40 bg-primary/5 shadow-lift"
                    : "border-border/70 bg-card/70 hover:border-primary/25 hover:bg-muted/30"
                }`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-base font-semibold text-foreground">{layer.name}</div>
                    <Badge variant={active ? "success" : "outline"}>{index + 1}</Badge>
                  </div>
                  <div className="mt-1 text-sm leading-6 text-muted-foreground">{layer.summary}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-5">
        <Card className="border-border/70 bg-card/80 shadow-soft">
          <CardHeader className="space-y-3">
            <Badge variant="info" className="w-fit">
              {activeLayer.label}
            </Badge>
            <CardTitle className="text-3xl tracking-[-0.03em]">{activeLayer.name}</CardTitle>
            <p className="text-sm leading-7 text-muted-foreground">{activeLayer.summary}</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {activeLayer.details.map((detail) => (
              <div
                key={detail}
                className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background/70 p-4 text-sm leading-7 text-muted-foreground"
              >
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span>{detail}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-5 shadow-soft">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Why this matters
            </div>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              The lab is built to show the path from source material to retrieval, reasoning, and
              control. That makes the system explainable rather than decorative.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-5 shadow-soft">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              What to inspect
            </div>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Each layer is intentionally constrained so its behavior is understandable, testable,
              and small enough to reason about.
            </p>
          </div>
        </div>
      </div>
    </Surface>
  );
}
