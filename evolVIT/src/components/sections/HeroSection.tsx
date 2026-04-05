"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const TERMINAL_MSG = "sh run evolve_future.sh";

export default function HeroSection() {
  const [termText, setTermText] = useState("run evolve_future.sh");
  const typing = useRef(false);

  const startTyping = () => {
    if (typing.current) return;
    typing.current = true;
    setTermText("");
    let i = 0;
    const iv = setInterval(() => {
      setTermText(TERMINAL_MSG.slice(0, ++i));
      if (i >= TERMINAL_MSG.length) {
        clearInterval(iv);
        setTimeout(() => {
          setTermText("run evolve_future.sh");
          typing.current = false;
        }, 1800);
      }
    }, 55);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 z-10"
    >
      {/* Eyebrow */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="font-mono text-[11px] tracking-[0.2em] mb-6"
        style={{ color: "#00F2FF", opacity: 0.8 }}
      >
        // VIT Bhopal's Premier Tech Collective — Est. 2024
      </motion.p>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="font-grotesk font-bold leading-[1.05] mb-6"
        style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
      >
        <span className="gradient-text">Evolution isn't a<br />Choice. It's a </span>
        <span className="gradient-text-cyan">Process.</span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-base leading-relaxed mb-10 max-w-[560px]"
        style={{ color: "#999" }}
      >
        EvolVIT: VIT Bhopal's specialized hub for polyglot programming, deep
        research, and technical disruption.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="flex gap-4 flex-wrap justify-center"
      >
        <button
          onClick={() =>
            document
              .getElementById("cta")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-8 py-3 font-grotesk font-semibold text-sm rounded-sm transition-all duration-200"
          style={{
            background: "#00F2FF",
            color: "#000",
            border: "none",
            cursor: "none",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform =
              "translateY(-2px)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "0 0 30px rgba(0,242,255,0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}
        >
          Join the Evolution
        </button>

        <button
          onMouseEnter={(e) => {
            startTyping();
            (e.currentTarget as HTMLElement).style.borderColor = "#00F2FF";
            (e.currentTarget as HTMLElement).style.color = "#00F2FF";
          }}
          className="px-8 py-3 font-mono text-sm rounded-sm transition-all duration-200"
          style={{
            background: "transparent",
            color: "#E8E8E8",
            border: "1px solid rgba(255,255,255,0.2)",
            cursor: "none",
          }}
  
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor =
              "rgba(255,255,255,0.2)";
            (e.currentTarget as HTMLElement).style.color = "#E8E8E8";
          }}
        >
          $ <span>{termText}</span>
          <span className="term-cursor">_</span>
        </button>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div
          className="w-px h-10 scroll-line"
          style={{
            background: "linear-gradient(to bottom, #00F2FF, transparent)",
          }}
        />
      </div>
    </section>
  );
}
