"use client";

import { useEffect, useRef, useState } from "react";

// Global trigger exposed for Easter egg and command palette
let _trigger: (() => void) | null = null;
export function triggerMatrix() {
  _trigger?.();
}

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(false);
  const raf = useRef<number>(0);

  useEffect(() => {
    _trigger = () => {
      setVisible(true);
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext("2d")!;
      const cols = Math.floor(window.innerWidth / 16);
      const drops = Array(cols).fill(1);
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ΔΨΩπ∞{}[]<>|/\\;:EVOLVIT";
      let frame = 0;

      const draw = () => {
        ctx.fillStyle = "rgba(5,5,5,0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = "14px 'Fira Code', monospace";

        for (let i = 0; i < drops.length; i++) {
          const ch = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillStyle = Math.random() > 0.85 ? "#ffffff" : "#00F2FF";
          ctx.fillText(ch, i * 16, drops[i] * 16);
          if (drops[i] * 16 > canvas.height && Math.random() > 0.975)
            drops[i] = 0;
          drops[i]++;
        }

        frame++;
        if (frame < 200) {
          raf.current = requestAnimationFrame(draw);
        } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          setVisible(false);
        }
      };
      draw();
    };

    return () => {
      _trigger = null;
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[200] pointer-events-none"
      style={{ display: visible ? "block" : "none" }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
