import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ArrowUpRight, Maximize2, Layers, ChevronRight, ChevronLeft } from "lucide-react";

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
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div 
            key={i}
            className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-white/30'}`}
          />
        ))}
      </div>
      
      <div className="absolute top-6 left-6 pointer-events-none">
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
    date: "2025 - 2026",
    problem: "Manual PPE checks on active construction sites are unreliable, time-consuming, and miss violations in real-time.",
    solution: "Built an AI-driven computer vision system using YOLOv11 + YOLOv26 + multi-agent orchestration to detect PPE violations in real-time across site camera feeds.",
    impact: "88% precision, reduced manual inspection by ~60%, deployed on live construction infrastructure.",
    tags: ["YOLOv11", "YOLOv26", "COMPUTER VISION", "PYTHON", "FASTAPI", "WEBSOCKET", "CONTECH"],
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
    title: "BIM Energy Model",
    subtitle: "SUSTAINABLE BUILDING SIMULATION",
    date: "2024",
    problem: "Conventional residential designs consume 25-40% more energy than necessary due to poor envelope design and orientation.",
    solution: "Engineered sustainable residential models in Autodesk Revit with thermal performance simulation and passive cooling optimization.",
    impact: "Achieved 30% reduction in simulated energy consumption. Validated against optimized building standards.",
    tags: ["AUTODESK REVIT", "BIM", "ENERGY MODELING"],
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
           <p className="text-accent dot-matrix text-[10px] tracking-[0.5em] font-bold mb-4">// PROJECT VAULT</p>
           <h2 className="text-4xl md:text-6xl font-3022 tracking-tighter uppercase leading-none text-foreground mb-4">
              ARCHIVE
           </h2>
        </div>

        {/* Project List */}
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
              className="nothing-card p-8 md:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Left Side: Content & Registry */}
                <div className="lg:col-span-5 flex flex-col gap-10">
                  {/* Project Identity */}
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-6">
                       <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                          <Layers className="w-8 h-8 text-accent" />
                       </div>
                       <div>
                          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.85] text-foreground">{project.title}</h3>
                          <p className="text-[10px] font-bold text-accent uppercase tracking-[0.3em] mt-3">{project.subtitle}</p>
                       </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="project-box-red">
                         <p className="text-[10px] font-black uppercase tracking-widest mb-1.5 text-foreground">PROBLEM</p>
                         <p className="text-xs font-bold leading-relaxed text-foreground">{project.problem}</p>
                      </div>
                      <div className="project-box-blue">
                         <p className="text-[10px] font-black uppercase tracking-widest mb-1.5 text-foreground">SOLUTION</p>
                         <p className="text-xs font-bold leading-relaxed text-foreground">{project.solution}</p>
                      </div>
                      <div className="project-box-yellow">
                         <p className="text-[10px] font-black uppercase tracking-widest mb-1.5 text-foreground">IMPACT</p>
                         <p className="text-xs font-bold leading-relaxed text-foreground">{project.impact}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-4">
                     <p className="text-[10px] font-bold dot-matrix tracking-widest text-accent uppercase">Technology Stack</p>
                     <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                         <span key={tag} className="px-3 py-1.5 border border-border/50 text-foreground text-[9px] font-black rounded-lg tracking-widest bg-muted/20">
                           {tag}
                         </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Media */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  {project.images && project.images.length > 0 && (
                    <div className="w-full flex flex-col">
                      <div className="mb-4 flex items-center justify-between">
                         <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            <span className="text-[10px] font-bold dot-matrix tracking-[0.4em] text-accent uppercase">SYSTEM INTERFACE // LIVE VIEW</span>
                         </div>
                         <span className="text-[10px] font-bold dot-matrix text-foreground uppercase">{project.date}</span>
                      </div>
                      <div className="w-full aspect-[4/3] lg:aspect-video rounded-[40px] overflow-hidden border border-border/30 bg-foreground/5 shadow-2xl shadow-black/80">
                         <ProjectCarousel images={project.images} />
                      </div>
                    </div>
                  )}
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
                className="nothing-card p-8 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Layers className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black tracking-tighter uppercase leading-none text-foreground">{project.title}</h3>
                      <p className="text-[10px] font-bold text-accent uppercase tracking-widest mt-1">{project.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 border border-border/30 rounded-xl bg-muted/5">
                      <p className="text-[9px] font-black uppercase tracking-widest mb-1 text-foreground font-bold">CHALLENGE</p>
                      <p className="text-[11px] font-bold leading-relaxed text-foreground">{project.problem}</p>
                    </div>
                    <div className="p-4 border border-accent/20 rounded-xl bg-accent/5">
                      <p className="text-[9px] font-black uppercase tracking-widest mb-1 text-accent font-bold">IMPACT</p>
                      <p className="text-[11px] font-bold leading-relaxed text-foreground">{project.impact}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 border border-border/30 text-foreground text-[8px] font-bold rounded uppercase tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-border/20 flex justify-between items-center">
                  <span className="text-[9px] font-bold dot-matrix uppercase tracking-widest text-foreground">DOCUMENT ONLY</span>
                  <span className="text-[9px] font-bold text-foreground">{project.date}</span>
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
