"use client";

import React from "react";
import { motion } from "framer-motion";

interface LogoIconProps {
  className?: string;
}

export const LogoIcon = ({ className }: LogoIconProps) => {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <defs>
        <linearGradient id="gradientSM" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      {/* S shape */}
      <motion.path
        d="M70 20C70 10.0589 61.9411 2 52 2C42.0589 2 34 10.0589 34 20V40C34 49.9411 42.0589 58 52 58C61.9411 58 70 49.9411 70 40V20"
        stroke="url(#gradientSM)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      {/* M shape */}
      <motion.path
        d="M30 80L45 50L60 80L75 50L90 80"
        stroke="url(#gradientSM)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
      />
    </motion.svg>
  );
};

