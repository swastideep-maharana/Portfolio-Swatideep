import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";

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
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge(
        "inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium rounded-md transition-colors",
        variant === "primary"
          ? "bg-blue-500 text-black hover:bg-blue-400"
          : "border border-neutral-700 text-white hover:border-neutral-600",
        className
      )}
    >
      {children}
      <IconArrowRight className="w-5 h-5" />
    </motion.a>
  );
};
