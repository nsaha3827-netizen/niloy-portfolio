"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { NAV_LINKS, PERSONAL } from "@/lib/data";
import { DarkModeToggle } from "@/components/ui/DarkModeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.classList.add("mobile-nav-open");
    else document.body.classList.remove("mobile-nav-open");
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass border-b border-[#1e2240]/80 py-3" : "py-5"
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#6c63ff]/15 border border-[#6c63ff]/30 flex items-center justify-center group-hover:bg-[#6c63ff]/25 transition-colors">
              <span className="text-xs font-bold font-display text-[#8b85ff]">NS</span>
            </div>
            <span className="font-display font-semibold text-[#eef0ff] text-sm hidden sm:block">
              Niloy Saha
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? "text-[#8b85ff] bg-[#6c63ff]/10"
                    : "text-[#9196b5] hover:text-[#eef0ff] hover:bg-[#1e2240]/50"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + mobile menu */}
          <div className="flex items-center gap-3">
            <DarkModeToggle />
            <a
              href={PERSONAL.resumeFile}
              download
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-[#6c63ff]/15 border border-[#6c63ff]/30 text-[#8b85ff] hover:bg-[#6c63ff]/25 hover:border-[#6c63ff]/50 transition-all duration-200"
            >
              <Download size={12} />
              Resume
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg glass border border-[#1e2240] text-[#9196b5] hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-0 right-0 z-40 glass border-b border-[#1e2240] p-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-2.5 text-sm text-[#9196b5] hover:text-white hover:bg-[#6c63ff]/10 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={PERSONAL.resumeFile}
                download
                className="mt-2 flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg bg-[#6c63ff]/15 border border-[#6c63ff]/30 text-[#8b85ff]"
              >
                <Download size={14} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
