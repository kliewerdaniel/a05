import Link from "next/link";
import { ArrowRight, Brain, Workflow, Server, Globe, PenLine, Check } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { CTASection } from "@/components/sections/cta-section";
import { SERVICES, ENGAGEMENT_MODELS, FAQS } from "@/lib/constants";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Surface } from "@/components/ui/surface";
import type { Metadata } from "next";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Workflow,
  Server,
  Globe,
  PenLine,
};

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI operations, RLHF, local AI systems, full-stack product delivery, documentation, and research workflows.",
};

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Clarify the constraints, success criteria, and delivery surface. The outcome is a scoped path, not a vague strategy deck.",
  },
  {
    step: "02",
    title: "Architecture",
    description:
      "Design the system, define the stack, and make the tradeoffs explicit before the build begins.",
  },
  {
    step: "03",
    title: "Delivery",
    description:
      "Ship the system, document it, and leave the client with a structure they can actually operate.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What I offer."
        description="A set of practical ways to work together: AI operations, local systems, full-stack delivery, documentation, and research-heavy execution."
        primaryAction={{ label: "Start a conversation", href: "/contact" }}
        secondaryAction={{ label: "Read about me", href: "/about" }}
      />

      <section className="section-shell pt-0">
        <div className="container-page">
          <FadeIn className="grid gap-6 lg:grid-cols-3">
            {process.map((item) => (
              <Surface key={item.step} variant="outline" className="p-6">
                <div className="text-5xl font-semibold tracking-[-0.06em] text-primary/20">
                  {item.step}
                </div>
                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-foreground">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </Surface>
            ))}
          </FadeIn>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container-page">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Offerings</span>
              </div>
              <h2 className="section-heading mt-6">Ways I can contribute to your work.</h2>
            </div>
            <p className="lead-copy max-w-2xl text-muted-foreground lg:justify-self-end">
              Each engagement is shaped around the smallest useful deliverable. The goal is to move
              the work forward, not to fill the page with generic consulting language.
            </p>
          </div>

          <StaggerContainer className="mt-12 space-y-5">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || Brain;
              return (
                <StaggerItem key={service.slug}>
                  <Card
                    id={service.slug}
                    className="overflow-hidden border-border/70 bg-card/85 transition-all duration-300 hover:border-primary/25 hover:shadow-lift"
                  >
                    <div className="grid gap-0 lg:grid-cols-[auto_1fr]">
                      <div className="border-b border-border/70 bg-muted/20 p-6 lg:border-b-0 lg:border-r">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="h-7 w-7" />
                        </div>
                        <div className="mt-6 space-y-2">
                          <Badge variant="outline">{service.price}</Badge>
                          <div className="text-sm text-muted-foreground">{service.timeline}</div>
                        </div>
                      </div>

                      <div className="p-6 lg:p-8">
                        <CardHeader className="p-0">
                          <CardTitle className="text-3xl tracking-[-0.04em]">{service.title}</CardTitle>
                          <CardDescription className="max-w-3xl text-base leading-7">
                            {service.description}
                          </CardDescription>
                        </CardHeader>

                        <CardContent className="p-0 pt-6">
                          <div className="grid gap-3 sm:grid-cols-2">
                            {service.features.map((feature) => (
                              <div key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>

                        <CardFooter className="mt-8 flex flex-col items-start gap-4 border-t border-border/70 px-0 pt-6 sm:flex-row sm:items-center sm:justify-between">
                          <div className="text-sm text-muted-foreground">
                            Scope and timeline are defined up front.
                          </div>
                          <Button variant="outline" asChild className="h-12 px-5">
                            <Link href="/contact">
                              Discuss this offer
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container-page">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Engagement models</span>
              </div>
              <h2 className="section-heading mt-6">Choose the shape of the work.</h2>
            </div>
            <p className="lead-copy max-w-2xl text-muted-foreground lg:justify-self-end">
              These are the practical ways the work is packaged, from a short discovery review to
              ongoing support.
            </p>
          </div>

          <StaggerContainer className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {ENGAGEMENT_MODELS.map((model) => (
              <StaggerItem key={model.name}>
                <Card className="h-full border-border/70 bg-card/80 transition-all hover:border-primary/25 hover:shadow-lift">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-xl tracking-[-0.03em]">{model.name}</CardTitle>
                      <Badge variant="outline" className="shrink-0">
                        {model.duration}
                      </Badge>
                    </div>
                    <div className="text-2xl font-semibold tracking-[-0.04em] text-primary">{model.price}</div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <p className="text-sm leading-7 text-muted-foreground">{model.description}</p>
                    <ul className="space-y-3">
                      {model.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="border-t border-border/70 bg-muted/30 pt-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      Best for: {model.for}
                    </p>
                  </CardFooter>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container-page">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>FAQ</span>
              </div>
              <h2 className="section-heading mt-6">Common questions, answered plainly.</h2>
            </div>
            <p className="lead-copy max-w-2xl text-muted-foreground lg:justify-self-end">
              The site should lower uncertainty quickly. That includes answering the obvious
              questions before a call ever happens.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-[1.5rem] border border-border/70 bg-card/80 shadow-soft transition-all hover:border-primary/25"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-base font-medium tracking-[-0.02em] text-foreground">
                  {faq.q}
                  <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-6 text-sm leading-7 text-muted-foreground">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Not sure which offer fits?"
        body="Book a short call and we’ll decide whether the problem calls for an audit, a sprint, or ongoing support."
        buttonText="Book a call"
        buttonUrl="/contact"
        variant="prominent"
      />
    </>
  );
}
