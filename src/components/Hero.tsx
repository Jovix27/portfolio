import { Suspense, lazy } from "react";
import { ArrowDown, Mail, Phone, MapPin, HardHat } from "lucide-react";
import { motion } from "framer-motion";
import { DeskFallback } from "./canvas/ArchitectDesk";
import BlueprintGrid from "./canvas/BlueprintGrid";
import { useTheme } from "@/hooks/useTheme";

const ArchitectDeskCanvas = lazy(() => import("./canvas/ArchitectDesk"));

const isMobile = () => window.innerWidth < 768;

const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const goto = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 section-padding overflow-hidden bg-slate-50"
    >
      {/* Blueprint grid — ConTech identity background */}
      <div className="absolute inset-0 z-0">
        <BlueprintGrid />
      </div>

      <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* ── Left: Text content ── */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <div className="flex justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mt-4 md:mt-0"
              style={{
                background: "rgba(59,130,246,0.04)",
                border: "1px solid rgba(255,255,255,0.4)",
              }}
            >
              <HardHat className="h-3.5 w-3.5 text-blue-600 flex-shrink-0" />
              <span className="text-xs text-blue-600 font-medium">
                IGBC AP · AI + BIM Engineer · ConTech
              </span>
            </motion.div>
          </div>

          {/* Name */}
          <div className="space-y-4 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm font-bold tracking-[0.2em] uppercase"
              style={{ color: isDark ? "#60a5fa" : "#3b82f6" }}
            >
              Hi there, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter"
            >
              <span 
                className="block" 
                style={{ 
                  background: "linear-gradient(90deg, #3b82f6 0%, #10b981 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                Joseva A
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-2xl text-center md:text-left"
          >
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-[1.1]"
              style={{ color: isDark ? "#e2e8f0" : "#1e293b" }}
            >
              I design intelligent construction systems and solve real-world civil engineering problems using AI.
            </h2>
            <p 
              className="text-base sm:text-lg leading-relaxed mb-10"
              style={{ color: isDark ? "#94a3b8" : "#64748b" }}
            >
              I specialize in delivering measurable outcomes across construction workflows — 
              bridging the gap between traditional civil engineering and intelligent, scalable systems.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
          >
            <button
              onClick={() => goto("#projects")}
              className="px-7 py-3 rounded-xl sm:rounded-full text-sm font-semibold text-white btn-glow transition-all"
              style={{ background: "linear-gradient(135deg,#3b82f6,#1d4ed8)" }}
            >
              View My Work
            </button>
            <button
              onClick={() => goto("#contact")}
              className="px-7 py-3 rounded-xl sm:rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95"
              style={{
                background: isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.4)",
                border: "1px solid rgba(255,255,255,0.4)",
                backdropFilter: "blur(20px)",
                color: isDark ? "#cbd5e1" : "#475569",
              }}
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Contact chips */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: Mail,   label: "Email",    value: "ajoseva04@gmail.com",  href: "mailto:ajoseva04@gmail.com" },
              { icon: Phone,  label: "Phone",    value: "+91 8015164110",       href: "tel:+918015164110" },
              { icon: MapPin, label: "Location", value: "Tiruchirappalli, TN",  href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label}>
                <div className="flex items-center gap-1.5 text-blue-600/70 mb-1">
                  <Icon className="h-3 w-3" />
                  <span className="text-[10px] font-semibold uppercase tracking-widest">{label}</span>
                </div>
                {href
                  ? <a href={href} className="text-xs text-slate-400 hover:text-blue-600 transition-colors truncate block">{value}</a>
                  : <p className="text-xs text-slate-400">{value}</p>
                }
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: Desk image ── */}
        <motion.div
          className="relative h-[320px] sm:h-[400px] md:h-[580px]"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        >
          {isMobile()
            ? <DeskFallback />
            : <Suspense fallback={<DeskFallback />}><ArchitectDeskCanvas /></Suspense>
          }
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => goto("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 1.3, duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4" />
      </motion.button>
    </section>
  );
};

export default Hero;
