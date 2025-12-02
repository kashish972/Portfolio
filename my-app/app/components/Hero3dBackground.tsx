"use client";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function Hero3DBackground() {
  return (
    <Canvas
      className="absolute inset-0 -z-10"
      camera={{ position: [0, 0, 10], fov: 75 }}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.5} color="white" />

      {/* Optional Point Lights for depth */}
      <pointLight position={[10, 10, 10]} intensity={0.3} />
      <pointLight position={[-10, -10, 10]} intensity={0.3} />

      {/* Starfield */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />
    </Canvas>
  );
}
