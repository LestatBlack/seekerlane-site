"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Create Lenis instance (minimal, fast config)
    const lenis = new Lenis({
      duration: 1,        // 0.8–1.2 feels nice
      smoothWheel: true,  // wheel smoothing on desktop
      // no smoothTouch — keep mobile snappy
      easing: (t: number) => 1 - Math.pow(1 - t, 2), // easeOutQuad
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      // Type-safe guard: destroy exists in runtime, but typings vary
      (lenis as unknown as { destroy?: () => void }).destroy?.();
    };
  }, []);

  return <>{children}</>;
}
