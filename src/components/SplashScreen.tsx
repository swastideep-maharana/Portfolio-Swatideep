"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { LogoIcon } from "./LogoIcon";

export const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // After 1.2 seconds, start transition (faster)
    const timer = setTimeout(() => {
      setShowLogo(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 600);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] dark:bg-[#050505]"
        >
          {/* Full Name Animation - More impressive */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white dark:text-white"
              style={{
                background: "linear-gradient(90deg, #fff 0%, #a78bfa 50%, #06b6d4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 30, rotateY: -90 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.1 }}
              >
                Swastideep
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30, rotateY: 90 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.2 }}
              >
                Maharana
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Logo appears at top-left as name fades - Impressive entrance */}
          {showLogo && (
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, duration: 0.5 }}
              className="fixed top-6 left-6 z-[10000]"
            >
              <LogoIcon className="w-12 h-12" />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

