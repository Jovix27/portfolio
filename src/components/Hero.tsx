import { motion } from "framer-motion";
import { ArrowRight, Mail, Cpu } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] pt-16 md:pt-20 pb-8 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col justify-center overflow-hidden">

      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">

        {/* ─── MOBILE: Photo hero strip ──────────────────────────────── */}
        {/* Shows on mobile/tablet, hidden on lg+ (right column handles it) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:hidden mb-12 flex justify-center items-center"
        >
          <div className="w-64 h-64 relative group">
            {/* Outer ring */}
            <div className="w-full h-full rounded-full border-[5px] border-foreground/10 p-2.5 relative">
              {/* Photo container */}
              <div className="w-full h-full rounded-full overflow-hidden relative bg-black">
                <img
                  src="./Joseva_A.jpeg"
                  alt="Joseva A"
                  loading="eager"
                  className="w-full h-full object-cover relative z-10 transition-all duration-700"
                  style={{ objectPosition: "center 25%" }}
                />
                {/* Radial vignette */}
                <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.45)_100%)] pointer-events-none" />
              </div>
            </div>

            {/* Status badge - Floating on circle */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-40 w-[200px]">
              <div className="nothing-card-flat bg-background/85 backdrop-blur-2xl px-3 py-2 flex items-center justify-between shadow-xl border-accent/20">
                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-foreground">
                  OPEN TO WORK
                </span>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00FF85] animate-pulse shadow-[0_0_8px_#00FF85]" />
                  <span className="text-[7px] font-black uppercase tracking-widest text-[#00FF85]">LIVE</span>
                </div>
              </div>
            </div>

            {/* Accent pulse ring */}
            <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-pulse pointer-events-none" />
          </div>
        </motion.div>

        {/* ─── MAIN GRID (lg: side-by-side) ─────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 lg:gap-7 items-stretch">

          {/* Left: Brand Widget */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 nothing-card p-5 sm:p-7 md:p-9 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Corner accent marks */}
            <div className="absolute top-0 left-0 w-12 h-[2px] bg-accent" />
            <div className="absolute top-0 left-0 w-[2px] h-12 bg-accent" />

            <div className="relative z-10 flex-1">
              {/* Tag */}
              <span className="dot-matrix text-accent font-bold tracking-[0.35em] text-[9px] uppercase block mb-2 md:mb-3">
                HI THERE, I'M
              </span>

              {/* Name — smaller on mobile, big on desktop */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.88] tracking-tighter text-foreground uppercase mb-4 md:mb-5">
                Joseva&nbsp;<span className="text-accent">A</span>
              </h1>

              {/* Divider */}
              <div className="w-8 h-[2px] bg-foreground/20 mb-4 md:mb-5" />

              {/* Headline */}
              <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold tracking-tight text-foreground leading-[1.3] max-w-lg uppercase mb-4">
                Designing intelligent construction systems &amp; solving civil engineering problems with AI.
              </h2>

              {/* Sub-copy — hidden on very small screens to keep it clean */}
              <p className="hidden sm:block text-xs md:text-sm text-foreground/50 font-medium leading-relaxed max-w-md uppercase">
                Final-year Civil Engineering graduate — bridging BIM workflows, AI-driven site safety, and scalable intelligent systems.
              </p>
            </div>

            {/* CTA buttons — stack on mobile, row on sm+ */}
            <div className="mt-5 md:mt-7 flex flex-col sm:flex-row flex-wrap gap-3 relative z-10">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3 bg-foreground text-background rounded-full font-bold flex items-center justify-center gap-2 hover:bg-accent hover:text-foreground transition-all duration-300 group text-xs tracking-[0.18em] uppercase"
              >
                VIEW WORK
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 border border-foreground/20 rounded-full font-bold flex items-center justify-center gap-2 hover:border-accent hover:text-accent transition-all duration-300 text-foreground text-xs tracking-[0.18em] uppercase"
              >
                CONTACT ME
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right: Photo + Status (desktop only) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-5 lg:gap-7">

            {/* Profile Photo Widget */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center items-center h-full py-8"
            >
              <div className="w-64 h-64 xl:w-72 xl:h-72 relative group">
                {/* Outer ring */}
                <div className="w-full h-full rounded-full border-[5px] border-foreground/10 p-2.5 relative">
                  {/* Photo container */}
                  <div className="w-full h-full rounded-full overflow-hidden relative bg-black">
                    <img
                      src="./Joseva_A.jpeg"
                      alt="Joseva A"
                      loading="eager"
                      className="w-full h-full object-cover relative z-10 transition-all duration-700"
                      style={{ objectPosition: "center 25%" }}
                    />
                    {/* Radial vignette */}
                    <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.45)_100%)] pointer-events-none" />
                  </div>
                </div>

                {/* Status badge - Floating on circle */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-40 w-[210px]">
                  <div className="nothing-card-flat bg-background/85 backdrop-blur-2xl p-3 flex items-center justify-between shadow-xl border-accent/20">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-foreground">
                      OPEN TO WORK
                    </span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00FF85] animate-pulse shadow-[0_0_10px_#00FF85]" />
                      <span className="text-[8px] font-black uppercase tracking-widest text-[#00FF85]">LIVE</span>
                    </div>
                  </div>
                </div>

                {/* Accent pulse ring */}
                <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-pulse pointer-events-none" />
              </div>
            </motion.div>

            {/* AI / BIM Status Widget */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="nothing-card p-6 lg:p-8 flex items-center justify-between group relative overflow-hidden shrink-0"
            >
              <div className="absolute -right-4 -top-4 opacity-[0.04] group-hover:opacity-[0.09] transition-opacity duration-500">
                <Cpu className="w-36 h-36 rotate-12" />
              </div>
              <div className="relative z-10">
                <div className="text-[8px] font-bold uppercase tracking-[0.3em] text-accent mb-1">CORE DISCIPLINE</div>
                <h3 className="text-3xl lg:text-4xl font-black leading-none uppercase text-foreground">AI CIVIL</h3>
                <h3 className="text-3xl lg:text-4xl font-black leading-none uppercase text-foreground/25">ENGG</h3>
              </div>
              <div className="text-right relative z-10">
                <span className="text-4xl lg:text-5xl font-black tracking-tighter text-foreground">24/7</span>
                <p className="text-[8px] font-bold uppercase tracking-widest text-foreground/40 mt-1">Always Building</p>
              </div>
            </motion.div>

          </div>

          {/* Mobile-only: compact status widget below brand card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:hidden nothing-card p-5 flex items-center justify-between group relative overflow-hidden"
          >
            <div className="absolute -right-3 -top-3 opacity-[0.04]">
              <Cpu className="w-24 h-24 rotate-12" />
            </div>
            <div className="relative z-10">
              <div className="text-[8px] font-bold uppercase tracking-[0.3em] text-accent mb-1">CORE DISCIPLINE</div>
              <h3 className="text-2xl font-black leading-none uppercase text-foreground">AI CIVIL</h3>
              <h3 className="text-2xl font-black leading-none uppercase text-foreground/25">ENGG</h3>
            </div>
            <div className="text-right relative z-10">
              <span className="text-3xl font-black tracking-tighter text-foreground">24/7</span>
              <p className="text-[8px] font-bold uppercase tracking-widest text-foreground/40 mt-0.5">Always Building</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
