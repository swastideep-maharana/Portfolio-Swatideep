"use client";

import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import { motion } from "framer-motion";
import { IconDownload } from "@tabler/icons-react";

const NAME = "Swastideep";

export default function Home() {
  return (
    <div className="w-full min-h-screen px-4 md:px-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full"
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
            className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
          />
        </motion.div>

        <div className="mt-4 sm:mt-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gradient whitespace-nowrap w-full"
          >
            Hello there! I&apos;m {NAME}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-4 sm:mt-6 w-full"
          >
            <Paragraph className="w-full text-base sm:text-lg leading-relaxed">
              I&apos;m a full-stack developer passionate about{" "}
              <Highlight>creating innovative solutions</Highlight> and building
              web applications that make a difference. With a keen eye for
              design and a love for clean code, I bring ideas to life through
              elegant solutions.
            </Paragraph>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-3 sm:mt-4 w-full"
          >
            <Paragraph className="w-full text-base sm:text-lg leading-relaxed">
              I specialize in the MERN stack with expertise in{" "}
              <Highlight>React, Node.js, and MongoDB</Highlight>. My focus is on
              creating performant, scalable, and user-friendly applications that
              deliver exceptional user experiences.
            </Paragraph>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6 sm:mt-8 w-full"
          >
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <motion.a
                href="/data/Swastideep_resume.pdf"
                download="Swastideep_Maharana_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2 text-sm sm:text-base"
              >
                <IconDownload className="w-4 h-4" />
                Download Resume
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-purple-600 rounded-full font-medium border-2 border-purple-200 shadow-lg hover:shadow-xl transition-shadow text-sm sm:text-base"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-16 sm:mt-20 w-full"
      >
        <Heading
          as="h2"
          className="font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 text-gradient"
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
    </div>
  );
}
