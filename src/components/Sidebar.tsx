"use client";
import { navlinks } from "@/constants/navlinks";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useCallback } from "react";
import { twMerge } from "tailwind-merge";
import { Heading } from "./Heading";
import { socials } from "@/constants/socials";
import { AnimatePresence, motion } from "framer-motion";
import {
  IconLayoutSidebarRightCollapse,
  IconChevronRight,
} from "@tabler/icons-react";
import { isMobile } from "@/lib/utils";

const SidebarHeader = () => {
  return (
    <div className="px-4 py-4">
      <Link href="/" className="flex items-center space-x-4 group">
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden ring-2 ring-indigo-100 dark:ring-indigo-900/30 group-hover:ring-indigo-200 dark:group-hover:ring-indigo-800/30 transition-all duration-300">
          <Image
            src="/SwastideepProfile.png"
            alt="Swastideep Maharana"
            fill
            sizes="(max-width: 640px) 40px, 48px"
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            priority
          />
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors tracking-normal">
            Swastideep Maharana
          </span>
          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-300 tracking-normal">
            Full Stack Developer
          </span>
        </div>
      </Link>
    </div>
  );
};

const Navigation = ({
  setOpen,
  isHovered,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isHovered: boolean;
}) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  const handleClick = useCallback(() => {
    if (isMobile()) {
      setOpen(false);
    }
  }, [setOpen]);

  return (
    <nav className="flex flex-col space-y-2 px-3">
      {navlinks.map((link: Navlink, index) => (
        <motion.div
          key={link.href}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link
            href={link.href}
            onClick={handleClick}
            className={twMerge(
              "group text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-all duration-150 flex items-center justify-between py-3 px-4 rounded-lg text-sm sm:text-base hover:bg-indigo-50/50 dark:hover:bg-indigo-900/10 tracking-normal",
              isActive(link.href) &&
                "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-medium"
            )}
          >
            <div className="flex items-center space-x-3">
              <link.icon className="h-5 w-5 flex-shrink-0 text-indigo-500 dark:text-indigo-400" />
              <span className="font-medium">{link.label}</span>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                x: isHovered ? 0 : -10,
              }}
              transition={{ duration: 0.2 }}
            >
              <IconChevronRight className="h-4 w-4 text-indigo-400 dark:text-indigo-500" />
            </motion.div>
          </Link>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="pt-6"
      >
        <Heading
          as="p"
          className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-300 px-4 mb-3 tracking-normal"
        >
          Connect
        </Heading>
        {socials.map((link: Navlink, index) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-all duration-150 flex items-center justify-between py-3 px-4 rounded-lg text-sm sm:text-base hover:bg-indigo-50/50 dark:hover:bg-indigo-900/10 tracking-normal"
            >
              <div className="flex items-center space-x-3">
                <link.icon className="h-5 w-5 flex-shrink-0 text-indigo-500 dark:text-indigo-400" />
                <span className="font-medium">{link.label}</span>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : -10,
                }}
                transition={{ duration: 0.2 }}
              >
                <IconChevronRight className="h-4 w-4 text-indigo-400 dark:text-indigo-500" />
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </nav>
  );
};

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setOpen(!isMobile());
  }, []);

  const handleToggle = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setOpen((prev) => !prev);
    setTimeout(() => setIsTransitioning(false), 200);
  }, [isTransitioning]);

  return (
    <>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{
              duration: 0.15,
              ease: "easeOut",
              opacity: { duration: 0.1 },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="fixed lg:sticky top-0 left-0 z-[100] bg-white/95 dark:bg-black/95 backdrop-blur-md w-[280px] lg:w-[240px] xl:w-[260px] h-screen flex flex-col justify-between border-r border-indigo-100/50 dark:border-indigo-900/30 shadow-lg dark:shadow-indigo-900/5"
          >
            <div className="flex-1 overflow-y-auto relative">
              <div className="space-y-4 py-4">
                <SidebarHeader />
                <Navigation setOpen={setOpen} isHovered={isHovered} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed lg:hidden bottom-6 right-6 h-12 w-12 bg-gradient-to-r from-indigo-600 via-violet-500 to-fuchsia-500 text-white rounded-full flex items-center justify-center z-[200] shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={handleToggle}
        disabled={isTransitioning}
      >
        <IconLayoutSidebarRightCollapse className="h-5 w-5" />
      </motion.button>
    </>
  );
};
