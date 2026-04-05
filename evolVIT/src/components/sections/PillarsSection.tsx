"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const PILLARS = [
  {
    icon: "◈",
    title: "Exploration",
    body: "Deep dives into uncharted tech territories — from Quantum Computing to Edge AI. We map the frontiers others haven't reached yet.",
    accentColor: "#00F2FF",
    glowColor: "rgba(0,242,255,0.08)",
    borderHover: "rgba(0,242,255,0.3)",
    tags: ["Quantum", "Edge AI", "ML Research"],
  },
  {
    icon: "⬡",
    title: "Polyglot Mastery",
    body: "Breaking the syntax barrier. Mastering Python, C++, Rust, Prolog, and beyond. Language is no longer a limitation.",
    accentColor: "#7000FF",
    glowColor: "rgba(112,0,255,0.08)",
    borderHover: "rgba(112,0,255,0.3)",
    tags: ["Rust", "C++", "Prolog", "Python"],
  },
  {
    icon: "◉",
    title: "Applied Research",
    body: "Bridging the gap between academic theory and industry-scale implementation. Real solutions for real problems.",
    accentColor: "#ffffff",
    glowColor: "rgba(255,255,255,0.04)",
    borderHover: "rgba(255,255,255,0.2)",
    tags: ["Papers", "Industry", "Prototypes"],
  },
];

function PillarCard({ pillar, index }: { pillar: typeof PILLARS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      viewport={{ once: true }}
      className="glass-card relative overflow-hidden p-10 flex flex-col gap-0 transition-all duration-300"
      style={{
        borderColor: hovered ? pillar.borderHover : "rgba(255,255,255,0.07)",
        boxShadow: hovered ? `0 0 40px ${pillar.glowColor}` : "none",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        cursor: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon */}
      <span className="text-3xl mb-6 block" style={{ color: pillar.accentColor }}>
        {pillar.icon}
      </span>

      {/* Title */}
      <h3
        className="font-grotesk font-semibold text-lg mb-4"
        style={{ color: pillar.accentColor }}
      >
        {pillar.title}
      </h3>

      {/* Body */}
      <p className="text-sm leading-relaxed mb-6" style={{ color: "#888" }}>
        {pillar.body}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {pillar.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] px-2 py-1 rounded-sm"
            style={{
              color: pillar.accentColor,
              background: `${pillar.accentColor}10`,
              border: `1px solid ${pillar.accentColor}25`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Loading bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] transition-all duration-500 ease-out"
        style={{
          width: hovered ? "100%" : "0%",
          background: pillar.accentColor,
        }}
      />
    </motion.div>
  );
}

export default function PillarsSection() {
  return (
    <section
      id="pillars"
      className="relative z-10 py-28 px-12 text-center"
      style={{ background: "#0F0F0F" }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-[10px] tracking-[0.2em] mb-3"
        style={{ color: "#555" }}
      >
        // CORE_MODULES
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font-grotesk font-bold text-4xl mb-4"
      >
        What We Do
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-sm max-w-md mx-auto mb-14"
        style={{ color: "#999" }}
      >
        Three pillars. One mission. Endless potential.
      </motion.p>

      <div
        className="grid gap-6 max-w-[1100px] mx-auto"
        style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
      >
        {PILLARS.map((p, i) => (
          <PillarCard key={p.title} pillar={p} index={i} />
        ))}
      </div>
    </section>
  );
}
