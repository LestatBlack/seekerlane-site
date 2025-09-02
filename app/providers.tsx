// app/providers.tsx
"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Respect users that prefer reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      smoothWheel: true,    // mouse wheel feels smooth
      lerp: 0.1,            // easing
      duration: 1.1,        // ~ how "glidey" the scroll feels
      touchMultiplier: 1.2, // a tiny boost on touch devices
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
