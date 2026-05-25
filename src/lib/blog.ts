import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "@/types";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(".md", ""))
    .sort()
    .reverse();
}

export function getPostFromSlug(slug: string): BlogPost | null {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const file = files.find((f) => f.replace(".md", "") === slug);
  if (!file) return null;

  const source = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { data, content } = matter(source);

  const readingTime = Math.max(
    1,
    Math.ceil(content.split(/\s+/).length / 200),
  );

  return {
    slug: file.replace(".md", ""),
    title: data.title || slug,
    date: data.date ? new Date(data.date).toISOString() : "",
    description: data.description || "",
    tags: data.tags || [],
    categories: data.categories || [],
    content,
    readingTime: data.reading_time || readingTime,
    featured: data.featured || false,
    draft: data.draft || false,
    image: data.image || null,
  };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostFromSlug(slug))
    .filter((p): p is BlogPost => p !== null && !p.draft);

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
