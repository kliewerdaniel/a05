import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Github } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
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
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <>
      <PageHeader
        eyebrow={project.category}
        title={project.title}
        description={project.summary}
        primaryAction={{ label: "Back to projects", href: "/case-studies" }}
        secondaryAction={{ label: "Start a conversation", href: "/contact" }}
        meta={
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-[10px] uppercase tracking-[0.18em]">
                  {tag}
                </Badge>
              ))}
            </div>
            <Button asChild variant="outline" className="h-11 w-fit">
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                View code on GitHub
              </a>
            </Button>
          </div>
        }
      />

      <section className="section-shell pt-0">
        <div className="container-page">
          <Surface variant="outline" className="grid gap-8 p-8 lg:grid-cols-[1fr_20rem] lg:p-10">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="eyebrow">
                  <span className="eyebrow-dot" />
                  <span>Overview</span>
                </div>
                <h2 className="section-heading">{project.description}</h2>
                <p className="lead-copy text-muted-foreground">
                  This page is focused on the repository itself: what it solves, what it emphasizes,
                  and how it fits into the broader set of work.
                </p>
              </div>

              <div className="space-y-5">
                <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-6 shadow-soft">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
                    Why it exists
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.summary}</p>
                </div>

                <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-6 shadow-soft">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
                    What it emphasizes
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3 text-sm leading-7 text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <aside className="space-y-5">
              <Card className="border-border/70 bg-card/80">
                <CardHeader className="space-y-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Repository details
                  </div>
                  <CardTitle className="text-2xl tracking-[-0.03em]">{project.repo}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Category</div>
                    <div className="text-base font-medium text-foreground">{project.category}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Primary stack</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Badge key={item} variant="outline" className="text-[10px] uppercase tracking-[0.16em]">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button asChild variant="outline" className="h-12 w-full px-5">
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  Open repository
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>

              <Button asChild className="h-12 w-full px-5">
                <Link href="/contact">
                  Discuss a similar build
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </aside>
          </Surface>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container-page">
          <Surface variant="outline" className="grid gap-6 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Next step</span>
              </div>
              <h2 className="section-heading mt-6">If this is the kind of system you need, we should talk.</h2>
              <p className="lead-copy mt-5 text-muted-foreground">
                The same patterns can be adapted for private inference, knowledge systems, agent
                workflows, or full-stack product work.
              </p>
            </div>

            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Surface>
        </div>
      </section>

      <CTASection
        headline="Need a similar project shaped for your team?"
        body="Describe the problem, the constraints, and the outcome. I’ll help translate that into a practical build plan."
        buttonText="Book a consultation"
        buttonUrl="/contact"
      />
    </>
  );
}
