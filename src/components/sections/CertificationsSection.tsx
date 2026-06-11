"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CERTIFICATIONS } from "@/lib/data";

export function CertificationsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" ref={ref} className="py-24 bg-[#07080f]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <SectionLabel>Certifications</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#eef0ff]">
            Credentials &{" "}
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="mt-3 text-[#9196b5] text-sm">
            Structured learning validated by industry credentials
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 card-hover group relative overflow-hidden"
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ background: cert.color }}
              />

              {/* Badge */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 relative"
                style={{
                  background: `${cert.color}18`,
                  border: `2px solid ${cert.color}35`,
                }}
              >
                <span
                  className="font-display font-bold text-sm"
                  style={{ color: cert.color }}
                >
                  {cert.badge}
                </span>
              </div>

              <div className="mb-4">
                <h3 className="font-display font-semibold text-[#eef0ff] text-sm mb-1 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-[#9196b5]">{cert.issuer}</p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#5a5f7a]">
                  {cert.date}
                </span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs transition-colors"
                  style={{ color: `${cert.color}99` }}
                  aria-label={`View ${cert.title} credential`}
                >
                  <Award size={11} />
                  <ExternalLink size={10} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
