"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_ITEMS } from "@/lib/utils";
import { X } from "lucide-react";

const ACCENT_MAP: Record<string, string> = {
  cyan: "rgba(0,242,255,0.06)",
  violet: "rgba(112,0,255,0.06)",
  green: "rgba(0,255,136,0.06)",
  amber: "rgba(255,184,0,0.06)",
  blue: "rgba(0,112,255,0.06)",
};

const BORDER_MAP: Record<string, string> = {
  cyan: "rgba(0,242,255,0.2)",
  violet: "rgba(112,0,255,0.2)",
  green: "rgba(0,255,136,0.2)",
  amber: "rgba(255,184,0,0.2)",
  blue: "rgba(0,112,255,0.2)",
};

function GalleryItem({
  item,
  index,
  onClick,
}: {
  item: (typeof GALLERY_ITEMS)[0];
  index: number;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="rounded-sm overflow-hidden transition-all duration-300 flex items-center justify-center"
      style={{
        background: hovered ? ACCENT_MAP[item.accent] : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? BORDER_MAP[item.accent] : "rgba(255,255,255,0.07)"}`,
        minHeight: item.large ? "320px" : "160px",
        gridColumn: item.large ? "span 2" : item.wide ? "span 2" : "span 1",
        gridRow: item.large ? "span 2" : "span 1",
        boxShadow: hovered ? `0 0 30px ${ACCENT_MAP[item.accent]}` : "none",
        cursor: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="text-center p-6">
        <span className="text-4xl block mb-3" style={{ opacity: hovered ? 0.7 : 0.35, fontSize: item.large ? "3.5rem" : "2.5rem" }}>
          {item.icon}
        </span>
        <div className="font-mono text-[10px]" style={{ color: "#555" }}>
          // {item.caption}
        </div>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-[10px] mt-2"
            style={{ color: BORDER_MAP[item.accent] }}
          >
            click to expand ↗
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function Lightbox({
  item,
  onClose,
}: {
  item: (typeof GALLERY_ITEMS)[0];
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[300] flex items-center justify-center"
        style={{ background: "rgba(5,5,5,0.95)", backdropFilter: "blur(12px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          onClick={(e) => e.stopPropagation()}
          className="max-w-2xl w-full mx-6 rounded-sm overflow-hidden"
          style={{ border: `1px solid ${BORDER_MAP[item.accent]}` }}
        >
          <div
            className="flex items-center justify-center py-20 px-12 text-center"
            style={{ background: ACCENT_MAP[item.accent] }}
          >
            <div>
              <span className="text-8xl block mb-6">{item.icon}</span>
              <div className="font-grotesk font-semibold text-xl mb-3">
                {item.caption}
              </div>
              <div className="font-mono text-[11px]" style={{ color: "#666" }}>
                EvolVIT Archive · VIT Bhopal
              </div>
            </div>
          </div>
          <div
            className="flex items-center justify-between px-6 py-4"
            style={{ background: "#0F0F0F" }}
          >
            <span className="font-mono text-[10px]" style={{ color: "#555" }}>
              // gallery/{item.caption.toLowerCase().replace(/\s+/g, "-")}
            </span>
            <button
              onClick={onClose}
              className="font-mono text-[10px] flex items-center gap-2 transition-colors duration-200"
              style={{ color: "#555", background: "none", border: "none", cursor: "none" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#00F2FF")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#555")
              }
            >
              <X size={12} /> close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function GallerySection() {
  const [selected, setSelected] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  return (
    <section
      id="gallery"
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
        // PULSE.gallery
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font-grotesk font-bold text-4xl mb-4"
      >
        The Pulse
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
        viewport={{ once: true }}
        className="text-sm mb-14 max-w-xs mx-auto"
        style={{ color: "#999" }}
      >
        Captured moments from the forge.
      </motion.p>

      <div
        className="grid gap-3 max-w-[1100px] mx-auto"
        style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
      >
        {GALLERY_ITEMS.map((item, i) => (
          <GalleryItem
            key={i}
            item={item}
            index={i}
            onClick={() => setSelected(item)}
          />
        ))}
      </div>

      {selected && (
        <Lightbox item={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
