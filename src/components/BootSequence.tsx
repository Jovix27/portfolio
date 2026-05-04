import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LOGS = [
  "INITIALIZING KERNEL_V4.2.0-STABLE",
  "LOADING SYSTEM MODULES...",
  "VERIFYING CORE ARCHITECTURE",
  "DECRYPTING PORTFOLIO_DATA",
  "BOOT_SEQUENCE COMPLETE",
];

const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dots, setDots] = useState<number[]>([]);

  useEffect(() => {
    // Generate dot grid
    setDots(Array.from({ length: 40 }, (_, i) => i));

    const logInterval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= BOOT_LOGS.length - 1) {
          clearInterval(logInterval);
          setTimeout(onComplete, 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 600);

    return () => clearInterval(logInterval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] bg-transparent flex items-center justify-center font-mono overflow-hidden"
    >

      <div className="relative flex flex-col items-center gap-12 max-w-sm w-full">
        {/* Profile Dot Matrix Core */}
        <div className="relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-32 h-32 rounded-full overflow-hidden border-2 border-accent/20 bg-muted relative z-10 p-1"
          >
            <img 
              src="./profile photo dot matrix.png" 
              alt="Joseva A" 
              className="w-full h-full object-cover rounded-full opacity-100" 
            />
          </motion.div>
          
          {/* Pulsing Ring behind photo */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-accent blur-xl z-0"
          />

          <div className="absolute -inset-4 grid grid-cols-8 gap-2 opacity-30">
            {dots.map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 0.8, 1],
                  opacity: [0, 0.8, 0.3, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: "easeInOut"
                }}
                className="w-1.5 h-1.5 bg-accent rounded-full"
              />
            ))}
          </div>
        </div>

        <div className="w-full space-y-6 flex flex-col items-center">
          <span className="dot-matrix text-2xl font-bold tracking-[0.3em] text-foreground">JOSEVA_A</span>

          <div className="h-20 flex flex-col items-center justify-center overflow-hidden">
             <AnimatePresence mode="wait">
               <motion.div
                 key={currentIndex}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 className="text-[10px] dot-matrix text-foreground/40 text-center tracking-widest font-bold"
               >
                 {BOOT_LOGS[currentIndex]}
               </motion.div>
             </AnimatePresence>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default BootSequence;
