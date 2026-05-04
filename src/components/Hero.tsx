import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Globe, Cpu } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 md:pt-32 pb-12 md:pb-16 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">

        {/* Left: Big Brand Widget */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 nothing-card p-6 sm:p-8 md:p-12 flex flex-col justify-between relative overflow-hidden"
        >
          {/* Circuit Board Background Decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            {/* Main CPU chip icon — grey, clearly visible */}
            <div className="absolute -top-8 -right-8 text-gray-400/30 dark:text-gray-500/25">
              <Cpu className="w-[340px] h-[340px] md:w-[420px] md:h-[420px]" />
            </div>
            {/* Circuit traces — horizontal, grey */}
            <div className="absolute top-[22%] right-[290px] md:right-[360px] h-[1.5px] w-20 bg-gray-400/25 dark:bg-gray-500/20 rounded-full" />
            <div className="absolute top-[36%] right-[290px] md:right-[360px] h-[1.5px] w-12 bg-gray-400/25 dark:bg-gray-500/20 rounded-full" />
            <div className="absolute top-[51%] right-[290px] md:right-[360px] h-[1.5px] w-28 bg-gray-400/25 dark:bg-gray-500/20 rounded-full" />
            <div className="absolute top-[67%] right-[290px] md:right-[360px] h-[1.5px] w-16 bg-gray-400/25 dark:bg-gray-500/20 rounded-full" />
            {/* Circuit traces — vertical, grey */}
            <div className="absolute top-[300px] md:top-[360px] right-[20%] w-[1.5px] h-16 bg-gray-400/25 dark:bg-gray-500/20 rounded-full" />
            <div className="absolute top-[300px] md:top-[360px] right-[36%] w-[1.5px] h-10 bg-gray-400/25 dark:bg-gray-500/20 rounded-full" />
            {/* Junction dots — grey */}
            <div className="absolute top-[22%] right-[290px] md:right-[360px] w-2 h-2 rounded-full bg-gray-400/40 dark:bg-gray-500/35 -translate-y-[50%]" />
            <div className="absolute top-[51%] right-[290px] md:right-[360px] w-2 h-2 rounded-full bg-gray-400/40 dark:bg-gray-500/35 -translate-y-[50%]" />
            <div className="absolute top-[67%] right-[290px] md:right-[360px] w-1.5 h-1.5 rounded-full bg-gray-400/30 dark:bg-gray-500/25 -translate-y-[50%]" />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col gap-1 mb-4 md:mb-6">
              <span className="dot-matrix text-accent font-bold tracking-[0.3em] text-[11px] uppercase opacity-100">HI THERE, I'M</span>
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[120px] font-black leading-none tracking-tighter text-foreground">
                <span className="text-foreground">Joseva</span> <span className="text-accent">A</span>
              </h1>
            </div>

            <div className="space-y-3 md:space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] max-w-2xl">
                I design intelligent construction systems and solve real-world civil engineering problems using AI.
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-foreground font-medium leading-relaxed">
                Final year Civil Engineering graduate bridging traditional engineering with intelligent, scalable systems — from BIM workflows to AI-driven site safety.
              </p>
            </div>
          </div>

          <div className="mt-8 md:mt-12 flex flex-wrap gap-3 md:gap-4 relative z-10">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform group">
              VIEW WORK
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => {
                const link = document.createElement("a");
                link.href = "./resume.pdf";
                link.download = "Joseva_A_Resume.pdf";
                link.click();
              }}
              className="px-8 py-4 border border-border rounded-full font-bold flex items-center gap-3 hover:bg-muted transition-colors text-foreground"
            >
              DOWNLOAD RESUME
              <Download className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Right: Focused Media & Status Widgets */}
        <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">

          {/* Large Profile Photo Widget */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="nothing-card overflow-hidden p-0 aspect-[4/5] lg:aspect-[4/5] relative group"
          >
            <img 
              src="./Joseva_A.jpeg" 
              alt="Joseva A" 
              className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
            />
            <div className="absolute bottom-6 left-6 right-6 z-10">
               <div className="nothing-card-flat bg-background/80 backdrop-blur-3xl border-white/10 p-4 flex justify-center items-center gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground">OPEN TO OPPORTUNITIES</span>
                  <div className="w-2 h-2 rounded-full bg-[#00FF85] animate-pulse shadow-[0_0_15px_#00FF85]" />
               </div>
            </div>
          </motion.div>

          {/* AI/BIM Core Status Widget */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="nothing-card gradient-orange p-6 md:p-8 text-black flex items-center justify-between group"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                 <Terminal className="w-4 h-4" />
                 <span className="text-[10px] font-bold dot-matrix tracking-widest">ENGINEERING CORE</span>
              </div>
              <h3 className="text-4xl font-3022 leading-none mb-1 uppercase">AI CIVIL ENGG</h3>
              <p className="text-[9px] font-bold uppercase tracking-widest opacity-70">
                 Innovation First // Design for Future
              </p>
            </div>
            <div className="text-right">
               <span className="text-4xl font-3022 tracking-tighter">24/7</span>
               <div className="flex justify-end gap-1 mt-1">
                  {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-black/20 rounded-full" />)}
               </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Background Subtle Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />
    </section>
  );
};

export default Hero;
