"use client";

import { motion } from "framer-motion";

export default function Certificates() {
  const certificates = [
    {
      title: "Data Analytics Professional Training",
      organization: "Webskitters Academy",
      duration: "5 Months",
      date: "June 30, 2026",
      image: "/certificates/data-analytics-training.png",
    },
    {
      title: "Data Analytics Internship",
      organization: "Webskitters Academy",
      duration: "2 Months",
      date: "June 30, 2026",
      image: "/certificates/data-analytics-internship.png",
    },
  ];

  return (
    <section
      id="certificates"
      className="min-h-screen bg-black/70 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden hover:border-blue-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300"
            >

              <div className="bg-white p-4">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-auto rounded-xl"
                />
              </div>

              <div className="p-8">

                <span className="inline-block px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-400 mb-4">
                  Certification
                </span>

                <h3 className="text-2xl font-bold mb-3">
                  {certificate.title}
                </h3>

                <p className="text-gray-400 mb-2">
                  {certificate.organization}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span>{certificate.duration}</span>
                  <span>•</span>
                  <span>{certificate.date}</span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}