import { NextRequest } from "next/server";
import { getDB, ok, err } from "@/lib/api-helpers";
import { updateTestimonial, deleteTestimonial } from "@/lib/db";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const db   = getDB();
    const body = await req.json();
    await updateTestimonial(db, Number(id), body);
    return ok({ message: "Updated" });
  } catch { return err("Failed to update testimonial", 500); }
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const db = getDB();
    await deleteTestimonial(db, Number(id));
    return ok({ message: "Deleted" });
  } catch { return err("Failed to delete testimonial", 500); }
}
