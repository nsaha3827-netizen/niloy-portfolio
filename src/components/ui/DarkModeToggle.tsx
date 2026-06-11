"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = stored ? stored === "dark" : prefersDark !== false;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");

    // Apply light mode CSS overrides
    if (!next) {
      document.documentElement.style.setProperty("--bg", "#f4f5ff");
      document.documentElement.style.setProperty("--surface", "#ffffff");
      document.documentElement.style.setProperty("--border", "#e0e2f0");
      document.documentElement.style.setProperty("--text-primary", "#0d0f1e");
      document.documentElement.style.setProperty("--text-secondary", "#4a4f6a");
      document.body.style.background = "#f4f5ff";
      document.body.style.color = "#0d0f1e";
    } else {
      document.documentElement.style.setProperty("--bg", "#05060f");
      document.documentElement.style.setProperty("--surface", "#0d0f1e");
      document.documentElement.style.setProperty("--border", "#1e2240");
      document.documentElement.style.setProperty("--text-primary", "#eef0ff");
      document.documentElement.style.setProperty("--text-secondary", "#9196b5");
      document.body.style.background = "#05060f";
      document.body.style.color = "#eef0ff";
    }
  };

  if (!mounted) return null;

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.9 }}
      className="w-9 h-9 flex items-center justify-center rounded-xl glass border border-[#1e2240] text-[#9196b5] hover:text-[#8b85ff] hover:border-[#6c63ff]/40 transition-all duration-200"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            <Sun size={15} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            <Moon size={15} />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
