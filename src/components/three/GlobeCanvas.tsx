"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export default function GlobeCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 4.6], fov: 50 }}>
      <color attach="background" args={["#030307"]} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 2, 3]} intensity={1.2} />
      <Stars radius={70} depth={50} count={1800} factor={1.4} fade speed={0.35} />
      {/* tiny moving particles only */}
      {Array.from({ length: 160 }).map((_, i) => (
        <mesh key={i} position={[Math.cos(i) * 2.8, Math.sin(i * 1.5) * 0.6, Math.sin(i) * 2.2]}>
          <sphereGeometry args={[0.015, 8, 8]} />
          <meshBasicMaterial color={i % 3 === 0 ? "#2448FF" : "#FF2B2B"} />
        </mesh>
      ))}
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
    </Canvas>
  );
}


