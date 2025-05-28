"use client";

import { useTheme } from "next-themes";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { motion } from "framer-motion";

export const TopThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-4 right-4 h-9 w-9 bg-white/90 dark:bg-black/90 border border-gray-200/30 dark:border-white/5 rounded-full backdrop-blur-md flex items-center justify-center z-[200] shadow-lg hover:shadow-xl transition-all duration-150"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <IconSun className="h-4 w-4 text-gray-900 dark:text-white" />
      ) : (
        <IconMoon className="h-4 w-4 text-gray-900 dark:text-white" />
      )}
    </motion.button>
  );
};
