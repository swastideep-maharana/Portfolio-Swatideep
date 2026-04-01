"use client";

import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
// ThemeToggle import removed

export const FloatingDock = () => {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isActive = (href: string) => pathname === href;

  const getScale = (index: number) => {
    return 1;
  };

  return (
    <>
      {/* Floating Dock - Desktop */}
      <motion.nav
        initial={{ y: 100, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div className="relative flex items-center gap-2 px-4 py-3 rounded-full backdrop-blur-xl bg-white/50 dark:bg-black/40 border border-white/20 dark:border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.1)]">
          {navlinks.map((link: Navlink, index: number) => (
            <motion.div
              key={link.href}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                scale: getScale(index),
                zIndex: hoveredIndex === index ? 10 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
              className="relative"
            >
              <Link
                href={link.href}
                className={`
                  relative flex items-center justify-center w-12 h-12 rounded-full
                  transition-colors duration-200
                  ${
                    isActive(link.href)
                      ? "text-white"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                  }
                `}
              >
                <link.icon className="w-5 h-5 relative z-10" />
                {isActive(link.href) && (
                  <motion.div
                    layoutId="activeDockItem"
                    className="absolute inset-0 bg-orange-500 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span
                  className="absolute -top-12 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium text-white bg-neutral-900/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-md whitespace-nowrap opacity-0 pointer-events-none transition-opacity duration-200"
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                >
                  {link.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Dock */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden w-[calc(100%-2rem)] max-w-md"
      >
        <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-full backdrop-blur-xl bg-white/80 dark:bg-black/40 border border-black/5 dark:border-white/10 shadow-lg">
          {navlinks.map((link: Navlink, index: number) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                relative flex items-center justify-center w-10 h-10 rounded-full
                transition-colors duration-200
                ${
                  isActive(link.href)
                    ? "text-white"
                    : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                }
              `}
            >
              <link.icon className="w-5 h-5 relative z-10" />
              {isActive(link.href) && (
                <motion.div
                  layoutId="activeDockItemMobile"
                  className="absolute inset-0 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>
      </motion.nav>
    </>
  );
};
