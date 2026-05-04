import React from "react";
import { motion } from "framer-motion";

const MatrixGraph = () => {
  // Simulate contribution data
  const years = [2025, 2024];
  
  const generateGraphData = (year: number, days: number) => {
    return Array.from({ length: days }).map((_, i) => {
      if (year === 2025 && i > 150 && i < 210) return Math.floor(Math.random() * 3) + 2;
      if (year === 2024 && i > 120 && i < 180) return Math.floor(Math.random() * 3) + 2;
      const rand = Math.random();
      if (rand > 0.95) return 2;
      if (rand > 0.8) return 1;
      return 0;
    });
  };

  const levels = [
    "var(--matrix-level-0)",
    "var(--matrix-level-1)",
    "var(--matrix-level-2)",
    "var(--matrix-level-3)",
    "var(--accent)", // Accent
  ];

  return (
    <div className="w-full select-none">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
           <span className="dot-matrix text-[10px] font-bold text-accent tracking-[0.4em]">ACTIVITY_MATRIX</span>
        </div>
        <div className="flex items-center gap-1">
           {levels.map((color, i) => (
             <div key={i} className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
           ))}
        </div>
      </div>

      <div className="space-y-12">
        {years.map((year) => (
          <div key={year}>
            <div className="flex justify-between items-center mb-4">
              <span className="dot-matrix text-[10px] font-bold text-foreground/40 tracking-widest">{year}_RUNTIME</span>
              <span className="text-[8px] font-bold text-foreground/10 tracking-[0.5em] uppercase">SYSTEM_STABLE</span>
            </div>
            
            <div className="grid grid-cols-[repeat(auto-fill,minmax(8px,1fr))] gap-[3px]">
              {generateGraphData(year, 180).map((level, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.002 }}
                  whileHover={{ 
                    scale: 2,
                    backgroundColor: "var(--accent)",
                    zIndex: 20,
                    boxShadow: "0 0 15px var(--accent)",
                    transition: { duration: 0.1 }
                  }}
                  className="w-full aspect-square rounded-[1px] relative cursor-crosshair"
                  style={{ backgroundColor: levels[level] }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatrixGraph;
