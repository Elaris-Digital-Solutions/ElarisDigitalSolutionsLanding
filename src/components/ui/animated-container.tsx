"use client";

import * as React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export type ViewAnimationProps = {
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

export default function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = React.useRef<HTMLDivElement | null>(null);

  const [rootEl, setRootEl] = React.useState<HTMLElement | null>(null);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const el =
      document.getElementById("app-scroll-container") ||
      document.getElementById("__next") ||
      document.querySelector("main");
    if (el instanceof HTMLElement) {
      setRootEl(el);
    }
  }, []);

  // Convert HTMLElement to the expected RefObject by using a callback ref wrapper
  const rootRef = React.useMemo(() => ({ current: rootEl }) as React.RefObject<Element>, [rootEl]);

  const isInView = useInView(ref, {
    root: rootRef,
    amount: 0.3,
    once: false,
  });

  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      animate={isInView ? { filter: "blur(0px)", translateY: 0, opacity: 1 } : {}}
      transition={{ delay, duration: 0.8, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
