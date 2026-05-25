import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Surface } from "@/components/ui/surface";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Deep technical writing on AI systems, local LLMs, evaluation workflows, and production infrastructure.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <PageHeader
        eyebrow="Writing"
        title="Technical essays and production notes."
        description="A structured archive of local-first AI infrastructure, implementation details, and the engineering tradeoffs behind the systems."
        primaryAction={{ label: "Browse the archive", href: "#archive" }}
        secondaryAction={{ label: "Read a featured article", href: featured ? `/blog/${featured.slug}` : "/contact" }}
      />

      {featured && (
        <section className="section-shell pt-0">
          <div className="container-page">
            <Surface variant="glass" className="grid gap-8 p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
              <div className="space-y-4">
                <div className="eyebrow">
                  <span className="eyebrow-dot" />
                  <span>Featured article</span>
                </div>
                <h2 className="section-heading">{featured.title}</h2>
                <p className="lead-copy">{featured.description}</p>
                <Button asChild className="h-12 px-6">
                  <Link href={`/blog/${featured.slug}`}>
                    Read featured piece
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Card className="h-full border-border/70 bg-card/80">
                <CardHeader className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {(featured.categories || []).slice(0, 2).map((category) => (
                      <Badge key={category} variant="outline">
                        {category}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-2xl tracking-[-0.03em]">{featured.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-7">{featured.description}</CardDescription>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{featured.readingTime} min read</span>
                    <span>·</span>
                    <span>{new Date(featured.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                  </div>
                </CardContent>
              </Card>
            </Surface>
          </div>
        </section>
      )}

      <section id="archive" className="section-shell pt-0">
        <div className="container-page">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Archive</span>
              </div>
              <h2 className="section-heading mt-6">Recent and notable writing.</h2>
            </div>
            <p className="lead-copy max-w-2xl text-muted-foreground lg:justify-self-end">
              This list is intentionally dense. Readers should be able to scan for relevance without
              losing the signal.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="mt-12 rounded-[1.5rem] border border-border/70 bg-card/80 p-10 text-center text-muted-foreground shadow-soft">
              No posts available yet.
            </div>
          ) : (
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {rest.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <Card className="h-full border-border/70 bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lift">
                    <CardHeader className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {(post.categories || []).slice(0, 2).map((category) => (
                          <Badge key={category} variant="outline" className="text-[10px] uppercase tracking-[0.18em]">
                            {category}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-2xl leading-tight tracking-[-0.03em] group-hover:text-primary">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-sm leading-7">{post.description}</CardDescription>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{post.readingTime} min read</span>
                        <span>·</span>
                        <span>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="border-t border-border/70 bg-muted/30 pt-5">
                      <span className="text-sm font-medium text-foreground transition-transform group-hover:translate-x-1">
                        Read article
                      </span>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
