"use client";
import { useEffect } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Lazy-load Lenis to keep initial bundle smaller
    import("lenis").then(({ default: Lenis }) => {
      const lenis = new Lenis({
        smoothWheel: true,
        syncTouch: true,
        // keep defaults light; don’t over-tune
      });

      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);

      return () => {
        // @ts-ignore
        lenis?.destroy?.();
      };
    });
  }, []);

  return <>{children}</>;
}
