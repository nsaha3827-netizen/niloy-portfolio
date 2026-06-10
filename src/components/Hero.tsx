"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6">
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
        className="max-w-3xl text-center text-gray-400 mt-8 text-lg"
      >
        Transforming raw data into actionable business insights using SQL,
        Python, Power BI, Excel and Machine Learning.
      </motion.p>
      <div className="flex gap-4 mt-10">
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
    </section>
  );
}