"use client";

import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { motion } from "framer-motion";
import { IconDownload } from "@tabler/icons-react";
import { IntroAnimation } from "@/components/IntroAnimation";

const NAME = "Swastideep";

export default function Home() {
  return (
    <>
      <IntroAnimation />
      <div className="w-full min-h-screen px-4 sm:px-6 md:px-10 py-12 sm:py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-white to-white dark:from-black dark:via-black dark:to-black" />

        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500/10 dark:bg-pink-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-4xl mx-auto"
        >
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="text-3xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              👋
            </motion.span>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="h-1 w-20 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8"
          >
            <Heading
              as="h1"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight"
            >
              <span className="text-gray-900 dark:text-white">
                Hi, I&apos;m{" "}
              </span>
              <Highlight className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                {NAME}
              </Highlight>
            </Heading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-6"
          >
            <Paragraph className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              A passionate Full Stack Developer crafting beautiful and
              functional web experiences.
            </Paragraph>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8"
          >
            <a
              href="/SwastideepMaharana.pdf"
              download
              className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white font-medium hover:from-purple-700 hover:via-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <IconDownload className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-12 sm:mt-16 md:mt-20 w-full"
          >
            <Heading
              as="h2"
              className="font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent tracking-tight"
            >
              Featured Projects
            </Heading>
            <Products />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-20 w-full"
          >
            <TechStack />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
