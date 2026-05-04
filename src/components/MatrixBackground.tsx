import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MatrixBackground = () => {
  const [dots, setDots] = useState<{ id: number; top: string; left: string; delay: number; opacity: number; color: string }[]>([]);

  useEffect(() => {
    // Generate a high-density "Trae" style dithered background
    // Using 150 points for a rich organic feel without performance hits
    const newDots = Array.from({ length: 200 }).map((_, i) => {
      const leftNum = Math.random() * 100;
      const topNum = Math.random() * 100;
      
      // Diagonal wave logic: points are more likely to be green if they sit on a diagonal band
      // (top + left) / 2 is the diagonal position
      const diag = (topNum + leftNum) / 2;
      const isNearWave = diag > 40 && diag < 75;
      const isGreen = isNearWave ? Math.random() > 0.7 : Math.random() > 0.98;

      return {
        id: i,
        top: `${topNum}%`,
        left: `${leftNum}%`,
        delay: Math.random() * 20,
        opacity: isGreen ? Math.random() * 0.5 + 0.2 : Math.random() * 0.12 + 0.05,
        color: isGreen ? "#00FF85" : "var(--foreground)",
      };
    });
    setDots(newDots);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-bg-base" aria-hidden>
      {/* 1. Base Nothing OS Dot Grid (Static) */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* 2. Trae-style Dithered Flow (Pulsing) */}
      <div className="absolute inset-0">
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            style={{ 
              top: dot.top, 
              left: dot.left,
              backgroundColor: dot.color,
            }}
            className="absolute w-[3px] h-[3px] rounded-sm"
            animate={{
              opacity: [0, dot.opacity * 2, 0],
              scale: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: dot.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* 3. Subtle Animated Grain / Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-30">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* 4. Large Soft Radial Glows (matches the reference image's lighting) */}
      <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] opacity-40 dark:opacity-20" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-foreground/5 rounded-full blur-[120px] opacity-20" />

      {/* 5. Bottom Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-base/90" />
    </div>
  );
};

export default MatrixBackground;
