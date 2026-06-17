"use client";
import { Suspense, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { m } from "framer-motion";
import { Zap, KeyRound, Eye, EyeOff, CheckCircle } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

function ResetForm() {
  const router   = useRouter();
  const params   = useSearchParams();
  const token    = params.get("token") ?? "";

  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");
  const [done, setDone]       = useState(false);
  const [showPw, setShowPw]   = useState(false);

  if (!token) {
    return (
      <div className="glass-strong rounded-2xl p-8 border border-white/10 text-center space-y-4">
        <p className="text-red-400 text-sm">Invalid reset link. Please request a new one.</p>
        <Link href="/portal/forgot-password" className="text-purple-400 hover:text-purple-300 text-sm transition-colors">
          Request new link →
        </Link>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(""); setLoading(true);
    const fd = new FormData(e.currentTarget);
    const password = fd.get("password") as string;
    const confirm  = fd.get("confirm") as string;

    if (password !== confirm) {
      setError("Passwords do not match");
      setLoading(false); return;
    }

    try {
      const res  = await fetch("/api/portal/reset-password", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const json = await res.json();
      if (json.success) setDone(true);
      else setError(json.error ?? "Something went wrong");
    } catch { setError("Network error. Try again."); }
    finally { setLoading(false); }
  };

  if (done) {
    return (
      <div className="glass-strong rounded-2xl p-8 border border-white/10 text-center space-y-5">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto"
          style={{ background: "linear-gradient(135deg,#059669,#10b981)" }}>
          <CheckCircle className="w-7 h-7 text-white" />
        </div>
        <div>
          <h2 className="font-display font-bold text-white text-xl mb-2">Password updated!</h2>
          <p className="text-gray-400 text-sm">You can now sign in with your new password.</p>
        </div>
        <Button className="w-full justify-center" onClick={() => router.push("/portal/login")}>
          Go to Sign In
        </Button>
      </div>
    );
  }

  return (
    <div className="glass-strong rounded-2xl p-8 border border-white/10">
      <h1 className="font-display font-bold text-white text-2xl mb-1 text-center">Set new password</h1>
      <p className="text-gray-500 text-sm text-center mb-7">Choose a strong password for your account</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Input name="password" type={showPw ? "text" : "password"} label="New Password"
            placeholder="Min 8 characters" required minLength={8} autoComplete="new-password" />
          <button type="button" className="absolute right-3 bottom-3 text-gray-500 hover:text-gray-300 transition-colors"
            onClick={() => setShowPw(v => !v)}>
            {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        <Input name="confirm" type={showPw ? "text" : "password"} label="Confirm Password"
          placeholder="Repeat password" required minLength={8} autoComplete="new-password" />
        {error && (
          <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{error}</div>
        )}
        <Button type="submit" loading={loading} className="w-full justify-center mt-2" icon={<KeyRound className="w-4 h-4" />}>
          Update Password
        </Button>
      </form>
    </div>
  );
}

export default function ResetPasswordPage() {
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
        <Suspense fallback={<div className="glass-strong rounded-2xl p-8 border border-white/10 h-64 animate-pulse" />}>
          <ResetForm />
        </Suspense>
        <p className="text-center text-gray-700 text-xs mt-4">
          <Link href="/" className="hover:text-gray-500 transition-colors">← Back to website</Link>
        </p>
      </m.div>
    </div>
  );
}
