"use client";

import { motion } from "framer-motion";

export default function Metrics() {
  const stats = [
    { number: "1M+", label: "Records Analyzed" },
    { number: "50+", label: "Dashboards Built" },
    { number: "20+", label: "Projects Completed" },
    {number: "1", label: "Freelance Clients" },
    { number: "1", label: "Internship" },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-blue-400">
                {item.number}
              </h3>

              <p className="text-gray-400 mt-2">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}