"use client";

import { CodeTerminal } from "../ui/CodeTerminal";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconArrowRight, IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center px-4 sm:px-6 md:px-8 overflow-hidden">
      
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
        
        {/* Left Content: Text */}
        <div className="flex flex-col justify-center xl:items-start items-center text-center xl:text-left">
            {/* Status - Minimal Dot */}
            <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
            >
            <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <span className="text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-400">
                Open to work
            </span>
            </motion.div>

            {/* Main Heading - Staggered Character Animation */}
            {/* Optimization: Restored larger sizes for LG since Terminal is now hidden on LG. */}
            <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl font-sans font-bold tracking-tight text-neutral-900 dark:text-white mb-6 leading-[0.9] overflow-hidden pr-4 xl:pr-0">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
                }
                }}
                className="flex justify-center xl:justify-start"
            >
                {Array.from("Swastideep").map((char, index) => (
                <motion.span
                    key={index}
                    variants={{
                    hidden: { y: 100, opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 10, stiffness: 100 } }
                    }}
                >
                    {char}
                </motion.span>
                ))}
            </motion.div>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
                <span className="text-neutral-400 dark:text-white/40">Maharana</span>
            </motion.div>
            </div>

            {/* Subtext & Role */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-8 flex flex-col items-center xl:items-start"
            >
                <h2 className="text-xl font-medium text-orange-500 dark:text-orange-400 mb-2">Full Stack Developer</h2>
                <p className="text-base text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed text-center xl:text-left">
                Crafting pixel-perfect, scalable digital experiences with a focus on motion and interaction.
                </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4 justify-center xl:justify-start"
            >
                <a
                  href="/Swastideep_fullstack%20(2).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg"
                >
                  Resume
                </a>
                <a
                  href="#projects"
                  className="px-8 py-3 rounded-full bg-orange-500 text-white font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
                >
                  Projects
                </a>
                <a
                  href="#freelance"
                  className="px-8 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg"
                >
                  Freelance
                </a>

                <Link
                  href="/contact"
                  className="px-8 py-3 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 font-medium text-neutral-600 dark:text-neutral-300"
                >
                  Contact
                </Link>
                
                <div className="flex gap-3 pl-2 border-l border-neutral-200 dark:border-neutral-800">
                    <SocialLink href="https://github.com/swastideep-maharana" icon={<IconBrandGithub className="w-5 h-5"/>} />
                    <SocialLink href="https://www.linkedin.com/in/swastideep-maharana-090158280/" icon={<IconBrandLinkedin className="w-5 h-5"/>} />
                </div>
            </motion.div>
        </div>

        {/* Right Content: Code Terminal */}
        {/* Hidden on LG, Visible on XL+ */}
        <div className="hidden xl:flex justify-end relative z-10 w-full pl-12 -translate-y-8">
            <CodeTerminal />
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm font-medium text-neutral-400 dark:text-neutral-500 tracking-widest uppercase text-[10px]">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-neutral-300 dark:border-neutral-700 flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 rounded-full bg-orange-500"
          />
        </div>
      </motion.div>
    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-600 dark:text-white hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-sm"
    >
      {icon}
    </a>
);
