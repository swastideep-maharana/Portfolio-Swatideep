"use client";

import { motion } from "framer-motion";

export const DeepAuroraBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#fafafa] dark:bg-[#0a0a0a] overflow-hidden transition-colors duration-500">
      
      {/* 1. Main Warm Glow (Bottom/Center) */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] opacity-60 dark:opacity-60"
        style={{
          background: `
            radial-gradient(
              50% 100% at 50% 100%, 
              rgba(249, 115, 22, 0.15) 0%, 
              rgba(234, 88, 12, 0.1) 40%, 
              transparent 80%
            )
          `,
          transform: 'translateZ(0)',
        }}
      />

      {/* 2. Intense Core (Amber/Gold) - Refined Blur for Performance */}
      <motion.div
        className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-40 dark:opacity-30 blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        style={{
          background: `
            linear-gradient(180deg, 
              rgba(251, 146, 60, 0.2) 0%, 
              rgba(194, 65, 12, 0.15) 50%, 
              transparent 100%
            )
          `,
          borderRadius: "100% 100% 0 0",
          transform: 'translateZ(0)',
          willChange: 'opacity, transform',
        }}
      />

      {/* 3. The "Ring" effect - A subtle border glow arching over content */}
      <div 
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[90vw] h-[80vh] rounded-[100%] border-t border-orange-500/10 opacity-30 blur-lg"
        style={{ transform: 'scaleY(0.7) translateZ(0)' }}
      />
      
      {/* Static Film Grain (Performance Optimized: No Animation) 
          Moving noise + mix-blend-overlay on 4k screens is a FPS killer. 
          Static grain provides the texture without the GPU cost.
      */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
