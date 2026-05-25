"use client";

import { useMemo, useState } from "react";
import { ArrowRight, MessageSquareText, Sparkles } from "lucide-react";
import type { BlogPost } from "@/types";
import { rankLabPosts } from "@/lib/lab";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Surface } from "@/components/ui/surface";

interface ChatSandboxProps {
  posts: BlogPost[];
}

const SUGGESTIONS = [
  "What is local-first AI?",
  "How do you build knowledge graphs?",
  "What work shows your evaluation approach?",
  "Where does sovereignty matter most?",
];

function answerFor(query: string, posts: BlogPost[]) {
  const matches = rankLabPosts(query, posts, 3);

  if (!query.trim()) {
    return {
      heading: "Ask a question about the site.",
      body: "The sandbox searches the blog archive and surfaces the most relevant posts, tags, and descriptions.",
    };
  }

  if (matches.length === 0) {
    return {
      heading: "No strong match yet.",
      body: "Try a different phrase, a topic name, or one of the suggested prompts. The sandbox works best with concrete terms.",
    };
  }

  const top = matches[0];
  const supporting = matches.slice(1).map((match) => match.title).join(" and ");

  return {
    heading: top.title,
    body:
      `Best match: ${top.description}${
        supporting ? ` Supporting material comes from ${supporting}.` : ""
      }`,
  };
}

export function ChatSandbox({ posts }: ChatSandboxProps) {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState("");

  const matches = useMemo(() => rankLabPosts(submitted || query, posts, 4), [query, posts, submitted]);
  const response = useMemo(() => answerFor(submitted || query, posts), [posts, query, submitted]);

  return (
    <Surface variant="outline" className="grid gap-8 p-6 lg:grid-cols-[1fr_0.9fr] lg:p-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              <span>Sandbox</span>
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
              Ask the archive a question.
            </h3>
          </div>
          <Badge variant="success">Local-only</Badge>
        </div>

        <div className="space-y-3 rounded-[1.5rem] border border-border/70 bg-card/80 p-5 shadow-soft">
          <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Query
          </label>
          <textarea
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try: local-first AI, knowledge graphs, evaluation, sovereignty..."
            className="min-h-28 w-full rounded-2xl border border-border/70 bg-background/80 p-4 text-sm leading-6 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/40"
          />
          <div className="flex flex-wrap gap-2">
            {SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => {
                  setQuery(suggestion);
                  setSubmitted(suggestion);
                }}
                className="rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
              >
                {suggestion}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => setSubmitted(query)}
              className="h-11"
              disabled={!query.trim()}
            >
              Search archive
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setQuery("");
                setSubmitted("");
              }}
              className="h-11"
            >
              Clear
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-5 shadow-soft">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <MessageSquareText className="h-4 w-4" />
              Answer
            </div>
            <h4 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-foreground">
              {response.heading}
            </h4>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{response.body}</p>
          </div>

          <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-5 shadow-soft">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <Sparkles className="h-4 w-4" />
              Working set
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {matches.length > 0 ? (
                matches.map((match) => (
                  <Badge key={match.slug} variant="outline" className="text-[10px] uppercase tracking-[0.16em]">
                    {match.title}
                  </Badge>
                ))
              ) : (
                <p className="text-sm leading-7 text-muted-foreground">
                  Results will appear here after a query.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-6 shadow-soft">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Sources
          </div>
          <div className="mt-4 space-y-3">
            {matches.length > 0 ? (
              matches.map((match) => (
                <div key={match.slug} className="rounded-2xl border border-border/70 bg-background/70 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-medium text-foreground">{match.title}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        Score {match.score}
                      </div>
                    </div>
                    <Badge variant="info">{match.categories?.[0] || "Blog"}</Badge>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{match.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {match.reasons.slice(0, 2).map((reason) => (
                      <Badge key={reason} variant="outline" className="text-[10px] uppercase tracking-[0.16em]">
                        {reason}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm leading-7 text-muted-foreground">
                The sandbox ranks posts from the archive once you submit a query.
              </p>
            )}
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-border/70 bg-muted/20 p-6 shadow-soft">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            How it works
          </div>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
            <li>• Queries are matched against titles, descriptions, tags, and article bodies.</li>
            <li>• The strongest sources are surfaced first, with the reasoning shown explicitly.</li>
            <li>• It behaves like a local knowledge assistant, not a black-box chat service.</li>
          </ul>
        </div>
      </div>
    </Surface>
  );
}
