import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh, Group } from "three";

function Lotus() {
  const group = useRef<Group>(null);
  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += dt * 0.25;
  });
  const petals = 12;
  return (
    <group ref={group}>
      {Array.from({ length: petals }).map((_, i) => {
        const a = (i / petals) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(a) * 1.1, 0, Math.sin(a) * 1.1]}
            rotation={[Math.PI / 2.3, 0, -a + Math.PI / 2]}
          >
            <coneGeometry args={[0.45, 1.4, 4]} />
            <meshStandardMaterial
              color="#c9692f"
              metalness={0.4}
              roughness={0.35}
              emissive="#3a1605"
              emissiveIntensity={0.3}
            />
          </mesh>
        );
      })}
      {Array.from({ length: petals }).map((_, i) => {
        const a = (i / petals) * Math.PI * 2 + Math.PI / petals;
        return (
          <mesh
            key={`o${i}`}
            position={[Math.cos(a) * 1.7, -0.1, Math.sin(a) * 1.7]}
            rotation={[Math.PI / 2.1, 0, -a + Math.PI / 2]}
          >
            <coneGeometry args={[0.5, 1.8, 4]} />
            <meshStandardMaterial
              color="#a23b1a"
              metalness={0.3}
              roughness={0.4}
              emissive="#2a0a02"
              emissiveIntensity={0.2}
            />
          </mesh>
        );
      })}
      <mesh position={[0, 0.2, 0]}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial
          color="#d4a017"
          metalness={0.85}
          roughness={0.2}
          emissive="#5a3a05"
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh position={[0, 0.85, 0]}>
        <torusGeometry args={[0.35, 0.08, 16, 32]} />
        <meshStandardMaterial
          color="#f0c850"
          metalness={0.95}
          roughness={0.15}
        />
      </mesh>
    </group>
  );
}

function Particle({ i }: { i: number }) {
  const ref = useRef<Mesh>(null);
  const radius = 2.4 + (i % 5) * 0.25;
  const speed = 0.15 + (i % 7) * 0.03;
  const offset = (i / 30) * Math.PI * 2;
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed + offset;
    ref.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t * 1.3) * 0.5,
      Math.sin(t) * radius,
    );
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.04, 8, 8]} />
      <meshBasicMaterial color="#f5d273" />
    </mesh>
  );
}

export default function MandalaScene() {
  return (
    <Canvas camera={{ position: [0, 1.5, 5], fov: 45 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[3, 4, 3]} intensity={1.4} color="#ffb96b" />
        <pointLight position={[-3, -2, -2]} intensity={0.6} color="#ff5c2b" />
        <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
          <Lotus />
        </Float>
        {Array.from({ length: 30 }).map((_, i) => (
          <Particle key={i} i={i} />
        ))}
        <Environment preset="sunset" />
      </Suspense>
    </Canvas>
  );
}
