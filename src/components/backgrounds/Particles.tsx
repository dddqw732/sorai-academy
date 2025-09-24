"use client";

import React, { useEffect, useRef } from "react";

export default function ParticlesBackground({ count = 140 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth * window.devicePixelRatio);
    let height = (canvas.height = window.innerHeight * window.devicePixelRatio);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const particles = Array.from({ length: count }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      a: Math.random() * 0.5 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -5) p.x = window.innerWidth + 5;
        if (p.x > window.innerWidth + 5) p.x = -5;
        if (p.y < -5) p.y = window.innerHeight + 5;
        if (p.y > window.innerHeight + 5) p.y = -5;
        ctx.globalAlpha = p.a;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      width = canvas.width = window.innerWidth * window.devicePixelRatio;
      height = canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none opacity-60"
    />
  );
}











