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
    desc: "Engineering Intern (Cert Available)",
    certificateUrl: "/portfolio/L&T%20Intership%20Certificate%20.pdf",
    type: "work" as const
  },
  { 
    id: "trichy" as const,
    name: "NIT Trichy", 
    pos: [0.8, 0.5, 2.3], 
    target: "#experience",
    desc: "Research Intern (Cert Available)",
    certificateUrl: "/portfolio/NIT%20Internship%20Certificate.pdf",
    type: "work" as const
  },
  { 
    id: "thanjavur" as const,
    name: "SASTRA University", 
    pos: [0.2, 0.1, 2.5], 
    target: "#about",
    desc: "Academic Foundation",
    certificateUrl: null,
    type: "academic" as const
  },
];

const Hotspot = ({ name, pos, target, desc, certificateUrl, type, onHover, pulse }: { name: string; pos: any; target: string; desc: string; certificateUrl: string | null; type: "work" | "academic"; onHover: (hovered: boolean) => void; pulse: number }) => {
  const [hovered, setHovered] = useState(false);
  const isClickable = !!certificateUrl;
  
  const handleClick = (e: any) => {
    e.stopPropagation();
    if (!isClickable) return;
    
    // Direct download with proper base path
    const link = document.createElement("a");
    link.href = certificateUrl;
    link.download = certificateUrl.split("/").pop() || "certificate.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <group position={pos}>
      <mesh 
        onClick={handleClick}
        onPointerOver={() => { setHovered(true); onHover(true); }}
        onPointerOut={() => { setHovered(false); onHover(false); }}
      >
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial 
          color={isClickable ? (hovered ? "#60a5fa" : "#3b82f6") : "#1e293b"} 
          transparent 
          opacity={isClickable ? 1 : 0.6}
        />
      </mesh>
      
      {/* Outer pulse */}
      <mesh scale={hovered ? 2.2 : 1.6}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial 
          color={isClickable ? "#3b82f6" : "#475569"} 
          transparent 
          opacity={isClickable ? (hovered ? 0.4 : 0.2) : 0.1} 
        />
      </mesh>

      {/* Pulsing ring for clickable nodes */}
      {isClickable && (
        <mesh scale={1.8 + pulse * 0.4}>
          <ringGeometry args={[0.09, 0.1, 32]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.3 * (1 - pulse)} side={THREE.DoubleSide} />
        </mesh>
      )}

      {hovered && (
        <Html distanceFactor={10} zIndexRange={[100, 0]}>
          <div className={`backdrop-blur-md p-3 rounded-lg shadow-xl pointer-events-none whitespace-nowrap border ${isClickable ? 'bg-white/95 border-blue-500/20 shadow-blue-500/10' : 'bg-slate-900/90 border-slate-500/20 shadow-slate-900/40'}`}>
            <p className={`${isClickable ? 'text-blue-600' : 'text-slate-300'} text-[10px] font-bold uppercase tracking-tighter mb-0.5`}>{name}</p>
            <p className={`${isClickable ? 'text-slate-600' : 'text-slate-400'} text-[9px] font-medium`}>
              {isClickable ? "Click to Download Certificate" : "Academic Foundation"}
            </p>
          </div>
        </Html>
      )}
    </group>
  );
};

const GlobeModel = ({ onHoverNode }: { onHoverNode: (id: string | null) => void }) => {
  const isMobile = window.innerWidth < 768;
  const meshRef = useRef<THREE.Mesh>(null);
  const geometry = useMemo(() => {
    // Significantly lower resolution for mobile to prevent loading hangups
    return new THREE.SphereGeometry(2.5, isMobile ? 20 : 32, isMobile ? 14 : 24);
  }, [isMobile]);
  
  const [pulse, setPulse] = useState(0);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
    }
    setPulse(Math.sin(state.clock.getElapsedTime() * 4) * 0.5 + 0.5);
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
          <Hotspot 
            key={i} 
            {...h} 
            pulse={pulse}
            onHover={(isHovered) => onHoverNode(isHovered ? h.id : null)}
          />
        ))}
      </mesh>

      {/* 3. Inner Glow & Atmosphere */}
      <mesh>
        <sphereGeometry args={[2.45, isMobile ? 12 : 32, isMobile ? 8 : 24]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.08} />
      </mesh>
      
      {/* 4. Holographic Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.8, 0.01, 16, 100]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.1} />
      </mesh>
    </group>
  );
};

const EarthCanvas = () => {
  const isMobile = window.innerWidth < 768;
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div className={`w-full h-full ${hoveredNode ? (hotspots.find(h => h.id === hoveredNode)?.certificateUrl ? 'cursor-pointer' : 'cursor-default') : 'cursor-pointer'}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ 
          antialias: !isMobile,
          alpha: true, 
          powerPreference: "high-performance",
          preserveDrawingBuffer: true 
        }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
        <GlobeModel onHoverNode={setHoveredNode} />
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

