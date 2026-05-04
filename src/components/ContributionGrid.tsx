import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const GAP = 3;
const ROWS = 12; // Higher density for a more technical "Engineering" look

const ContributionGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ dotSize: 8, cols: 40 });

  useEffect(() => {
    const calculate = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      // Calculate dot size based on fixed rows to fill height
      const dotSize = Math.max(4, Math.floor((height - GAP * (ROWS - 1)) / ROWS));
      // Calculate how many columns fit in the width
      const cols = Math.max(1, Math.floor((width + GAP) / (dotSize + GAP)));
      setDims({ dotSize, cols });
    };

    calculate();
    const ro = new ResizeObserver(calculate);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const total = dims.cols * ROWS;

  // Generate a more "structured" data pattern (simulating peaks of activity)
  const data = useMemo(() => {
    return Array.from({ length: total }, (_, i) => {
      const col = Math.floor(i / ROWS);
      const row = i % ROWS;
      
      // Create some "waves" or "clusters" of activity
      const seed = Math.sin(col * 0.5) * Math.cos(row * 0.5);
      const random = Math.random();
      
      if (seed > 0.6 && random > 0.4) return 4;
      if (seed > 0.3 && random > 0.5) return 3;
      if (random > 0.95) return 4; // Sparkles
      if (random > 0.85) return 3;
      if (random > 0.70) return 2;
      if (random > 0.40) return 1;
      return 0;
    });
  }, [total, dims.cols]);

  const levels = [
    'var(--matrix-level-0)',
    'var(--matrix-level-1)',
    'var(--matrix-level-2)',
    'var(--matrix-level-3)',
    'var(--accent)',
  ];

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-end' // Align to right to match the text alignment in footer
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${dims.cols}, ${dims.dotSize}px)`,
          gridTemplateRows: `repeat(${ROWS}, ${dims.dotSize}px)`,
          gridAutoFlow: 'column',
          gap: `${GAP}px`,
        }}
      >
        {data.map((level, i) => {
          const isHigh = level >= 3;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={isHigh ? { 
                opacity: [0.4, 1, 0.4],
                boxShadow: [
                  '0 0 0px var(--accent)',
                  '0 0 4px var(--accent)',
                  '0 0 0px var(--accent)'
                ] 
              } : {}}
              transition={isHigh ? {
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              } : {
                delay: Math.min(i * 0.0002, 0.4),
                duration: 0.2,
              }}
              whileHover={{
                scale: 1.5,
                backgroundColor: 'var(--accent)',
                zIndex: 10,
                boxShadow: '0 0 12px var(--accent)',
                transition: { duration: 0.1 },
              }}
              style={{
                width: `${dims.dotSize}px`,
                height: `${dims.dotSize}px`,
                backgroundColor: levels[Math.min(level, 4)],
                borderRadius: '2px',
                cursor: 'crosshair',
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContributionGrid;
