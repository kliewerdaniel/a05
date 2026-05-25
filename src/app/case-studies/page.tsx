import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { CASE_STUDIES } from "@/lib/constants";
import { CTASection } from "@/components/sections/cta-section";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Surface } from "@/components/ui/surface";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected system builds, architecture summaries, and measurable results from production AI work.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case studies"
        title="Real systems, real results."
        description="Selected breakdowns of the architecture, constraints, and outcomes behind the systems I’ve built."
        primaryAction={{ label: "Book a consultation", href: "/contact" }}
        secondaryAction={{ label: "View services", href: "/services" }}
      />

      <section className="section-shell pt-0">
        <div className="container-page">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Selected work</span>
              </div>
              <h2 className="section-heading mt-6">Focused narratives instead of slideware.</h2>
            </div>
            <p className="lead-copy max-w-2xl text-muted-foreground lg:justify-self-end">
              The page treats each build as a system story: the problem, the structure, the outcome.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {CASE_STUDIES.map((study) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group block">
                <Card className="h-full border-border/70 bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lift">
                  <CardHeader className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((technology) => (
                        <Badge key={technology} variant="outline" className="text-[10px] uppercase tracking-[0.18em]">
                          {technology}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-2xl tracking-[-0.03em] group-hover:text-primary">
                      {study.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">{study.client}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <p className="text-sm leading-7 text-muted-foreground">{study.content}</p>
                    <div className="grid gap-4 sm:grid-cols-3">
                      {study.metrics.map((metric) => (
                        <div key={metric.label}>
                          <div className="text-2xl font-semibold tracking-[-0.04em] text-primary">
                            {metric.value}
                          </div>
                          <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <div className="flex items-center gap-2 border-t border-border/70 bg-muted/30 px-6 py-5 text-sm font-medium text-foreground">
                    <span>View case study</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container-page">
          <Surface variant="outline" className="grid gap-8 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Context</span>
              </div>
              <h2 className="section-heading mt-6">If you need results like these, we should talk.</h2>
              <p className="lead-copy mt-5">
                The point of the case studies is not self-promotion. It is to show how the work is
                structured and what kind of outcome the system is designed to produce.
              </p>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              Book a consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Surface>
        </div>
      </section>

      <CTASection
        headline="Want similar results?"
        body="Describe the problem, the constraints, and the desired outcome. I’ll help shape the system."
        buttonText="Book a free consultation"
        buttonUrl="/contact"
      />
    </>
  );
}
