"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconBrandGithub, IconBrandTwitter, IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";

export const Footer = () => {
  const email = "swastideep67maharana@gmail.com";

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
            <Link
              href="/contact"
              className="block w-full group"
            >
              <h2
                className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw] font-black tracking-tighter text-neutral-900 dark:text-white leading-none transition-colors duration-300 group-hover:text-orange-500"
              >
                LET&apos;S WORK TOGETHER
              </h2>
            </Link>
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
                    className="text-neutral-600 dark:text-neutral-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors transform hover:scale-110"
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
  );
};
