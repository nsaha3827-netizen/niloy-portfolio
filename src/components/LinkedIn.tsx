"use client";

import { motion } from "framer-motion";

export default function LinkedIn() {
  const posts = [
    {
      src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7510752399452737536?collapsed=1",
      height: 566,
      title: "Latest LinkedIn Post",
      postUrl:
        "https://www.linkedin.com/feed/update/urn:li:ugcPost:7510752399452737536/",
    },
    {
      src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7510000468010450944?collapsed=1",
      height: 633,
      title: "LinkedIn Post",
      postUrl:
        "https://www.linkedin.com/feed/update/urn:li:share:7510000468010450944/",
    },
    {
      src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7505906830221619202?collapsed=1",
      height: 546,
      title: "LinkedIn Post",
      postUrl:
        "https://www.linkedin.com/feed/update/urn:li:share:7505906830221619202/",
    },
  ];

  return (
    <section
      id="linkedin"
      className="py-24 px-6 bg-black/85 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent"
        >
          LinkedIn Activity
        </motion.h2>

        {/* Section Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-14"
        >
          My latest insights, projects, and updates from LinkedIn.
        </motion.p>

        {/* LinkedIn Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.src}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-4 hover:border-blue-500 transition-all duration-300 overflow-hidden"
            >
              {/* LinkedIn Embed */}
              <div className="bg-black/30 rounded-2xl overflow-hidden">
                <iframe
                  src={post.src}
                  height={post.height}
                  width="504"
                  frameBorder="0"
                  allowFullScreen
                  title={post.title}
                  className="w-full rounded-2xl"
                />
              </div>

              {/* View Post Button */}
              <div className="flex justify-center mt-5">
                <a
                  href={post.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-xl font-medium transition-all"
                >
                  View This Post on LinkedIn →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LinkedIn Profile Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://www.linkedin.com/in/niloysaha-analyst/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-medium transition-all"
          >
            View My LinkedIn Profile →
          </a>
        </motion.div>

      </div>
    </section>
  );
}