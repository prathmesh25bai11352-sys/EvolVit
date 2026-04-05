import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#050505",
        charcoal: "#0F0F0F",
        cyan: "#00F2FF",
        violet: "#7000FF",
        "neon-green": "#00FF88",
        amber: "#FFB800",
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        breathe: "breathe 3s ease infinite",
        "led-blink": "ledBlink 2s ease infinite",
        "scroll-line": "scrollAnim 2s ease infinite",
        "matrix-fall": "matrixFall 1s linear infinite",
      },
      keyframes: {
        breathe: {
          "0%,100%": {
            boxShadow:
              "0 0 20px rgba(0,242,255,0.3), 0 0 60px rgba(0,242,255,0.1)",
          },
          "50%": {
            boxShadow:
              "0 0 40px rgba(0,242,255,0.5), 0 0 80px rgba(0,242,255,0.2)",
          },
        },
        ledBlink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
        scrollAnim: {
          "0%": { opacity: "0", transform: "scaleY(0)" },
          "50%": { opacity: "1", transform: "scaleY(1)" },
          "100%": { opacity: "0", transform: "scaleY(0)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
