"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IconBrandGithub, IconBrandTwitter, IconBrandLinkedin } from "@tabler/icons-react";

export const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const email = "swastideep67maharana@gmail.com";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    if (isHovered) {
      document.addEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "none";
    } else {
      document.body.style.cursor = "auto";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto";
    };
  }, [isHovered]);

  const socialLinks = [
    {
      icon: IconBrandGithub,
      href: "https://github.com/swastideep-maharana",
      label: "GitHub",
    },
    {
      icon: IconBrandLinkedin,
      href: "https://www.linkedin.com/in/swastideep-maharana-090158280/",
      label: "LinkedIn",
    },
    {
      icon: IconBrandTwitter,
      href: "https://x.com/swastideep884",
      label: "Twitter",
    },
  ];

  return (
    <>
      {/* Custom Cursor - Email Me Circle */}
      {isHovered && (
        <motion.div
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
            transform: "translate(-50%, -50%)",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-2xl border-2 border-white/20">
            <span className="text-xs font-bold text-white">Email Me</span>
          </div>
        </motion.div>
      )}

      <footer className="relative py-20 md:py-32 border-t border-neutral-200/50 dark:border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 md:gap-16">
            {/* Giant Contact Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <a
                href={`mailto:${email}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="block w-full"
              >
                <h2
                  className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] font-black tracking-tighter text-neutral-900 dark:text-white leading-none transition-all duration-300"
                  style={{
                    background: isHovered
                      ? "linear-gradient(90deg, #f97316 0%, #ea580c 100%)"
                      : "transparent",
                    WebkitBackgroundClip: isHovered ? "text" : "initial",
                    WebkitTextFillColor: isHovered ? "transparent" : "initial",
                    backgroundClip: isHovered ? "text" : "initial",
                  }}
                >
                  LET&apos;S WORK TOGETHER
                </h2>
              </a>
            </motion.div>

            {/* Social Links & Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-between items-center gap-6"
            >
              {/* Social Links */}
              <div className="flex items-center gap-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Copyright */}
              <div className="text-sm text-neutral-600 dark:text-neutral-500">
                © {new Date().getFullYear()} Swastideep Maharana. All rights
                reserved.
              </div>
            </motion.div>
          </div>
        </div>
      </footer>
    </>
  );
};
