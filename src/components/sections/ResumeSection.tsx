"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, FileText, Eye } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PERSONAL } from "@/lib/data";

export function ResumeSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="resume" ref={ref} className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <SectionLabel>Resume</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#eef0ff]">
            Download My <span className="gradient-text">Resume</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <div className="glass rounded-3xl p-8 border border-[#1e2240] relative overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#6c63ff]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#22d3ee]/08 rounded-full blur-3xl" />

            <div className="relative flex items-start gap-5">
              {/* File icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#6c63ff]/15 border border-[#6c63ff]/30 flex items-center justify-center flex-shrink-0 float-animation">
                <FileText size={24} className="text-[#8b85ff]" />
              </div>

              <div className="flex-1">
                <h3 className="font-display font-semibold text-[#eef0ff] text-base mb-1">
                  Niloy_Saha_Data_Analyst_Resume.pdf
                </h3>
                <p className="text-xs text-[#9196b5] mb-5">
                  One-page ATS-optimized resume · Updated 2025 · Includes SQL, Python, Power BI projects
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={PERSONAL.resumeFile}
                    download="Niloy_Saha_Data_Analyst_Resume.pdf"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#6c63ff] text-white text-sm font-medium hover:bg-[#7c74ff] shadow-accent transition-all duration-200 flex-1"
                  >
                    <Download size={15} />
                    Download PDF
                  </a>
                  <a
                    href={PERSONAL.resumeFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl glass border border-[#1e2240] text-sm text-[#9196b5] hover:text-white hover:border-[#6c63ff]/30 transition-all duration-200 flex-1"
                  >
                    <Eye size={15} />
                    Preview
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
