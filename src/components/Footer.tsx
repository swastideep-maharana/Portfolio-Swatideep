"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const email = "swastideep67maharana@gmail.com";

  const footerLinks = [
    { label: "LET'S TALK", email: email },
    { label: "GITHUB", href: "https://github.com/swastideep-maharana" },
    { label: "TWITTER", href: "https://x.com/swastideep884" },
  ];

  return (
    <footer className="relative py-20 md:py-32 border-t border-neutral-200/20 dark:border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Massive Typography Links */}
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8">
            {footerLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => setHoveredLink(link.label)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.href ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h2 className="text-[8vw] md:text-[6vw] lg:text-[5vw] font-black tracking-tighter text-neutral-900 dark:text-white leading-none hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer">
                      {link.label}
                    </h2>
                  </a>
                ) : (
                  <div className="relative">
                    <h2 className="text-[8vw] md:text-[6vw] lg:text-[5vw] font-black tracking-tighter text-neutral-900 dark:text-white leading-none hover:text-blue-500 dark:hover:text-blue-400 transition-colors cursor-pointer">
                      {link.label}
                    </h2>
                    {/* Email Reveal on Hover */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: hoveredLink === link.label ? 1 : 0,
                        y: hoveredLink === link.label ? 0 : 10,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 text-2xl md:text-3xl text-neutral-500 font-mono whitespace-nowrap"
                    >
                      <a
                        href={`mailto:${link.email}`}
                        className="hover:text-blue-500 transition-colors pointer-events-auto"
                      >
                        {link.email}
                      </a>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-neutral-600 dark:text-neutral-500"
          >
            © {new Date().getFullYear()} Swastideep Maharana. All rights
            reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
