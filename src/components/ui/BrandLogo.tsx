"use client";

import Image from "next/image";
import React from "react";

export default function BrandLogo({ size = 32 }: { size?: number }) {
  const [srcIndex, setSrcIndex] = React.useState<number>(0);
  // Try PNG first (as provided), then GIF, then SVG from /public
  const sources = React.useMemo(() => ["/logo.png", "/logo.gif", "/logo.svg"], []);
  const src = sources[srcIndex] ?? "/logo.svg";
  const unoptimized = src.endsWith(".gif");

  return (
    <Image
      src={src}
      alt="Sorai Academy"
      width={size}
      height={size}
      priority
      unoptimized={unoptimized}
      className="rounded object-cover"
      onError={() => setSrcIndex((i) => Math.min((i as number) + 1, sources.length - 1))}
    />
  );
}


