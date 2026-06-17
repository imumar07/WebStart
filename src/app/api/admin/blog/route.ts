import { NextRequest } from "next/server";
import { getDB, ok, err } from "@/lib/api-helpers";
import { getAllBlogPosts, createBlogPost } from "@/lib/db";

export async function GET() {
  try {
    const db    = getDB();
    const items = await getAllBlogPosts(db);
    return ok(items);
  } catch { return err("Failed to load blog posts", 500); }
}

export async function POST(req: NextRequest) {
  try {
    const db   = getDB();
    const body = await req.json();
    const { slug, title, excerpt, cover_url, tags, author, mdx_content, reading_time, is_published, published_at, meta_title, meta_desc } = body;
    if (!slug || !title || !excerpt || !mdx_content) return err("slug, title, excerpt, mdx_content are required", 400);
    await createBlogPost(db, {
      slug, title, excerpt,
      cover_url:    cover_url    ?? null,
      tags:         JSON.stringify(tags ?? []),
      author:       author       ?? "The Web Start",
      mdx_content,
      reading_time: reading_time ?? null,
      is_published: Number(is_published ?? 0),
      published_at: is_published ? (published_at ?? new Date().toISOString()) : null,
      meta_title:   meta_title   ?? null,
      meta_desc:    meta_desc    ?? null,
    });
    return ok({ message: "Created" }, 201);
  } catch { return err("Failed to create blog post", 500); }
}
