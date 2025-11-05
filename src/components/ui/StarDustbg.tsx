"use client";
import { useEffect, useRef } from "react";

export function StarDustBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    const stars = Array.from({ length: 120 }).map(() => ({
      x: Math.random()*innerWidth,
      y: Math.random()*innerHeight,
      r: Math.random()*1.5 + 0.4,
      s: Math.random()*0.5
    }));

    const resize = () => {(c.width = innerWidth); c.height = innerHeight;};
    resize(); addEventListener("resize", resize);

    function draw(){  
      ctx.clearRect(0,0,c.width,c.height);
      stars.forEach(st=>{
        st.y += st.s;
        if(st.y > c.height) st.y = 0;
        ctx.beginPath();
        ctx.fillStyle = "rgba(200,180,255,0.9)";
        ctx.arc(st.x, st.y, st.r, 0, 2*Math.PI);
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }
    draw();

    return () => removeEventListener("resize", resize);
  }, []);

  return <canvas ref={ref} className="absolute inset-0 z-0 opacity-80" />;
}
