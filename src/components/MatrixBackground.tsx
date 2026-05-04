import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MatrixBackground = () => {
  const [dots, setDots] = useState<{ id: number; top: string; left: string; delay: number; isRed: boolean }[]>([]);

  useEffect(() => {
    // Generate scattered points that will pulse
    const newDots = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      top: `${Math.floor(Math.random() * 100)}%`,
      left: `${Math.floor(Math.random() * 100)}%`,
      delay: Math.random() * 15,
      isRed: Math.random() > 0.95, // 5% chance of being a red dot
      isGreen: Math.random() > 0.90 && Math.random() <= 0.95, // 5% chance of being green
    }));
    setDots(newDots);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-bg-base" aria-hidden>
      {/* Nothing OS Dot Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.6]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, var(--matrix-dot) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Pulsing Dots */}
      <div className="absolute inset-0">
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            style={{ 
              top: dot.top, 
              left: dot.left,
              backgroundColor: dot.isRed ? "var(--accent)" : (dot.isGreen ? "var(--accent)" : "currentColor"),
            }}
            className={`absolute w-1 h-1 rounded-full ${dot.isRed || dot.isGreen ? "" : "text-foreground"}`}
            animate={{
              opacity: [0, dot.isRed ? 0.6 : 0.2, 0],
              scale: [0.8, dot.isRed ? 1.5 : 1.2, 0.8],
            }}
            transition={{
              duration: dot.isRed ? 3 : 6,
              repeat: Infinity,
              delay: dot.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Subtle CRT Scanline Effect */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="w-full h-full" style={{
          background: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
          backgroundSize: "100% 2px, 3px 100%",
        }} />
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-base/80" />
    </div>
  );
};

export default MatrixBackground;
