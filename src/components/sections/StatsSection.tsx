"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { STATS } from "@/lib/data";

function StatCard({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value]);

  const displayValue =
    value >= 1000000
      ? `${(count / 1000000).toFixed(1)}M`
      : value >= 1000
      ? `${(count / 1000).toFixed(1)}K`
      : count;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="text-center"
    >
      <div className="text-3xl sm:text-4xl font-display font-bold gradient-text mb-1">
        {displayValue}
        {suffix}
      </div>
      <div className="text-xs text-[#9196b5] font-mono tracking-wide uppercase">
        {label}
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 border-y border-[#1e2240]/50">
      <div
        ref={ref}
        className="section-container"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="glass rounded-2xl border border-[#1e2240] px-8 py-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-[#1e2240]">
            {STATS.map((stat, i) => (
              <StatCard
                key={i}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={i * 0.08}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
