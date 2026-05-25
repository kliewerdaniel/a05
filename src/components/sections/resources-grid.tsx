"use client";

import { useState } from "react";
import { Download, Lock, ArrowRight } from "lucide-react";
import { RESOURCES } from "@/lib/constants";
import { Surface } from "@/components/ui/surface";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ResourcesGrid() {
  const [activeResource, setActiveResource] = useState<string | null>(null);

  return (
    <div className="space-y-5">
      <div className="grid gap-4 lg:grid-cols-2">
        {RESOURCES.map((resource) => (
          <Surface key={resource.title} variant="outline" className="h-full p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">{resource.type}</Badge>
                <Badge variant={resource.price === "free" ? "success" : "default"}>
                  {resource.price === "free" ? "Free" : "Premium"}
                </Badge>
              </div>
              {resource.price === "paid" && <Lock className="h-4 w-4 text-muted-foreground" />}
            </div>

            <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-foreground">
              {resource.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{resource.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {resource.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/70 bg-background px-3 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {resource.price === "free" ? (
              activeResource === resource.title ? (
                <form
                  className="mt-6 flex flex-col gap-3 sm:flex-row"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setActiveResource(null);
                  }}
                >
                  <Input type="email" required placeholder="you@company.com" className="sm:flex-1" />
                  <Button type="submit" className="h-12 px-5">
                    Send download
                  </Button>
                </form>
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveResource(resource.title)}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  <Download className="h-4 w-4" />
                  Download free
                </button>
              )
            ) : (
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Lock className="h-4 w-4" />
                Coming soon
              </div>
            )}
          </Surface>
        ))}
      </div>

      <Surface variant="glass" className="grid gap-6 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="space-y-3">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>Next step</span>
          </div>
          <h2 className="section-heading">Not sure where to start?</h2>
          <p className="lead-copy max-w-2xl">
            A short consultation usually makes the path obvious. If not, you at least leave with a
            concrete recommendation.
          </p>
        </div>
        <ArrowRight className="h-5 w-5 text-muted-foreground" />
      </Surface>
    </div>
  );
}
