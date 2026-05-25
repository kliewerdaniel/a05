import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { CTASection } from "@/components/sections/cta-section";
import { ResourcesGrid } from "@/components/sections/resources-grid";

export const metadata: Metadata = {
  title: "Resources",
  description: "Practical guides, templates, and tools drawn from Daniel Kliewer's AI work.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Useful guides without the noise."
        description="Practical resources pulled from the way I actually work: systems, workflows, and process."
        primaryAction={{ label: "Book a call", href: "/contact" }}
        secondaryAction={{ label: "Read the blog", href: "/blog" }}
      />

      <section className="section-shell pt-0">
        <div className="container-page">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Library</span>
              </div>
              <h2 className="section-heading mt-6">Downloadable assets and templates.</h2>
            </div>
            <p className="lead-copy max-w-2xl text-muted-foreground lg:justify-self-end">
              A small library of practical material. Free items can capture email, while premium
              resources are positioned as future offers.
            </p>
          </div>

          <div className="mt-12">
            <ResourcesGrid />
          </div>
        </div>
      </section>

      <CTASection
        headline="Need guidance instead of a download?"
        body="Book a call and get a clear recommendation for your specific constraints."
        buttonText="Book a call"
        buttonUrl="/contact"
      />
    </>
  );
}
