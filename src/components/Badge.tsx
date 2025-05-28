"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { IconDownload } from "@tabler/icons-react";

export const Badge = ({
  href,
  text,
  isDownload = false,
}: {
  href: string;
  text: string;
  isDownload?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="relative"
    >
      <Link
        href={href}
        download={isDownload}
        className="group flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-xl bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent dark:from-purple-500/20 dark:via-purple-500/10 hover:from-purple-500/20 hover:via-purple-500/10 dark:hover:from-purple-500/30 dark:hover:via-purple-500/20 transition-all duration-300 border border-purple-200/50 dark:border-purple-800/50 hover:border-purple-300/50 dark:hover:border-purple-700/50"
      >
        <span className="font-medium text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
          {text}
        </span>
        {isDownload ? (
          <IconDownload className="w-4 h-4 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors" />
        ) : null}
      </Link>
    </motion.div>
  );
};
