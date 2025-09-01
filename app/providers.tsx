"use client";
import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
      duration: 1.1,
      easing: t => 1 - Math.pow(1 - t, 2) // easeOutQuad
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => { /* cleanup */ (lenis as any).destroy?.(); };
  }, []);

  return <>{children}</>;
}
