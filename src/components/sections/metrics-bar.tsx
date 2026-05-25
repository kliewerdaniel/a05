"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { METRICS } from "@/lib/constants";
import { Surface } from "@/components/ui/surface";

function AnimatedMetric({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
        {inView ? value : "00+"}
      </div>
      <div className="mt-2 text-sm leading-6 text-muted-foreground">{label}</div>
    </div>
  );
}

export function MetricsBar() {
  return (
    <section className="section-shell">
      <div className="container-page">
        <Surface variant="glass" className="p-6 sm:p-8">
          <div className="grid gap-6 divide-y divide-border/70 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {METRICS.map((metric) => (
              <div key={metric.label} className="px-2 py-3 sm:px-4 sm:py-1">
                <AnimatedMetric {...metric} />
              </div>
            ))}
          </div>
        </Surface>
      </div>
    </section>
  );
}
