import { HeroSection } from "@/components/sections/hero-section";
import { ServicesGrid } from "@/components/sections/services-grid";
import { MetricsBar } from "@/components/sections/metrics-bar";
import { BlogPreview } from "@/components/sections/blog-preview";
import { CTASection } from "@/components/sections/cta-section";
import { getAllPosts } from "@/lib/blog";
import { HOME_PILLARS } from "@/lib/constants";
import { FadeIn } from "@/components/animations/fade-in";
import { Surface } from "@/components/ui/surface";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daniel Kliewer — Generative AI Generalist",
  description:
    "AI operations, RLHF, local AI systems, and full-stack work shaped by 10+ years of annotation, evaluation, and delivery.",
};

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <HeroSection
        headline="Generative AI generalist, AI ops specialist, and builder of local systems."
        subheadline="I bring 10+ years of data annotation, RLHF, evaluation, local LLM work, and full-stack delivery into one practical offering."
        primaryCTA={{ label: "See what I offer", href: "/services" }}
        secondaryCTA={{ label: "Read about me", href: "/about" }}
      />

      <ServicesGrid />

      <MetricsBar />

      <section className="section-shell">
        <div className="container-page">
          <FadeIn>
            <Surface variant="outline" className="grid gap-6 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="space-y-3">
                <div className="eyebrow">
                  <span className="eyebrow-dot" />
                  <span>What I bring</span>
                </div>
                <blockquote className="max-w-3xl text-2xl font-medium tracking-[-0.03em] text-foreground sm:text-3xl">
                  I turn ambiguous AI work into reliable operations, local systems, and shipped
                  products.
                </blockquote>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[34rem]">
                {HOME_PILLARS.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-border/70 bg-background/70 p-4 shadow-soft"
                  >
                    <div className="text-sm font-semibold text-foreground">{pillar.title}</div>
                    <div className="mt-2 text-sm leading-6 text-muted-foreground">{pillar.description}</div>
                  </div>
                ))}
              </div>
            </Surface>
          </FadeIn>
        </div>
      </section>

      <BlogPreview posts={posts} />

      <CTASection
        headline="Need help turning AI work into something usable?"
        body="If you have a project, I can help define the system, the workflow, and the path to delivery."
        buttonText="Start a conversation"
        buttonUrl="/contact"
        variant="prominent"
        secondaryText="No pitch. Just a direct discussion about the work and whether I’m the right fit."
      />
    </>
  );
}
