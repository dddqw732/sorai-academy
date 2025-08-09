"use client";

import React, { useEffect } from "react";
import Lenis, { LenisOptions } from "@studio-freight/lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const options: Partial<LenisOptions> = {
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Do not lock body on mobile
      gestureOrientation: "vertical",
    };
    const lenis = new Lenis(options as LenisOptions);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      // restore default scrolling
      (lenis as unknown as { destroy?: () => void }).destroy?.();
    };
  }, []);

  return <>{children}</>;
}



