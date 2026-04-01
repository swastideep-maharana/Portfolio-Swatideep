"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IconBrandGithub, IconExternalLink, IconSparkles } from "@tabler/icons-react";
import { products } from "@/constants/products";

export const Products = () => {
  // We'll show the top featured projects in this premium layout
  const featuredWork = products.slice(0, 3);

  return (
    <div className="flex flex-col gap-32">
      {featuredWork.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`flex flex-col ${
            index % 2 !== 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } gap-12 items-center`}
        >
          {/* Image Container */}
          <div className="w-full lg:w-1/2 group relative">
            <div 
              className={`absolute -inset-4 bg-gradient-to-r ${project.color || "from-orange-500 to-amber-500"} opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500 rounded-[2.5rem]`} 
              style={{ transform: "translateZ(0)" }}
            />
            <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-white/10 shadow-2xl">
              <Image
                src={typeof project.thumbnail === 'string' ? project.thumbnail : project.thumbnail.src}
                alt={project.title}
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 flex items-center justify-center gap-4">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                >
                  <IconExternalLink size={24} />
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-black text-white rounded-full hover:scale-110 transition-transform border border-white/20"
                  >
                    <IconBrandGithub size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="flex flex-col items-center lg:items-start gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-medium">
                <IconSparkles size={16} />
                <span>Featured Project</span>
              </div>
            </div>
            
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-neutral-900 dark:text-white leading-tight tracking-tighter">
              {project.title.split(' - ')[0]}
            </h3>
            
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {project.stack?.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 rounded-xl bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-white/10 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 justify-center lg:justify-start">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-lg font-semibold text-orange-500 hover:text-orange-600 transition-colors"
              >
                Live Preview 
                <IconExternalLink className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-lg font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Source Code
                  <IconBrandGithub className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
      
      <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
        <a 
          href="/projects" 
          className="px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl"
        >
          View All Projects
        </a>
        <a 
          href="#freelance" 
          className="px-8 py-4 border border-neutral-200 dark:border-white/10 rounded-2xl font-bold hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 dark:hover:text-white transition-all duration-300 shadow-xl"
        >
          Freelance Work
        </a>
      </div>
    </div>
  );
};
