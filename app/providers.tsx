"use client";

import { useEffect } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: any;
    let rafId: number;

    (async () => {
      try {
        const { default: Lenis } = await import("lenis"); // loaded only in the browser
        lenis = new Lenis({
          duration: 1.0,      // try 0.8–1.2 to taste
          smoothWheel: true,
          smoothTouch: false, // leave false so mobile stays snappy
          easing: (t: number) => 1 - Math.pow(1 - t, 2), // easeOutQuad
        });

        const raf = (time: number) => {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      } catch (e) {
        // If lenis isn't installed, silently keep normal scroll
        console.warn("Lenis not active:", e);
      }
    })();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      // lenis?.destroy?.(); // only if the version supports destroy()
    };
  }, []);

  return <>{children}</>;
}
