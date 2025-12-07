"use client";

import { motion } from "framer-motion";
import { techStack } from "@/constants/techStack";
import Image from "next/image";

export const TechStack = () => {
  // Duplicate for seamless infinite scroll
  const duplicatedTechStack = [...techStack, ...techStack];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 100, damping: 12, duration: 0.4 }}
      className="space-y-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 12, duration: 0.4 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white"
      >
        Tech Stack
      </motion.h2>

      {/* Enhanced Marquee with 3D Effect */}
      <div className="relative overflow-hidden py-12">
        {/* Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FDFBF7] dark:from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FDFBF7] dark:from-[#050505] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Icons - Colorful and Blended */}
        <div className="flex gap-16 animate-scroll hover:[animation-play-state:paused]">
          {duplicatedTechStack.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              whileInView={{ opacity: 0.6, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 15,
                delay: index * 0.05 
              }}
              whileHover={{ 
                scale: 1.2, 
                opacity: 1, 
                rotateY: 10,
                z: 50,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="flex-shrink-0 w-20 h-20 flex items-center justify-center cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              <motion.div 
                className="relative w-full h-full rounded-2xl p-3 bg-white/5 dark:bg-white/5 backdrop-blur-sm"
                whileHover={{ 
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  sizes="80px"
                  loading="lazy"
                  className="object-contain transition-all duration-300 image-blur-up"
                  onLoad={(e) => {
                    e.currentTarget.classList.add("loaded");
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </motion.div>
  );
};
