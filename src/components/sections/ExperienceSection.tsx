"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, CheckCircle } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EXPERIENCE } from "@/lib/data";

function TimelineCard({
  exp,
  idx,
  isInView,
}: {
  exp: (typeof EXPERIENCE)[0];
  idx: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: idx * 0.15, duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
      className="relative flex gap-6 items-start"
    >
      {/* Timeline dot + line */}
      <div className="flex flex-col items-center pt-1 flex-shrink-0">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center z-10"
          style={{
            background: `${exp.color}18`,
            border: `2px solid ${exp.color}50`,
          }}
        >
          <Briefcase size={16} style={{ color: exp.color }} />
        </div>
        {idx < EXPERIENCE.length - 1 && (
          <div
            className="w-0.5 flex-1 mt-2 min-h-[60px]"
            style={{
              background: `linear-gradient(to bottom, ${exp.color}40, transparent)`,
            }}
          />
        )}
      </div>

      {/* Card */}
      <div className="glass-light rounded-2xl p-6 flex-1 mb-8 card-hover">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                style={{
                  background: `${exp.color}15`,
                  color: exp.color,
                  border: `1px solid ${exp.color}30`,
                }}
              >
                {exp.type}
              </span>
            </div>
            <h3 className="font-display font-semibold text-[#eef0ff] text-base">
              {exp.role}
            </h3>
            <p className="text-sm text-[#9196b5]">{exp.company}</p>
          </div>
          <span className="text-xs font-mono text-[#5a5f7a] bg-[#1e2240]/60 px-3 py-1 rounded-full whitespace-nowrap">
            {exp.period}
          </span>
        </div>

        <p className="text-sm text-[#9196b5] leading-relaxed mb-4">
          {exp.description}
        </p>

        <ul className="space-y-2">
          {exp.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-[#9196b5]">
              <CheckCircle
                size={13}
                className="mt-0.5 flex-shrink-0"
                style={{ color: exp.color }}
              />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <SectionLabel>Experience</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#eef0ff]">
            My <span className="gradient-text">Analytics Journey</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {EXPERIENCE.map((exp, idx) => (
            <TimelineCard key={exp.id} exp={exp} idx={idx} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
