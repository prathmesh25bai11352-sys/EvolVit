"use client";

import { useEffect, useRef } from "react";
import { triggerMatrix } from "./MatrixRain";

export default function EasterEgg() {
  const buffer = useRef("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      buffer.current = (buffer.current + e.key).slice(-6);
      if (buffer.current === "evolve") {
        triggerMatrix();
        buffer.current = "";
      }
    };
    window.addEventListener("keypress", onKey);
    return () => window.removeEventListener("keypress", onKey);
  }, []);

  return null;
}
