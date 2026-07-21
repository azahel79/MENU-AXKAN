"use client";

import { MotionConfig } from "framer-motion";
import Lenis from "lenis";
import { useEffect } from "react";

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const media = window.matchMedia("(min-width: 900px) and (prefers-reduced-motion: no-preference)");
    let lenis: Lenis | null = null;

    const sync = () => {
      lenis?.destroy();
      lenis = null;
      if (!media.matches) return;
      lenis = new Lenis({
        autoRaf: true,
        anchors: true,
        duration: 0.9,
        smoothWheel: true,
        wheelMultiplier: 0.88,
        stopInertiaOnNavigate: true,
      });
    };

    sync();
    media.addEventListener("change", sync);
    return () => {
      media.removeEventListener("change", sync);
      lenis?.destroy();
    };
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}