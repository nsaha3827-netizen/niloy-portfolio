import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { PERSONAL } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[#1e2240] bg-[#05060f]">
      <div className="section-container py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#6c63ff]/15 border border-[#6c63ff]/30 flex items-center justify-center">
              <span className="text-xs font-bold font-display text-[#8b85ff]">NS</span>
            </div>
            <span className="text-sm font-display font-medium text-[#9196b5]">
              Niloy Saha
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#5a5f7a] flex items-center gap-1">
            © 2026 Niloy Saha · Built with{" "}
            <Heart size={10} className="text-[#6c63ff] inline" /> Next.js &
            Tailwind
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { href: PERSONAL.github, icon: Github, label: "GitHub" },
              { href: PERSONAL.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${PERSONAL.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#1e2240] text-[#5a5f7a] hover:text-[#8b85ff] hover:border-[#6c63ff]/40 transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
