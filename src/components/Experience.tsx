"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Business Intelligence Analyst Intern",
      company: "Webskitters",
      period: "Apr 2026 – May 2026",
      points: [
        "Analyzed 50K+ retail transactions using Power BI and SQL.",
        "Built 3+ KPI dashboards covering sales, inventory and forecasting.",
        "Automated data transformation workflows using Power Query, DAX and Python.",
        "Reduced report preparation time by 60% through automation.",
        "Delivered insights on store performance, revenue trends and demand forecasting.",
      ],
    },
    {
      role: "Freelance Data Analyst / Power BI Developer",
      company: "Self-Employed",
      period: "Jan 2026 – Feb 2026",
      points: [
        "Developed a client-facing trading analytics dashboard.",
        "Created 8+ DAX measures including Win Rate, Risk %, Net P&L and MoM Growth.",
        "Built an automated Excel trading journal with validation and automation.",
        "Reduced manual data entry effort by 70%.",
        "Improved profit-booking consistency by 15%.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-black text-white px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
          Professional Experience
        </h2>

        <div className="relative border-l border-blue-500/30 ml-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 ml-8"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 mt-2"></div>

              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300">
                <p className="text-blue-400 text-sm mb-2">
                  {exp.period}
                </p>

                <h3 className="text-2xl font-bold">
                  {exp.role}
                </h3>

                <p className="text-gray-400 mb-6">
                  {exp.company}
                </p>

                <ul className="space-y-3 text-gray-300">
                  {exp.points.map((point, idx) => (
                    <li key={idx}>
                      • {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}