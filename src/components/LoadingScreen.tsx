import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const steps = [18, 42, 65, 85, 100];
    let i = 0;
    const tick = () => {
      if (i >= steps.length) { setTimeout(onComplete, 350); return; }
      setProgress(steps[i++]);
      setTimeout(tick, 260 + Math.random() * 180);
    };
    const t = setTimeout(tick, 80);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ backgroundColor: "#050816" }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#3b82f6 1px,transparent 1px),linear-gradient(90deg,#3b82f6 1px,transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/6 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-emerald-600/5 blur-[100px] pointer-events-none" />

      {/* Logo */}
      <motion.div
        className="flex flex-col items-center gap-3 mb-12"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-4">
          <motion.span
            className="text-5xl font-black text-white/12 select-none leading-none"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.55 }}
          >[</motion.span>

          <span
            className="text-5xl md:text-6xl font-black tracking-tight"
            style={{
              background: "linear-gradient(90deg,#3b82f6,#10b981)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            JA
          </span>

          <motion.span
            className="text-5xl font-black text-white/12 select-none leading-none"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.55 }}
          >]</motion.span>
        </div>

        <motion.p
          className="text-xs text-white/30 uppercase tracking-[0.3em] font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          AI + BIM Engineer
        </motion.p>
      </motion.div>

      {/* Progress */}
      <motion.div
        className="w-60 md:w-72"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38, duration: 0.5 }}
      >
        <div
          className="relative h-[2px] w-full rounded-full overflow-hidden"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ background: "linear-gradient(90deg,#3b82f6,#10b981)" }}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-loading-bar" />
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <span className="text-[10px] text-white/25 uppercase tracking-widest font-medium">
            Initialising
          </span>
          <span className="text-[10px] font-mono text-blue-400/70">{progress}%</span>
        </div>
      </motion.div>

      {/* Pulse dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        {[0,1,2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "rgba(59,130,246,0.45)" }}
            animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.25, 0.8] }}
            transition={{ duration: 1.3, repeat: Infinity, delay: i * 0.22 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
