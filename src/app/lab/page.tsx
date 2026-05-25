import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, FlaskConical } from "lucide-react";
import { CTASection } from "@/components/sections/cta-section";
import { PageHeader } from "@/components/layout/page-header";
import { Surface } from "@/components/ui/surface";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SITE, LAB_EXPERIMENTS } from "@/lib/constants";
import { getAllPosts } from "@/lib/blog";
import { getLabMetrics } from "@/lib/lab";

export const metadata: Metadata = {
  title: "Lab",
  description: "Experimental prototypes, interactive demos, and proof-of-concept systems.",
};

const statusStyles = {
  beta: "success",
  experimental: "warning",
  live: "success",
  archived: "outline",
} as const;

export default function LabPage() {
  const posts = getAllPosts();
  const metrics = getLabMetrics(posts);
  const recentPosts = posts.slice(0, 4);
  const topCategories = Array.from(new Set(posts.flatMap((post) => post.categories))).slice(0, 6);

  return (
    <>
      <PageHeader
        eyebrow="Lab"
        title="Experimental surfaces for the systems I actually build."
        description="This page collects the parts of the site that should be explored, not just read: graph views, archive search, and architecture notes that point back to real content."
        primaryAction={{ label: "Open knowledge graph", href: "/lab/knowledge-graph" }}
        secondaryAction={{ label: "Open chat sandbox", href: "/lab/chat" }}
        meta={
          <div className="grid gap-3 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-border/70 bg-background/70 p-4 shadow-soft">
                <div className="text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  {metric.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        }
      />

      <section className="section-shell pt-0">
        <div className="container-page">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Experiments</span>
              </div>
              <h2 className="section-heading mt-6">Three surfaces, one corpus.</h2>
            </div>
            <p className="lead-copy max-w-2xl text-muted-foreground lg:justify-self-end">
              The lab is anchored to the blog archive and the site’s own structure. Every feature
              exposes something that can be inspected, not just admired.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {LAB_EXPERIMENTS.map((experiment) => (
              <Link key={experiment.title} href={experiment.href} className="group block">
                <Surface
                  variant="outline"
                  className="flex h-full flex-col gap-6 p-6 transition-all group-hover:-translate-y-1 group-hover:border-primary/25"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <FlaskConical className="h-6 w-6" />
                    </div>
                    <Badge variant={statusStyles[experiment.status]}>
                      {experiment.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground group-hover:text-primary">
                      {experiment.title}
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">{experiment.description}</p>
                  </div>
                  <div className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-foreground">
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
          <Surface variant="outline" className="grid gap-8 p-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-4">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Recent signals</span>
              </div>
              <h2 className="section-heading">The current archive is the lab substrate.</h2>
              <p className="lead-copy text-muted-foreground">
                These are the newest posts and the content themes they reinforce. The lab pages
                use the same archive to drive graph nodes, search results, and architecture notes.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {recentPosts.map((post) => (
                  <Card key={post.slug} className="border-border/70 bg-card/80">
                    <CardHeader className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {(post.categories || []).slice(0, 2).map((category) => (
                          <Badge key={category} variant="outline" className="text-[10px] uppercase tracking-[0.16em]">
                            {category}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-xl tracking-[-0.03em]">{post.title}</CardTitle>
                      <CardDescription>{post.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between border-t border-border/70 bg-muted/20 pt-4">
                      <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {post.readingTime} min read
                      </span>
                      <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                        Read
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-6 shadow-soft">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Themes in focus
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {topCategories.map((category) => (
                    <Badge key={category} variant="info" className="text-[10px] uppercase tracking-[0.16em]">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-border/70 bg-muted/20 p-6 shadow-soft">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  What the lab proves
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                  <li>• The site can expose its own structure as a feature.</li>
                  <li>• Blog content becomes data for search, graphing, and navigation.</li>
                  <li>• Prototype surfaces can still be legible and useful.</li>
                </ul>
              </div>
            </div>
          </Surface>
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
              <h2 className="section-heading">The code should remain inspectable.</h2>
              <p className="lead-copy max-w-2xl">
                The lab points back to the same GitHub account that holds the rest of the work.
                The point is clarity: what is experimental, what is stable, and what is still being
                assembled.
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
        body="The lab shows the path from prototype to structure. If you need that path operationalized, I can help."
        buttonText="Start a project"
        buttonUrl="/contact"
      />
    </>
  );
}
