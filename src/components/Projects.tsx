import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, TrendingUp, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useTheme } from "@/hooks/useTheme";

const buildsightShots = [
  { src: "buildsight_dashboard_full.png",        label: "Command Center" },
  { src: "Detection image .jpeg",               label: "Live PPE Detection" },
  { src: "Site intelligence tab .jpeg",         label: "Site Intelligence" },
  { src: "geoai tab image .jpeg",               label: "GeoAI Spatial Analysis" },
  { src: "buildsight_turner_voice_mode.png",    label: "Turner AI Voice Assistant" },
];

const projects = [
  {
    title: "BuildSight AI",
    subtitle: "AI-Powered Construction Safety System",
    period: "2025 – 2026",
    icon: "🦺",
    color: "#f59e0b",
    problem: "Manual PPE checks on active construction sites are unreliable, time-consuming, and miss violations in real-time.",
    solution: "Built an AI-driven computer vision system using YOLOv11 + YOLOv26 + multi-agent orchestration to detect PPE violations in real-time across site camera feeds.",
    impact: "88% detection precision, reduced manual inspection overhead by ~60%, deployed on live construction infrastructure.",
    tags: ["YOLOv11", "YOLOv26", "Computer Vision", "Python", "FastAPI", "WebSocket", "ConTech"],
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
    impact: "Achieved 30% reduction in simulated energy consumption. Validated against optimized building standards.",
    tags: ["Autodesk Revit", "BIM", "Energy Modeling", "Sustainable Design"],
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
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const n = shots.length;

  return (
    <motion.div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4 sm:p-8"
      style={{ background: isDark ? "rgba(2,6,23,0.95)" : "rgba(248,250,252,0.92)", backdropFilter: "blur(24px)" }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-6xl w-full rounded-3xl overflow-hidden shadow-2xl"
        style={{ 
          background: isDark ? "#0f172a" : "#ffffff", 
          border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(59,130,246,0.15)" 
        }}
        initial={{ scale: 0.92, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.92, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video flex items-center justify-center bg-black/20">
          <img
            src={`${import.meta.env.BASE_URL}${shots[idx].src}`}
            alt={shots[idx].label}
            className="max-w-full max-h-[80vh] object-contain"
          />
          
          <button onClick={() => setIdx((i) => (i - 1 + n) % n)}
            className={`absolute left-4 p-3 rounded-full transition-all ${isDark ? 'bg-slate-800/80 text-white hover:bg-slate-700' : 'bg-white/80 text-blue-600 hover:bg-blue-50'}`}>
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={() => setIdx((i) => (i + 1) % n)}
            className={`absolute right-4 p-3 rounded-full transition-all ${isDark ? 'bg-slate-800/80 text-white hover:bg-slate-700' : 'bg-white/80 text-blue-600 hover:bg-blue-50'}`}>
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div
          className="px-6 py-4 flex items-center justify-between"
          style={{ 
            background: isDark ? "rgba(15,23,42,0.9)" : "rgba(248,250,252,0.95)", 
            borderTop: isDark ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(59,130,246,0.10)" 
          }}
        >
          <span className={`text-sm font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-800'}`}>{shots[idx].label}</span>
          <span className="text-[10px] text-slate-500 font-black tracking-widest uppercase">{idx + 1} / {n}</span>
        </div>

        <button onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-full z-10 ${isDark ? 'bg-slate-800/80 text-white' : 'bg-white/80 text-blue-600'}`}>
          <X className="h-5 w-5" />
        </button>
      </motion.div>
    </motion.div>
  );
};

/* ─── Project Carousel ─── */
const ProjectCarousel = ({ shots, color }: { shots: typeof buildsightShots; color: string }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [lbIdx, setLbIdx] = useState<number | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative group/carousel">
      <p className={`text-[10px] uppercase tracking-[0.2em] font-black mb-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>System Interface // Swipe</p>
      
      <div className={`overflow-hidden rounded-2xl border ${isDark ? 'border-white/5 bg-slate-900/50' : 'border-blue-100 bg-slate-50'}`} ref={emblaRef}>
        <div className="flex">
          {shots.map((s, i) => (
            <div key={s.src} className="flex-[0_0_100%] min-w-0 relative aspect-video">
               <motion.div 
                 className="w-full h-full cursor-pointer relative group"
                 onClick={() => setLbIdx(i)}
               >
                 <img 
                   src={`${import.meta.env.BASE_URL}${s.src}`} 
                   alt={s.label} 
                   className="w-full h-full object-cover" 
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex flex-col items-center justify-center">
                    <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all">
                      <ZoomIn className="h-6 w-6 text-white" />
                    </div>
                    <span className="mt-4 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] text-white font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all border border-white/10">
                      {s.label}
                    </span>
                 </div>
               </motion.div>
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={scrollPrev}
        className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-md flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all z-20 ${isDark ? 'bg-slate-800/80 text-white border-white/10' : 'bg-white/80 text-blue-600 border-blue-100'}`}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button 
        onClick={scrollNext}
        className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-md flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all z-20 ${isDark ? 'bg-slate-800/80 text-white border-white/10' : 'bg-white/80 text-blue-600 border-blue-100'}`}
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {lbIdx !== null && <Lightbox shots={shots} idx={lbIdx} onClose={() => setLbIdx(null)} />}
      </AnimatePresence>
    </div>
  );
};

const ProjectCard = ({ project, index, isFeatured }: { project: typeof projects[0]; index: number; isFeatured?: boolean }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -8 }}
      className={`relative rounded-3xl overflow-hidden group glass-card ${isFeatured ? 'md:p-4' : ''}`}
      style={{ borderColor: `${project.color}${isDark ? '15' : '22'}` }}
    >
      <div
        className="h-1.5 w-full opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      <div className={`p-6 sm:p-10 ${isFeatured ? 'grid lg:grid-cols-2 gap-10 items-center' : ''}`}>
        
        <div>
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-lg"
                style={{ background: `${project.color}${isDark ? '15' : '10'}`, border: `1px solid ${project.color}${isDark ? '25' : '20'}` }}
              >
                {project.icon}
              </div>
              <div>
                <h3 className={`font-black text-xl tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>
                <p className="text-xs sm:text-sm mt-1 font-black uppercase tracking-widest" style={{ color: project.color }}>{project.subtitle}</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2 flex-shrink-0">
              <span className={`text-[10px] sm:text-xs font-black tracking-widest uppercase ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{project.period}</span>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className={`p-2 rounded-xl transition-all ${isDark ? 'bg-white/5 hover:bg-white/10' : 'hover:bg-slate-100'}`}
                >
                  <GitBranch className={`h-4 w-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
                </a>
              )}
            </div>
          </div>

          <div className="space-y-4">
            {[
              { key: "Problem",  text: project.problem,  accent: isDark ? "rgba(239,68,68,0.04)" : "rgba(239,68,68,0.06)",   border: "rgba(239,68,68,0.12)",   label: "#ef4444" },
              { key: "Solution", text: project.solution, accent: isDark ? "rgba(59,130,246,0.04)" : "rgba(59,130,246,0.06)",  border: "rgba(59,130,246,0.12)",  label: "#3b82f6" },
              { key: "Impact",   text: project.impact,   accent: `${project.color}${isDark ? '04' : '08'}`,     border: `${project.color}15`,    label: project.color },
            ].map(({ key, text, accent, border, label }) => (
              <div key={key} className="rounded-2xl p-5 transition-colors group/item"
                style={{ background: accent, border: `1px solid ${border}` }}
              >
                <p className="text-[10px] uppercase tracking-[0.2em] font-black mb-2 flex items-center gap-1.5"
                  style={{ color: label }}>
                  {key === "Impact" && <TrendingUp className="h-3 w-3" />}
                  {key}
                </p>
                <p className={`text-sm leading-relaxed font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1.5 text-[10px] sm:text-xs rounded-full font-black uppercase tracking-widest transition-all hover:scale-105"
                style={{ 
                  background: `${project.color}${isDark ? '10' : '12'}`, 
                  color: project.color, 
                  border: `1px solid ${project.color}${isDark ? '20' : '25'}` 
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {project.screenshots.length > 0 && isFeatured && (
          <div className="mt-4 lg:mt-0">
            <ProjectCarousel shots={project.screenshots} color={project.color} />
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="projects" className="section-padding bg-section-alt overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-4"
        >
          <p className="text-blue-500 text-sm uppercase tracking-[0.2em] font-black mb-3">My Portfolio</p>
          <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Featured <span className="text-hero-gradient">Projects</span>
          </h2>
          <div className="section-bar bg-blue-500/20" />
          <p className={`mt-6 max-w-2xl mx-auto text-sm leading-relaxed font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Engineered solutions at the intersection of AI, BIM, and construction technology — built to solve real industry challenges with measurable precision.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <div className="md:col-span-2">
            <ProjectCard project={projects[0]} index={0} isFeatured />
          </div>
          {projects.slice(1).map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
