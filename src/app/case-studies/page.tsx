import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { CTASection } from "@/components/sections/cta-section";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { Surface } from "@/components/ui/surface";
import { PROJECTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected GitHub projects showing local AI systems, orchestration, research tools, and full-stack delivery work.",
};

const projectStats = [
  { value: PROJECTS.length.toString(), label: "public repositories showcased" },
  { value: "6", label: "project themes across the page" },
  { value: "Local", label: "first systems bias" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Selected GitHub work, organized as a portfolio."
        description="The page reflects the repositories I’ve built: local-first AI systems, orchestration workflows, research tooling, and full-stack experiments that ship."
        primaryAction={{ label: "Start a conversation", href: "/contact" }}
        secondaryAction={{ label: "Read about me", href: "/about" }}
        meta={
          <div className="grid gap-3 sm:grid-cols-3">
            {projectStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border/70 bg-background/70 p-4 shadow-soft"
              >
                <div className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        }
      />

      <ProjectsGrid projects={PROJECTS} />

      <section className="section-shell pt-0">
        <div className="container-page">
          <Surface variant="outline" className="grid gap-8 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Context</span>
              </div>
              <h2 className="section-heading mt-6">The emphasis is on system design, not inflated narrative.</h2>
              <p className="lead-copy mt-5 text-muted-foreground">
                These projects are there to show how I work: privacy boundaries, retrieval,
                orchestration, content systems, and the kind of implementation detail that makes a
                project usable after the first demo.
              </p>
            </div>

            <div className="space-y-3 text-sm leading-7 text-muted-foreground">
              <p>• Every project maps back to a real GitHub repository.</p>
              <p>• The filters group work by actual themes, not generic labels.</p>
              <p>• The layout is intentionally closer to a clean project index than a sales page.</p>
            </div>
          </Surface>
        </div>
      </section>

      <CTASection
        headline="Want a project like this built for your team?"
        body="If the work touches local AI, agent workflows, or a full-stack system, I can help shape the architecture and delivery path."
        buttonText="Book a call"
        buttonUrl="/contact"
      />
    </>
  );
}
