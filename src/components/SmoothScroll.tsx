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
    // 1. Check if mobile device
    const isMobile =
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
      window.innerWidth < 768 ||
      "ontouchstart" in window;

    // 2. Disable smooth scroll on mobile for better performance
    if (isMobile) {
      return;
    }

    // 3. Initialize Lenis (REMOVED 'smoothTouch' property)
    const lenis = new Lenis({
      lerp: 0.1, // Smooth, buttery feel - premium weight
      smoothWheel: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      infinite: false,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // 4. Animation frame function
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 5. Handle resize
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
