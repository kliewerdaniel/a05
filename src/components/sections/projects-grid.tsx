"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Github } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Surface } from "@/components/ui/surface";
import type { Project } from "@/types";

const DEFAULT_FILTER = "All";

function projectCategories(projects: Project[]) {
  return [DEFAULT_FILTER, ...new Set(projects.map((project) => project.category))];
}

export function ProjectsGrid({ projects = PROJECTS }: { projects?: Project[] }) {
  const categories = useMemo(() => projectCategories(projects), [projects]);
  const [activeCategory, setActiveCategory] = useState(DEFAULT_FILTER);

  const visibleProjects =
    activeCategory === DEFAULT_FILTER
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="section-shell pt-0">
      <div className="container-page">
        <Surface variant="outline" className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Featured projects</span>
              </div>
              <div className="space-y-3">
                <h2 className="section-heading">Selected GitHub work, organized by theme.</h2>
                <p className="lead-copy text-muted-foreground">
                  These are the repositories that best represent the actual stack: local-first AI,
                  orchestration, research tools, content systems, and infrastructure.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const active = category === activeCategory;
                return (
                  <Button
                    key={category}
                    type="button"
                    variant={active ? "primary" : "outline"}
                    size="sm"
                    className="rounded-full"
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {visibleProjects.map((project) => (
              <Card
                key={project.slug}
                className="group relative flex h-full flex-col overflow-hidden border-border/70 bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lift"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/80 via-accent/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardHeader className="space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className="text-[10px] uppercase tracking-[0.18em]">
                      {project.category}
                    </Badge>
                    {project.featured && (
                      <Badge className="text-[10px] uppercase tracking-[0.18em]">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-2xl tracking-[-0.03em] group-hover:text-primary">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-7">
                      {project.summary}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 space-y-5">
                  <p className="text-sm leading-7 text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="text-[10px] uppercase tracking-[0.16em]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid gap-2">
                    {project.highlights.slice(0, 3).map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-4 border-t border-border/70 bg-muted/30 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{project.repo}</span>
                    <span className="mx-2">•</span>
                    <span>Open source repository</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button asChild variant="outline" className="group/btn h-11">
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button asChild className="group/btn h-11">
                      <Link href={`/case-studies/${project.slug}`}>
                        Details
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Surface>
      </div>
    </section>
  );
}
