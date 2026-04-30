import { motion } from "framer-motion";

// Animated CSS Earth — no GLTF required
const EarthFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="relative w-52 h-52">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 opacity-20 blur-2xl animate-pulse" />

      {/* Spinning globe */}
      <motion.div
        className="relative w-full h-full rounded-full overflow-hidden border border-blue-400/25"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #1e40af, #0f766e 45%, #166534 80%, #052e16)",
          boxShadow:
            "0 0 40px rgba(59,130,246,0.25), inset -8px -8px 20px rgba(0,0,0,0.5), inset 4px 4px 12px rgba(255,255,255,0.08)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {/* Faux land masses (CSS blobs) */}
        <div
          className="absolute rounded-full opacity-70"
          style={{
            width: "45%", height: "35%",
            top: "20%", left: "25%",
            background: "#166534",
            filter: "blur(3px)",
          }}
        />
        <div
          className="absolute rounded-full opacity-60"
          style={{
            width: "30%", height: "40%",
            top: "45%", left: "55%",
            background: "#14532d",
            filter: "blur(4px)",
          }}
        />
        <div
          className="absolute rounded-full opacity-50"
          style={{
            width: "20%", height: "20%",
            top: "15%", left: "60%",
            background: "#065f46",
            filter: "blur(3px)",
          }}
        />
        {/* Specular highlight */}
        <div
          className="absolute rounded-full opacity-25"
          style={{
            width: "40%", height: "35%",
            top: "8%", left: "10%",
            background: "white",
            filter: "blur(10px)",
          }}
        />
      </motion.div>

      {/* Atmosphere ring */}
      <div
        className="absolute inset-[-6px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 70%, rgba(59,130,246,0.15) 85%, rgba(16,185,129,0.08) 100%)",
          border: "1px solid rgba(59,130,246,0.1)",
        }}
      />
    </div>
  </div>
);

// Main export — CSS globe for all screen sizes (no GLTF dependency)
const EarthCanvas = () => <EarthFallback />;

export { EarthFallback };
export default EarthCanvas;
