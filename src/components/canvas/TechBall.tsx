import { motion } from "framer-motion";

interface TechBallCanvasProps {
  icon: string;   // kept for API compatibility — unused (no asset dependency)
  label?: string;
  color?: string;
}

// Pure CSS/Framer floating sphere — no texture loading, no Three.js required
const TechBallCanvas = ({ label = "", color = "#3b82f6" }: TechBallCanvasProps) => {
  const initials = label
    .split(/[\s.]+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <motion.div
      className="w-full h-full flex items-center justify-center"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        className="w-20 h-20 rounded-full relative flex items-center justify-center select-none"
        style={{
          background: `radial-gradient(circle at 35% 35%, ${color}60, ${color}18 60%, ${color}08)`,
          border: `1.5px solid ${color}50`,
          boxShadow: `0 0 18px ${color}25, inset 0 1px 0 ${color}40`,
        }}
      >
        {/* Specular highlight (liquid glass sheen) */}
        <div
          className="absolute top-2 left-3 w-6 h-3 rounded-full opacity-40 blur-[2px]"
          style={{ background: "white" }}
        />
        <span
          className="text-sm font-bold z-10"
          style={{ color, textShadow: `0 0 8px ${color}80` }}
        >
          {initials}
        </span>
      </div>
    </motion.div>
  );
};

export default TechBallCanvas;
