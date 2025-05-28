"use client";

import { motion } from "framer-motion";
import { techStack } from "@/constants/techStack";
import Image from "next/image";

export const TechStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-8"
    >
      <div className="space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-300 dark:to-white bg-clip-text text-transparent"
        >
          Tech Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-sm sm:text-base text-gray-600 dark:text-gray-400 tracking-normal"
        >
          Here are the technologies I work with:
        </motion.p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-100/50 via-pink-100/30 to-purple-100/50 dark:from-purple-900/20 dark:via-pink-900/10 dark:to-purple-900/20 blur-2xl transition-all duration-500 group-hover:blur-3xl group-hover:opacity-75" />
            <div className="relative flex flex-col items-center p-4 bg-white/95 dark:bg-black/95 backdrop-blur-sm rounded-xl border border-purple-100/50 dark:border-purple-900/30 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  sizes="(max-width: 640px) 40px, 48px"
                  className={`object-contain transition-all duration-300 group-hover:scale-110 ${
                    tech.name === "Next.js"
                      ? "dark:brightness-110 dark:invert-0 invert"
                      : "dark:brightness-110"
                  }`}
                />
              </div>
              <motion.h3
                className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white tracking-normal"
                whileHover={{ scale: 1.1 }}
              >
                {tech.name}
              </motion.h3>
              <motion.p
                className="text-[10px] sm:text-xs text-purple-600 dark:text-purple-400 mt-0.5 sm:mt-1 tracking-normal"
                whileHover={{ scale: 1.1 }}
              >
                {tech.level}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
