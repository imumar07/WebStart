"use client";
import { useState } from "react";
import { Settings, Lock, User, Building2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { GradientText } from "@/components/ui/GradientText";

function Section({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-2xl border border-white/[0.07] p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 bg-purple-500/15 rounded-xl flex items-center justify-center">
          <Icon className="w-5 h-5 text-purple-400" />
        </div>
        <h2 className="font-semibold text-white">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function SuccessToast({ message }: { message: string }) {
  return (
    <div className="flex items-center gap-2 text-emerald-400 text-sm mt-3">
      <CheckCircle className="w-4 h-4" /> {message}
    </div>
  );
}

export default function SettingsPage() {
  // Change password
  const [pwForm, setPwForm]       = useState({ current: "", newPw: "", confirm: "" });
  const [pwLoading, setPwLoading] = useState(false);
  const [pwError, setPwError]     = useState("");
  const [pwDone, setPwDone]       = useState(false);

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPwError(""); setPwDone(false);
    if (pwForm.newPw !== pwForm.confirm) { setPwError("New passwords do not match"); return; }
    if (pwForm.newPw.length < 8) { setPwError("Password must be at least 8 characters"); return; }
    setPwLoading(true);
    try {
      const res  = await fetch("/api/admin/settings/password", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ current_password: pwForm.current, new_password: pwForm.newPw }),
      });
      const data = await res.json();
      if (data.success) { setPwDone(true); setPwForm({ current: "", newPw: "", confirm: "" }); }
      else setPwError(data.error ?? "Failed to update password");
    } finally { setPwLoading(false); }
  };

  return (
    <div className="p-6 lg:p-8 max-w-[900px]">
      <div className="mb-8">
        <h1 className="font-display font-bold text-2xl text-white mb-1 flex items-center gap-2">
          <Settings className="w-6 h-6 text-purple-400" /> <GradientText>Settings</GradientText>
        </h1>
        <p className="text-gray-500 text-sm">Manage your admin account and preferences</p>
      </div>

      <div className="space-y-6">
        {/* Admin Profile */}
        <Section icon={User} title="Admin Account">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</div>
              <div className="text-white text-sm font-medium">info@thewebstart.in</div>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Role</div>
              <div className="text-white text-sm font-medium">Super Admin</div>
            </div>
          </div>
        </Section>

        {/* Change Password */}
        <Section icon={Lock} title="Change Password">
          <form onSubmit={handlePasswordChange} className="space-y-4 max-w-md">
            <Input label="Current Password" type="password" value={pwForm.current} onChange={e => setPwForm(f => ({ ...f, current: e.target.value }))} required placeholder="••••••••" />
            <Input label="New Password" type="password" value={pwForm.newPw} onChange={e => setPwForm(f => ({ ...f, newPw: e.target.value }))} required placeholder="Min 8 characters" />
            <Input label="Confirm New Password" type="password" value={pwForm.confirm} onChange={e => setPwForm(f => ({ ...f, confirm: e.target.value }))} required placeholder="Repeat new password" />
            {pwError && <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{pwError}</div>}
            {pwDone && <SuccessToast message="Password updated successfully" />}
            <Button type="submit" loading={pwLoading} icon={<Lock className="w-4 h-4" />}>Update Password</Button>
          </form>
        </Section>

        {/* Business Info */}
        <Section icon={Building2} title="Business Info">
          <div className="space-y-3">
            {[
              ["Business Name", "The Web Start"],
              ["Website", "https://thewebstart.in"],
              ["Support Email", "info@thewebstart.in"],
              ["WhatsApp", "+91 63055 35725"],
              ["Location", "India"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between py-2.5 border-b border-white/[0.06] last:border-0">
                <span className="text-gray-500 text-sm">{label}</span>
                <span className="text-white text-sm font-medium">{value}</span>
              </div>
            ))}
            <p className="text-gray-600 text-xs pt-2">To update business info, edit the environment variables and redeploy.</p>
          </div>
        </Section>

        {/* Quick Links */}
        <Section icon={Settings} title="Quick Links">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "Vercel Dashboard",   href: "https://vercel.com/dashboard",       desc: "Deploy, env vars, logs" },
              { label: "Turso Database",     href: "https://app.turso.tech",             desc: "Database studio & settings" },
              { label: "Resend Email",       href: "https://resend.com/dashboard",       desc: "Email logs & API keys" },
              { label: "Razorpay Dashboard", href: "https://dashboard.razorpay.com",     desc: "Payments & settlements" },
              { label: "Cloudflare DNS",     href: "https://dash.cloudflare.com",        desc: "Domain & DNS settings" },
              { label: "GitHub Repo",        href: "https://github.com/Vikaskoppoju/The-Web-Start", desc: "Source code" },
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all">
                <div>
                  <div className="text-white text-sm font-medium group-hover:text-purple-300 transition-colors">{link.label}</div>
                  <div className="text-gray-500 text-xs">{link.desc}</div>
                </div>
                <span className="text-gray-600 group-hover:text-purple-400 transition-colors text-lg">↗</span>
              </a>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
