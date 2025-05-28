import { motion, useAnimation } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

export const ButtonCTA = ({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleHoverStart = async () => {
    setIsHovered(true);
    await controls.start({
      scale: 1.02,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    });
  };

  const handleHoverEnd = async () => {
    setIsHovered(false);
    await controls.start({
      scale: 1,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    });
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      animate={controls}
      whileTap={{ scale: 0.98 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      className={twMerge(
        "group relative inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl transition-all duration-300 overflow-hidden",
        variant === "primary"
          ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white shadow-lg hover:shadow-xl hover:from-indigo-700 hover:via-purple-700 hover:to-blue-700"
          : "bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg",
        className
      )}
    >
      <span className="relative z-10 flex items-center">
        {children}
        <motion.div
          animate={{
            x: isHovered ? 4 : 0,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <IconArrowRight className="w-5 h-5 ml-2 transform transition-transform" />
        </motion.div>
      </span>

      {variant === "primary" && (
        <>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-blue-600/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10"
            initial={{ x: "-100%" }}
            animate={{ x: isHovered ? "100%" : "-100%" }}
            transition={{
              duration: 1,
              repeat: isHovered ? Infinity : 0,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: isHovered ? 1.2 : 0.8,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
          />
        </>
      )}
    </motion.a>
  );
};
