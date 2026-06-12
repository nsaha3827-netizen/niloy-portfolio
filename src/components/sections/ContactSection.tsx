"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {Mail, MapPin, Send } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PERSONAL } from "@/lib/data";

const CONTACT_CARDS = [
  {
    icon: Mail,
    label: "Email",
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    color: "#6c63ff",
    cta: "Send a message",
  },
  {
    icon: Mail,
    label: "LinkedIn",
    value: "niloysaha-analyst",
    href: PERSONAL.linkedin,
    color: "#22d3ee",
    cta: "Connect on LinkedIn",
  },
  {
    icon: Mail,
    label: "GitHub",
    value: "nsaha3827-netizen",
    href: PERSONAL.github,
    color: "#a78bfa",
    cta: "View repositories",
  },
];
export function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="py-24 bg-[#07080f]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <SectionLabel>Contact</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#eef0ff] mb-3">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-[#9196b5] text-sm max-w-md mx-auto">
            Open to Data Analyst, MIS Executive, and BI Developer roles. Drop me a
            message and I&apos;ll respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start max-w-4xl mx-auto">
          {/* Contact info cards */}
          <div className="space-y-4">
            {CONTACT_CARDS.map((card, i) => (
              <motion.a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 p-4 glass rounded-xl border border-[#1e2240] hover:border-[#6c63ff]/30 transition-all duration-200 group card-hover"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${card.color}15`,
                    border: `1px solid ${card.color}30`,
                  }}
                >
                  <card.icon size={16} style={{ color: card.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-mono text-[#5a5f7a] uppercase tracking-widest">
                    {card.label}
                  </div>
                  <div className="text-sm font-medium text-[#eef0ff] truncate">
                    {card.value}
                  </div>
                </div>
                <span
                  className="text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                  style={{ color: card.color }}
                >
                  {card.cta} →
                </span>
              </motion.a>
            ))}

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3 px-4 py-3"
            >
              <MapPin size={14} className="text-[#5a5f7a]" />
              <span className="text-sm text-[#9196b5]">{PERSONAL.location}</span>
            </motion.div>
          </div>

          {/* Quick message form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="glass rounded-2xl p-6 border border-[#1e2240]"
          >
            <h3 className="font-display font-semibold text-[#eef0ff] mb-5 text-sm">
              Send a Quick Message
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
                const body = encodeURIComponent(`Hi Niloy,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);
                window.open(`mailto:${PERSONAL.email}?subject=${subject}&body=${body}`);
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-[#5a5f7a] mb-1 block font-mono">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-[#0d0f1e] border border-[#1e2240] rounded-xl px-3 py-2 text-sm text-[#eef0ff] placeholder:text-[#5a5f7a] focus:outline-none focus:border-[#6c63ff]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#5a5f7a] mb-1 block font-mono">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-[#0d0f1e] border border-[#1e2240] rounded-xl px-3 py-2 text-sm text-[#eef0ff] placeholder:text-[#5a5f7a] focus:outline-none focus:border-[#6c63ff]/50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-[#5a5f7a] mb-1 block font-mono">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Hi Niloy, I'd like to discuss..."
                  className="w-full bg-[#0d0f1e] border border-[#1e2240] rounded-xl px-3 py-2 text-sm text-[#eef0ff] placeholder:text-[#5a5f7a] focus:outline-none focus:border-[#6c63ff]/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#6c63ff] text-white text-sm font-medium hover:bg-[#7c74ff] shadow-accent transition-all duration-200"
              >
                <Send size={14} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
