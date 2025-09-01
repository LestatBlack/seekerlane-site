"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

/** Fade + slide up on first view */
export function Reveal({ children, delay = 0 }: PropsWithChildren<{ delay?: number }>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

/** Parallax wrapper (content moves slower while scrolling) */
export function Parallax({ children, range = [-40, 40] }: PropsWithChildren<{ range?: [number, number] }>) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], range);
  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
}

/** Simple marquee (auto-scrolling row) */
export function Marquee({ children, speed = 25 }: PropsWithChildren<{ speed?: number }>) {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-8 whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        <div className="flex gap-8">{children}</div>
        <div className="flex gap-8" aria-hidden>{children}</div>
      </motion.div>
    </div>
  );
}
