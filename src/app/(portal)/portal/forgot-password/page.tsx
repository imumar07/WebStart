"use client";
import { useState } from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { Zap, Mail, ArrowLeft } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");
  const [sent, setSent]       = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); setLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res  = await fetch("/api/portal/forgot-password", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) setSent(true);
      else setError(json.error ?? "Something went wrong");
    } catch { setError("Network error. Try again."); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#04040a]">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <m.div className="w-full max-w-sm" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="flex items-center gap-2 justify-center mb-8">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)" }}>
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl text-white">Client <GradientText>Portal</GradientText></span>
        </div>

        <div className="glass-strong rounded-2xl border border-white/10">
          {sent ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto"
                style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)" }}>
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h1 className="font-display font-bold text-white text-xl">Check your inbox</h1>
              <p className="text-gray-400 text-sm">
                If an account exists for that email, we&apos;ve sent a password reset link. It expires in <span className="text-purple-300">1 hour</span>.
              </p>
              <p className="text-gray-500 text-xs">Don&apos;t see it? Check your spam folder.</p>
              <Link href="/portal/login"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium">
                <ArrowLeft className="w-4 h-4" /> Back to sign in
              </Link>
            </div>
          ) : (
            <div className="p-8">
              <h1 className="font-display font-bold text-white text-2xl mb-1 text-center">Forgot password?</h1>
              <p className="text-gray-500 text-sm text-center mb-7">Enter your email and we&apos;ll send a reset link</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input name="email" type="email" label="Email" placeholder="you@company.com" required autoComplete="email" />
                {error && (
                  <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{error}</div>
                )}
                <Button type="submit" loading={loading} className="w-full justify-center mt-2" icon={<Mail className="w-4 h-4" />}>
                  Send reset link
                </Button>
              </form>
            </div>
          )}
        </div>

        <p className="text-center text-gray-500 text-sm mt-5">
          Remember your password?{" "}
          <Link href="/portal/login" className="text-purple-400 hover:text-purple-300 transition-colors">Sign in</Link>
        </p>
        <p className="text-center text-gray-700 text-xs mt-3">
          <Link href="/" className="hover:text-gray-500 transition-colors">← Back to website</Link>
        </p>
      </m.div>
    </div>
  );
}
