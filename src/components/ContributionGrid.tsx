import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

const ContributionGrid = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Generate 52 weeks of data
  const weeks = 52;
  const daysPerWeek = 7;
  
  // Fake contribution data (0-4 intensity)
  const data = Array.from({ length: weeks * daysPerWeek }, () => {
    const rand = Math.random();
    if (rand > 0.8) return 4;
    if (rand > 0.6) return 3;
    if (rand > 0.4) return 2;
    if (rand > 0.2) return 1;
    return 0;
  });

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0: return isDark ? '#161b22' : 'rgba(0,0,0,0.05)';
      case 1: return 'var(--matrix-1)';
      case 2: return 'var(--matrix-2)';
      case 3: return 'var(--matrix-3)';
      case 4: return 'var(--matrix-5)';
      default: return 'transparent';
    }
  };

  return (
    <div className="font-mono mt-12 p-6 border border-primary/20 bg-primary/5">
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-1">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">SYSTEM_ACTIVITY_LOG</h4>
          <p className="text-[8px] text-primary/60 uppercase tracking-widest">3,492 OPERATIONS_EXECUTED // YEAR_2025</p>
        </div>
        <div className="flex items-center gap-2 text-[8px] text-primary/60 font-bold uppercase tracking-tighter">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map(l => (
            <div key={l} className="w-2 h-2" style={{ backgroundColor: getLevelColor(l) }} />
          ))}
          <span>More</span>
        </div>
      </div>

      <div className="flex gap-[3px] overflow-x-auto pb-4 scrollbar-hide">
        {Array.from({ length: weeks }).map((_, wIdx) => (
          <div key={wIdx} className="flex flex-col gap-[3px] flex-shrink-0">
            {Array.from({ length: daysPerWeek }).map((_, dIdx) => {
              const level = data[wIdx * daysPerWeek + dIdx];
              return (
                <motion.div
                  key={dIdx}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: (wIdx * 0.01) + (dIdx * 0.005),
                    duration: 0.2
                  }}
                  className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] transition-colors hover:ring-1 hover:ring-primary"
                  style={{ backgroundColor: getLevelColor(level) }}
                  title={`Activity level: ${level}`}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-between text-[8px] text-primary/40 font-bold uppercase tracking-widest">
        <span>JAN</span>
        <span>MAR</span>
        <span>MAY</span>
        <span>JUL</span>
        <span>SEP</span>
        <span>NOV</span>
      </div>
    </div>
  );
};

export default ContributionGrid;
