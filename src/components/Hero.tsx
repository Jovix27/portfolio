import { Suspense, lazy } from "react";
import { ArrowDown, Mail, Phone, MapPin, HardHat } from "lucide-react";
import { motion } from "framer-motion";
import { DeskFallback } from "./canvas/ArchitectDesk";
import BlueprintGrid from "./canvas/BlueprintGrid";
import { useTheme } from "@/hooks/useTheme";

const ArchitectDeskCanvas = lazy(() => import("./canvas/ArchitectDesk"));

const isMobile = () => window.innerWidth < 768;

const contactChips = [
  { icon: Mail,   label: "Email",    value: "ajoseva04@gmail.com", href: "mailto:ajoseva04@gmail.com" },
  { icon: Phone,  label: "Phone",    value: "+91 8015164110",      href: "tel:+918015164110" },
  { icon: MapPin, label: "Location", value: "Tiruchirappalli, TN", href: null },
];

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const goto = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden bg-section transition-colors duration-500"
      style={{ minHeight: "100dvh", paddingTop: "5rem" }}
    >
      {/* Blueprint grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <BlueprintGrid />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-24 py-4 md:py-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* ── Left: text ── */}
        <motion.div
          className="flex flex-col gap-4 md:gap-7"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="inline-flex self-start items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-card whitespace-nowrap overflow-hidden max-w-[calc(100vw-3rem)]"
            style={{
              background: isDark ? "rgba(37,99,235,0.12)" : "rgba(59,130,246,0.07)",
              borderColor: isDark ? "rgba(99,179,250,0.20)" : "rgba(59,130,246,0.22)",
            }}
          >
            <HardHat className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-blue-500 flex-shrink-0" />
            <span className="text-[9px] xs:text-[10px] sm:text-xs text-blue-500 font-bold tracking-tight sm:tracking-wide">
              IGBC AP Associate · AI + BIM Engineer
            </span>
          </motion.div>

          {/* Name block */}
          <div className="space-y-1 sm:space-y-2">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.22em] uppercase"
              style={{ color: isDark ? "#60a5fa" : "#2563eb" }}
            >
              Hi there, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.65 }}
              className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9]"
              style={{
                background: "linear-gradient(90deg, #3b82f6 0%, #10b981 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Joseva A
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.div
            className="space-y-3 sm:space-y-4"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            <h2
              className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold leading-tight"
              style={{ color: isDark ? "#e2e8f0" : "#1e293b" }}
            >
              I design intelligent construction systems and solve real-world civil engineering problems using AI.
            </h2>
            <p
              className="text-xs sm:text-sm md:text-base leading-relaxed"
              style={{ color: isDark ? "#94a3b8" : "#64748b" }}
            >
              Bridging traditional civil engineering with intelligent, scalable systems — from BIM workflows to AI-driven site safety.
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col xs:flex-row gap-3 pt-2"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            <button
              onClick={() => goto("#projects")}
              className="flex-1 xs:flex-none px-6 py-3.5 rounded-xl text-xs font-bold text-white btn-glow uppercase tracking-widest"
              style={{ background: "linear-gradient(135deg,#3b82f6,#1d4ed8)" }}
            >
              View My Work
            </button>
            <button
              onClick={() => goto("#contact")}
              className="flex-1 xs:flex-none px-6 py-3.5 rounded-xl text-xs font-bold glass-card uppercase tracking-widest"
              style={{
                color: isDark ? "#cbd5e1" : "#475569",
                borderColor: isDark ? "rgba(255,255,255,0.12)" : "rgba(59,130,246,0.20)",
              }}
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Contact chips */}
          <motion.div
            className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-6 border-t"
            style={{ borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.70 }}
          >
            {contactChips.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-2">
                <div 
                  className="p-1.5 rounded-lg flex-shrink-0"
                  style={{ 
                    background: isDark ? "rgba(59,130,246,0.12)" : "rgba(59,130,246,0.06)",
                    color: isDark ? "#60a5fa" : "#3b82f6" 
                  }}
                >
                  <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[8px] font-bold uppercase tracking-widest leading-none mb-0.5" style={{ color: isDark ? "#475569" : "#94a3b8" }}>
                    {label}
                  </span>
                  {href
                    ? <a href={href} className="text-[10px] sm:text-xs leading-tight font-medium hover:text-blue-500 transition-colors truncate max-w-[120px]"
                        style={{ color: isDark ? "#94a3b8" : "#475569" }}>{value}</a>
                    : <p className="text-[10px] sm:text-xs leading-tight font-medium truncate max-w-[120px]"
                        style={{ color: isDark ? "#94a3b8" : "#475569" }}>{value}</p>
                  }
                </div>
              </div>
            ))}
          </motion.div>

        </motion.div>

        {/* ── Right: 3D desk (desktop only) ── */}
        <motion.div
          className="hidden md:block relative h-[440px] lg:h-[560px]"
          initial={{ opacity: 0, scale: 0.90 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.20, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          <Suspense fallback={<DeskFallback />}>
            <ArchitectDeskCanvas />
          </Suspense>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => goto("#about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 transition-colors"
        style={{ color: isDark ? "#475569" : "#94a3b8" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 5, 0] }}
        transition={{ delay: 1.2, duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[9px] tracking-[0.28em] uppercase font-medium">Scroll</span>
        <ArrowDown className="h-3.5 w-3.5" />
      </motion.button>
    </section>
  );
};

export default Hero;
