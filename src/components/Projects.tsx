import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitBranch, TrendingUp, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

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
    impact: "95%+ detection accuracy, reduced manual inspection overhead by ~60%, deployed on live construction infrastructure.",
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
  const n = shots.length;
  return (
    <motion.div
      className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
      style={{ background: "rgba(248,250,252,0.92)", backdropFilter: "blur(16px)" }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-5xl w-full rounded-2xl overflow-hidden"
        style={{ background: "rgba(255,255,255,0.95)", border: "1px solid rgba(59,130,246,0.15)" }}
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
          style={{ background: "rgba(248,250,252,0.95)", borderTop: "1px solid rgba(59,130,246,0.10)" }}
        >
          <span className="text-sm font-semibold text-slate-800">{shots[idx].label}</span>
          <span className="text-xs text-slate-400 font-mono">{idx + 1} / {n}</span>
        </div>
        <button onClick={() => setIdx((i) => (i - 1 + n) % n)}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all"
          style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(59,130,246,0.15)", boxShadow: "0 4px 12px rgba(59,130,246,0.1)" }}>
          <ChevronLeft className="h-5 w-5 text-blue-600" />
        </button>
        <button onClick={() => setIdx((i) => (i + 1) % n)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all"
          style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(59,130,246,0.15)", boxShadow: "0 4px 12px rgba(59,130,246,0.1)" }}>
          <ChevronRight className="h-5 w-5 text-blue-600" />
        </button>
        <button onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full"
          style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(59,130,246,0.15)" }}>
          <X className="h-4 w-4 text-blue-600" />
        </button>
      </motion.div>
    </motion.div>
  );
};

/* ─── Screenshot strip (for non-featured) ─── */
const Screenshots = ({ shots, color }: { shots: typeof buildsightShots; color: string }) => {
  const [lbIdx, setLbIdx] = useState<number | null>(null);
  return (
    <>
      <div className="mt-5">
        <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-400 mb-3">Screenshots</p>
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

/* ─── Carousel Component ─── */
const ProjectCarousel = ({ shots, color }: { shots: typeof buildsightShots; color: string }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [lbIdx, setLbIdx] = useState<number | null>(null);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative group/carousel">
      <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-400 mb-3">System Interface // Swipe to view</p>
      
      <div className="overflow-hidden rounded-2xl border border-blue-100 bg-slate-50" ref={emblaRef}>
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
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-all mb-2" />
                    <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] text-white font-mono opacity-0 group-hover:opacity-100 transition-all border border-white/10">
                      {s.label}
                    </span>
                 </div>
               </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-blue-100 flex items-center justify-center text-blue-600 opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-blue-50 hover:border-blue-300 shadow-sm z-20"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button 
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-blue-100 flex items-center justify-center text-blue-600 opacity-0 group-hover/carousel:opacity-100 transition-all hover:bg-blue-50 hover:border-blue-300 shadow-sm z-20"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {lbIdx !== null && <Lightbox shots={shots} idx={lbIdx} onClose={() => setLbIdx(null)} />}
      </AnimatePresence>
    </div>
  );
};

const ProjectCard = ({ project, index, isFeatured }: { project: typeof projects[0]; index: number; isFeatured?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6, delay: index * 0.12 }}
    whileHover={{ y: -6, transition: { duration: 0.2 } }}
    className={`relative rounded-2xl overflow-hidden group glass-card ${isFeatured ? 'md:p-4' : ''}`}
    style={{ borderColor: `${project.color}22` }}
  >
    <div
      className="h-1 w-full opacity-60 group-hover:opacity-100 transition-opacity"
      style={{ background: `linear-gradient(90deg,${project.color},transparent)` }}
    />

    <div className={`p-5 sm:p-8 ${isFeatured ? 'grid lg:grid-cols-2 gap-8 items-center' : ''}`}>
      
      <div>
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: `${project.color}10`, border: `1px solid ${project.color}25` }}
            >
              {project.icon}
            </div>
            <div>
              <h3 className="text-slate-900 font-bold text-base sm:text-lg leading-tight">{project.title}</h3>
              <p className="text-[11px] sm:text-sm mt-0.5 font-medium" style={{ color: project.color }}>{project.subtitle}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1 flex-shrink-0">
            <span className="text-[10px] sm:text-xs text-slate-400 font-medium">{project.period}</span>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="p-1.5 rounded-lg transition-colors hover:bg-slate-100"
              >
                <GitBranch className="h-3.5 w-3.5 text-slate-400" />
              </a>
            )}
          </div>
        </div>

        <div className="space-y-3">
          {[
            { key: "Problem",  text: project.problem,  accent: "rgba(239,68,68,0.06)",   border: "rgba(239,68,68,0.12)",   label: "#dc2626" },
            { key: "Solution", text: project.solution, accent: "rgba(59,130,246,0.06)",  border: "rgba(59,130,246,0.12)",  label: "#2563eb" },
            { key: "Impact",   text: project.impact,   accent: `${project.color}08`,     border: `${project.color}15`,    label: project.color },
          ].map(({ key, text, accent, border, label }) => (
            <div key={key} className="rounded-xl p-4"
              style={{ background: accent, border: `1px solid ${border}` }}
            >
              <p className="text-[10px] uppercase tracking-widest font-bold mb-1.5 flex items-center gap-1"
                style={{ color: label }}>
                {key === "Impact" && <TrendingUp className="h-3 w-3" />}
                {key}
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

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

      {/* Featured Project: Full-size Swipable Carousel */}
      {project.screenshots.length > 0 && (
        <div className={isFeatured ? 'mt-0' : 'mt-5'}>
          {isFeatured ? (
            <ProjectCarousel shots={project.screenshots} color={project.color} />
          ) : (
            <Screenshots shots={project.screenshots} color={project.color} />
          ) }
        </div>
      )}

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
        <p className="text-blue-600 text-sm uppercase tracking-widest font-medium mb-2">My work</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          Featured <span className="text-hero-gradient">Projects</span>
        </h2>
        <div className="section-bar bg-blue-500/20" />
        <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-sm">
          Engineered solutions at the intersection of AI, BIM, and construction technology — each built to solve real industry problems with measurable impact.
        </p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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

export default Projects;
