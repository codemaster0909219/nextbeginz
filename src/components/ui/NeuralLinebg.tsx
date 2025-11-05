"use client";
import { useEffect, useRef } from "react";

export function NeuralLineBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    const resize = () => (c.width = innerWidth, c.height = innerHeight);
    resize(); addEventListener("resize", resize);

    let t = 0;
    function animate() {
      t += 0.005;
      ctx.clearRect(0,0,c.width,c.height);
      ctx.strokeStyle = "rgba(180,140,255,0.45)";
      ctx.lineWidth = 1.2;

      for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        for (let x = 0; x < c.width; x++) {
          const y = Math.sin(x * 0.003 + i + t) * 45 + i*50 + c.height/3;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      requestAnimationFrame(animate);
    }
    animate();

    return () => removeEventListener("resize", resize);
  }, []);

  return (
    <canvas ref={ref} className="absolute inset-0 -z-10 opacity-[0.75]" />
  );
}
