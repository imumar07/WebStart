import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import { getDB } from "@/lib/api-helpers";

export async function POST(req: NextRequest) {
  try {
    const { token, password } = await req.json();

    if (!token || typeof token !== "string") {
      return NextResponse.json({ success: false, error: "Reset token is missing" }, { status: 400 });
    }
    if (!password || typeof password !== "string" || password.length < 8) {
      return NextResponse.json({ success: false, error: "Password must be at least 8 characters" }, { status: 400 });
    }

    const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
    const db        = getDB();

    const row = await db
      .prepare("SELECT id, client_id, expires_at, used FROM password_reset_tokens WHERE token_hash = ?")
      .bind(tokenHash)
      .first<{ id: number; client_id: number; expires_at: string; used: number }>();

    if (!row) {
      return NextResponse.json({ success: false, error: "Invalid or expired reset link" }, { status: 400 });
    }
    if (row.used) {
      return NextResponse.json({ success: false, error: "This reset link has already been used" }, { status: 400 });
    }
    if (new Date(row.expires_at) < new Date()) {
      return NextResponse.json({ success: false, error: "Reset link has expired. Please request a new one." }, { status: 400 });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    await db
      .prepare("UPDATE clients SET password_hash = ?, updated_at = datetime('now') WHERE id = ?")
      .bind(passwordHash, row.client_id)
      .run();

    await db
      .prepare("UPDATE password_reset_tokens SET used = 1 WHERE id = ?")
      .bind(row.id)
      .run();

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("reset-password error:", err);
    return NextResponse.json({ success: false, error: "Something went wrong" }, { status: 500 });
  }
}
