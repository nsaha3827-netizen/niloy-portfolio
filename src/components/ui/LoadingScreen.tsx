"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "backOut" }}
              className="relative"
            >
              <div className="w-16 h-16 rounded-2xl border border-[#6c63ff]/40 flex items-center justify-center bg-[#0d0f1e] shadow-[0_0_40px_rgba(108,99,255,0.3)]">
                <span className="text-2xl font-bold font-display gradient-text">
                  NS
                </span>
              </div>
              <motion.div
                className="absolute inset-0 rounded-2xl border border-[#6c63ff]/60"
                animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
            </motion.div>

            {/* Progress bar */}
            <div className="w-48 h-0.5 bg-[#1e2240] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#6c63ff] to-[#22d3ee]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xs text-[#5a5f7a] font-mono tracking-widest uppercase"
            >
              Loading Portfolio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
