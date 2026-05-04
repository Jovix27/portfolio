import React from "react";

export const EarthFallback = () => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900/10 backdrop-blur-sm rounded-3xl">
     <div className="relative w-32 h-32 flex items-center justify-center">
       {/* Animated pulse rings */}
       <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-ping" />
       <div className="absolute inset-4 rounded-full border-2 border-blue-500/10 animate-pulse" />
       <div className="w-20 h-20 rounded-full border-2 border-t-blue-500 border-r-blue-500/30 border-b-blue-500/10 border-l-blue-500/30 animate-spin" />
     </div>
     <p className="mt-6 text-[10px] text-blue-500 font-black uppercase tracking-[0.3em] animate-pulse">Initializing Interface</p>
  </div>
);
