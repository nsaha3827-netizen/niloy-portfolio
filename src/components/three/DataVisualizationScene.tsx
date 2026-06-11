"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

interface Node {
  x: number;
  y: number;
  vy: number;
  phase: number;
  size: number;
  color: string;
}

interface Bar {
  x: number;
  targetH: number;
  currentH: number;
  color: string;
}

export function DataVisualizationScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const COLORS = ["#6c63ff", "#22d3ee", "#a78bfa", "#34d399"];

    // Particles
    const particles: Particle[] = Array.from({ length: 120 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.15,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    // Floating nodes
    const nodes: Node[] = Array.from({ length: 8 }, (_, i) => ({
      x: (width / 9) * (i + 1),
      y: Math.random() * height * 0.6 + height * 0.2,
      vy: 0,
      phase: Math.random() * Math.PI * 2,
      size: Math.random() * 6 + 5,
      color: COLORS[i % COLORS.length],
    }));

    // Bar chart
    const barHeights = [0.35, 0.55, 0.28, 0.68, 0.45, 0.72, 0.38];
    const bars: Bar[] = barHeights.map((h, i) => ({
      x: 0,
      targetH: h,
      currentH: 0,
      color: i % 2 === 0 ? "#6c63ff" : "#22d3ee",
    }));

    // Line chart points
    const linePoints = [0.7, 0.5, 0.65, 0.35, 0.55, 0.3, 0.45, 0.25];

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Grid
      ctx.strokeStyle = "rgba(30,34,64,0.5)";
      ctx.lineWidth = 0.5;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
      }

      // Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, "0");
        ctx.fill();
      });

      // Connection lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(108,99,255,${0.12 * (1 - dist / 80)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Bar chart (bottom left)
      const barW = 18;
      const barSpacing = 26;
      const barBase = height - 40;
      const barStartX = 40;
      const maxBarH = height * 0.28;
      bars.forEach((bar, i) => {
        bar.currentH += (bar.targetH * maxBarH - bar.currentH) * 0.04;
        const x = barStartX + i * barSpacing;
        bar.x = x;
        const grad = ctx.createLinearGradient(x, barBase - bar.currentH, x, barBase);
        grad.addColorStop(0, bar.color + "cc");
        grad.addColorStop(1, bar.color + "33");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(x, barBase - bar.currentH, barW, bar.currentH, 3);
        ctx.fill();
      });

      // Line chart (top right)
      const lcW = Math.min(280, width * 0.35);
      const lcH = 80;
      const lcX = width - lcW - 40;
      const lcY = 50;
      if (lcX > 0) {
        ctx.beginPath();
        linePoints.forEach((p, i) => {
          const px = lcX + (i / (linePoints.length - 1)) * lcW;
          const py = lcY + p * lcH + Math.sin(t * 0.8 + i) * 4;
          if (i === 0) { ctx.moveTo(px, py); } else { ctx.lineTo(px, py); }
        });
        const lineGrad = ctx.createLinearGradient(lcX, 0, lcX + lcW, 0);
        lineGrad.addColorStop(0, "#6c63ff");
        lineGrad.addColorStop(1, "#22d3ee");
        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = 2;
        ctx.lineJoin = "round";
        ctx.stroke();

        // Dots on line
        linePoints.forEach((p, i) => {
          const px = lcX + (i / (linePoints.length - 1)) * lcW;
          const py = lcY + p * lcH + Math.sin(t * 0.8 + i) * 4;
          ctx.beginPath();
          ctx.arc(px, py, 3, 0, Math.PI * 2);
          ctx.fillStyle = i % 2 === 0 ? "#6c63ff" : "#22d3ee";
          ctx.fill();
        });
      }

      // Floating diamond nodes
      nodes.forEach((node) => {
        const floatY = node.y + Math.sin(t * 0.6 + node.phase) * 12;
        ctx.save();
        ctx.translate(node.x, floatY);
        ctx.rotate(t * 0.3 + node.phase);
        ctx.beginPath();
        ctx.moveTo(0, -node.size);
        ctx.lineTo(node.size, 0);
        ctx.lineTo(0, node.size);
        ctx.lineTo(-node.size, 0);
        ctx.closePath();
        ctx.fillStyle = node.color + "55";
        ctx.strokeStyle = node.color + "99";
        ctx.lineWidth = 1.5;
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      });

      // Radial glow center
      const grd = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width * 0.4);
      grd.addColorStop(0, "rgba(108,99,255,0.04)");
      grd.addColorStop(1, "rgba(108,99,255,0)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, width, height);

      t += 0.016;
      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full opacity-60" />
    </div>
  );
}
