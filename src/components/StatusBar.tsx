import { Wifi, Battery, Signal } from "lucide-react";
import { useEffect, useState } from "react";

const StatusBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-[120] px-6 py-2 flex justify-between items-center mix-blend-difference pointer-events-none">
      <div className="dot-matrix text-[10px] font-bold tracking-widest text-foreground/80">
        {/* TIME_REMOVED */}
      </div>
      
      <div className="flex items-center gap-2">
        {/* ICONS_REMOVED */}
      </div>
    </div>
  );
};

export default StatusBar;
