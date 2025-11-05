"use client";
import { useEffect, useRef } from "react";

export function BlogGridBackGround() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    let raf: number;

    const draw = () => {
      if (!canvasRef.current) return;
      t += 0.003;

      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const spacing = 40;
      ctx.strokeStyle = "rgba(200,150,255,0.15)";
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      const glowY = canvas.height / 2 + Math.sin(t) * 200;
      const gradient = ctx.createRadialGradient(
        canvas.width/2, glowY, 80,
        canvas.width/2, glowY, 500
      );
      gradient.addColorStop(0, "rgba(170,100,255,0.25)");
      gradient.addColorStop(1, "transparent");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      raf = requestAnimationFrame(draw);
    };

    draw();
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
