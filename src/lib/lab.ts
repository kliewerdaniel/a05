import type { BlogPost } from "@/types";

export interface LabGraphNode {
  id: string;
  label: string;
  kind: "hub" | "category" | "post" | "signal";
  x: number;
  y: number;
  size: number;
  summary: string;
  href?: string;
  count?: number;
  category?: string;
}

export interface LabGraphEdge {
  from: string;
  to: string;
}

export interface RankedPost extends BlogPost {
  score: number;
  reasons: string[];
}

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function countValues(values: string[]) {
  return values.reduce<Record<string, number>>((accumulator, value) => {
    accumulator[value] = (accumulator[value] || 0) + 1;
    return accumulator;
  }, {});
}

export function getLabMetrics(posts: BlogPost[]) {
  const categories = new Set(posts.flatMap((post) => post.categories || []));
  const tags = new Set(posts.flatMap((post) => post.tags || []));

  return [
    { value: posts.length.toString(), label: "published posts indexed" },
    { value: categories.size.toString(), label: "content categories tracked" },
    { value: tags.size.toString(), label: "tags and signals surfaced" },
  ];
}

export function rankLabPosts(query: string, posts: BlogPost[], limit = 4): RankedPost[] {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) {
    return posts.slice(0, limit).map((post) => ({
      ...post,
      score: 1,
      reasons: ["Recent post"],
    }));
  }

  const queryTerms = normalizedQuery.split(" ").filter(Boolean);

  return posts
    .map((post) => {
      const haystack = normalize(
        [post.title, post.description, post.content, ...(post.tags || []), ...(post.categories || [])]
          .join(" "),
      );

      const reasons: string[] = [];
      let score = 0;

      queryTerms.forEach((term) => {
        const matchCount = haystack.split(term).length - 1;
        if (matchCount > 0) {
          score += matchCount * 3;
          reasons.push(`Matches "${term}"`);
        }
      });

      if (post.title.toLowerCase().includes(normalizedQuery)) {
        score += 10;
        reasons.push("Title match");
      }

      if ((post.tags || []).some((tag) => normalize(tag).includes(normalizedQuery))) {
        score += 6;
        reasons.push("Tag match");
      }

      if ((post.categories || []).some((category) => normalize(category).includes(normalizedQuery))) {
        score += 4;
        reasons.push("Category match");
      }

      return { ...post, score, reasons };
    })
    .filter((post) => post.score > 0)
    .sort((a, b) => b.score - a.score || new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function buildKnowledgeGraph(posts: BlogPost[]) {
  const selectedPosts = posts.slice(0, 12);
  const categoryCounts = countValues(selectedPosts.flatMap((post) => post.categories || []));
  const categoryEntries = Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const nodes: LabGraphNode[] = [
    {
      id: "lab-hub",
      label: "Lab",
      kind: "hub",
      x: 50,
      y: 50,
      size: 26,
      summary: "The lab ties posts, experiments, and architecture notes into a navigable system.",
      count: selectedPosts.length,
    },
  ];

  const edges: LabGraphEdge[] = [];

  categoryEntries.forEach(([category, count], index) => {
    const angle = (Math.PI * 2 * index) / Math.max(1, categoryEntries.length);
    const x = 50 + Math.cos(angle - Math.PI / 2) * 27;
    const y = 50 + Math.sin(angle - Math.PI / 2) * 27;
    const categoryId = `category-${normalize(category).replace(/\s+/g, "-")}`;

    nodes.push({
      id: categoryId,
      label: category,
      kind: "category",
      x,
      y,
      size: 18,
      summary: `${count} posts grouped under ${category}.`,
      count,
    });
    edges.push({ from: "lab-hub", to: categoryId });
  });

  selectedPosts.forEach((post, index) => {
    const primaryCategory = post.categories?.[0] || "Uncategorized";
    const categoryId =
      `category-${normalize(primaryCategory).replace(/\s+/g, "-")}` ||
      "category-uncategorized";

    if (!nodes.some((node) => node.id === categoryId)) {
      nodes.push({
        id: categoryId,
        label: primaryCategory,
        kind: "category",
        x: 50,
        y: 22,
        size: 18,
        summary: `Cluster for ${primaryCategory}.`,
        count: 1,
      });
      edges.push({ from: "lab-hub", to: categoryId });
    }

    const angle = (Math.PI * 2 * index) / Math.max(1, selectedPosts.length);
    const x = 50 + Math.cos(angle) * 40;
    const y = 50 + Math.sin(angle) * 40;
    const nodeId = `post-${post.slug}`;

    nodes.push({
      id: nodeId,
      label: post.title,
      kind: "post",
      x,
      y,
      size: 14,
      summary: post.description,
      href: `/blog/${post.slug}`,
      category: primaryCategory,
    });
    edges.push({ from: categoryId, to: nodeId });
  });

  const signalCounts = countValues(selectedPosts.flatMap((post) => post.tags.slice(0, 2)));
  Object.entries(signalCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .forEach(([signal, count], index) => {
      const x = 50 + (index % 2 === 0 ? -1 : 1) * (22 + index * 5);
      const y = 50 + (index < 2 ? -1 : 1) * (28 + index * 3);
      const nodeId = `signal-${normalize(signal).replace(/\s+/g, "-")}`;

      nodes.push({
        id: nodeId,
        label: signal,
        kind: "signal",
        x,
        y,
        size: 12,
        summary: `${count} post${count === 1 ? "" : "s"} use this signal.`,
        count,
      });
      edges.push({ from: "lab-hub", to: nodeId });
    });

  return { nodes, edges };
}
