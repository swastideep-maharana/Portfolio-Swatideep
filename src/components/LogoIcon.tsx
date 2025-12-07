"use client";

import { motion } from "framer-motion";

interface LogoIconProps {
  className?: string;
}

export const LogoIcon = ({ className = "w-8 h-8" }: LogoIconProps) => {
  return (
    <motion.svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.2 }}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#6366f1", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      {/* Geometric S */}
      <path
        d="M 7 8 C 7 6 9 6 10.5 6 C 12 6 13 7 13 8.5 C 13 10 12 11 10.5 11 C 9 11 8 12 8 13.5 C 8 15 9 16 10.5 16 C 12 16 13 17 13 18.5 C 13 20 12 21 10.5 21 C 9 21 7 21 7 23"
        stroke="url(#logoGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Geometric M */}
      <path
        d="M 17 7 L 17 23 M 17 7 L 20.5 13 L 24 7 M 24 7 L 24 23"
        stroke="url(#logoGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </motion.svg>
  );
};
