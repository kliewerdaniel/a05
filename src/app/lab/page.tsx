import Link from "next/link";
import { ArrowRight, FlaskConical } from "lucide-react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { LAB_EXPERIMENTS, SITE } from "@/lib/constants";
import { CTASection } from "@/components/sections/cta-section";
import { Surface } from "@/components/ui/surface";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Lab",
  description: "Experimental prototypes, interactive demos, and proof-of-concept systems.",
};

const statusStyles = {
  beta: "success",
  experimental: "default",
  live: "success",
  archived: "outline",
} as const;

export default function LabPage() {
  return (
    <>
      <PageHeader
        eyebrow="Lab"
        title="Experimental AI systems and prototypes."
        description="Working demos, visual explorations, and proof-of-concept tools that sit just beyond the shipping surface."
        primaryAction={{ label: "Explore knowledge graph", href: "/lab/knowledge-graph" }}
        secondaryAction={{ label: "Read the blog", href: "/blog" }}
      />

      <section className="section-shell pt-0">
        <div className="container-page">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Experiments</span>
              </div>
              <h2 className="section-heading mt-6">Where ideas become code.</h2>
            </div>
            <p className="lead-copy max-w-2xl text-muted-foreground lg:justify-self-end">
              The lab is intentionally small. Each experiment should communicate a system idea,
              not just demonstrate a component.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {LAB_EXPERIMENTS.map((experiment) => (
              <Link key={experiment.title} href={experiment.href} className="group block">
                <Surface variant="outline" className="h-full p-6 transition-all group-hover:-translate-y-1 group-hover:border-primary/25">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <FlaskConical className="h-6 w-6" />
                    </div>
                    <Badge variant={statusStyles[experiment.status]}>
                      {experiment.status}
                    </Badge>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-foreground group-hover:text-primary">
                    {experiment.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{experiment.description}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                    Open experiment
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Surface>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container-page">
          <Surface variant="glass" className="grid gap-6 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="space-y-3">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Open source</span>
              </div>
              <h2 className="section-heading">The code should be as inspectable as the writing.</h2>
              <p className="lead-copy max-w-2xl">
                The lab surface points back to the repositories and documentation that support the
                experiments. Nothing hidden, nothing ornamental.
              </p>
            </div>
            <Link
              href={SITE.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              View on GitHub
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Surface>
        </div>
      </section>

      <CTASection
        headline="Want to turn an experiment into a system?"
        body="The lab is where prototypes start. Consulting is where they become stable and useful."
        buttonText="Start a project"
        buttonUrl="/contact"
      />
    </>
  );
}
