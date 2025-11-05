"use client";
import { useEffect, useRef } from "react";

export function AuroraCareerBackGround() {
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

    const particles = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.8,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    let t = 0;
    let raf: number;

    const draw = () => {
      if (!canvasRef.current) return;

      t += 0.01;

      // Darker base
      ctx.fillStyle = "#0a0a0aff"; // deep black-purple base
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle aurora
      const gradient = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.4,
        50,
        canvas.width * 0.5,
        canvas.height * 0.4,
        canvas.width * 0.8
      );

      gradient.addColorStop(0, "rgba(10, 2, 20, 0.25)");
      gradient.addColorStop(0.3, "rgba(90, 30, 200, 0.18)");
      gradient.addColorStop(0.6, "rgba(40, 10, 120, 0.1)");
      gradient.addColorStop(1, "rgba(0,0,0,0.95)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Particles - dimmer, subtle glow
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(108, 30, 211, 0.4)";
        ctx.fill();
      });

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
