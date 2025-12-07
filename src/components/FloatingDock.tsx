"use client";

import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LogoIcon } from "./LogoIcon";
import { ThemeToggle } from "./ThemeToggle";

export const FloatingDock = () => {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isActive = (href: string) => pathname === href;

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    if (hoveredIndex === index) return 1.2;
    if (Math.abs(hoveredIndex - index) === 1) return 1.1;
    return 1;
  };

  return (
    <>
      {/* Logo in Top-Left */}
      <motion.div
        initial={{ opacity: 0, x: -20, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link href="/" className="block">
          <LogoIcon className="w-10 h-10" />
        </Link>
      </motion.div>

      {/* Theme Toggle in Top-Right */}
      <motion.div
        initial={{ opacity: 0, x: 20, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
        className="fixed top-6 right-6 z-50"
      >
        <ThemeToggle />
      </motion.div>

      {/* Floating Dock - Desktop */}
      <motion.nav
        initial={{ y: 100, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div className="relative flex items-center gap-2 px-4 py-3 rounded-full backdrop-blur-xl bg-black/10 dark:bg-black/20 border border-white/10 dark:border-white/10 shadow-2xl">
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
                      ? "bg-blue-500 text-white"
                      : "text-neutral-400 hover:text-white hover:bg-white/10"
                  }
                `}
              >
                <link.icon className="w-5 h-5" />
                {isActive(link.href) && (
                  <motion.div
                    layoutId="activeDockItem"
                    className="absolute inset-0 bg-blue-500 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium text-white bg-black/80 dark:bg-white/10 backdrop-blur-sm rounded-md whitespace-nowrap opacity-0 pointer-events-none transition-opacity duration-200"
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
        <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-full backdrop-blur-xl bg-black/10 dark:bg-black/20 border border-white/10 dark:border-white/10 shadow-2xl">
          {navlinks.map((link: Navlink, index: number) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                relative flex items-center justify-center w-10 h-10 rounded-full
                transition-colors duration-200
                ${
                  isActive(link.href)
                    ? "bg-blue-500 text-white"
                    : "text-neutral-400 hover:text-white hover:bg-white/10"
                }
              `}
            >
              <link.icon className="w-5 h-5" />
              {isActive(link.href) && (
                <motion.div
                  layoutId="activeDockItemMobile"
                  className="absolute inset-0 bg-blue-500 rounded-full"
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

