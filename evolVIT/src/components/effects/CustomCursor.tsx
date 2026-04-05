"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX - 6}px`;
        dotRef.current.style.top = `${e.clientY - 6}px`;
      }
    };

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x - 20}px`;
        ringRef.current.style.top = `${ring.current.y - 20}px`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.transform = "scale(2.5)";
    };
    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.transform = "scale(1)";
    };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("button, a, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    raf.current = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-3 h-3 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100"
        style={{ background: "#00F2FF", position: "fixed" }}
      />
      <div
        ref={ringRef}
        className="fixed w-10 h-10 rounded-full pointer-events-none z-[9998]"
        style={{
          border: "1px solid rgba(0,242,255,0.4)",
          position: "fixed",
          transition: "none",
        }}
      />
    </>
  );
}
