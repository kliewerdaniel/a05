"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import type { BlogPost } from "@/types";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Surface } from "@/components/ui/surface";

interface BlogPreviewProps {
  posts: BlogPost[];
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  const recent = posts.slice(0, 3);

  return (
    <section className="section-shell">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <FadeIn className="max-w-2xl">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              <span>Writing</span>
            </div>
            <h2 className="section-heading mt-6">Technical essays, systems notes, and field reports.</h2>
            <p className="lead-copy mt-5">
              The archive is treated as a product surface: readable, structured, and easy to scan on
              mobile without sacrificing depth.
            </p>
          </FadeIn>

          <Surface variant="outline" className="p-6">
            <p className="text-sm leading-7 text-muted-foreground">
              Recent writing covers local model deployment, knowledge systems, evaluation
              workflows, and the engineering tradeoffs that matter in production.
            </p>
          </Surface>
        </div>

        <StaggerContainer className="mt-12 grid gap-5 lg:grid-cols-3">
          {recent.map((post, index) => (
            <StaggerItem key={post.slug}>
              <Card
                className={index === 0 ? "group h-full border-primary/20 bg-card/90 lg:col-span-2" : "group h-full bg-card/80"}
              >
                <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
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

                  <CardContent className="flex-1">
                    <CardDescription className="text-base leading-7">
                      {post.description}
                    </CardDescription>
                  </CardContent>

                  <CardFooter className="flex items-center justify-between border-t border-border/70 bg-muted/30 pt-5">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{post.readingTime} min read</span>
                    </div>
                    <span className="text-sm font-medium text-foreground transition-transform group-hover:translate-x-1">
                      Read article
                    </span>
                  </CardFooter>
                </Link>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg" asChild className="h-12 px-6">
            <Link href="/blog">
              Browse all writing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
