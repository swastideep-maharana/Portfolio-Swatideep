"use client";
import { timeline } from "@/constants/timeline";
import React from "react";
import { motion } from "framer-motion";

export const WorkHistory = () => {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-neutral-800" />

      <div className="space-y-12">
        {timeline.map((item, index) => (
          <motion.div
            key={`timeline-${index}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-24"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-neutral-800 bg-neutral-950 -translate-x-1/2" />

            {/* Date */}
            <div className="text-sm text-neutral-500 mb-2 font-mono">
              {item.date}
            </div>

            {/* Company */}
            <div className="text-xl font-bold text-white mb-1 tracking-tight">
              {item.company}
            </div>

            {/* Title */}
            <div className="text-base text-neutral-400 mb-1">
              {item.title}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
