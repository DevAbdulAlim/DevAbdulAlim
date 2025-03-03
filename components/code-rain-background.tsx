"use client";

import { useEffect, useRef } from "react";

export function CodeRainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]()=+-*&^%$#@!".split("");
    const columns = canvas.width / 20;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    let frameCount = 0;
    const frameDelay = 5;

    const draw = () => {
      frameCount++;

      if (frameCount >= frameDelay) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "rgba(59, 130, 246, 0.5)";
        ctx.font = "15px monospace";

        for (let i = 0; i < drops.length; i++) {
          const text =
            characters[Math.floor(Math.random() * characters.length)];
          ctx.fillText(text, i * 20, drops[i] * 20);

          if (drops[i] * 20 > canvas.height && Math.random() > 0.99) {
            drops[i] = 0;
          }

          drops[i]++;
        }

        frameCount = 0;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
}
