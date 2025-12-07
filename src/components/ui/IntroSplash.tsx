"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const IntroSplash = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide splash after animation completes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800); // slightly longer than animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
           key="splash"
           initial={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.5, ease: "easeInOut" }}
           className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
        >
            <div className="relative flex flex-col items-center justify-center">
                {/* Name Reveal */}
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="text-4xl md:text-6xl font-bold font-sans text-neutral-100 tracking-tighter"
                    >
                        Swastideep
                    </motion.h1>
                </div>
                
                {/* Line Separator */}
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
                    className="h-[2px] bg-orange-500 my-4"
                />

                <div className="overflow-hidden">
                    <motion.p
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                        className="text-lg md:text-xl font-medium text-neutral-400 tracking-widest uppercase"
                    >
                        Portfolio &copy; 2025
                    </motion.p>
                </div>
            </div>

            {/* Shutter Effect: Slide Up Curtain */}
            <motion.div 
                initial={{ height: "100%" }}
                animate={{ height: "0%" }}
                transition={{ duration: 0.8, delay: 2, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 bg-[#050505] z-[-1]"
            />
            
            {/* Split Curtains Animation (Optional Visual Flair) */}
             <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.8, delay: 2, ease: [0.76, 0, 0.24, 1] }}
                className="absolute top-0 left-0 w-full h-1/2 bg-neutral-950 origin-top z-10"
             />
             <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.8, delay: 2, ease: [0.76, 0, 0.24, 1] }}
                className="absolute bottom-0 left-0 w-full h-1/2 bg-neutral-950 origin-bottom z-10"
             />

        </motion.div>
      )}
    </AnimatePresence>
  );
};
