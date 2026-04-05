"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative z-10 py-32 px-12 text-center overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "700px",
          height: "350px",
          background:
            "radial-gradient(ellipse, rgba(0,242,255,0.05) 0%, transparent 70%)",
        }}
      />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-[10px] tracking-[0.2em] mb-4"
        style={{ color: "#555" }}
      >
        // NEXT_STEP
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="font-grotesk font-bold leading-tight mb-6"
        style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
      >
        Ready to{" "}
        <span style={{ color: "#00F2FF" }}>Evolve?</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-base mb-12 max-w-sm mx-auto"
        style={{ color: "#999" }}
      >
        Join the collective shaping the future of technology at VIT Bhopal.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
        viewport={{ once: true }}
      >
        <button
          className="btn-breathe font-grotesk font-bold text-base px-12 py-4 rounded-sm transition-transform duration-200"
          style={{
            background: "#00F2FF",
            color: "#000",
            border: "none",
            cursor: "none",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          }}
        >
          Initiate Evolution
        </button>
      </motion.div>

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,242,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,242,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </section>
  );
}
