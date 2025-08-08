"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function TiltCard({ children, className }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [10, -10]);
  const rotateY = useTransform(x, [-50, 50], [-10, 10]);
  const rxs = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const rys = useSpring(rotateY, { stiffness: 200, damping: 20 });

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    x.set(px);
    y.set(py);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ rotateX: rxs, rotateY: rys, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={className}
    >
      {children}
    </motion.div>
  );
}


