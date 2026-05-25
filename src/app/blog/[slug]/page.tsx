import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPostFromSlug } from "@/lib/blog";
import { renderMarkdown } from "@/lib/markdown";
import { CTASection } from "@/components/sections/cta-section";
import { Surface } from "@/components/ui/surface";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostFromSlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostFromSlug(slug);
  if (!post) notFound();

  const html = await renderMarkdown(post.content);
  const relatedPosts = getAllPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .filter(
      (candidate) =>
        candidate.categories.some((category) => post.categories.includes(category)) ||
        candidate.tags.some((tag) => post.tags.includes(tag)),
    )
    .slice(0, 3);

  return (
    <>
      <article className="section-shell pt-28 sm:pt-32 lg:pt-36">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to writing
            </Link>

            <div className="mt-8 space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span>·</span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readingTime} min read
                </span>
              </div>

              <h1 className="display-heading text-balance">{post.title}</h1>

              {post.description && (
                <p className="lead-copy max-w-3xl">{post.description}</p>
              )}

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <section className="section-shell pt-0">
        <div className="container-page">
          <Surface variant="outline" className="mx-auto max-w-4xl p-6 sm:p-8 lg:p-10">
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </Surface>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="section-shell pt-0">
          <div className="container-page">
            <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <div className="eyebrow">
                  <span className="eyebrow-dot" />
                  <span>Related reading</span>
                </div>
                <h2 className="section-heading mt-6">More material with adjacent context.</h2>
              </div>
              <Button asChild variant="outline" className="h-12 px-5">
                <Link href="/blog">
                  All writing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`} className="group block">
                  <Card className="h-full border-border/70 bg-card/80 transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-lift">
                    <CardHeader className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {(related.categories || []).slice(0, 2).map((category) => (
                          <Badge key={category} variant="outline" className="text-[10px] uppercase tracking-[0.18em]">
                            {category}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-xl tracking-[-0.03em] group-hover:text-primary">
                        {related.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-7">{related.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="border-t border-border/70 bg-muted/30 pt-5">
                      <span className="text-sm font-medium text-foreground">Read article</span>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        headline="Building something similar?"
        body="If this article maps to a problem you have, we can turn the pattern into a system."
        buttonText="Start the conversation"
        buttonUrl="/contact"
        variant="subtle"
      />
    </>
  );
}
