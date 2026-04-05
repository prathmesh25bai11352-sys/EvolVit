"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        // dispatch global event
        window.dispatchEvent(new CustomEvent("open-cmd"));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.replace("#", ""))?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-12 py-5 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(5,5,5,0.95)"
          : "rgba(5,5,5,0.6)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      {/* Logo */}
      <div
        className="font-grotesk font-bold text-xl tracking-wide cursor-pointer"
        style={{ color: "#00F2FF" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Evol<span style={{ color: "#7000FF" }}>VIT</span>
      </div>

      {/* Nav links */}
      <ul className="hidden md:flex gap-8 list-none">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <button
              onClick={() => scrollTo(link.href)}
              className="font-mono text-xs tracking-widest transition-colors duration-200"
              style={{ color: "#666", background: "none", border: "none", cursor: "none" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#00F2FF")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#666")
              }
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      {/* CMD button */}
      <button
        onClick={() => window.dispatchEvent(new CustomEvent("open-cmd"))}
        className="font-mono text-xs px-4 py-2 border rounded-sm transition-all duration-200"
        style={{
          borderColor: "rgba(0,242,255,0.4)",
          color: "#00F2FF",
          background: "transparent",
          cursor: "none",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background =
            "rgba(0,242,255,0.08)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "transparent";
        }}
      >
        ⌘K
      </button>
    </nav>
  );
}
