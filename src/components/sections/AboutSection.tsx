"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Briefcase, Code2 } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PERSONAL } from "@/lib/data";

const highlights = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "Mathematics Honours (2024)",
    sub: "West Bengal State University",
    color: "#6c63ff",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kolkata, India",
    sub: "Open to remote & relocation",
    color: "#22d3ee",
  },
  {
    icon: Briefcase,
    label: "Focus",
    value: "Business Intelligence",
    sub: "SQL · Power BI · Python",
    color: "#a78bfa",
  },
  {
    icon: Code2,
    label: "Stack",
    value: "Full Analytics Stack",
    sub: "From raw data to dashboard",
    color: "#34d399",
  },
];

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          >
            <SectionLabel>About Me</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#eef0ff] mb-6 leading-tight">
              Data-driven thinker,{" "}
              <span className="gradient-text">insight-first</span> analyst
            </h2>
            <div className="space-y-4 text-[#9196b5] leading-relaxed">
              <p>{PERSONAL.bio}</p>
              <p>{PERSONAL.bio2}</p>
              <p>
                My foundation in{" "}
                <span className="text-[#eef0ff]">pure mathematics</span> means I
                don&apos;t just use tools — I understand the statistical logic beneath
                them. I look for the{" "}
                <span className="text-[#eef0ff]">why behind the numbers</span>{" "}
                before I build any report or model.
              </p>
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#6c63ff]/15 border border-[#6c63ff]/30 text-[#8b85ff] text-sm font-medium hover:bg-[#6c63ff]/25 transition-all duration-200"
              >
                View LinkedIn →
              </a>
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl glass border border-[#1e2240] text-[#9196b5] text-sm font-medium hover:text-white hover:border-[#6c63ff]/30 transition-all duration-200"
              >
                View GitHub →
              </a>
            </div>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="glass-light rounded-2xl p-5 card-hover"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
                >
                  <item.icon size={16} style={{ color: item.color }} />
                </div>
                <div className="text-[10px] font-mono text-[#5a5f7a] uppercase tracking-widest mb-1">
                  {item.label}
                </div>
                <div className="text-sm font-semibold text-[#eef0ff] mb-0.5">
                  {item.value}
                </div>
                <div className="text-xs text-[#5a5f7a]">{item.sub}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
