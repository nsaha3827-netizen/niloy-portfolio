"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Retail Sales & Inventory Analysis",
      tech: "PostgreSQL",
      description:
        "Analyzed 1M+ records across 50+ stores and identified stockout and overstock patterns.",
      github: "https://github.com/nsaha3827-netizen",
    },
    {
      title: "Customer Segmentation (RFM Analysis)",
      tech: "Python",
      description:
        "Segmented 4300+ customers using RFM scoring and behavioral analytics.",
      github: "https://github.com/nsaha3827-netizen",
    },
    {
      title: "E-Commerce Sales Analysis",
      tech: "MySQL + Power BI",
      description:
        "Analyzed $2.42M revenue and identified customer retention opportunities.",
      github: "https://github.com/nsaha3827-netizen",
    },
    {
      title: "Executive Sales Dashboard",
      tech: "Power BI",
      description:
        "Built executive dashboards with YoY growth, MoM trends and KPI reporting.",
      github: "https://github.com/nsaha3827-netizen",
    },
    {
      title: "Retail Sales Analysis",
      tech: "Excel",
      description:
        "Created interactive dashboards tracking sales, profit and inventory performance.",
      github: "https://github.com/nsaha3827-netizen",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300"
            >
              <div className="mb-4">
                <span className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-400">
                  {project.tech}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-6 bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-xl font-medium transition-all">
                  View on GitHub →
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}