"use client";

import { motion } from "framer-motion";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { IconArrowRight } from "@tabler/icons-react";
import { AuroraBackground } from "@/components/AuroraBackground";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.4,
    },
  },
};

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <div className="w-full min-h-screen relative">
        {/* Hero Section - Rich & Premium */}
        <section className="relative w-full min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-20 md:py-32">
          <div className="w-full max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              {/* Main Heading - Name with impressive animation */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6 leading-tight"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -30, rotateY: -90 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.1 }}
                  className="inline-block"
                >
                  Swastideep
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: 30, rotateY: 90 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.2 }}
                  className="inline-block"
                >
                  Maharana
                </motion.span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed max-w-2xl"
              >
                Full Stack Developer crafting elegant solutions with modern
                technologies. Specialized in React, Node.js, and TypeScript.
              </motion.p>

              {/* CTA Button */}
              <motion.div variants={itemVariants}>
                <a
                  href="/Swastideep_resume.pdf"
                  download
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Download Resume
                  <IconArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 md:py-32">
          <div className="w-full max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 12, duration: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white mb-16"
            >
              Featured Projects
            </motion.h2>
            <Products />
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-20 md:py-32">
          <div className="w-full max-w-7xl mx-auto">
            <TechStack />
          </div>
        </section>
      </div>
    </>
  );
}
