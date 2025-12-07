"use client";

import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { LogoIcon } from "./LogoIcon";
import { ThemeToggle } from "./ThemeToggle";

export const FloatingNavbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isActive = (href: string) => pathname === href;

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

      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: 100, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <div className="glass flex items-center gap-2 px-4 py-3 rounded-full shadow-xl">
          {navlinks.map((link: Navlink) => (
            <Link
              key={link.href}
              href={link.href}
              className={twMerge(
                "relative px-4 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors rounded-md",
                isActive(link.href) && "text-white"
              )}
            >
              {isActive(link.href) && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-blue-500 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <link.icon className="w-4 h-4" />
                <span className="hidden lg:inline">{link.label}</span>
              </span>
            </Link>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="glass fixed bottom-6 right-6 z-50 md:hidden p-3 rounded-full text-white hover:scale-[1.02] transition-transform"
      >
        {isMobileMenuOpen ? (
          <IconX className="w-6 h-6" />
        ) : (
          <IconMenu2 className="w-6 h-6" />
        )}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-6 z-40 md:hidden"
          >
            <div className="glass flex flex-col gap-2 p-4 rounded-2xl shadow-xl min-w-[200px]">
              {navlinks.map((link: Navlink) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={twMerge(
                    "flex items-center gap-3 px-4 py-3 text-sm font-medium text-neutral-400 hover:text-white transition-colors rounded-md",
                    isActive(link.href) && "text-white bg-blue-500/20"
                  )}
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

