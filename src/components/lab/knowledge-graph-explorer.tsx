"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Network } from "lucide-react";
import type { BlogPost } from "@/types";
import { buildKnowledgeGraph } from "@/lib/lab";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Surface } from "@/components/ui/surface";

interface KnowledgeGraphExplorerProps {
  posts: BlogPost[];
}

const NODE_STYLES: Record<string, string> = {
  hub: "bg-primary text-primary-foreground shadow-glow",
  category: "bg-secondary text-secondary-foreground shadow-soft",
  post: "bg-background text-foreground shadow-soft border border-border/70",
  signal: "bg-accent/15 text-foreground shadow-soft border border-border/70",
};

export function KnowledgeGraphExplorer({ posts }: KnowledgeGraphExplorerProps) {
  const graph = useMemo(() => buildKnowledgeGraph(posts), [posts]);
  const [activeNodeId, setActiveNodeId] = useState(graph.nodes[0]?.id ?? "lab-hub");

  const activeNode = graph.nodes.find((node) => node.id === activeNodeId) ?? graph.nodes[0];
  const connectedIds = new Set([
    ...graph.edges.filter((edge) => edge.from === activeNode?.id).map((edge) => edge.to),
    ...graph.edges.filter((edge) => edge.to === activeNode?.id).map((edge) => edge.from),
    activeNode?.id,
  ]);

  return (
    <Surface variant="outline" className="grid gap-8 p-6 lg:grid-cols-[1.35fr_0.65fr] lg:p-8">
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              <span>Graph</span>
            </div>
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
              Content graph with clickable nodes.
            </h3>
          </div>
          <Badge variant="info">12 nodes</Badge>
        </div>

        <div className="relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-gradient-to-b from-background to-muted/30 p-4 shadow-soft">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,140,255,0.12),transparent_55%)]" />
          <svg
            viewBox="0 0 100 100"
            className="relative h-[34rem] w-full"
            aria-label="Knowledge graph network"
          >
            {graph.edges.map((edge) => {
              const from = graph.nodes.find((node) => node.id === edge.from);
              const to = graph.nodes.find((node) => node.id === edge.to);
              if (!from || !to) return null;

              return (
                <line
                  key={`${edge.from}-${edge.to}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  className={
                    connectedIds.has(from.id) && connectedIds.has(to.id)
                      ? "stroke-primary/60"
                      : "stroke-border/60"
                  }
                  strokeWidth="0.4"
                />
              );
            })}
          </svg>

          {graph.nodes.map((node) => {
            const selected = node.id === activeNodeId;
            const connected = connectedIds.has(node.id);

            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setActiveNodeId(node.id)}
                className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-2 text-left text-xs font-medium transition-all ${
                  NODE_STYLES[node.kind]
                } ${selected ? "scale-110 ring-2 ring-primary ring-offset-2 ring-offset-background" : ""} ${
                  connected ? "opacity-100" : "opacity-60"
                }`}
                style={{ left: `${node.x}%`, top: `${node.y}%`, maxWidth: node.kind === "post" ? "12rem" : "8rem" }}
              >
                <div className="flex items-center gap-2">
                  {node.kind !== "post" && <Network className="h-3.5 w-3.5" />}
                  <span className="truncate">{node.label}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-5">
        <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-6 shadow-soft">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Selected node
          </div>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground">
            {activeNode?.label}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge variant="outline">{activeNode?.kind}</Badge>
            {activeNode?.category && <Badge variant="info">{activeNode.category}</Badge>}
            {typeof activeNode?.count === "number" && (
              <Badge variant="success">{activeNode.count} items</Badge>
            )}
          </div>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{activeNode?.summary}</p>

          {activeNode?.href && (
            <Button asChild className="mt-5 h-11 w-full">
              <Link href={activeNode.href}>
                Open linked post
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>

        <div className="rounded-[1.5rem] border border-border/70 bg-card/80 p-6 shadow-soft">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Connected nodes
          </div>
          <div className="mt-4 space-y-3">
            {graph.nodes
              .filter((node) => connectedIds.has(node.id) && node.id !== activeNode?.id)
              .slice(0, 6)
              .map((node) => (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveNodeId(node.id)}
                  className="flex w-full items-center justify-between rounded-2xl border border-border/70 bg-background/70 px-4 py-3 text-left transition-colors hover:border-primary/30 hover:bg-muted/40"
                >
                  <div>
                    <div className="text-sm font-medium text-foreground">{node.label}</div>
                    <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {node.kind}
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </button>
              ))}
          </div>
        </div>
      </div>
    </Surface>
  );
}
