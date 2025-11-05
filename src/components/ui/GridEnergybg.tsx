"use client";
import { useEffect, useRef } from "react";

export function GridEnergyBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;                     // guard 1

    const ctx = canvas.getContext("2d");
    if (!ctx) return;                        // guard 2

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    window.addEventListener("resize", resize);

    let raf = 0;
    let t = 0;

    const draw = () => {
      t += 0.01;
      // canvas or ctx can be invalid if unmounted in StrictMode
      if (!canvasRef.current || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const spacing = 40;
      ctx.strokeStyle = "rgba(180,120,255,0.25)";
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += spacing) {
        const offset = Math.sin(t + x * 0.01) * 20;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x + offset, canvas.height);
        ctx.stroke();
      }

      ctx.strokeStyle = "rgba(255,100,255,0.4)";
      ctx.beginPath();
      const y = canvas.height * 0.5 + Math.sin(t) * 40;
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 opacity-60"
    />
  );
}