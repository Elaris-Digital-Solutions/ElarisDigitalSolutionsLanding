"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface MatrixRainProps {
  fontSize?: number;
  color?: string;
  characters?: string;
  /** Value between 0 and 1 controlling trail fade. */
  fadeOpacity?: number;
  /** Multiplier controlling the falling speed. */
  speed?: number;
  /** Optional CSS class applied to the canvas element. */
  className?: string;
  /** RGB string used to tint the fading background, defaults to site dark blue. */
  backgroundRGB?: string;
}

const MatrixRain: React.FC<MatrixRainProps> = ({
  fontSize = 20,
  color = "#38BDF8", // sky-blue default
  characters = "0123456789",
  fadeOpacity = 0.08,
  speed = 1,
  className,
  backgroundRGB = "3,14,44",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    const ctx = canvas.getContext("2d");
    if (!ctx || !parent) return;

    const resizeCanvas = () => {
      const rect = parent.getBoundingClientRect();
      canvas.width = Math.max(rect.width, 1);
      canvas.height = Math.max(rect.height, 1);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const chars = characters.split("");
    const drops: number[] = [];
    const columnCount = () => Math.floor(canvas.width / fontSize) || 1;

    const initialiseDrops = () => {
      drops.length = columnCount();
      for (let i = 0; i < drops.length; i += 1) {
        drops[i] = Math.random() * -20;
      }
    };

    initialiseDrops();

    let animationFrame: number | null = null;
    let lastDraw = performance.now();

    const targetFPS = 30;
    const frameInterval = 1000 / targetFPS;

    const draw = (now: number) => {
      const delta = now - lastDraw;

      if (delta < frameInterval) {
        animationFrame = requestAnimationFrame(draw);
        return;
      }

      // Adjust for speed but keep within frame budget
      // If speed is high, we might skip some logic updates, but here we just draw

      lastDraw = now - (delta % frameInterval);

      ctx.fillStyle = `rgba(${backgroundRGB}, ${fadeOpacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;

      const cols = columnCount();
      if (drops.length !== cols) {
        initialiseDrops();
      }

      for (let i = 0; i < drops.length; i += 1) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 1;
      }

      animationFrame = requestAnimationFrame(draw);
    };

    animationFrame = requestAnimationFrame(draw);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [fontSize, color, characters, fadeOpacity, speed, backgroundRGB]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 h-full w-full pointer-events-none", className)}
    />
  );
};

export default MatrixRain;
