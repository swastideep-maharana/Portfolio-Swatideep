"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { Product } from "@/types/products";
import React from "react";

interface ProjectCardProps {
  product: Product;
  index: number;
  gridClass: string;
}

export const ProjectCard = ({ product, index, gridClass }: ProjectCardProps) => {
  return (
    <motion.div
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
      className={`group relative flex flex-col rounded-2xl bg-white dark:bg-neutral-900/50 backdrop-blur-xl border border-neutral-200 dark:border-white/10 overflow-hidden hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] hover:border-orange-500/30 transition-all duration-300 ${gridClass}`}
    >
      {/* Image Section - Clickable */}
      <a 
        href={product.href}
        target="_blank"
        rel="noopener noreferrer" 
        className="relative aspect-video w-full overflow-hidden cursor-pointer block"
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </a>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6 relative z-10">
        <div className="flex-1">
          <div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 line-clamp-1">
              {product.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
              {product.description}
              </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
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
        <div className="flex items-center gap-3 mt-auto">
          {product.href && (
            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 dark:hover:text-white transition-all duration-300 shadow-sm"
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
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg border border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-900/50 text-neutral-600 dark:text-neutral-300 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 dark:hover:text-white hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 shadow-sm"
              aria-label="View Source Code"
            >
              <IconBrandGithub className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
