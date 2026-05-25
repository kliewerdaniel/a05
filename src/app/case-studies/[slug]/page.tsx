import Link from "next/link";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CASE_STUDIES } from "@/lib/constants";
import { CTASection } from "@/components/sections/cta-section";
import { PageHeader } from "@/components/layout/page-header";
import { Surface } from "@/components/ui/surface";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES.find((item) => item.slug === slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.content,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((item) => item.slug === slug);
  if (!study) notFound();

  return (
    <>
      <PageHeader
        eyebrow={study.client}
        title={study.title}
        description={study.content}
        primaryAction={{ label: "Start a project", href: "/contact" }}
        secondaryAction={{ label: "Back to case studies", href: "/case-studies" }}
      />

      <section className="section-shell pt-0">
        <div className="container-page">
          <Surface variant="outline" className="grid gap-8 p-8 lg:grid-cols-[1fr_20rem] lg:p-10">
            <div className="space-y-8">
              <div className="grid gap-4 sm:grid-cols-3">
                {study.metrics.map((metric) => (
                  <Card key={metric.label} className="border-border/70 bg-card/80">
                    <CardHeader className="space-y-2">
                      <div className="text-3xl font-semibold tracking-[-0.04em] text-primary">
                        {metric.value}
                      </div>
                      <CardTitle className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {metric.label}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <div className="space-y-4">
                <div className="eyebrow">
                  <span className="eyebrow-dot" />
                  <span>Approach</span>
                </div>
                <h2 className="section-heading">How the system was built.</h2>
                <p className="lead-copy text-muted-foreground">
                  A private, local-first workflow was chosen to preserve data control while still
                  delivering a usable search and synthesis layer for internal teams.
                </p>
              </div>

              <div className="space-y-5">
                <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-6 shadow-soft">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">Context</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {study.content}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-6 shadow-soft">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">Results</h3>
                  <ul className="mt-4 space-y-3">
                    {study.results.map((result) => (
                      <li key={result} className="flex items-start gap-3 text-sm leading-7 text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <aside className="space-y-5">
              <Card className="border-border/70 bg-card/80">
                <CardHeader className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((technology) => (
                      <Badge key={technology} variant="outline" className="text-[10px] uppercase tracking-[0.18em]">
                        {technology}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Project details</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Timeline</div>
                    <div className="text-base font-medium text-foreground">{study.timeline}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Role</div>
                    <div className="text-base font-medium text-foreground">{study.role}</div>
                  </div>
                </CardContent>
              </Card>

              <Button asChild variant="outline" className="h-12 w-full px-5">
                <Link href="/contact">
                  Discuss a similar build
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </aside>
          </Surface>
        </div>
      </section>

      <CTASection
        headline="Need something similar?"
        body="The architecture can be adapted to your constraints, your data boundaries, and your delivery goals."
        buttonText="Book a consultation"
        buttonUrl="/contact"
      />
    </>
  );
}
