import { getDB, ok, err } from "@/lib/api-helpers";
import { getAllServices } from "@/lib/db";

export async function GET() {
  try {
    const db    = getDB();
    const items = await getAllServices(db);
    return ok(items);
  } catch { return err("Failed to load services", 500); }
}
