"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import * as THREE from "three";

function FloatingNodes() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[3.5, 1, -3]}>
          <icosahedronGeometry args={[2, 1]} />
          <meshStandardMaterial
            color="#38bdf8"
            wireframe
            transparent
            opacity={0.2}
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-3.5, -1.5, -4]}>
          <torusGeometry args={[1.8, 0.35, 16, 50]} />
          <meshStandardMaterial
            color="#818cf8"
            wireframe
            transparent
            opacity={0.15}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function Hero3DBackground() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-gray-950 to-black overflow-hidden">
      <Canvas
        className="w-full h-full pointer-events-none"
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ pointerEvents: "none" }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#38bdf8" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#c084fc" />

        <Stars
          radius={80}
          depth={50}
          count={3500}
          factor={4}
          saturation={0.5}
          fade
          speed={1.5}
        />

        <FloatingNodes />
      </Canvas>
    </div>
  );
}
