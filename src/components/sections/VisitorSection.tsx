"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, Globe, Eye, TrendingUp } from "lucide-react";

// Simulated visitor stats — replace with a real API (e.g. Vercel Analytics, Splitbee, or a custom Redis counter)
function useVisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Increment visit count in localStorage as a demo
    // For production: call your analytics API here
    const key = "ns_visit_count";
    const raw = localStorage.getItem(key);
    const current = raw ? parseInt(raw, 10) : 1420;
    const next = current + 1;
    localStorage.setItem(key, String(next));
    setCount(next);
  }, []);

  return count;
}

function AnimatedNum({
  target,
  suffix = "",
  duration = 1600,
  start,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  start: boolean;
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!start || target === 0) return;
    let startTime: number | null = null;
    const raf = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [start, target, duration]);

  const display =
    val >= 1000 ? `${(val / 1000).toFixed(1)}k` : String(val);
  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

const META_STATS = [
  {
    icon: Users,
    label: "Total Visitors",
    baseValue: 1420,
    suffix: "+",
    color: "#6c63ff",
    desc: "Since launch",
  },
  {
    icon: Eye,
    label: "Profile Views",
    baseValue: 3800,
    suffix: "+",
    color: "#22d3ee",
    desc: "LinkedIn + Portfolio",
  },
  {
    icon: Globe,
    label: "Countries Reached",
    baseValue: 12,
    suffix: "",
    color: "#a78bfa",
    desc: "Global footprint",
  },
  {
    icon: TrendingUp,
    label: "GitHub Stars",
    baseValue: 48,
    suffix: "+",
    color: "#34d399",
    desc: "Across projects",
  },
];

export function VisitorSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const liveCount = useVisitorCount();

  const stats = META_STATS.map((s, i) =>
    i === 0 && liveCount ? { ...s, baseValue: liveCount } : s
  );

  return (
    <section ref={ref} className="py-20 border-y border-[#1e2240]/40 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(108,99,255,0.05)_0%,transparent_65%)]" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block font-mono text-xs tracking-[0.2em] uppercase text-[#22d3ee] bg-[#22d3ee]/10 border border-[#22d3ee]/20 px-3 py-1 rounded-full mb-3">
            Live Stats
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#eef0ff]">
            Portfolio{" "}
            <span className="gradient-text">Reach</span>
          </h2>
          <p className="mt-2 text-[#9196b5] text-sm">
            Real-time metrics — updated on every visit
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09, duration: 0.5 }}
              className="glass-light rounded-2xl p-5 text-center relative overflow-hidden group card-hover"
            >
              {/* Glow blob */}
              <div
                className="absolute -top-6 -right-6 w-20 h-20 rounded-full blur-2xl opacity-15 group-hover:opacity-30 transition-opacity"
                style={{ background: stat.color }}
              />

              {/* Icon */}
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{
                  background: `${stat.color}18`,
                  border: `1px solid ${stat.color}30`,
                }}
              >
                <stat.icon size={15} style={{ color: stat.color }} />
              </div>

              {/* Number */}
              <div
                className="font-display font-bold text-2xl sm:text-3xl mb-1"
                style={{ color: stat.color }}
              >
                <AnimatedNum
                  target={stat.baseValue}
                  suffix={stat.suffix}
                  start={isInView}
                  duration={1400 + i * 150}
                />
              </div>

              <div className="text-xs font-medium text-[#eef0ff] mb-0.5">
                {stat.label}
              </div>
              <div className="text-[10px] text-[#5a5f7a] font-mono">
                {stat.desc}
              </div>

              {/* Live pulse for first card */}
              {i === 0 && (
                <div className="flex items-center justify-center gap-1 mt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
                  <span className="text-[9px] font-mono text-[#34d399] uppercase tracking-widest">
                    Live
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
