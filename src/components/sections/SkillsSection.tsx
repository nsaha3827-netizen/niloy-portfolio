"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart2,
  Database,
  PieChart,
  Wrench,
  type LucideProps,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SKILLS } from "@/lib/data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ICON_MAP: Record<string, React.ComponentType<LucideProps | any>> = {
  BarChart2,
  Database,
  PieChart,
  Wrench,
};

function SkillBar({
  name,
  level,
  color,
  delay,
  isInView,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
  isInView: boolean;
}) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-[#eef0ff] font-medium">{name}</span>
        <span className="text-xs font-mono text-[#5a5f7a]">{level}%</span>
      </div>
      <div className="h-1.5 bg-[#1e2240] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            delay,
            duration: 1.2,
            ease: [0.25, 1, 0.5, 1],
          }}
          style={{
            height: "100%",
            borderRadius: "9999px",
            background: `linear-gradient(90deg, ${color}, ${color}aa)`,
          }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-24 bg-[#07080f]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <SectionLabel>Skills</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#eef0ff]">
            My Technical{" "}
            <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="mt-3 text-[#9196b5] max-w-xl mx-auto text-sm">
            End-to-end data skills — from database querying to visual storytelling
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((category, catIdx) => {
            const Icon = ICON_MAP[category.icon] || BarChart2;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIdx * 0.1, duration: 0.5 }}
                className="glass rounded-2xl p-6 card-hover"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${category.color}15`,
                      border: `1px solid ${category.color}30`,
                    }}
                  >
                    <Icon size={16} style={{ color: category.color }} />
                  </div>
                  <h3 className="font-display font-semibold text-sm text-[#eef0ff]">
                    {category.category}
                  </h3>
                </div>

                {/* Skill bars */}
                <div>
                  {category.skills.map((skill, skillIdx) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={category.color}
                      delay={catIdx * 0.1 + skillIdx * 0.08 + 0.2}
                      isInView={isInView}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
