import React, { useRef, useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const GAP = 4;
const PADDING = 16;
const TARGET_COLS = 32; // Reduced from 48 for 33% fewer dots

const MatrixGraph = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ dotSize: 10, rows: 10, cols: TARGET_COLS });

  useEffect(() => {
    const calculate = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      const inner_w = width - PADDING * 2;
      const inner_h = height - PADDING * 2;
      // Dot size is derived from container width so dots exactly fill it
      const dotSize = Math.max(6, Math.floor((inner_w - GAP * (TARGET_COLS - 1)) / TARGET_COLS));
      // Rows: how many fit vertically with that dot size
      const rows = Math.max(1, Math.floor((inner_h + GAP) / (dotSize + GAP)));
      setDims({ dotSize, rows, cols: TARGET_COLS });
    };

    calculate();
    const ro = new ResizeObserver(calculate);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const total = dims.cols * dims.rows;

  const data = useMemo(() => {
    return Array.from({ length: total }, (_, i) => {
      const col = Math.floor(i / dims.rows);
      // Activity burst columns for visual rhythm
      if (col > 28 && col < 38) return Math.floor(Math.random() * 2) + 3;
      if (col > 42 && col < 47) return Math.floor(Math.random() * 2) + 2;
      const r = Math.random();
      if (r > 0.93) return 4;
      if (r > 0.76) return 3;
      if (r > 0.54) return 2;
      if (r > 0.28) return 1;
      return 0;
    });
  }, [total, dims.cols, dims.rows]);

  const levels = [
    "var(--matrix-level-0)",
    "var(--matrix-level-1)",
    "var(--matrix-level-2)",
    "var(--matrix-level-3)",
    "var(--accent)",
  ];

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        padding: `${PADDING}px`,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          /* Fixed dot size derived from width — uniform squares, no stretching */
          gridTemplateColumns: `repeat(${dims.cols}, ${dims.dotSize}px)`,
          gridTemplateRows: `repeat(${dims.rows}, ${dims.dotSize}px)`,
          gridAutoFlow: "column",
          gap: `${GAP}px`,
        }}
      >
        {data.map((level, i) => {
          const isHigh = level >= 3;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px" }}
              animate={isHigh ? { opacity: [0.4, 1, 0.4] } : {}}
              transition={isHigh ? {
                duration: 4,
                repeat: Infinity,
                delay: (i * 0.05) % 4,
                ease: "easeInOut",
              } : {
                delay: Math.min(i * 0.001, 0.4),
                duration: 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.8,
                backgroundColor: "var(--accent)",
                zIndex: 10,
                boxShadow: "0 0 10px var(--accent)",
                transition: { duration: 0.07 },
              }}
              style={{
                width: `${dims.dotSize}px`,
                height: `${dims.dotSize}px`,
                backgroundColor: levels[Math.min(level, 4)],
                borderRadius: `${Math.max(2, Math.round(dims.dotSize * 0.25))}px`,
                cursor: "crosshair",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MatrixGraph;
