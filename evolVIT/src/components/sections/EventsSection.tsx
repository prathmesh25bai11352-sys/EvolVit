"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EVENTS } from "@/lib/utils";

function useCountdown(target: Date) {
  const [diff, setDiff] = useState(0);

  useEffect(() => {
    const update = () => setDiff(Math.max(0, target.getTime() - Date.now()));
    update();
    const iv = setInterval(update, 1000);
    return () => clearInterval(iv);
  }, [target]);

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  return { d, h, m, s };
}

function Countdown({ target }: { target: Date }) {
  const { d, h, m, s } = useCountdown(target);
  const units = [
    { val: d, label: "DAYS" },
    { val: h, label: "HRS" },
    { val: m, label: "MIN" },
    { val: s, label: "SEC" },
  ];

  return (
    <div className="text-right">
      <p className="font-mono text-[10px] tracking-widest mb-2" style={{ color: "#00FF88" }}>
        ⬤ NEXT EVENT IN
      </p>
      <div className="flex items-center gap-3">
        {units.map((u, i) => (
          <div key={u.label} className="flex items-center gap-3">
            <div className="text-center">
              <span
                className="font-grotesk font-bold text-2xl block"
                style={{ color: "#00F2FF" }}
              >
                {String(u.val).padStart(2, "0")}
              </span>
              <span className="font-mono text-[9px]" style={{ color: "#555" }}>
                {u.label}
              </span>
            </div>
            {i < 3 && (
              <span className="text-xl mb-4" style={{ color: "#444" }}>
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function EventItem({
  event,
  index,
}: {
  event: (typeof EVENTS)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="flex items-center gap-6 px-8 py-5 transition-colors duration-200"
      style={{
        background: hovered ? "rgba(255,255,255,0.03)" : "transparent",
        cursor: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Status dot */}
      <div
        className="flex-shrink-0 w-2 h-2 rounded-full"
        style={{
          background: event.status === "open" ? "#00FF88" : "#FFB800",
          ...(event.status === "open"
            ? { boxShadow: "0 0 0 0 rgba(0,255,136,0.4)" }
            : {}),
        }}
        {...(event.status === "open" ? { className: "flex-shrink-0 w-2 h-2 rounded-full pulse-dot" } : {})}
      />

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="font-grotesk font-semibold text-sm mb-1 truncate">
          {event.title}
        </div>
        <div className="font-mono text-[10px]" style={{ color: "#555" }}>
          commit {event.hash} · {event.date} · {event.venue}
        </div>
      </div>

      {/* Status badge */}
      <span
        className="font-mono text-[10px] px-3 py-1 rounded-sm flex-shrink-0"
        style={
          event.status === "open"
            ? {
                background: "rgba(0,255,136,0.1)",
                color: "#00FF88",
                border: "1px solid rgba(0,255,136,0.2)",
              }
            : {
                background: "rgba(255,184,0,0.1)",
                color: "#FFB800",
                border: "1px solid rgba(255,184,0,0.2)",
              }
        }
      >
        {event.status === "open" ? "Open for Registration" : "Archive"}
      </span>

      {/* CTA */}
      {event.status === "open" && (
        <button
          className="font-mono text-[10px] px-4 py-2 rounded-sm flex-shrink-0 transition-all duration-200 ml-2"
          style={{
            border: "1px solid #00F2FF",
            color: "#00F2FF",
            background: hovered ? "rgba(0,242,255,0.08)" : "transparent",
            cursor: "none",
          }}
        >
          $ commit —attend
        </button>
      )}
    </motion.div>
  );
}

export default function EventsSection() {
  const nextEvent = EVENTS.find((e) => e.status === "open" && e.targetDate);

  return (
    <section
      id="events"
      className="relative z-10 max-w-[1100px] mx-auto px-12 py-28"
    >
      {/* Header */}
      <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] mb-2" style={{ color: "#555" }}>
            // GIT LOG --events
          </p>
          <h2 className="font-grotesk font-bold text-4xl">Events & Workshops</h2>
        </div>
        {nextEvent?.targetDate && <Countdown target={nextEvent.targetDate} />}
      </div>

      {/* Event list */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="rounded-sm overflow-hidden"
        style={{
          background: "#0F0F0F",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {EVENTS.map((event, i) => (
          <div key={event.id}>
            {i > 0 && (
              <div style={{ height: "1px", background: "rgba(255,255,255,0.04)" }} />
            )}
            <EventItem event={event} index={i} />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
