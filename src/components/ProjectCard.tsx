"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { IconBrandGithub, IconExternalLink, IconArrowRight } from "@tabler/icons-react";
import { Product } from "@/types/products";
import React, { useRef } from "react";

interface ProjectCardProps {
  product: Product;
  index: number;
  gridClass: string;
}

export const ProjectCard = ({ product, index, gridClass }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate normalized mouse position from center (-0.5 to 0.5)
    const width = rect.width;
    const height = rect.height;
    
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.05,
        duration: 0.4,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative flex flex-col rounded-2xl glass border border-white/10 ${gridClass}`}
    >
       {/* Neon Gradient Border Effect */}
      <div 
         className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
         style={{ transform: 'translateZ(20px)' }}
      >
         <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-transparent via-orange-500/30 to-transparent blur-sm" />
      </div>
      
      {/* 3D Depth Card Content Wrapper */}
      <div className="flex flex-col h-full w-full rounded-2xl overflow-hidden bg-white/50 dark:bg-black/40 backdrop-blur-md backface-hidden" style={{ transform: "translateZ(1px)" }}>

        {/* Image Section */}
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-1 p-6 relative z-10">
          <div className="flex-1">
            <div style={{ transform: "translateZ(20px)" }}>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 line-clamp-1 group-hover:text-orange-500 transition-colors">
                {product.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
                {product.description}
                </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6" style={{ transform: "translateZ(10px)" }}>
              {product.stack?.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                >
                  {tech}
                </span>
              ))}
              {product.stack && product.stack.length > 3 && (
                <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                  +{product.stack.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mt-auto transform group-hover:translate-y-[-2px] transition-transform duration-300" style={{ transform: "translateZ(30px)" }}>
            {product.href && (
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-90 transition-opacity shadow-lg shadow-black/5"
              >
                <IconExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {product.github && (
              <a
                href={product.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-black text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors shadow-lg shadow-black/5"
                aria-label="View Source Code"
              >
                <IconBrandGithub className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
