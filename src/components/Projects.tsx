import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, TrendingUp, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

const buildsightShots = [
  { src: "buildsight_dashboard_full.png",       label: "Full Dashboard" },
  { src: "buildsight_live_detections.png",       label: "Live PPE Detections" },
  { src: "buildsight_geoai_analysis.png",        label: "GeoAI Analysis" },
  { src: "buildsight_supervisor_terminal.png",   label: "Supervisor Terminal" },
  { src: "buildsight_turner_ai.png",             label: "Turner AI Module" },
  { src: "buildsight_turner_voice_mode.png",     label: "Voice Mode Interface" },
];

const projects = [
  {
    title: "BuildSight AI",
    subtitle: "AI-Powered Construction Safety System",
    period: "2025 – 2026",
    icon: "🦺",
    color: "#f59e0b",
    problem: "Manual PPE checks on active construction sites are unreliable, time-consuming, and miss violations in real-time.",
    solution: "Built an AI-driven computer vision system using YOLOv8 + multi-agent orchestration to detect PPE violations in real-time across site camera feeds.",
    impact: "95%+ detection accuracy, reduced manual inspection overhead by ~60%, deployed on live construction infrastructure.",
    tags: ["YOLOv8", "Computer Vision", "Python", "FastAPI", "WebSocket", "ConTech"],
    github: "https://github.com/Jovix27",
    screenshots: buildsightShots,
  },
  {
    title: "BIM Energy Model",
    subtitle: "Sustainable Building Simulation",
    period: "2024",
    icon: "⚡",
    color: "#10b981",
    problem: "Conventional residential designs consume 25–40% more energy than necessary due to poor envelope design and orientation.",
    solution: "Engineered sustainable residential models in Autodesk Revit with thermal performance simulation and passive cooling optimization of building envelopes.",
    impact: "Achieved 30% reduction in simulated energy consumption. Validated against ASHRAE 90.1 benchmarks.",
    tags: ["Autodesk Revit", "BIM", "Energy Modeling", "Sustainable Design", "ASHRAE"],
    github: null,
    screenshots: [],
  },
  {
    title: "PWV Validation System",
    subtitle: "Satellite Climate Data Correction",
    period: "2024 – 2025",
    icon: "🛰️",
    color: "#8b5cf6",
    problem: "MODIS satellite Precipitable Water Vapor (PWV) data contains systematic biases that compromise climate models and weather prediction.",
    solution: "Built AI-driven bias correction models using Random Forest + LSTM to reconcile MODIS satellite data against ground-truth GNSS station readings.",
    impact: "Improved PWV data accuracy by 89%. Processing pipeline handles 500k+ data points per run.",
    tags: ["Python", "Random Forest", "LSTM", "MODIS", "Climate Tech", "Data Science"],
    github: "https://github.com/Jovix27",
    screenshots: [],
  },
];

/* ─── Lightbox ─── */
const Lightbox = ({
  shots, idx: initIdx, onClose,
}: {
  shots: typeof buildsightShots; idx: number; onClose: () => void;
}) => {
  const [idx, setIdx] = useState(initIdx);
  const n = shots.length;
  return (
    <motion.div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
      style={{ background: "rgba(5,8,22,0.92)", backdropFilter: "blur(16px)" }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-5xl w-full rounded-2xl overflow-hidden"
        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)" }}
        initial={{ scale: 0.92 }} animate={{ scale: 1 }} exit={{ scale: 0.92 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={`${import.meta.env.BASE_URL}${shots[idx].src}`}
          alt={shots[idx].label}
          className="w-full object-contain max-h-[75vh]"
        />
        <div
          className="px-5 py-3 flex items-center justify-between"
          style={{ background: "rgba(5,8,22,0.80)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span className="text-sm font-semibold text-white/80">{shots[idx].label}</span>
          <span className="text-xs text-white/30 font-mono">{idx + 1} / {n}</span>
        </div>
        <button onClick={() => setIdx((i) => (i - 1 + n) % n)}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.10)" }}>
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
        <button onClick={() => setIdx((i) => (i + 1) % n)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.10)" }}>
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
        <button onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.10)" }}>
          <X className="h-4 w-4 text-white" />
        </button>
      </motion.div>
    </motion.div>
  );
};

/* ─── Screenshot strip ─── */
const Screenshots = ({ shots, color }: { shots: typeof buildsightShots; color: string }) => {
  const [lbIdx, setLbIdx] = useState<number | null>(null);
  return (
    <>
      <div className="mt-5">
        <p className="text-[10px] uppercase tracking-widest font-semibold text-white/30 mb-3">Screenshots</p>
        <div className="grid grid-cols-3 gap-2">
          {shots.map((s, i) => (
            <motion.div
              key={s.src} whileHover={{ scale: 1.04 }}
              className="relative rounded-xl overflow-hidden cursor-pointer group aspect-video"
              style={{ border: `1px solid ${color}20` }}
              onClick={() => setLbIdx(i)}
            >
              <img src={`${import.meta.env.BASE_URL}${s.src}`} alt={s.label} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                <ZoomIn className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {lbIdx !== null && <Lightbox shots={shots} idx={lbIdx} onClose={() => setLbIdx(null)} />}
      </AnimatePresence>
    </>
  );
};

/* ─── Project card ─── */
const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6, delay: index * 0.12 }}
    whileHover={{ y: -6, transition: { duration: 0.2 } }}
    className="relative rounded-2xl overflow-hidden group glass-card"
    style={{ borderColor: `${project.color}22` }}
  >
    {/* Top gradient bar */}
    <div
      className="h-1 w-full opacity-60 group-hover:opacity-100 transition-opacity"
      style={{ background: `linear-gradient(90deg,${project.color},transparent)` }}
    />

    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: `${project.color}16`, border: `1px solid ${project.color}28` }}
          >
            {project.icon}
          </div>
          <div>
            <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
            <p className="text-sm mt-0.5 font-medium" style={{ color: project.color }}>{project.subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs text-white/30 font-medium">{project.period}</span>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors hover:bg-white/8"
            >
              <GitBranch className="h-4 w-4 text-white/40" />
            </a>
          )}
        </div>
      </div>

      {/* P / S / I */}
      <div className="space-y-3">
        {[
          { key: "Problem",  text: project.problem,  accent: "rgba(239,68,68,0.08)",   border: "rgba(239,68,68,0.14)",   label: "rgba(239,68,68,0.85)" },
          { key: "Solution", text: project.solution, accent: "rgba(59,130,246,0.08)",  border: "rgba(59,130,246,0.14)",  label: "rgba(59,130,246,0.85)" },
          { key: "Impact",   text: project.impact,   accent: `${project.color}0d`,     border: `${project.color}25`,    label: project.color },
        ].map(({ key, text, accent, border, label }) => (
          <div key={key} className="rounded-xl p-4"
            style={{ background: accent, border: `1px solid ${border}` }}
          >
            <p className="text-[10px] uppercase tracking-widest font-bold mb-1.5 flex items-center gap-1"
              style={{ color: label }}>
              {key === "Impact" && <TrendingUp className="h-3 w-3" />}
              {key}
            </p>
            <p className="text-white/60 text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      {/* Screenshots */}
      {project.screenshots.length > 0 && (
        <Screenshots shots={project.screenshots} color={project.color} />
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-5">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2.5 py-1 text-xs rounded-full font-medium"
            style={{ background: `${project.color}12`, color: project.color, border: `1px solid ${project.color}25` }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => (
  <section id="projects" className="section-padding bg-section-alt">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="text-center mb-4"
      >
        <p className="text-blue-400 text-sm uppercase tracking-widest font-medium mb-2">My work</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Featured <span className="text-hero-gradient">Projects</span>
        </h2>
        <div className="section-bar" />
        <p className="text-white/40 mt-4 max-w-2xl mx-auto text-sm">
          Engineered solutions at the intersection of AI, BIM, and construction technology — each built to solve real industry problems with measurable impact.
        </p>
      </motion.div>

      <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
      </div>
    </div>
  </section>
);

export default Projects;
