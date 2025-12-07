import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Utility to check if the device is mobile
 * Checks for window existence to prevent server-side errors
 */
export const isMobile = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 1024; // Returns true if width is less than 1024px
};