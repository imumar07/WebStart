import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getDB } from "@/lib/api-helpers";
import { sendPasswordResetEmail } from "@/lib/resend";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ success: false, error: "Email is required" }, { status: 400 });
    }

    const db     = getDB();
    const client = await db
      .prepare("SELECT id, name FROM clients WHERE email = ? AND status = 'active'")
      .bind(email.toLowerCase().trim())
      .first<{ id: number; name: string }>();

    // Always return success — prevents email enumeration
    if (!client) return NextResponse.json({ success: true });

    // Invalidate existing unused tokens
    await db
      .prepare("UPDATE password_reset_tokens SET used = 1 WHERE client_id = ? AND used = 0")
      .bind(client.id)
      .run();

    const rawToken  = crypto.randomBytes(32).toString("hex");
    const tokenHash = crypto.createHash("sha256").update(rawToken).digest("hex");
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString(); // 1 hour

    await db
      .prepare("INSERT INTO password_reset_tokens (client_id, token_hash, expires_at) VALUES (?, ?, ?)")
      .bind(client.id, tokenHash, expiresAt)
      .run();

    const siteUrl  = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
    const resetUrl = `${siteUrl}/portal/reset-password?token=${rawToken}`;

    await sendPasswordResetEmail({ email: email.toLowerCase().trim(), name: client.name, resetUrl });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("forgot-password error:", err);
    return NextResponse.json({ success: false, error: "Something went wrong. Try again." }, { status: 500 });
  }
}
