import { NextRequest } from "next/server";
import { getDB, ok, err } from "@/lib/api-helpers";
import { updateService } from "@/lib/db";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const db     = getDB();
    const body   = await req.json();
    await updateService(db, Number(id), body);
    return ok({ message: "Updated" });
  } catch { return err("Failed to update service", 500); }
}
