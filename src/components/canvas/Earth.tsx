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
          color={isClickable ? (hovered ? "#ffb800" : "#ffb800") : "#444"} 
          transparent 
          opacity={isClickable ? 1 : 0.6}
        />
      </mesh>
      
      {/* Outer pulse */}
      <mesh scale={hovered ? 2.5 : 1.8}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial 
          color="#ffb800" 
          transparent 
          opacity={isClickable ? (hovered ? 0.3 : 0.1) : 0.05} 
        />
      </mesh>

      {/* Pulsing ring for clickable nodes */}
      {isClickable && (
        <mesh scale={1.8 + pulse * 0.5}>
          <ringGeometry args={[0.09, 0.11, 32]} />
          <meshBasicMaterial color="#ffb800" transparent opacity={0.4 * (1 - pulse)} side={THREE.DoubleSide} />
        </mesh>
      )}

      {hovered && (
        <Html distanceFactor={10} zIndexRange={[100, 0]}>
          <div className="bg-black/90 backdrop-blur-md p-4 border border-accent/20 rounded-none shadow-2xl pointer-events-none whitespace-nowrap">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-1 h-1 bg-accent" />
              <p className="dot-matrix text-accent text-[10px] font-black uppercase tracking-widest">{name}</p>
            </div>
            <p className="text-white/40 text-[9px] font-bold uppercase tracking-tight">
              {isClickable ? "SYSTEM ACCESS: DOWNLOAD CREDENTIAL" : "DATA NODE: ACADEMIC RECORD"}
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
  const secondaryMeshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => new THREE.SphereGeometry(2.5, isMobile ? 16 : 48, isMobile ? 12 : 32), [isMobile]);
  const innerGeometry = useMemo(() => new THREE.SphereGeometry(2.48, isMobile ? 12 : 24, isMobile ? 8 : 16), [isMobile]);
  
  const [pulse, setPulse] = useState(0);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = time * (isMobile ? 0.08 : 0.1);
    }
    if (secondaryMeshRef.current) {
      secondaryMeshRef.current.rotation.y = -time * 0.05;
      secondaryMeshRef.current.rotation.z = time * 0.02;
    }
    setPulse(Math.sin(time * 3) * 0.5 + 0.5);
  });

  return (
    <group>
      {/* 1. Main Wireframe - Accent Amber */}
      <mesh ref={meshRef}>
        <primitive object={geometry} attach="geometry" />
        <meshBasicMaterial 
          color="#ffb800" 
          wireframe 
          transparent 
          opacity={isMobile ? 0.2 : 0.25}
        />
        
        {/* Project Hotspots */}
        {hotspots.map((h, i) => (
          <Hotspot 
            key={i} 
            {...h} 
            pulse={pulse}
            onHover={(isHovered) => onHoverNode(isHovered ? h.id : null)}
          />
        ))}
      </mesh>

      {/* 2. Secondary Tech Wireframe - Subtle Blue/Grey */}
      {!isMobile && (
        <mesh ref={secondaryMeshRef}>
          <primitive object={innerGeometry} attach="geometry" />
          <meshBasicMaterial 
            color="#3b82f6" 
            wireframe 
            transparent 
            opacity={0.08}
          />
        </mesh>
      )}

      {/* 3. Outer Atmosphere Glow */}
      <mesh>
        <sphereGeometry args={[2.55, 32, 32]} />
        <meshBasicMaterial color="#ffb800" transparent opacity={0.03} side={THREE.BackSide} />
      </mesh>

      {/* 4. Scanning Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, Math.sin(pulse * Math.PI) * (isMobile ? 0.05 : 0.1), 0]}>
        <torusGeometry args={[2.7, 0.005, 16, 100]} />
        <meshBasicMaterial color="#ffb800" transparent opacity={isMobile ? 0.15 : 0.2} />
      </mesh>

      {/* 5. Experience Narrative Text inside Globe - Optimized Position */}
      <Html position={[0, 0, 0]} center>
        <div className="flex flex-col items-center justify-center gap-2 pointer-events-none">
          <div className={`dot-matrix ${isMobile ? 'text-[8px]' : 'text-[10px]'} text-white font-black uppercase tracking-[0.4em] whitespace-nowrap bg-black/60 px-6 py-2.5 backdrop-blur-xl border border-white/20 transition-opacity duration-500 shadow-[0_0_40px_rgba(255,255,255,0.05)]`}>
            EXPLORE MY EXPERIENCE
          </div>
          <div className="h-[1px] w-12 bg-accent" />
        </div>
      </Html>
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

export default EarthCanvas;

