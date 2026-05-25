import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ArchitectureExplorer } from "@/components/lab/architecture-explorer";
import { CTASection } from "@/components/sections/cta-section";
import { Surface } from "@/components/ui/surface";

export const metadata: Metadata = {
  title: "Architecture Explorer",
  description: "A readable map of the lab’s source, retrieval, reasoning, and control layers.",
};

export default function ArchitecturePage() {
  return (
    <>
      <PageHeader
        eyebrow="Lab"
        title="Architecture Explorer"
        description="A system map that shows how the lab moves from source material to retrieval, reasoning, and control."
        primaryAction={{ label: "Back to lab", href: "/lab" }}
        secondaryAction={{ label: "Open chat sandbox", href: "/lab/chat" }}
      />

      <section className="section-shell pt-0">
        <div className="container-page">
          <ArchitectureExplorer />
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container-page">
          <Surface variant="outline" className="grid gap-6 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Principle</span>
              </div>
              <h2 className="section-heading mt-6">Make the system legible enough to debug.</h2>
              <p className="lead-copy mt-5 text-muted-foreground">
                The architecture view is deliberately explicit: what comes in, what gets selected,
                what gets synthesized, and what keeps the whole thing bounded.
              </p>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              Ask for a similar build
            </Link>
          </Surface>
        </div>
      </section>

      <CTASection
        headline="Need a clearer system map?"
        body="This same structure works for data pipelines, research systems, or product architecture."
        buttonText="Talk about it"
        buttonUrl="/contact"
      />
    </>
  );
}
