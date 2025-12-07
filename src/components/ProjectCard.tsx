"use client";

import { useState, useRef, MouseEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import { Product } from "@/types/products";

interface ProjectCardProps {
  product: Product;
  index: number;
  gridClass: string;
}

export const ProjectCard = ({ product, index, gridClass }: ProjectCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      key={product.href}
      initial={{ opacity: 0, y: 30, scale: 0.9, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.05,
        duration: 0.4,
      }}
      className={`group relative ${gridClass}`}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative h-full rounded-2xl overflow-hidden border border-neutral-200/10 dark:border-white/5 bg-white/5 dark:bg-white/5 backdrop-blur-lg transition-all duration-300"
      >
        {/* Spotlight Effect Inside Card */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15) 0%, transparent 60%)`,
          }}
        />

        {/* Border Glow Effect */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: isHovered
              ? `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.4) 0%, transparent 60%)`
              : "transparent",
            maskImage: `linear-gradient(to right, transparent 0%, black 1%, black 99%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 1%, black 99%, transparent 100%)`,
            WebkitMaskImage: `linear-gradient(to right, transparent 0%, black 1%, black 99%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 1%, black 99%, transparent 100%)`,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            className="object-cover transition-all duration-500 ease-out group-hover:scale-110 image-blur-up"
            onLoad={(e) => {
              e.currentTarget.classList.add("loaded");
            }}
          />
        </div>

        {/* Content - Minimal */}
        <div className="p-6 flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 tracking-tight">
              {product.title}
            </h3>
            
            {/* Tech Stack Tags */}
            {product.stack && product.stack.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {product.stack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-md border border-neutral-200/20 dark:border-white/10 text-neutral-600 dark:text-neutral-400 bg-white/5 dark:bg-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* View Case Study - Appears on Hover */}
          <motion.a
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 dark:text-blue-400 hover:gap-3 transition-all"
          >
            View Case Study
            <IconArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

