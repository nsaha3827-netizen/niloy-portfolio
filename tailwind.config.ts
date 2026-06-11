import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05060f",
        surface: "#0d0f1e",
        surfaceAlt: "#111427",
        border: "#1e2240",
        accent: {
          DEFAULT: "#6c63ff",
          light: "#8b85ff",
          glow: "rgba(108,99,255,0.35)",
        },
        cyan: {
          accent: "#22d3ee",
          glow: "rgba(34,211,238,0.25)",
        },
        text: {
          primary: "#eef0ff",
          secondary: "#9196b5",
          muted: "#5a5f7a",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-mesh":
          "radial-gradient(at 20% 30%, rgba(108,99,255,0.15) 0px, transparent 50%), radial-gradient(at 80% 70%, rgba(34,211,238,0.10) 0px, transparent 50%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
        float: "float 6s ease-in-out infinite",
        pulse_slow: "pulse 4s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        shimmer: "shimmer 2.5s infinite",
        "cursor-glow": "cursorGlow 0.1s ease",
      },
      keyframes: {
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backdropBlur: { xs: "2px" },
      boxShadow: {
        glass: "0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        accent: "0 0 40px rgba(108,99,255,0.25)",
        "accent-sm": "0 0 20px rgba(108,99,255,0.15)",
        cyan: "0 0 40px rgba(34,211,238,0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
