"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const Star = ({
  delay,
  x,
  y,
  size,
  brightness,
}: {
  delay: number;
  x: number;
  y: number;
  size: number;
  brightness: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [brightness * 0.3, brightness * 0.6, brightness * 0.3],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 2 + Math.random() * 2,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
    className="absolute rounded-full bg-white"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size,
      filter: "blur(0.5px)",
    }}
  />
);

const Particle = ({
  delay,
  x,
  y,
  size,
}: {
  delay: number;
  x: number;
  y: number;
  size: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.2, 0.4, 0.2],
      scale: [1, 1.1, 1],
      y: [0, -20, 0],
      x: [0, 10, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
    className="absolute rounded-full bg-white/30"
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: size,
      height: size,
      filter: "blur(1px)",
    }}
  />
);

const AnimatedText = ({
  text,
  delay,
  className,
}: {
  text: string;
  delay: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className={`relative ${className}`}
  >
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + i * 0.05 }}
        className="inline-block"
      >
        {char}
      </motion.span>
    ))}
  </motion.div>
);

const AnimatedCircle = ({
  delay,
  size,
  color,
}: {
  delay: number;
  size: number;
  color: string;
}) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      rotate: [0, 360],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
    className="absolute rounded-full"
    style={{
      width: size,
      height: size,
      background: `conic-gradient(from 0deg, ${color}, transparent)`,
      filter: "blur(2px)",
    }}
  />
);

export const IntroAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Stars */}
          <div className="absolute inset-0">
            {Array.from({ length: 50 }).map((_, i) => (
              <Star
                key={`star-${i}`}
                delay={i * 0.1}
                x={Math.random() * 100}
                y={Math.random() * 100}
                size={Math.random() * 2 + 1}
                brightness={Math.random() * 0.7 + 0.3}
              />
            ))}
          </div>

          {/* Particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 25 }).map((_, i) => (
              <Particle
                key={`particle-${i}`}
                delay={i * 0.2}
                x={Math.random() * 100}
                y={Math.random() * 100}
                size={Math.random() * 3 + 2}
              />
            ))}
          </div>

          <div className="relative flex flex-col items-center space-y-8">
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-white/10"
            >
              <Image
                src="/SwastideepProfile.png"
                alt="Swastideep Maharana"
                fill
                className="object-cover"
                priority
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10"
              />
            </motion.div>

            {/* Name and Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-center space-y-4"
            >
              <AnimatedText
                text="Swastideep Maharana"
                delay={0.7}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
                  Swastideep Maharana
                </span>
              </AnimatedText>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="text-xl sm:text-2xl font-medium text-white/90 tracking-wide"
              >
                Full Stack Developer
              </motion.div>
            </motion.div>

            {/* Loading Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="flex space-x-2"
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  initial={{ y: 0 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    delay: index * 0.15,
                  }}
                  className="w-2 h-2 bg-white/30 rounded-full"
                />
              ))}
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/5 blur-3xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
