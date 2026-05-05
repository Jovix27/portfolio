import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, ChevronRight, ChevronLeft } from "lucide-react";
import MatrixGraph from "./MatrixGraph";

const ProjectCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative group w-full h-full rounded-3xl overflow-hidden border border-border/50 bg-foreground/5">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button 
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20 z-30"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20 z-30"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, i) => (
          <div 
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-white/30'}`}
          />
        ))}
      </div>
      
      <div className="absolute top-6 left-6 pointer-events-none z-30">
        <span className="dot-matrix text-[10px] font-bold tracking-[0.3em] text-white/50 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
          VIEWING MODULE {currentIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "BuildSight AI",
    subtitle: "AI-POWERED CONSTRUCTION SAFETY SYSTEM",
    date: "2026",
    problem: "Manual PPE checks on active construction sites are unreliable, time-consuming, and miss violations in real-time.",
    solution: "Built an AI-driven computer vision system using YOLOv11 + YOLOv26 + multi-agent orchestration to detect PPE violations in real-time across site camera feeds.",
    impact: "88% precision, reduced manual inspection by ~60%, deployed on live construction infrastructure.",
    tags: ["REACT 18", "TYPESCRIPT", "PYTHON", "FASTAPI", "WEBSOCKET", "YOLOv11", "YOLOv26", "COMPUTER VISION", "OPENCV", "MULTI-AGENT AI", "CONTECH"],
    images: [
      "./buildsight_dashboard_full.png",
      "./Detection image .jpeg",
      "./Site intelligence tab .jpeg",
      "./geoai tab image .jpeg",
      "./buildsight_turner_ai.png",
      "./buildsight_turner_voice_mode.png"
    ],
  },
  {
    id: 2,
    title: "Eco Estimator",
    subtitle: "AI-POWERED CONSTRUCTION ESTIMATION PLATFORM",
    date: "2025",
    problem: "Construction cost estimation is highly manual and disconnected from sustainability goals — slow QTOs, disjointed supplier rate feeds introducing bid risk, and zero automated carbon tracking during procurement.",
    solution: "AI-driven cloud-native dashboard automating Quantity Takeoffs from architectural drawings with Carbon-First intelligence, live rate feeds, ML uncertainty quantification, and tender-ready BOQs with an Eco-Grade scoring and Eco-Swap material comparison system.",
    impact: "Dramatically speeds up estimator workflows, reduces bid risk via ML-based uncertainty quantification, closes the procurement loop with exportable PDF reporting, and delivers actionable carbon metrics and green alternatives at the estimating stage.",
    tags: ["REACT 18", "TYPESCRIPT", "FASTAPI", "SUPABASE", "POSTGRESQL", "REDIS", "AI/ML", "CONTECH", "PROPTECH", "CARBON TRACKING"],
    images: [],
  },
  {
    id: 3,
    title: "PWV Validation System",
    subtitle: "SATELLITE CLIMATE DATA CORRECTION",
    date: "2024 - 2025",
    problem: "MODIS satellite Precipitable Water Vapor (PWV) data contains systematic biases that compromise climate models.",
    solution: "Built AI-driven bias correction models using Random Forest + LSTM to reconcile MODIS satellite data against GNSS station readings.",
    impact: "Improved PWV data accuracy by 89%. Processing pipeline handles 500k+ data points per run.",
    tags: ["PYTHON", "RANDOM FOREST", "LSTM", "MODIS", "CLIMATE TECH"],
    images: [],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-bg-alt relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-20">
           <h2 className="text-4xl md:text-6xl font-3022 tracking-tighter uppercase leading-none text-foreground mb-4">
              PROJECT VAULT
           </h2>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-12">
          {/* Main Featured Project: BuildSight AI */}
          {projects.filter(p => p.id === 1).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="nothing-card p-8 md:p-12 relative overflow-hidden"
            >
              {/* Subtle background matrix */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <MatrixGraph />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                {/* Left Side: Content & Registry */}
                <div className="lg:col-span-5 flex flex-col gap-10">
                  {/* Project Identity */}
                  <div className="flex flex-col gap-8">
                    <div className="flex items-start gap-6">
                       <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                          <Layers className="w-8 h-8 text-accent" />
                       </div>
                       <div>
                          <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-[0.8] text-foreground">BUILDSIGHT<br/>AI</h3>
                          <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mt-4">AI-POWERED CONSTRUCTION SAFETY SYSTEM</p>
                       </div>
                    </div>
                    
                    <div className="space-y-6 mt-4">
                      <div className="space-y-3">
                         <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground opacity-80">PROBLEM</p>
                         <p className="text-base font-bold leading-relaxed text-foreground/90 max-w-sm">{project.problem}</p>
                      </div>
                      <div className="space-y-3 bg-foreground/[0.03] p-10 rounded-3xl border border-border/20">
                         <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground opacity-80">SOLUTION</p>
                         <p className="text-base font-bold leading-relaxed text-foreground/90">{project.solution}</p>
                      </div>
                      <div className="space-y-3 bg-accent/[0.03] p-10 rounded-3xl border border-accent/20">
                         <p className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground opacity-80">IMPACT</p>
                         <p className="text-base font-bold leading-relaxed text-foreground font-black">{project.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Media & Tech Stack */}
                <div className="lg:col-span-7 flex flex-col justify-center gap-8">
                  {project.images && project.images.length > 0 && (
                    <div className="w-full flex flex-col">
                      <div className="mb-4 flex items-center justify-between">
                         <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FFB800] animate-pulse" />
                            <span className="text-[10px] font-bold dot-matrix tracking-[0.3em] text-[#FFB800] uppercase">SYSTEM INTERFACE // LIVE VIEW</span>
                         </div>
                          <span className="text-[10px] font-bold dot-matrix text-foreground tracking-[0.2em] uppercase">2026</span>
                      </div>
                      <div className="rounded-[30px] overflow-hidden border border-border/30 bg-foreground/5 shadow-2xl shadow-black/80 aspect-[21/9]">
                         <ProjectCarousel images={project.images} />
                      </div>
                    </div>
                  )}

                  {/* Tech Stack - Moved under image */}
                  <div className="space-y-4 pt-4 border-t border-border/10">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-[1px] bg-accent/30" />
                        <p className="text-[10px] font-bold dot-matrix tracking-widest text-accent uppercase">Technology Stack</p>
                     </div>
                     <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                         <span key={tag} className="px-4 py-2 border border-border/40 text-foreground text-[10px] font-black rounded-xl tracking-wider bg-foreground/5 hover:border-accent hover:bg-accent/5 hover:text-accent transition-all duration-300">
                           {tag}
                         </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Secondary Projects: BIM & PWV Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(p => p.id !== 1).map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="nothing-card p-8 flex flex-col justify-between relative overflow-hidden"
              >
                <div className="space-y-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-border/40 flex items-center justify-center text-foreground">
                      <Layers className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black tracking-tighter uppercase leading-none text-foreground">{project.title}</h3>
                      <p className="text-[10px] font-bold text-accent uppercase tracking-widest mt-1">{project.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 border border-border/30 rounded-xl bg-foreground/[0.01]">
                      <p className="text-[9px] font-black uppercase tracking-widest mb-1 text-accent font-bold">CHALLENGE</p>
                      <p className="text-[11px] font-bold leading-relaxed text-foreground/80">{project.problem}</p>
                    </div>
                    <div className="p-4 border border-border/30 rounded-xl bg-foreground/[0.01]">
                      <p className="text-[9px] font-black uppercase tracking-widest mb-1 text-accent font-bold">IMPACT</p>
                      <p className="text-[11px] font-bold leading-relaxed text-foreground/80">{project.impact}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 border border-border/30 text-foreground text-[8px] font-bold rounded uppercase tracking-tighter bg-foreground/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-border/20 flex justify-between items-center relative z-10">
                  <span className="text-[9px] font-bold dot-matrix uppercase tracking-widest text-foreground/50">DOCUMENT ONLY</span>
                  <span className="text-[9px] font-bold text-foreground/50">{project.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
