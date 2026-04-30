import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";

const hotspots = [
  { 
    id: "chennai" as const,
    name: "L&T - ClimaNEX AI", 
    pos: [1.2, 1.4, 2], 
    target: "#experience",
    desc: "Hyper-local Weather Forecasting" 
  },
  { 
    id: "trichy" as const,
    name: "NIT Trichy", 
    pos: [0.8, 0.5, 2.3], 
    target: "#experience",
    desc: "Driver Behavior Analysis" 
  },
  { 
    id: "thanjavur" as const,
    name: "SASTRA University", 
    pos: [0.2, 0.1, 2.5], 
    target: "#about",
    desc: "B.Tech Civil Engineering (2022-2026)" 
  },
];

const Hotspot = ({ name, pos, target, desc }: { name: string; pos: any; target: string; desc: string }) => {
  const [hovered, setHovered] = useState(false);
  
  const handleClick = () => {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <group position={pos}>
      <mesh 
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color={hovered ? "#60a5fa" : "#3b82f6"} />
      </mesh>
      
      {/* Outer pulse */}
      <mesh scale={hovered ? 2 : 1.5}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.2} />
      </mesh>

      {hovered && (
        <Html distanceFactor={10}>
          <div className="bg-white/95 border border-blue-500/20 backdrop-blur-md p-3 rounded-lg shadow-xl shadow-blue-500/10 pointer-events-none whitespace-nowrap">
            <p className="text-blue-600 text-[10px] font-bold uppercase tracking-tighter mb-0.5">{name}</p>
            <p className="text-slate-600 text-[9px] font-medium">{desc}</p>
          </div>
        </Html>
      )}
    </group>
  );
};

const GlobeModel = () => {
  const isMobile = window.innerWidth < 768;
  const meshRef = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => {
    // Significantly lower resolution for mobile to prevent loading hangups
    return new THREE.SphereGeometry(2.5, isMobile ? 20 : 32, isMobile ? 14 : 24);
  }, [isMobile]);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
    }
  });

  return (
    <group>
      {/* 1. Boundary Circle - Blue */}
      <mesh>
        <ringGeometry args={[2.55, 2.58, isMobile ? 32 : 64]} />
        <meshBasicMaterial color="#3b82f6" side={THREE.DoubleSide} transparent opacity={0.4} />
      </mesh>

      {/* 2. Main Wireframe - Blue */}
      <mesh ref={meshRef}>
        <primitive object={geometry} attach="geometry" />
        <meshBasicMaterial 
          color="#3b82f6" 
          wireframe 
          transparent 
          opacity={0.35}
        />
        
        {/* Project Hotspots attached to the rotating globe */}
        {hotspots.map((h, i) => (
          <Hotspot key={i} {...h} />
        ))}
      </mesh>

      {/* 3. Inner Glow */}
      <mesh>
        <sphereGeometry args={[2.45, isMobile ? 12 : 32, isMobile ? 8 : 24]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.05} />
      </mesh>
    </group>
  );
};

const EarthCanvas = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <div className="w-full h-full cursor-pointer">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ 
          antialias: !isMobile, // Disable antialiasing on mobile for performance
          alpha: true, 
          powerPreference: "high-performance",
          preserveDrawingBuffer: true 
        }}
        dpr={isMobile ? [1, 1.5] : [1, 2]} // Lower DPR on mobile
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
        <GlobeModel />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false}
          rotateSpeed={0.4}
        />
      </Canvas>
    </div>
  );
};

const EarthFallback = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900/10 backdrop-blur-sm rounded-3xl">
     <div className="relative w-32 h-32 flex items-center justify-center">
       {/* Animated pulse rings */}
       <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-ping" />
       <div className="absolute inset-4 rounded-full border-2 border-blue-500/10 animate-pulse" />
       <div className="w-20 h-20 rounded-full border-2 border-t-blue-500 border-r-blue-500/30 border-b-blue-500/10 border-l-blue-500/30 animate-spin" />
     </div>
     <p className="mt-6 text-[10px] text-blue-500 font-black uppercase tracking-[0.3em] animate-pulse">Initializing Interface</p>
  </div>
);

export { EarthFallback };
export default EarthCanvas;

