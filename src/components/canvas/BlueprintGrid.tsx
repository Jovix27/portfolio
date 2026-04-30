import { motion } from "framer-motion";

/* Blueprint Grid — Hero background replacement for Stars
   Pure CSS/Framer Motion — zero asset dependencies */

const BlueprintGrid = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Main CAD crosshatch grid */}
    <div className="cad-grid" />

    {/* Corner coordinate markers */}
    {[
      { top: "5%",  left:  "3%",  label: "0,0" },
      { top: "5%",  right: "3%",  label: "X+400" },
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
        background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.18) 20%, rgba(59,130,246,0.18) 80%, transparent)",
      }}
    />

    {/* Vertical axis line */}
    <div
      className="absolute top-0 bottom-0 pointer-events-none"
      style={{
        left: "50%",
        width: "1px",
        background: "linear-gradient(180deg, transparent, rgba(59,130,246,0.18) 20%, rgba(59,130,246,0.18) 80%, transparent)",
      }}
    />

    {/* Node dots at grid intersections (large) */}
    {[
      [20, 25], [80, 25], [50, 50], [20, 75], [80, 75],
      [35, 38], [65, 38], [35, 62], [65, 62],
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

    {/* Connector lines between nodes */}
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.12 }}
    >
      <line x1="20%" y1="25%" x2="50%" y2="50%" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4 6" />
      <line x1="80%" y1="25%" x2="50%" y2="50%" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4 6" />
      <line x1="20%" y1="75%" x2="50%" y2="50%" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4 6" />
      <line x1="80%" y1="75%" x2="50%" y2="50%" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4 6" />
      <line x1="35%" y1="38%" x2="65%" y2="38%" stroke="#10b981" strokeWidth="0.5" strokeDasharray="4 6" />
      <line x1="35%" y1="62%" x2="65%" y2="62%" stroke="#10b981" strokeWidth="0.5" strokeDasharray="4 6" />
      <line x1="35%" y1="38%" x2="35%" y2="62%" stroke="#10b981" strokeWidth="0.5" strokeDasharray="4 6" />
      <line x1="65%" y1="38%" x2="65%" y2="62%" stroke="#10b981" strokeWidth="0.5" strokeDasharray="4 6" />
    </svg>

    {/* Ambient glow pools — replaces old radial space glows */}
    <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)" }} />
    <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)" }} />
  </div>
);

export default BlueprintGrid;
