import { motion } from "framer-motion";
import { GraduationCap, Download, Cpu, Layers, Globe, Car } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const stats = [
  { value: "3+",   label: "AI Projects Built" },
  { value: "IGBC", label: "AP Associate" },
  { value: "AI+",  label: "Problem Solving" },
  { value: "15+",  label: "Software Proficiency" },
];

const focusAreas = [
  { icon: Layers,    label: "Building Information Modeling", color: "#3b82f6" },
  { icon: Globe,     label: "Sustainable Infrastructure",    color: "#10b981" },
  { icon: Cpu,       label: "AI-enabled Construction",       color: "#8b5cf6" },
  { icon: Car,       label: "Transportation Planning",       color: "#f59e0b" },
];

const SectionHeading = ({ sub, title, accent, isDark }: { sub: string; title: string; accent: string; isDark: boolean }) => (
  <div className="text-center mb-16">
    <p className="text-blue-500 text-sm uppercase tracking-widest font-bold mb-3">{sub}</p>
    <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
      {title} <span className="text-hero-gradient">{accent}</span>
    </h2>
    <div className="section-bar bg-blue-500/20" />
  </div>
);

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const card = {
    background: isDark ? "rgba(15,23,42,0.6)" : "rgba(255,255,255,0.6)",
    border: "1px solid rgba(255,255,255,0.4)",
    backdropFilter: "blur(24px)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
  };

  const educationCard = {
    background: isDark
      ? "linear-gradient(135deg,rgba(59,130,246,0.08),rgba(139,92,246,0.05))"
      : "linear-gradient(135deg,rgba(255,255,255,0.4),rgba(255,255,255,0.2))",
    border: "1px solid rgba(255,255,255,0.4)",
    backdropFilter: "blur(20px)",
  };

  return (
  <section id="about" className="section-padding bg-section-alt">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
      >
        <SectionHeading sub="Introduction" title="About" accent="Me" isDark={isDark} />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 items-start">

        {/* ── Bio + Stats ── */}
        <motion.div
          className="md:col-span-2 space-y-6"
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="rounded-2xl p-8 glass-card">
            <p className={`text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              I'm <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Joseva A</span> — a Civil Engineering
              undergraduate at <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>SASTRA Deemed University</span>,
              operating at the intersection of{" "}
              <span className="text-blue-500 font-semibold">AI systems</span>,{" "}
              <span className="text-blue-500 font-semibold">BIM workflows</span>, and{" "}
              <span className="text-emerald-500 font-semibold">sustainable infrastructure</span>.
            </p>
            <p className={`text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'} mt-4`}>
              I specialize in building scalable solutions that improve site safety, efficiency, and sustainability. My work leverages <span className={`${isDark ? 'text-slate-200' : 'text-slate-900'} font-medium`}>AI-powered safety monitoring</span>, <span className={`${isDark ? 'text-slate-200' : 'text-slate-900'} font-medium`}>BIM-driven energy modeling</span>, and <span className="text-emerald-500 font-semibold">sustainable infrastructure</span> to deliver measurable outcomes across construction workflows.
            </p>
            <p className={`text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'} mt-4`}>
              I don't just model buildings — I engineer systems that make construction smarter. My work bridges the gap between civil engineering fundamentals and cutting-edge technology, focusing on delivering intelligent, production-ready solutions.
            </p>
            <p className={`text-xs italic ${isDark ? 'text-slate-500' : 'text-slate-400'} mt-6`}>
              Currently pursuing my B.Tech at <span className={isDark ? 'text-slate-300' : 'text-slate-900'}>SASTRA Deemed University</span>. Interned at <span className="text-blue-500">L&T Chennai Metro</span> and researched at <span className="text-blue-500">NIT Trichy</span>.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-10">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl glass-card">
                <span className={`text-2xl sm:text-3xl font-black tracking-tight mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>{s.value}</span>
                <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest leading-tight ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{s.label}</span>
              </div>
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
          <div className="flex justify-center py-4 md:py-0">
            <div className="relative group">
              {/* Ambient glow */}
              <div
                className="absolute -inset-5 rounded-full opacity-25 blur-2xl transition-opacity duration-700 group-hover:opacity-50 pointer-events-none"
                style={{ background: "radial-gradient(circle,#3b82f6 0%,#10b981 55%,transparent 80%)" }}
              />
              {/* Gradient ring */}
              <div
                className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full p-[2.5px]"
                style={{
                  background: "linear-gradient(135deg, rgba(59,130,246,0.3), rgba(16,185,129,0.3))",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.4) inset, 0 8px 40px rgba(59,130,246,0.12)",
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
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2.5 py-1 rounded-full whitespace-nowrap"
                style={{
                  background: isDark ? "rgba(15,23,42,0.95)" : "rgba(255,255,255,0.95)",
                  border: "1px solid rgba(59,130,246,0.30)",
                  backdropFilter: "blur(16px)",
                  boxShadow: "0 4px 20px rgba(59,130,246,0.15)",
                }}
              >
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-700">Open to Opportunities</span>
              </div>
            </div>
          </div>

          {/* Education card */}
          <div className="rounded-2xl p-6 glass-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl flex items-center justify-center" style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.2)" }}>
                <GraduationCap className="h-5 w-5 text-blue-500" />
              </div>
              <h3 className={`text-lg font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>Education</h3>
            </div>
            <p className={`font-bold text-sm ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Bachelor of Technology</p>
            <p className="text-xs text-blue-500 font-bold mt-0.5 uppercase tracking-wide">Civil Engineering</p>
            <div className={`mt-4 pt-4 border-t ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
              <p className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>SASTRA Deemed University</p>
              <p className={`text-[11px] font-medium mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>2022 – 2026 · Thanjavur, TN</p>
            </div>
            <div className={`mt-4 pt-4 border-t ${isDark ? 'border-white/5' : 'border-slate-200'}`}>
              <p className={`text-[9px] uppercase tracking-widest font-black ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>Cumulative GPA</p>
              <div className="flex items-end gap-2 mt-1">
                <p className="text-3xl font-black text-hero-gradient">7.2</p>
                <p className={`text-xs font-bold mb-1.5 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>/ 10</p>
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
        <p className={`text-center text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] mb-8 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>Core Focus Areas</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {focusAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.label}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: 0.08 * i }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="p-6 rounded-2xl text-center cursor-default transition-all glass-card group"
              >
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${area.color}12`, border: `1px solid ${area.color}25` }}
                >
                  <Icon className="h-6 w-6" style={{ color: area.color }} />
                </div>
                <p className={`text-xs font-bold leading-tight ${isDark ? 'text-slate-400 group-hover:text-slate-200' : 'text-slate-700 group-hover:text-slate-900'} transition-colors`}>{area.label}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </section>
  );
};

export default About;
