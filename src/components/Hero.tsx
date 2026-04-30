import { Suspense, lazy } from "react";
import { ArrowDown, Mail, Phone, MapPin, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { DeskFallback } from "./canvas/ArchitectDesk";

const ArchitectDeskCanvas = lazy(() => import("./canvas/ArchitectDesk"));
const Stars = lazy(() => import("./canvas/Stars"));

const isMobile = () => window.innerWidth < 768;

const Hero = () => {
  const goto = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 section-padding overflow-hidden bg-hero-dark"
    >
      {/* Star field — full opacity on dark */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </div>

      {/* Radial glow overlays */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/8 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-600/6 blur-[100px]" />
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
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              background: "rgba(59,130,246,0.10)",
              border: "1px solid rgba(59,130,246,0.25)",
              backdropFilter: "blur(12px)",
            }}
          >
            <Zap className="h-3.5 w-3.5 text-blue-400 flex-shrink-0" />
            <span className="text-xs text-blue-300 font-medium">
              AI + BIM Engineer · L&T · NIT Trichy
            </span>
          </motion.div>

          {/* Name */}
          <div className="space-y-3">
            <motion.p
              className="text-white/40 text-sm font-medium tracking-[0.25em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Hi there, I'm
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-hero-gradient">Joseva A</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/75 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              AI + BIM Engineer
            </motion.p>

            <motion.p
              className="text-base text-white/45 leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              Building intelligent construction systems — from AI-powered floor plan generation
              to real-time site safety monitoring.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
          >
            <button
              onClick={() => goto("#projects")}
              className="px-7 py-3 rounded-full text-sm font-semibold text-white btn-glow transition-all"
              style={{ background: "linear-gradient(135deg,#3b82f6,#1d4ed8)" }}
            >
              View My Work
            </button>
            <button
              onClick={() => goto("#contact")}
              className="px-7 py-3 rounded-full text-sm font-semibold text-white/80 hover:text-white transition-all"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(12px)",
              }}
            >
              Get in Touch
            </button>
          </motion.div>

          {/* Contact chips */}
          <motion.div
            className="grid sm:grid-cols-3 gap-3 pt-4 border-t border-white/6"
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
                <div className="flex items-center gap-1.5 text-blue-400/70 mb-1">
                  <Icon className="h-3 w-3" />
                  <span className="text-[10px] font-semibold uppercase tracking-widest">{label}</span>
                </div>
                {href
                  ? <a href={href} className="text-xs text-white/40 hover:text-blue-300 transition-colors truncate block">{value}</a>
                  : <p className="text-xs text-white/40">{value}</p>
                }
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: Desk image ── */}
        <motion.div
          className="relative h-[480px] md:h-[580px]"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
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
