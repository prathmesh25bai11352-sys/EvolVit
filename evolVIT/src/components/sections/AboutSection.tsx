"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

function ServerRack() {
  const units = Array.from({ length: 8 });
  const colors = ["#00FF88", "#00F2FF", "#7000FF", "#FFB800"];

  return (
    <div
      className="w-full h-full grid gap-1 p-8"
      style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
    >
      {units.map((_, i) => (
        <div
          key={i}
          className="server-blink flex flex-col gap-1 p-2 rounded-sm"
          style={{
            background: "#050505",
            border: "1px solid rgba(0,242,255,0.1)",
            animationDelay: `${i * 0.4}s`,
          }}
        >
          <div
            className="w-1 h-1 rounded-full led-blink"
            style={{
              background: colors[i % colors.length],
              animationDelay: `${i * 0.3}s`,
            }}
          />
          <div
            className="w-1 h-1 rounded-full led-blink"
            style={{
              background: colors[(i + 2) % colors.length],
              animationDelay: `${i * 0.5 + 0.2}s`,
            }}
          />
          <div
            className="flex-1 rounded-sm mt-1"
            style={{
              background: `rgba(${i % 2 === 0 ? "0,242,255" : "112,0,255"},0.05)`,
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-10 max-w-[1200px] mx-auto px-12 py-28 grid gap-20 items-center"
      style={{ gridTemplateColumns: "1fr 1fr" }}
    >
      {/* Visual */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative aspect-[4/3] rounded-sm overflow-hidden"
        style={{ border: "1px solid rgba(0,242,255,0.12)" }}
      >
        <div className="absolute inset-0" style={{ background: "#0F0F0F" }}>
          <ServerRack />
        </div>
        {/* scan line overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
          }}
        />
        {/* corner accents */}
        <div
          className="absolute top-2 left-2 w-4 h-4"
          style={{
            borderTop: "1px solid #00F2FF",
            borderLeft: "1px solid #00F2FF",
          }}
        />
        <div
          className="absolute bottom-2 right-2 w-4 h-4"
          style={{
            borderBottom: "1px solid #7000FF",
            borderRight: "1px solid #7000FF",
          }}
        />
      </motion.div>

      {/* Text */}
      <div>
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-mono text-[11px] tracking-[0.2em] mb-4"
          style={{ color: "#7000FF" }}
        >
          // ORIGIN.md
        </motion.p>

        <motion.h2
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-grotesk font-bold text-[2.2rem] leading-[1.2] mb-6"
        >
          Born from<br />Curiosity.
        </motion.h2>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-sm leading-relaxed mb-6"
          style={{ color: "#999" }}
        >
          EvolVIT is more than a collective. We are a sanctuary for those who
          find beauty in a clean pull request and excitement in an unsolved
          theorem.
        </motion.p>

        <motion.blockquote
          custom={3}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-mono text-sm italic my-6 pl-4"
          style={{
            color: "#00F2FF",
            borderLeft: "2px solid #00F2FF",
          }}
        >
          "We don't just learn languages; we speak them."
        </motion.blockquote>

        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-sm leading-relaxed"
          style={{ color: "#999" }}
        >
          From Quantum Computing to Edge AI, from Rust to Prolog — we explore
          the frontiers where theory meets disruption and code becomes craft.
        </motion.p>
      </div>
    </section>
  );
}
