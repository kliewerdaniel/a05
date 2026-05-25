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
  title: "AI Infrastructure & Systems Engineering",
  description:
    "Local-first AI infrastructure, production systems, and technical writing for teams that need control, privacy, and leverage.",
};

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <HeroSection
        headline="Local-first AI infrastructure for teams that need control."
        subheadline="I design and build private AI systems, production interfaces, and technical content with the same constraint every serious product needs: clarity."
        primaryCTA={{ label: "Book a Free Consultation", href: "/contact" }}
        secondaryCTA={{ label: "View Services", href: "/services" }}
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
                  <span>Operating principle</span>
                </div>
                <blockquote className="max-w-3xl text-2xl font-medium tracking-[-0.03em] text-foreground sm:text-3xl">
                  AI infrastructure should be owned, not rented. Local-first, private, and built
                  to last.
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
        headline="Ready to build something precise?"
        body="If you have a project, I can help shape the architecture, define the delivery path, and turn the problem into a system."
        buttonText="Book a Free Consultation"
        buttonUrl="/contact"
        variant="prominent"
        secondaryText="No pressure, no pitch. Just a clear conversation about what the work requires."
      />
    </>
  );
}
