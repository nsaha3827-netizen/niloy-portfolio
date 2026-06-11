import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Niloy Saha",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#05060f] flex items-center justify-center px-6">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(108,99,255,0.1)_0%,transparent_60%)]" />

      <div className="relative text-center max-w-md">
        {/* Big 404 */}
        <div className="font-display font-bold text-[120px] sm:text-[160px] leading-none gradient-text opacity-20 select-none mb-0">
          404
        </div>

        {/* Card */}
        <div className="glass rounded-3xl p-8 border border-[#1e2240] -mt-8 relative">
          <div className="w-12 h-12 rounded-2xl bg-[#6c63ff]/15 border border-[#6c63ff]/30 flex items-center justify-center mx-auto mb-4">
            <span className="text-lg font-bold font-display text-[#8b85ff]">NS</span>
          </div>
          <h1 className="font-display font-bold text-xl text-[#eef0ff] mb-2">
            Page not found
          </h1>
          <p className="text-sm text-[#9196b5] mb-6 leading-relaxed">
            This page does not exist in my dataset. Let&apos;s get you back to
            something useful.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#6c63ff] text-white text-sm font-medium hover:bg-[#7c74ff] transition-colors shadow-accent"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
