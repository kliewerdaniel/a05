import Link from "next/link";
import { Github, Twitter, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { CTASection } from "@/components/sections/cta-section";
import { MetricsBar } from "@/components/sections/metrics-bar";
import { SITE, ABOUT_TIMELINE, ABOUT_BELIEFS } from "@/lib/constants";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Surface } from "@/components/ui/surface";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, philosophy, and timeline for Daniel Kliewer's AI infrastructure and systems work.",
};

const socialLinks = [
  { href: SITE.links.github, label: "GitHub", icon: Github },
  { href: SITE.links.twitter, label: "Twitter", icon: Twitter },
  { href: SITE.links.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: SITE.links.youtube, label: "YouTube", icon: Youtube },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Systems engineer, technical writer, and local-first advocate."
        description="I build production AI systems that run on your infrastructure. The work spans knowledge systems, workflow automation, local deployment, and the editorial layer that makes the site worth reading."
        primaryAction={{ label: "Work together", href: "/contact" }}
        secondaryAction={{ label: "Read the blog", href: "/blog" }}
      />

      <MetricsBar />

      <section className="section-shell pt-0">
        <div className="container-page">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Perspective</span>
              </div>
              <h2 className="section-heading mt-6">What I think software should be.</h2>
            </div>
            <p className="lead-copy max-w-2xl text-muted-foreground lg:justify-self-end">
              The work is designed around ownership, clarity, and durability. If a system is not
              understandable, operable, and maintainable, it is not finished.
            </p>
          </div>

          <StaggerContainer className="mt-12 grid gap-5 md:grid-cols-2">
            {ABOUT_BELIEFS.map((belief) => (
              <StaggerItem key={belief.title}>
                <Card className="h-full border-border/70 bg-card/80 transition-all hover:border-primary/25 hover:shadow-lift">
                  <CardHeader>
                    <CardTitle className="text-2xl tracking-[-0.03em] text-primary">
                      {belief.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-7 text-muted-foreground">{belief.desc}</p>
                  </CardContent>
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
                <span>Timeline</span>
              </div>
              <h2 className="section-heading mt-6">The path to the current practice.</h2>
            </div>
            <p className="lead-copy max-w-2xl text-muted-foreground lg:justify-self-end">
              The site needs enough narrative to feel human, but not so much that the page becomes
              self-indulgent.
            </p>
          </div>

          <div className="relative mx-auto mt-12 max-w-4xl">
            <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />
            <div className="space-y-10">
              {ABOUT_TIMELINE.map((item, index) => (
                <div
                  key={`${item.year}-${item.title}`}
                  className={`relative pl-12 md:grid md:grid-cols-2 md:items-start md:gap-8 md:pl-0 ${
                    index % 2 === 0 ? "md:text-right" : "md:col-start-1 md:translate-y-0 md:pl-0"
                  }`}
                >
                  <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2" />
                  <div className={index % 2 === 0 ? "md:pr-10" : "md:pl-10 md:col-start-2"}>
                    <div className="text-sm font-semibold tracking-[0.18em] text-primary">
                      {item.year}
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container-page">
          <Surface variant="outline" className="grid gap-8 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Connect</span>
              </div>
              <h2 className="section-heading mt-6">Find me where the work is documented.</h2>
              <p className="lead-copy mt-5">
                Social links exist for context, but the highest-value conversations usually start
                from email or a project brief.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Button key={link.href} variant="outline" size="icon" asChild className="rounded-full">
                    <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                      <Icon className="h-4.5 w-4.5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </Surface>
        </div>
      </section>

      <CTASection
        headline="Let's build something precise."
        body="If the problem is clear enough to discuss, it is clear enough to start shaping the system."
        buttonText="Work with me"
        buttonUrl="/contact"
        variant="prominent"
      />
    </>
  );
}
