"use client";

import { motion } from "framer-motion";

export const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full blur-3xl opacity-20 dark:opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, #6366f1 50%, transparent 70%)",
        }}
      />
      <motion.div
        className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 dark:opacity-20"
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, #14b8a6 50%, transparent 70%)",
        }}
      />
      <motion.div
        className="absolute -bottom-1/4 left-1/3 w-[700px] h-[700px] rounded-full blur-3xl opacity-15 dark:opacity-15"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
        style={{
          background: "radial-gradient(circle, #a78bfa 0%, #8b5cf6 50%, transparent 70%)",
        }}
      />

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />
    </div>
  );
};

