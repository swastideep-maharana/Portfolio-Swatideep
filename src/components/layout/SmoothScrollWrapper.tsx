"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

interface SmoothScrollWrapperProps {
  children: React.ReactNode;
}

export const SmoothScrollWrapper = ({ children }: SmoothScrollWrapperProps) => {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Check if mobile device
    // We want to DISABLE smooth scroll on mobile because native scrolling 
    // is always more performant and natural on touch screens.
    const isMobile =
      typeof window !== "undefined" && 
      (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
      window.innerWidth < 768 ||
      "ontouchstart" in window);

    if (isMobile) {
      return;
    }

    const lenis = new Lenis({
      lerp: 0.1, // Smoother, more balanced scroll
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // Animation frame function
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle resize
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 768;
      if (isNowMobile && lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, [pathname]);

  return <>{children}</>;
};
