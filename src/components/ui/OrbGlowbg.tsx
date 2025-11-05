"use client";
import { useEffect, useRef } from "react";

export function OrbGlowBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    const resize = () => {(c.width = innerWidth); c.height = innerHeight;};
    resize();
    addEventListener("resize", resize);

    const orbs = [...Array(6)].map(() => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      r: 120 + Math.random() * 100,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      color: `hsla(${260 + Math.random()*40},90%,60%,0.6)`
    }));

    function draw() {
      ctx.clearRect(0,0,c.width,c.height);
      orbs.forEach(o=>{
        o.x += o.dx; o.y += o.dy;
        ctx.beginPath();
        ctx.fillStyle = o.color;
        ctx.filter = "blur(140px)";
        ctx.arc(o.x,o.y,o.r,0,Math.PI*2);
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }
    draw();

    return () => removeEventListener("resize", resize);
  }, []);

  return <canvas ref={ref} className="absolute inset-0 -z-10 opacity-[0.75]" />;
}
