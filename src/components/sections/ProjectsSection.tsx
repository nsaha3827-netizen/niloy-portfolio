"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import {ExternalLink, Sparkles } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PROJECTS, PROJECT_CATEGORIES } from "@/lib/data";
import { FaGithub } from "react-icons/fa";
function ProjectCard({
  project,
  delay,
}: {
  project: (typeof PROJECTS)[0];
  delay: number;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay, duration: 0.45 }}
      className="glass rounded-2xl overflow-hidden card-hover group"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-[#0d0f1e]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f1e] via-transparent to-transparent" />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-[#6c63ff]/80 backdrop-blur-sm text-[10px] font-mono text-white">
            <Sparkles size={8} />
            Featured
          </div>
        )}

        {/* Category tag */}
        <div className="absolute bottom-3 left-3">
          <span className="tech-tag">{project.category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-semibold text-[#eef0ff] text-base mb-2 group-hover:text-[#8b85ff] transition-colors">
          {project.title}
        </h3>
        <p className="text-xs text-[#9196b5] leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="tech-tag">+{project.tags.length - 4}</span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg glass border border-[#1e2240] text-xs text-[#9196b5] hover:text-[#8b85ff] hover:border-[#6c63ff]/40 transition-all duration-200 flex-1 justify-center"
          >
            <FaGithub size={13} />
            GitHub
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#6c63ff]/15 border border-[#6c63ff]/30 text-xs text-[#8b85ff] hover:bg-[#6c63ff]/25 transition-all duration-200 flex-1 justify-center"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          ) : (
            <span className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#1e2240]/50 text-xs text-[#5a5f7a] flex-1 justify-center cursor-not-allowed">
              <ExternalLink size={13} />
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" ref={ref} className="py-24">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <SectionLabel>Projects</SectionLabel>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#eef0ff] mb-3">
            Work That <span className="gradient-text">Speaks Data</span>
          </h2>
          <p className="text-[#9196b5] text-sm max-w-md mx-auto">
            Real projects across BI, ML, SQL, and Excel — each built to answer a business question
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#6c63ff] text-white shadow-accent"
                  : "glass border border-[#1e2240] text-[#9196b5] hover:text-white hover:border-[#6c63ff]/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={i * 0.06}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-[#5a5f7a] py-16 text-sm">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
