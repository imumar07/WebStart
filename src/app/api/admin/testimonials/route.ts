import { NextRequest } from "next/server";
import { getDB, ok, err } from "@/lib/api-helpers";
import { getAllTestimonials, createTestimonial } from "@/lib/db";

export async function GET() {
  try {
    const db = getDB();
    const items = await getAllTestimonials(db);
    return ok(items);
  } catch { return err("Failed to load testimonials", 500); }
}

export async function POST(req: NextRequest) {
  try {
    const db   = getDB();
    const body = await req.json();
    const { author_name, author_role, company, avatar_url, content, rating, service_tag, is_active, sort_order } = body;
    if (!author_name || !author_role || !content) return err("author_name, author_role, content are required", 400);
    await createTestimonial(db, {
      author_name, author_role,
      company:     company     ?? null,
      avatar_url:  avatar_url  ?? null,
      content,
      rating:      Number(rating ?? 5),
      service_tag: service_tag ?? null,
      is_active:   Number(is_active ?? 1),
      sort_order:  Number(sort_order ?? 0),
    });
    return ok({ message: "Created" }, 201);
  } catch { return err("Failed to create testimonial", 500); }
}
