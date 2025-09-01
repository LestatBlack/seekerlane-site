"use client";
import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Minimal, type-safe options for Lenis v1
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 2), // easeOutQuad
      smoothWheel: true,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      // @ts-expect-error destroy may not be typed in some builds
      lenis.destroy?.();
    };
  }, []);

  return <>{children}</>;
}
