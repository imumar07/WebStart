import { NextRequest } from "next/server";
import { getDB, ok, err } from "@/lib/api-helpers";
import { updateBlogPost, deleteBlogPost } from "@/lib/db";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const db     = getDB();
    const body   = await req.json();
    if (Array.isArray(body.tags)) body.tags = JSON.stringify(body.tags);
    // Auto-set published_at when publishing
    if (body.is_published === 1 && !body.published_at) body.published_at = new Date().toISOString();
    if (body.is_published === 0) body.published_at = null;
    await updateBlogPost(db, Number(id), body);
    return ok({ message: "Updated" });
  } catch { return err("Failed to update blog post", 500); }
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const db = getDB();
    await deleteBlogPost(db, Number(id));
    return ok({ message: "Deleted" });
  } catch { return err("Failed to delete blog post", 500); }
}
