"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20"
    >
      <motion.div
        className="max-w-5xl w-full"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 md:p-12 hover:border-blue-500 transition-all duration-300">
          <p className="text-gray-300 text-lg md:text-xl leading-9">
            I'm <span className="text-blue-400 font-semibold">Niloy Saha</span>,
            a Data Analyst and Data Science Enthusiast passionate about
            transforming raw data into meaningful business insights.
          </p>

          <p className="text-gray-300 text-lg md:text-xl leading-9 mt-8">
            My expertise includes
            <span className="text-blue-400 font-semibold">
              {" "}SQL, Python, Power BI, Excel, Tableau, MySQL and PostgreSQL
            </span>.
            I enjoy solving business problems through analytics, dashboarding,
            automation and data-driven decision making.
          </p>

          <p className="text-gray-300 text-lg md:text-xl leading-9 mt-8">
            I have worked as a
            <span className="text-blue-400 font-semibold">
              {" "}Business Intelligence Analyst Intern at Webskitters
            </span>
            , where I built KPI dashboards, forecasting solutions and business
            intelligence reports. I have also completed freelance analytics
            projects involving Power BI dashboards, trading analytics and
            automated reporting systems.
          </p>

          <p className="text-gray-300 text-lg md:text-xl leading-9 mt-8">
            My goal is to help organizations make smarter decisions through
            data, analytics and visualization while continuously growing as a
            Data Analyst and future Data Scientist.
          </p>
        </div>
      </motion.div>
    </section>
  );
}