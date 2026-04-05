"use client";

import { useEffect, useRef, useState } from "react";
import { CMD_COMMANDS } from "@/lib/utils";
import { triggerMatrix } from "@/components/effects/MatrixRain";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onOpen = () => {
      setOpen(true);
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("open-cmd", onOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("open-cmd", onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const filtered = CMD_COMMANDS.filter(
    (c) =>
      !query ||
      c.key.includes(query.toLowerCase()) ||
      c.label.toLowerCase().includes(query.toLowerCase())
  );

  const run = (cmd: (typeof CMD_COMMANDS)[0]) => {
    setOpen(false);
    if (cmd.key === "/evolve") {
      triggerMatrix();
      return;
    }
    document
      .getElementById(cmd.section)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[500] flex items-start justify-center"
      style={{
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(4px)",
        paddingTop: "15vh",
      }}
      onClick={(e) => e.target === e.currentTarget && setOpen(false)}
    >
      <div
        className="w-full max-w-[600px] mx-4 overflow-hidden rounded-sm"
        style={{
          background: "#0F0F0F",
          border: "1px solid rgba(0,242,255,0.3)",
          boxShadow: "0 0 60px rgba(0,242,255,0.1)",
        }}
      >
        {/* Input */}
        <div
          className="flex items-center gap-4 px-6 py-4"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          <span className="font-mono text-sm" style={{ color: "#00F2FF" }}>
            ❯
          </span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command... /join /events /team"
            className="flex-1 bg-transparent outline-none font-mono text-sm"
            style={{
              color: "#E8E8E8",
              caretColor: "#00F2FF",
              border: "none",
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && filtered[0]) run(filtered[0]);
            }}
          />
          <span
            className="font-mono text-xs px-2 py-1 rounded-sm"
            style={{
              color: "#666",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            ESC
          </span>
        </div>

        {/* Results */}
        <div className="py-2">
          {filtered.map((cmd) => (
            <button
              key={cmd.key}
              onClick={() => run(cmd)}
              className="w-full flex items-center gap-4 px-6 py-3 text-left transition-colors duration-150 font-mono text-sm"
              style={{
                color: "#888",
                background: "transparent",
                border: "none",
                cursor: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(0,242,255,0.05)";
                (e.currentTarget as HTMLElement).style.color = "#E8E8E8";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLElement).style.color = "#888";
              }}
            >
              <span style={{ color: "#00F2FF" }}>{cmd.key}</span>
              {cmd.label}
            </button>
          ))}

          {/* Always show evolve */}
          <button
            onClick={() => { setOpen(false); triggerMatrix(); }}
            className="w-full flex items-center gap-4 px-6 py-3 text-left transition-colors duration-150 font-mono text-sm"
            style={{ color: "#888", background: "transparent", border: "none", cursor: "none" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(0,242,255,0.05)";
              (e.currentTarget as HTMLElement).style.color = "#E8E8E8";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#888";
            }}
          >
            <span style={{ color: "#7000FF" }}>/evolve</span>
            Initiate the matrix
          </button>
        </div>

        <div
          className="px-6 py-2 font-mono text-[10px]"
          style={{
            color: "#444",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          ↑↓ navigate · ENTER select · ESC close · try typing &quot;evolve&quot; anywhere
        </div>
      </div>
    </div>
  );
}
