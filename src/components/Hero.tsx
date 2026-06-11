"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden text-white"
    >
      {/* Background Dashboard */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{
          backgroundImage: "url('/dashboard-bg.png')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Blue Glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 blur-[150px] rounded-full" />

      {/* Purple Glow */}
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 blur-[150px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-bold text-center"
        >
          Niloy Saha
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-3xl text-blue-400 mt-4 text-center"
        >
          Data Analyst & Data Science Enthusiast
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-3xl text-center text-gray-300 mt-8 text-lg"
        >
          Transforming raw data into actionable business insights using SQL,
          Python, Power BI, Excel and Machine Learning.
        </motion.p>

        {/* Buttons */}
        <div className="flex gap-4 mt-10 flex-wrap justify-center">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-medium inline-block"
          >
            View Projects
          </a>

          <a
            href="/Niloy saha.pdf"
            download
            className="border border-white px-6 py-3 rounded-xl font-medium hover:bg-white hover:text-black transition"
          >
            Download Resume
          </a>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-16 w-full max-w-5xl">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-400">1M+</h3>
            <p className="text-gray-300 mt-2">Records Analyzed</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-400">30+</h3>
            <p className="text-gray-300 mt-2">Dashboards</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-400">50+</h3>
            <p className="text-gray-300 mt-2">Projects</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-400">1</h3>
            <p className="text-gray-300 mt-2">Internship</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-400">1</h3>
            <p className="text-gray-300 mt-2">Freelance Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}