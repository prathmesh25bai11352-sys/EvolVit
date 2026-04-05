"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { STATS } from "@/lib/utils";

function StatCard({
  stat,
  index,
}: {
  stat: (typeof STATS)[0];
  index: number;
}) {
  const [displayed, setDisplayed] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const target = stat.target;
          const suffix = stat.value.replace(/[0-9]/g, "");
          const duration = 1200;
          const start = performance.now();

          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);

            if (stat.short) {
              if (current >= 1000000) setDisplayed("1M" + suffix);
              else if (current >= 1000) setDisplayed(Math.floor(current / 1000) + "K" + suffix);
              else setDisplayed(current + suffix);
            } else {
              setDisplayed(current + suffix);
            }

            if (progress < 1) requestAnimationFrame(tick);
            else setDisplayed(stat.value);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [stat]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      viewport={{ once: true }}
      className="glass-card p-8 text-center transition-all duration-300 group"
      style={{ cursor: "none" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(0,242,255,0.2)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(255,255,255,0.07)";
      }}
    >
      <span
        className="font-grotesk font-bold text-4xl block mb-3"
        style={{ color: "#00F2FF" }}
      >
        {displayed}
      </span>
      <span
        className="font-mono text-[10px] tracking-[0.15em]"
        style={{ color: "#555" }}
      >
        {stat.label}
      </span>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section
      id="stats"
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
        // METRICS.json
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font-grotesk font-bold text-4xl mb-4"
      >
        The Proof
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        viewport={{ once: true }}
        className="text-sm mb-14 max-w-xs mx-auto"
        style={{ color: "#999" }}
      >
        Numbers that speak louder than claims.
      </motion.p>

      <div
        className="grid gap-6 max-w-[900px] mx-auto"
        style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
      >
        {STATS.map((s, i) => (
          <StatCard key={s.label} stat={s} index={i} />
        ))}
      </div>
    </section>
  );
}
