import { motion } from "framer-motion";

/* Blueprint Grid — Hero background replacement for Stars
   Pure CSS/Framer Motion — zero asset dependencies */

const BlueprintGrid = () => (
  <div className="absolute inset-0 overflow-hidden bg-section">
    {/* Main CAD crosshatch grid */}
    <div className="cad-grid" />

    {/* Corner coordinate markers */}
    {[
      { top: "5%",  left:  "3%",  label: "0,0" },
      { bottom:"5%",left:  "3%",  label: "Y+300" },
    ].map((m) => (
      <div
        key={m.label}
        className="absolute text-[9px] font-mono text-blue-400/30 tracking-widest select-none"
        style={{ top: m.top, left: m.left, right: (m as any).right, bottom: m.bottom }}
      >
        {m.label}
      </div>
    ))}

    {/* Horizontal axis line */}
    <div
      className="absolute left-0 right-0 pointer-events-none"
      style={{
        top: "50%",
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.3) 20%, rgba(59,130,246,0.3) 80%, transparent)",
      }}
    />

    {/* Vertical axis line */}
    <div
      className="absolute top-0 bottom-0 pointer-events-none"
      style={{
        left: "50%",
        width: "1px",
        background: "linear-gradient(180deg, transparent, rgba(59,130,246,0.3) 20%, rgba(59,130,246,0.3) 80%, transparent)",
      }}
    />

    {/* Node dots at grid intersections (expanded) */}
    {[
      [10, 15], [90, 15], [50, 50], [10, 85], [90, 85],
      [25, 30], [75, 30], [25, 70], [75, 70],
      [5, 50], [95, 50],
    ].map(([x, y]) => (
      <motion.div
        key={`${x}-${y}`}
        className="absolute rounded-full pointer-events-none"
        style={{
          left: `${x}%`,
          top:  `${y}%`,
          width: 4,
          height: 4,
          marginLeft: -2,
          marginTop:  -2,
          background: "rgba(59,130,246,0.5)",
          boxShadow:  "0 0 6px rgba(59,130,246,0.4)",
        }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.5 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
      />
    ))}

    {/* Connector lines (updated for wider nodes) */}
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.12 }}
    >
      <line x1="10%" y1="15%" x2="50%" y2="50%" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4 6" />
      <line x1="90%" y1="15%" x2="50%" y2="50%" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4 6" />
      <line x1="10%" y1="85%" x2="50%" y2="50%" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4 6" />
      <line x1="90%" y1="85%" x2="50%" y2="50%" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4 6" />
    </svg>

    {/* Ambient glow pools — widened */}
    <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)" }} />
    <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)" }} />
  </div>
);

export default BlueprintGrid;
