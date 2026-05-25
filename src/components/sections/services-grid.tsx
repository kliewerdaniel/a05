"use client";

import Link from "next/link";
import { ArrowRight, Brain, Workflow, Server, Globe, PenLine } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { SERVICES } from "@/lib/constants";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Workflow,
  Server,
  Globe,
  PenLine,
};

export function ServicesGrid() {
  return (
    <section className="section-shell relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container-page">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <div className="eyebrow mx-auto">
            <span className="eyebrow-dot" />
            <span>What I offer</span>
          </div>
          <h2 className="section-heading mx-auto mt-6">
            Practical AI work grounded in operations, evaluation, and delivery.
          </h2>
          <p className="lead-copy mx-auto mt-5 max-w-2xl">
            The site should show the breadth of the work: RLHF and evaluation, local systems,
            full-stack builds, documentation, and research-heavy execution.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-14 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] || Brain;
            return (
              <StaggerItem key={service.slug}>
                <Card className="group relative flex h-full flex-col overflow-hidden border-border/70 bg-card/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lift">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/80 via-accent/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-6 w-6" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {service.timeline}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-2xl tracking-[-0.03em] group-hover:text-primary">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-7">
                        {service.description}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {service.features.slice(0, 4).map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-xs text-muted-foreground">+ more detailed implementation scope</li>
                      )}
                    </ul>
                  </CardContent>

                  <CardFooter className="flex items-center justify-between border-t border-border/70 bg-muted/30 pt-5">
                    <div>
                      <div className="text-sm font-medium text-foreground">{service.price}</div>
                      <div className="text-xs text-muted-foreground">Fixed-price engagement</div>
                    </div>
                    <Button variant="outline" asChild className="group/btn h-11">
                      <Link href={`/services#${service.slug}`}>
                        Explore
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild className="h-12 px-6">
            <Link href="/services">
              See the full service model
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
