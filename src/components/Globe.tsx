import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Trail, OrbitControls } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function Earth() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.15;
  });

  return (
    <Sphere ref={ref} args={[1.8, 64, 64]}>
      <meshStandardMaterial
        color="#95B6C9"
        roughness={0.8}
        metalness={0.1}
      />
    </Sphere>
  );
}

function Continents() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.15;
  });

  // Simple continent-like patches using small spheres
  const patches = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = 0; i < 60; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = 1.82;
      positions.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ]);
    }
    return positions;
  }, []);

  return (
    <group ref={ref}>
      {patches.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.08 + Math.random() * 0.12, 8, 8]} />
          <meshStandardMaterial color="#D1B9A1" roughness={1} />
        </mesh>
      ))}
    </group>
  );
}

function Airplane() {
  const ref = useRef<THREE.Group>(null);
  const t = useRef(0);

  useFrame((_, delta) => {
    t.current += delta * 0.3;
    if (ref.current) {
      const radius = 2.6;
      const x = Math.cos(t.current) * radius;
      const z = Math.sin(t.current) * radius;
      const y = Math.sin(t.current * 2) * 0.4;
      ref.current.position.set(x, y, z);
      ref.current.lookAt(
        Math.cos(t.current + 0.1) * radius,
        Math.sin((t.current + 0.1) * 2) * 0.4,
        Math.sin(t.current + 0.1) * radius
      );
    }
  });

  return (
    <Trail
      width={0.3}
      length={8}
      color="#D1B9A1"
      attenuation={(w) => w * w}
    >
      <group ref={ref}>
        {/* Simple airplane shape */}
        <mesh>
          <coneGeometry args={[0.08, 0.35, 4]} />
          <meshStandardMaterial color="#BFAA91" />
        </mesh>
        {/* Wings */}
        <mesh rotation={[0, 0, Math.PI / 2]} position={[0, -0.05, 0]}>
          <boxGeometry args={[0.02, 0.5, 0.12]} />
          <meshStandardMaterial color="#BFAA91" />
        </mesh>
      </group>
    </Trail>
  );
}

const Globe = () => {
  return (
    <div className="w-full h-[300px] md:h-[420px] relative">
      <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <Earth />
        <Continents />
        <Airplane />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  );
};

export default Globe;
