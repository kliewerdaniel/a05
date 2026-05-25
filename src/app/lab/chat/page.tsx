import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { ChatSandbox } from "@/components/lab/chat-sandbox";
import { CTASection } from "@/components/sections/cta-section";
import { Surface } from "@/components/ui/surface";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "AI Chat Sandbox",
  description: "A local-style archive search experience built from the blog content.",
};

export default function ChatPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader
        eyebrow="Lab"
        title="AI Chat Sandbox"
        description="A retrieval-style interface that answers questions from the archive instead of from a generic model memory."
        primaryAction={{ label: "Back to lab", href: "/lab" }}
        secondaryAction={{ label: "Open knowledge graph", href: "/lab/knowledge-graph" }}
      />

      <section className="section-shell pt-0">
        <div className="container-page">
          <ChatSandbox posts={posts} />
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="container-page">
          <Surface variant="outline" className="grid gap-6 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Behavior</span>
              </div>
              <h2 className="section-heading mt-6">The sandbox is a retrieval surface, not a chatbot costume.</h2>
              <p className="lead-copy mt-5 text-muted-foreground">
                It ranks archive content, explains why it matched, and makes the working set
                visible. That’s the useful part.
              </p>
            </div>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              Use the archive directly
            </Link>
          </Surface>
        </div>
      </section>

      <CTASection
        headline="Need archive search for your own corpus?"
        body="The same pattern can be applied to documentation, research notes, or internal knowledge."
        buttonText="Start a project"
        buttonUrl="/contact"
      />
    </>
  );
}
