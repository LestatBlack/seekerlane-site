"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Create the Lenis instance
    const lenis = new Lenis({
      // how long the smoothing lasts (lower = snappier, higher = floatier)
      duration: 1.0,
      // quadratic ease-out
      easing: (t: number) => 1 - Math.pow(1 - t, 2),
      // enable smooth wheel scrolling on desktop
      smoothWheel: true,
      // make the wheel slightly more “powerful” so it feels quicker
      wheelMultiplier: 1.2,
      // default touch behavior; keep as-is (don’t add smoothTouch, it’s not in types)
      touchMultiplier: 1,
    });

    // RAF loop
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // cleanup
    return () => {
      cancelAnimationFrame(rafId);
      // @ts-expect-error destroy may not be typed in some builds
      lenis.destroy?.();
    };
  }, []);

  return <>{children}</>;
}
