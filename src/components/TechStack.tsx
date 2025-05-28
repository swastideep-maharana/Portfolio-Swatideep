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
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Tech Stack
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Here are the technologies I work with:
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 dark:from-purple-500/10 dark:via-blue-500/10 dark:to-cyan-500/10 blur-xl transition-all duration-300 group-hover:blur-2xl group-hover:opacity-75" />
            <div className="relative flex flex-col items-center p-4 bg-gradient-to-b from-purple-50/90 to-white/90 dark:from-black dark:to-black backdrop-blur-md rounded-xl border border-purple-100/30 dark:border-white/5 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative w-12 h-12 mb-3">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain filter dark:brightness-110"
                />
              </div>
              <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                {tech.name}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {tech.level}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
