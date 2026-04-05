"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pts = useRef<
    { x: number; y: number; vx: number; vy: number; r: number }[]
  >([]);
  const raf = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    mouse.current = { x: W / 2, y: H / 2 };

    const init = () => {
      pts.current = Array.from({ length: 90 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const { x: mx, y: my } = mouse.current;

      for (const p of pts.current) {
        p.x += p.vx + (mx - W / 2) * 0.00005;
        p.y += p.vy + (my - H / 2) * 0.00005;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.fillStyle = "rgba(0,242,255,0.6)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.lineWidth = 1;
      for (let i = 0; i < pts.current.length; i++) {
        for (let j = i + 1; j < pts.current.length; j++) {
          const dx = pts.current[i].x - pts.current[j].x;
          const dy = pts.current[i].y - pts.current[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.globalAlpha = (1 - d / 130) * 0.35;
            ctx.strokeStyle = "#00F2FF";
            ctx.beginPath();
            ctx.moveTo(pts.current[i].x, pts.current[i].y);
            ctx.lineTo(pts.current[j].x, pts.current[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      raf.current = requestAnimationFrame(draw);
    };

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      init();
    };

    const onMouse = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    init();
    draw();
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 1 }}
    />
  );
}
