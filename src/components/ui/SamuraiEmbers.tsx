"use client";

import React, { useEffect, useRef } from "react";

/**
 * SamuraiEmbers
 * A canvas-based animation of falling petals/embers to create a 'Samurai' vibe.
 * Styled in Orange to match the portfolio theme (looking like fire embers or autumn leaves).
 */
export const SamuraiEmbers = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const setSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    setSize();

    // Particle Configuration
    const particles: { 
        x: number; 
        y: number; 
        speedY: number; 
        speedX: number;
        size: number; 
        rotation: number; 
        rotationSpeed: number;
        opacity: number;
    }[] = [];
    
    const particleCount = 50; // Not too crowded, just atmospheric

    const createParticle = (initialY?: number) => ({
      x: Math.random() * width,
      y: initialY !== undefined ? initialY : Math.random() * -height, // Start above screen/scattered
      speedY: 1 + Math.random() * 1.5, // Fall speed
      speedX: 0.5 + Math.random() * 1, // Wind drift to right
      size: 4 + Math.random() * 6,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      opacity: 0.1 + Math.random() * 0.4,
    });

    // Initialize
    for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle(Math.random() * height)); // Start scattered
    }

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((p) => {
        // Update physics
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.01) * 0.5; // Sine wave wind sway
        p.rotation += p.rotationSpeed;

        // Reset if out of bounds
        if (p.y > height + 20 || p.x > width + 20) {
          Object.assign(p, createParticle());
        }

        // Draw Petal
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        
        // Gradient for "glowing ember" look
        const gradient = ctx.createLinearGradient(0, -p.size, 0, p.size);
        gradient.addColorStop(0, "rgba(249, 115, 22, 1)"); // Orange-500
        gradient.addColorStop(1, "rgba(234, 88, 12, 0)"); // Fade out
        
        ctx.fillStyle = gradient;
        
        // Petal/Ember Shape
        ctx.beginPath();
        // Drawing a simple leaf/petal shape using bezier curves
        ctx.moveTo(0, -p.size);
        ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size / 2, p.size / 2, 0, p.size);
        ctx.bezierCurveTo(-p.size / 2, p.size / 2, -p.size / 2, -p.size / 2, 0, -p.size);
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    window.addEventListener("resize", setSize);
    return () => {
      window.removeEventListener("resize", setSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};
