import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#1e2240] bg-[#05060f]">
      <div className="section-container py-8">
        <div className="flex flex-col items-center justify-center gap-3">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#6c63ff]/15 border border-[#6c63ff]/30 flex items-center justify-center">
              <span className="text-xs font-bold text-[#8b85ff]">
                NS
              </span>
            </div>

            <span className="text-sm font-medium text-[#9196b5]">
              Niloy Saha
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#5a5f7a] flex items-center gap-1">
            © 2026 Niloy Saha · Built with
            <Heart size={10} className="text-[#6c63ff]" />
            Next.js & Tailwind CSS
          </p>

        </div>
      </div>
    </footer>
  );
}