"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { IconBrandGithub, IconBrandLinkedin, IconCheck, IconCopy } from "@tabler/icons-react";
import Image from "next/image";

const techSkills = ["React", "Node.js", "Next.js", "TypeScript", "MongoDB", "Tailwind CSS"];

export const BentoGrid = () => {
  const [copied, setCopied] = useState(false);
  const email = "swastideep67maharana@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {/* Map Tile - 2 columns */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 12, duration: 0.4 }}
        className="md:col-span-2 rounded-2xl overflow-hidden glass backdrop-blur-lg border border-white/10 p-6 group hover:border-orange-500/20 transition-colors duration-300"
      >
        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-orange-500 transition-colors">Location</h3>
        <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-inner">
          {/* India Map Placeholder */}
          <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center group-hover:bg-orange-50 dark:group-hover:bg-orange-900/10 transition-colors duration-500">
            <div className="text-center">
              <div className="text-6xl mb-2 drop-shadow-md">🌏</div>
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Based in India</p>
            </div>
            
             {/* Decorative Grid Lines to look technical */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]" />
          </div>
        </div>
      </motion.div>

      {/* Top Skills - 1 column */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 12, duration: 0.4, delay: 0.1 }}
        className="md:col-span-1 rounded-2xl overflow-hidden glass backdrop-blur-lg border border-white/10 p-6 group hover:border-orange-500/20 transition-colors duration-300"
      >
        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-orange-500 transition-colors">Core Skills</h3>
        <div className="relative overflow-hidden h-32 mask-gradient-vertical">
          <div className="flex flex-col gap-3 animate-scroll-vertical hover:[animation-play-state:paused]">
            {[...techSkills, ...techSkills].map((skill, index) => (
              <div
                key={`${skill}-${index}`}
                className="flex-shrink-0 px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:border-orange-500/30 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Connect Tile - 1 column */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 12, duration: 0.4, delay: 0.2 }}
        className="md:col-span-1 rounded-2xl overflow-hidden glass backdrop-blur-lg border border-white/10 p-6 group hover:border-orange-500/20 transition-colors duration-300"
      >
        <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-orange-500 transition-colors">Connect</h3>
        <div className="flex flex-col gap-4">
          <motion.a
            href="https://github.com/swastideep-maharana"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:bg-white dark:hover:bg-neutral-700 hover:border-orange-500/50 transition-all duration-300"
          >
            <IconBrandGithub className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
            <span className="font-medium text-neutral-900 dark:text-white text-sm">GitHub</span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/swastideep-maharana-090158280/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:bg-white dark:hover:bg-neutral-700 hover:border-orange-500/50 transition-all duration-300"
          >
            <IconBrandLinkedin className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
            <span className="font-medium text-neutral-900 dark:text-white text-sm">LinkedIn</span>
          </motion.a>
        </div>
      </motion.div>

      {/* Copy Email Tile - 2 columns */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 12, duration: 0.4, delay: 0.3 }}
        className="relative md:col-span-2 rounded-2xl overflow-hidden glass backdrop-blur-lg border border-white/10 p-6 cursor-pointer group hover:border-orange-500/20 transition-colors duration-300"
        onClick={handleCopyEmail}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">Email</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-mono tracking-wider">
              {copied ? "Copied to clipboard!" : email}
            </p>
          </div>
          <motion.div
            animate={{ scale: copied ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.3 }}
            className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-200 dark:group-hover:bg-orange-500/20 transition-colors"
          >
            {copied ? (
              <IconCheck className="w-6 h-6 text-green-600 dark:text-green-400" />
            ) : (
              <IconCopy className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            )}
          </motion.div>
        </div>
        {/* Confetti Effect */}
        {copied && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
            {[...Array(20)].map((_, i) => {
              const angle = (i / 20) * Math.PI * 2;
              const distance = 100 + Math.random() * 50;
              return (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-orange-500"
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  animate={{
                    x: Math.cos(angle) * distance,
                    y: Math.sin(angle) * distance,
                    opacity: 0,
                    scale: 0,
                  }}
                  transition={{
                    duration: 1,
                    delay: i * 0.03,
                    ease: "easeOut",
                  }}
                />
              );
            })}
          </div>
        )}
      </motion.div>
    </div>
  );
};
