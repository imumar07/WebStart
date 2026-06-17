import { NextRequest } from "next/server";
import { getDB, ok, err } from "@/lib/api-helpers";
import { updatePortfolioItem, deletePortfolioItem } from "@/lib/db";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const db     = getDB();
    const body   = await req.json();
    // Serialize JSON fields if passed as arrays
    if (Array.isArray(body.tags))         body.tags         = JSON.stringify(body.tags);
    if (Array.isArray(body.gallery_urls)) body.gallery_urls = JSON.stringify(body.gallery_urls);
    await updatePortfolioItem(db, Number(id), body);
    return ok({ message: "Updated" });
  } catch { return err("Failed to update portfolio item", 500); }
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const db = getDB();
    await deletePortfolioItem(db, Number(id));
    return ok({ message: "Deleted" });
  } catch { return err("Failed to delete portfolio item", 500); }
}
