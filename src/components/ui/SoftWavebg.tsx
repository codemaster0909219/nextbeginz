"use client";
import { useRef, useEffect } from "react";

export function SoftWaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const resize = () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
    };
    resize();
    addEventListener("resize", resize);

    let t = 0;
    function draw() {
      t += 0.007;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dark background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#0c0c14");
      gradient.addColorStop(1, "#14141f");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 2;

      for (let i = 0; i < 4; i++) {
        ctx.strokeStyle = `hsla(${280 + i * 10}, 80%, 75%, 0.55)`;
        ctx.beginPath();

        for (let x = 0; x < canvas.width; x++) {
          const y =
            Math.sin(x * 0.002 + t + i) * 40 +
            i * 45 +
            canvas.height / 2.5;
          ctx.lineTo(x, y);
        }

        ctx.stroke();
      }

      requestAnimationFrame(draw);
    }
    draw();
    return () => removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 opacity-95"
    />
  );
}
