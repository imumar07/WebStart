import { NextRequest } from "next/server";
import { getDB, ok, err } from "@/lib/api-helpers";
import { getAllPortfolioItems, createPortfolioItem } from "@/lib/db";

export async function GET() {
  try {
    const db    = getDB();
    const items = await getAllPortfolioItems(db);
    return ok(items);
  } catch { return err("Failed to load portfolio", 500); }
}

export async function POST(req: NextRequest) {
  try {
    const db   = getDB();
    const body = await req.json();
    const { slug, title, client, category, summary, description, cover_url, live_url, github_url, year, featured, is_published, sort_order, tags, gallery_urls } = body;
    if (!slug || !title || !client || !category || !summary || !description || !cover_url) {
      return err("slug, title, client, category, summary, description, cover_url are required", 400);
    }
    await createPortfolioItem(db, {
      slug, title, client, category, summary, description,
      cover_url,
      live_url:     live_url    ?? null,
      github_url:   github_url  ?? null,
      year:         year        ?? null,
      featured:     Number(featured     ?? 0),
      is_published: Number(is_published ?? 1),
      sort_order:   Number(sort_order   ?? 0),
      tags:         JSON.stringify(tags         ?? []),
      gallery_urls: JSON.stringify(gallery_urls ?? []),
    });
    return ok({ message: "Created" }, 201);
  } catch { return err("Failed to create portfolio item", 500); }
}
