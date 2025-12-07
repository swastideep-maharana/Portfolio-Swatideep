"use client";
import React from "react";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

export const Products = () => {
  // Bento Grid layout - Apple-style feature cards
  const getGridClass = (index: number) => {
    if (index === 0) return "md:col-span-2 md:row-span-2";
    if (index === 1) return "md:col-span-1 md:row-span-1";
    if (index === 2) return "md:col-span-1 md:row-span-1";
    if (index === 3) return "md:col-span-2 md:row-span-1";
    if (index === 4) return "md:col-span-1 md:row-span-1";
    if (index === 5) return "md:col-span-1 md:row-span-1";
    return "md:col-span-1 md:row-span-1";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {products.slice(0, 6).map((product: Product, idx: number) => (
        <motion.div
          key={product.href}
          initial={{ opacity: 0, y: 30, scale: 0.9, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: idx * 0.05,
            duration: 0.4,
          }}
          whileHover={{ y: -8, scale: 1.02 }}
          className={`group relative ${getGridClass(idx)}`}
          style={{ perspective: "1000px" }}
        >
          <motion.div 
            className="glass-hover h-full rounded-2xl overflow-hidden"
            whileHover={{ 
              boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)",
            }}
          >
            {/* Image - Large, high-quality screenshot */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={idx === 0}
                loading={idx === 0 ? "eager" : "lazy"}
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7]/80 dark:from-[#050505]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">
              <div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 tracking-tight">
                  {product.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1 inline-flex items-center justify-center gap-2 text-sm"
                >
                  <IconExternalLink className="w-4 h-4" />
                  <span>Live</span>
                </a>
                <a
                  href={product.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex-1 inline-flex items-center justify-center gap-2 text-sm"
                >
                  <IconBrandGithub className="w-4 h-4" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
