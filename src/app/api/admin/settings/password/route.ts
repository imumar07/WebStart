import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { getDB, ok, err } from "@/lib/api-helpers";

export async function POST(req: NextRequest) {
  try {
    const { current_password, new_password } = await req.json();
    if (!current_password || !new_password) return err("Both passwords are required", 400);
    if (new_password.length < 8) return err("New password must be at least 8 characters", 400);

    const db    = getDB();
    const admin = await db.prepare("SELECT id, password_hash FROM admin_users LIMIT 1").first<{ id: number; password_hash: string }>();
    if (!admin) return err("Admin not found", 404);

    const valid = await bcrypt.compare(current_password, admin.password_hash);
    if (!valid) return err("Current password is incorrect", 401);

    const hash = await bcrypt.hash(new_password, 12);
    await db.prepare("UPDATE admin_users SET password_hash = ? WHERE id = ?").bind(hash, admin.id).run();

    return ok({ message: "Password updated" });
  } catch {
    return err("Failed to update password", 500);
  }
}
