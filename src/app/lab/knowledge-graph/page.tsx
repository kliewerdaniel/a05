import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { KnowledgeGraphExplorer } from "@/components/lab/knowledge-graph-explorer";
import { CTASection } from "@/components/sections/cta-section";
import { Surface } from "@/components/ui/surface";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Knowledge Graph Explorer",
  description: "Interactive graph visualization of the site’s content ecosystem.",
};

export default function KnowledgeGraphPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        eyebrow="Lab"
        title="Knowledge Graph Explorer"
        description="A graph-based view of the archive. Nodes represent posts, themes, and recurring signals."
        primaryAction={{ label: "Back to lab", href: "/lab" }}
        secondaryAction={{ label: "Open chat sandbox", href: "/lab/chat" }}
      />

      <section className="section-shell pt-0">
        <div className="container-page">
          <KnowledgeGraphExplorer posts={posts} />
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container-page">
          <Surface variant="outline" className="grid gap-6 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Notes</span>
              </div>
              <h2 className="section-heading mt-6">The graph is a navigation layer, not decoration.</h2>
              <p className="lead-copy mt-5 text-muted-foreground">
                It’s built from the same posts that power the blog archive, so the graph is useful
                only if the underlying content stays useful.
              </p>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              Explore the blog
            </Link>
          </Surface>
        </div>
      </section>

      <CTASection
        headline="Need a graph like this for your own corpus?"
        body="The same structure can be adapted for documentation, research notes, or private knowledge systems."
        buttonText="Discuss a project"
        buttonUrl="/contact"
      />
    </>
  );
}
