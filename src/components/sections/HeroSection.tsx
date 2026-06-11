"use client";
import { motion } from "framer-motion";
import { Download, Eye, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { PERSONAL } from "@/lib/data";
import { DataVisualizationScene } from "@/components/three/DataVisualizationScene";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 1, 0.5, 1] },
  }),
};

export function HeroSection() {
  const typedRole = useTypingEffect(PERSONAL.typingRoles, 80, 50, 2200);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Three.js background */}
      <DataVisualizationScene />

      {/* Radial gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(108,99,255,0.12)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(34,211,238,0.07)_0%,transparent_55%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#05060f] to-transparent" />

      {/* Content */}
      <div className="relative z-10 section-container text-center pt-24 pb-16">
        {/* Availability badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#1e2240] mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
          <span className="text-xs text-[#9196b5] font-mono">Available for opportunities</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-4 leading-none"
        >
          <span className="text-[#eef0ff]">Niloy</span>{" "}
          <span className="gradient-text">Saha</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex items-center justify-center gap-2 mb-6 h-10"
        >
          <span className="text-xl sm:text-2xl font-mono text-[#9196b5]">~/</span>
          <span className="text-xl sm:text-2xl font-mono text-[#8b85ff] typing-cursor">
            {typedRole}
          </span>
        </motion.div>

        {/* Sub description */}
        <motion.p
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-xl mx-auto text-[#9196b5] text-base sm:text-lg leading-relaxed mb-10"
        >
          Turning raw datasets into business decisions — with SQL, Power BI,
          Python, and a{" "}
          <span className="text-[#eef0ff]">rigorous analytics mindset.</span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href={PERSONAL.resumeFile}
            download
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-[#6c63ff] text-white font-medium text-sm hover:bg-[#7c74ff] shadow-accent transition-all duration-200 hover:shadow-[0_0_40px_rgba(108,99,255,0.45)]"
          >
            <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            Download Resume
          </a>
          <button
            onClick={scrollToProjects}
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-[#1e2240] text-[#eef0ff] font-medium text-sm hover:border-[#6c63ff]/50 hover:bg-[#6c63ff]/10 transition-all duration-200"
          >
            <Eye size={16} />
            View Projects
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex items-center justify-center gap-4"
        >
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
              className="w-10 h-10 flex items-center justify-center rounded-xl glass border border-[#1e2240] text-[#9196b5] hover:text-[#8b85ff] hover:border-[#6c63ff]/40 transition-all duration-200 hover:shadow-accent-sm"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex flex-col items-center gap-1 text-[#5a5f7a] hover:text-[#9196b5] transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={16} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
