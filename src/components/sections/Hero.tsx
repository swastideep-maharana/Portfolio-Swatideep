"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { IconArrowRight, IconMapPin, IconClock } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface LiveStatusProps {
  location: string;
  time: string;
  status: "available" | "busy" | "away";
}

const LiveStatus = ({ location, time, status }: LiveStatusProps) => {
  const statusColors = {
    available: "bg-green-500",
    busy: "bg-yellow-500",
    away: "bg-gray-500",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm"
    >
      <div className={cn("w-2 h-2 rounded-full animate-pulse", statusColors[status])} />
      <IconMapPin className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
      <span className="text-neutral-700 dark:text-neutral-300">{location}</span>
      <span className="text-neutral-500">•</span>
      <IconClock className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
      <span className="text-neutral-700 dark:text-neutral-300">{time}</span>
      <span className="text-neutral-500">•</span>
      <span className="text-neutral-700 dark:text-neutral-300 capitalize">{status}</span>
    </motion.div>
  );
};

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Set initial load state
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000); // 2 seconds for name animation

    // Update time every minute
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 60000);

    return () => {
      clearTimeout(timer);
      clearInterval(timeInterval);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.4,
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-20 md:py-32">
      {/* State 1: Initial Load - Name in Center */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center z-50"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight text-neutral-900 dark:text-white"
              style={{
                background: "linear-gradient(90deg, #fff 0%, #a78bfa 50%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Swastideep
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Maharana
              </motion.span>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* State 2: Reveal - Full Hero Content */}
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-7xl mx-auto"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              {/* Name - Moved to top */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-[-0.02em] text-neutral-900 dark:text-white mb-6 leading-tight"
              >
                <motion.span
                  initial={{ opacity: 0, x: -30, rotateY: -90 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.1 }}
                  className="inline-block"
                >
                  Swastideep
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: 30, rotateY: 90 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.2 }}
                  className="inline-block"
                >
                  Maharana
                </motion.span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed max-w-2xl"
              >
                Full Stack Developer crafting elegant solutions with modern
                technologies. Specialized in React, Node.js, and TypeScript.
              </motion.p>

              {/* Live Status Widget */}
              <motion.div variants={itemVariants} className="mb-8">
                <LiveStatus
                  location="India"
                  time={currentTime || "Loading..."}
                  status="available"
                />
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={itemVariants}>
                <a
                  href="/Swastideep_resume.pdf"
                  download
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Download Resume
                  <IconArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

