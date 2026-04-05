"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (window.scrollY / (el.scrollHeight - el.clientHeight)) * 100;
      setProgress(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2px] z-[1000] pointer-events-none"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, #00F2FF, #7000FF)",
        transition: "width 0.1s linear",
      }}
    />
  );
}
