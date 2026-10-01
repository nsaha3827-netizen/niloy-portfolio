"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "Jio AI Product Strategy & Business Analysis",
      category: "Case Study",
      tech: "Market Research + Product Strategy",
      description:
        "Analysed 7 user segments using 20+ industry and company sources to identify AI adoption barriers and develop product, adoption, monetisation, and pricing strategies.",
      github:
        "https://github.com/nsaha3827-netizen/Jio-AI-Product-Strategy-Case-Study",
    },
    {
      title: "Sales Intelligence & Performance Analytics",
      category: "Project",
      tech: "PostgreSQL + Power BI",
      description:
        "Built an end-to-end PostgreSQL–Power BI pipeline transforming 100K+ orders, 274K+ units, and 5K+ customers into a star-schema model with advanced DAX for KPI, time-series, profitability, and target analysis.",
      github:
        "https://github.com/nsaha3827-netizen/SALES_INTELLIGENCE_ANALYTICS",
    },
    {
      title: "Retail Sales & Inventory Analysis",
      category: "Project",
      tech: "PostgreSQL",
      description:
        "Examined 1M+ records across 50+ stores and 40+ products, identifying revenue concentration, stockout patterns, and overstock risks to support inventory prioritisation.",
      github:
        "https://github.com/nsaha3827-netizen/Retail-Sales-Inventory-Analysis",
    },
    {
      title: "Customer Segmentation Using RFM Analysis",
      category: "Project",
      tech: "Python",
      description:
        "Performed RFM analysis on a 500K+ transaction e-commerce dataset to segment 4,300+ customers into High, Mid, and Low Value tiers after addressing key data-quality issues.",
      github:
        "https://github.com/nsaha3827-netizen/Customer-Segmentation-Using-RFM-Analysis-",
    },
    {
      title: "Executive Sales Analysis Dashboard",
      category: "Project",
      tech: "Power BI",
      description:
        "Developed a centralised Power BI dashboard with 5+ report pages tracking YoY growth, MoM change, and regional contribution, surfacing key sales performance trends.",
      github:
        "https://github.com/nsaha3827-netizen/Sales-Performance-Dashboard-PowerBI",
    },
    {
      title: "Retail Sales Analysis",
      category: "Project",
      tech: "Excel",
      description:
        "Analysed 13.12M+ records across 50 stores and built interactive dashboards tracking sales, profit, inventory, AOV, and category-level performance.",
      github:
        "https://github.com/nsaha3827-netizen/Retail-Sales-Performance-Analysis",
    },
  ];

  const filters = ["All", "Projects", "Case Studies"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          activeFilter === "Case Studies"
            ? project.category === "Case Study"
            : project.category === "Project"
        );

  return (
    <section
      id="projects"
      className="min-h-screen bg-black/70 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold text-center mb-10 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-14 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.35)]"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-blue-500"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
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
              {/* Category + Technology */}
              <div className="mb-4 flex flex-wrap gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    project.category === "Case Study"
                      ? "bg-purple-500/20 text-purple-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {project.category}
                </span>

                <span className="px-3 py-1 rounded-full text-sm bg-white/5 text-gray-400 border border-white/10">
                  {project.tech}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-7">
                {project.description}
              </p>

              {/* GitHub Button */}
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