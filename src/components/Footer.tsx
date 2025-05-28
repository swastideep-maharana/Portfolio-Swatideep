"use client";
import React from "react";
import Link from "next/link";
import { IconBrandGithub, IconBrandTwitter } from "@tabler/icons-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="relative py-12 bg-white dark:bg-black border-t border-purple-100/50 dark:border-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Swastideep Maharana. All rights
              reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <motion.a
              href="https://github.com/swastideep-maharana"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <IconBrandGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://x.com/swastideep884"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <IconBrandTwitter className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
