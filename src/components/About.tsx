import { motion } from "framer-motion";
import { GraduationCap, Download, Cpu, Layers, Globe, TrendingUp } from "lucide-react";

const stats = [
  { value: "3+",   label: "AI Projects Built" },
  { value: "89%",  label: "ML Model Accuracy" },
  { value: "30%",  label: "Energy Reduction" },
  { value: "200+", label: "Research Participants" },
];

const focusAreas = [
  { icon: Layers,    label: "Building Information Modeling", color: "#3b82f6" },
  { icon: Globe,     label: "Sustainable Infrastructure",    color: "#10b981" },
  { icon: Cpu,       label: "AI-enabled Construction",       color: "#8b5cf6" },
  { icon: TrendingUp,label: "Transportation Planning",       color: "#f59e0b" },
];

const card = {
  background: "rgba(255,255,255,0.04)",
  border:     "1px solid rgba(255,255,255,0.08)",
  backdropFilter: "blur(16px)",
};

const SectionHeading = ({ sub, title, accent }: { sub: string; title: string; accent: string }) => (
  <div className="text-center mb-16">
    <p className="text-blue-400 text-sm uppercase tracking-widest font-medium mb-2">{sub}</p>
    <h2 className="text-4xl md:text-5xl font-bold text-white">
      {title} <span className="text-hero-gradient">{accent}</span>
    </h2>
    <div className="section-bar" />
  </div>
);

const About = () => (
  <section id="about" className="section-padding bg-section-alt">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
      >
        <SectionHeading sub="Introduction" title="About" accent="Me" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 items-start">

        {/* ── Bio + Stats ── */}
        <motion.div
          className="md:col-span-2 space-y-6"
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="rounded-2xl p-8" style={card}>
            <p className="text-lg leading-relaxed text-white/70">
              I'm <span className="font-bold text-white">Joseva A</span> — a Civil Engineering
              undergraduate at <span className="font-bold text-white">SASTRA Deemed University</span>,
              operating at the intersection of{" "}
              <span className="text-blue-400 font-semibold">AI systems</span>,{" "}
              <span className="text-blue-400 font-semibold">BIM workflows</span>, and{" "}
              <span className="text-emerald-400 font-semibold">sustainable infrastructure</span>.
            </p>
            <p className="text-base leading-relaxed text-white/45 mt-4">
              I don't just model buildings — I engineer systems that make construction smarter.
              From deploying real-time PPE detection on live construction sites to developing
              AI-powered floor plan generators with TPU acceleration, my work bridges the gap
              between civil engineering fundamentals and cutting-edge technology.
            </p>
            <p className="text-base leading-relaxed text-white/45 mt-4">
              Currently pursuing my B.Tech with a focus on BIM + AI integration, I've interned at{" "}
              <span className="font-semibold text-blue-300">L&T Chennai Metro Phase 2</span> and
              contributed research at <span className="font-semibold text-blue-300">NIT Trichy</span>.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.1 }}
                className="text-center p-5 rounded-2xl"
                style={card}
              >
                <p className="text-3xl font-black text-hero-gradient">{s.value}</p>
                <p className="text-xs text-white/40 mt-1 leading-tight">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Profile Photo + Education + Resume ── */}
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Liquid glass profile photo */}
          <div className="flex justify-center">
            <div className="relative group">
              {/* Ambient glow */}
              <div
                className="absolute -inset-5 rounded-full opacity-25 blur-2xl transition-opacity duration-700 group-hover:opacity-50 pointer-events-none"
                style={{ background: "radial-gradient(circle,#3b82f6 0%,#10b981 55%,transparent 80%)" }}
              />
              {/* Gradient ring */}
              <div
                className="relative w-52 h-52 rounded-full p-[3px]"
                style={{
                  background: "linear-gradient(135deg,#3b82f6 0%,#10b981 55%,#8b5cf6 100%)",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.06) inset, 0 8px 40px rgba(59,130,246,0.30)",
                }}
              >
                <div
                  className="w-full h-full rounded-full overflow-hidden"
                  style={{ boxShadow: "inset 0 2px 10px rgba(255,255,255,0.12), inset 0 -2px 6px rgba(0,0,0,0.4)" }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}Joseva_A.jpeg`}
                    alt="Joseva A"
                    className="w-full h-full object-cover object-top scale-105 transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Glass sheen */}
                  <div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ background: "linear-gradient(135deg,rgba(255,255,255,0.18) 0%,rgba(255,255,255,0.04) 40%,transparent 65%)" }}
                  />
                </div>
              </div>
              {/* Status badge */}
              <div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full whitespace-nowrap"
                style={{
                  background: "rgba(13,18,42,0.90)",
                  border: "1px solid rgba(59,130,246,0.30)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-semibold text-white/70">Open to Opportunities</span>
              </div>
            </div>
          </div>

          {/* Education card */}
          <div className="rounded-2xl p-6" style={{
            background: "linear-gradient(135deg,rgba(59,130,246,0.10),rgba(139,92,246,0.06))",
            border: "1px solid rgba(59,130,246,0.18)",
            backdropFilter: "blur(16px)",
          }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl" style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.25)" }}>
                <GraduationCap className="h-5 w-5 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white">Education</h3>
            </div>
            <p className="font-bold text-white text-sm">Bachelor of Technology</p>
            <p className="text-xs text-blue-400 font-semibold mt-0.5">Civil Engineering</p>
            <div className="mt-3 pt-3 border-t border-white/8">
              <p className="text-sm text-white/55 font-medium">SASTRA Deemed University</p>
              <p className="text-xs text-white/30 mt-0.5">2022 – 2026 · Thanjavur, TN</p>
            </div>
            <div className="mt-3 pt-3 border-t border-white/8">
              <p className="text-[10px] text-white/30 uppercase tracking-widest">CGPA</p>
              <div className="flex items-end gap-2 mt-1">
                <p className="text-3xl font-black text-hero-gradient">7.2</p>
                <p className="text-xs text-white/30 mb-1">/ 10</p>
              </div>
            </div>
          </div>

          {/* Resume button */}
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="Joseva_A_Resume.pdf"
            className="flex items-center justify-center gap-2 w-full h-12 rounded-xl text-sm font-semibold text-white btn-glow transition-all"
            style={{ background: "linear-gradient(135deg,#3b82f6,#1d4ed8)" }}
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Focus areas */}
      <motion.div
        className="mt-14"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-center text-white/40 text-sm font-semibold uppercase tracking-widest mb-6">Core Focus Areas</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {focusAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.label}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: 0.08 * i }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-5 rounded-2xl text-center cursor-default transition-all glass-card"
              >
                <div
                  className="w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center"
                  style={{ background: `${area.color}18`, border: `1px solid ${area.color}30` }}
                >
                  <Icon className="h-5 w-5" style={{ color: area.color }} />
                </div>
                <p className="text-sm font-medium text-white/60">{area.label}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
