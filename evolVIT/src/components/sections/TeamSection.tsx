"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TEAM } from "@/lib/utils";

function TeamCard({
  member,
  index,
}: {
  member: (typeof TEAM)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      viewport={{ once: true }}
      className="glass-card p-6 text-center transition-all duration-300 team-card"
      style={{
        borderColor: hovered ? "rgba(0,242,255,0.2)" : "rgba(255,255,255,0.07)",
        boxShadow: hovered ? "0 10px 40px rgba(0,242,255,0.05)" : "none",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        cursor: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Avatar */}
      <div className="relative w-16 h-16 mx-auto mb-4">
        <div
          className="w-full h-full rounded-full flex items-center justify-center font-grotesk font-bold text-lg text-black relative overflow-hidden"
          style={{ background: member.gradient }}
        >
          {member.initials}
          {/* Glitch overlay */}
          <div
            className="glitch-overlay absolute inset-0 rounded-full"
            style={{
              background: member.gradient,
              opacity: hovered ? 0.6 : 0,
              mixBlendMode: "screen",
            }}
          />
        </div>
        {/* Online indicator */}
        <div
          className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 pulse-dot"
          style={{ background: "#00FF88", borderColor: "#050505" }}
        />
      </div>

      <div className="font-grotesk font-semibold text-sm mb-1">
        {member.name}
      </div>
      <div className="font-mono text-[10px] mb-4" style={{ color: "#555" }}>
        // {member.role}
      </div>

      <div className="flex justify-center gap-2">
        <a
          href={member.github}
          className="font-mono text-[10px] px-2 py-1 rounded-sm transition-all duration-200"
          style={{
            color: "#555",
            border: "1px solid rgba(255,255,255,0.08)",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#00F2FF";
            (e.currentTarget as HTMLElement).style.borderColor = "#00F2FF";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#555";
            (e.currentTarget as HTMLElement).style.borderColor =
              "rgba(255,255,255,0.08)";
          }}
        >
          gh
        </a>
        <a
          href={member.linkedin}
          className="font-mono text-[10px] px-2 py-1 rounded-sm transition-all duration-200"
          style={{
            color: "#555",
            border: "1px solid rgba(255,255,255,0.08)",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#00F2FF";
            (e.currentTarget as HTMLElement).style.borderColor = "#00F2FF";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#555";
            (e.currentTarget as HTMLElement).style.borderColor =
              "rgba(255,255,255,0.08)";
          }}
        >
          li
        </a>
      </div>
    </motion.div>
  );
}

function JoinCard({ index }: { index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-sm p-6 text-center transition-all duration-300"
      style={{
        border: `1px dashed ${hovered ? "#7000FF" : "rgba(255,255,255,0.15)"}`,
        boxShadow: hovered ? "0 10px 40px rgba(112,0,255,0.08)" : "none",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        background: "transparent",
        cursor: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="text-3xl mb-3 mt-6 block"
        style={{ color: "#7000FF" }}
      >
        +
      </div>
      <div className="font-grotesk text-sm mb-1" style={{ color: "#888" }}>
        Join the Team
      </div>
      <div className="font-mono text-[10px]" style={{ color: "#7000FF" }}>
        // Open Recruitment
      </div>
      <button
        className="mt-4 font-mono text-[10px] px-3 py-1 rounded-sm transition-all duration-200"
        style={{
          border: "1px solid rgba(112,0,255,0.4)",
          color: "#7000FF",
          background: hovered ? "rgba(112,0,255,0.08)" : "transparent",
          cursor: "none",
        }}
      >
        apply →
      </button>
    </motion.div>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="relative z-10 py-28 px-12 text-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-[10px] tracking-[0.2em] mb-3"
        style={{ color: "#555" }}
      >
        // ARCHITECTS.json
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font-grotesk font-bold text-4xl mb-4"
      >
        The Team
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        viewport={{ once: true }}
        className="text-sm mb-14 max-w-xs mx-auto"
        style={{ color: "#999" }}
      >
        The minds behind the machine.
      </motion.p>

      <div
        className="grid gap-5 max-w-[1100px] mx-auto"
        style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
      >
        {TEAM.map((member, i) => (
          <TeamCard key={member.name} member={member} index={i} />
        ))}
        <JoinCard index={TEAM.length} />
      </div>
    </section>
  );
}
