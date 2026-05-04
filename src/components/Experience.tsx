import { motion } from "framer-motion";
import MatrixGraph from "./MatrixGraph";
import { Briefcase, MapPin, Building2 } from "lucide-react";

const experiences = [
  {
    role: "Engineering Intern",
    company: "LARSEN & TOUBRO (L&T)",
    project: "Chennai Metro Phase 2",
    location: "Chennai, IN",
    period: "JUNE — JULY 2025",
    id: "EXP_01",
    details: [
      "Currently deployed on Corridor 3 — gaining critical site intelligence in TBM tunneling and heavy engineering infrastructure.",
      "Successfully mastered GeoFreq, an advanced geotechnical monitoring system, ensuring precision in underground structural stability.",
      "Independently conceptualized ClimaNEX AI — an intelligent site-safety platform taking architectural inspiration from GeoFreq's diagnostic logic.",
      "Designed ClimaNEX to integrate live atmospheric data with multi-agent predictive modeling for high-precision local weather alerting.",
      "Active site supervision and enforcement of ISO-certified safety protocols in complex underground environments."
    ]
  },
  {
    role: "Research Intern — Transportation",
    company: "NIT TRICHY",
    project: "National Institute of Technology, Tiruchirappalli",
    location: "Tiruchirappalli, IN",
    period: "MAY — JUNE 2024",
    id: "EXP_02",
    details: [
      "Collaborated on driver behavior analysis in Tiruchirappalli, collecting and preprocessing 111+ comprehensive driver behavior datasets from field observations.",
      "Optimized transportation datasets using IBM's SPSS software, achieving a 20% improvement in reliability through advanced bias correction.",
      "Conducted statistical modeling to identify urban infrastructure bottlenecks, delivering actionable insights for strategic transportation planning.",
      "Designed data-driven frameworks for analyzing traffic psychology and risk perception metrics."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">

          {/* Full-width Heading */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent dot-matrix text-[10px] tracking-[0.5em] font-bold mb-4 uppercase opacity-90">// TIMELINE DATA</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-3022 tracking-tighter uppercase leading-none text-foreground">
              EXPERIENCE
            </h2>
          </motion.div>

          {/* Second Row: Description text left, Matrix right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5"
            >
              <div className="space-y-6">
                <p className="text-foreground/80 font-medium text-lg md:text-xl leading-relaxed">
                  Bridging the gap between heavy infrastructure engineering and AI-driven site intelligence. My journey spans from high-precision TBM tunneling operations at <span className="text-foreground font-bold">L&T Metro</span> to optimized transportation data modeling at <span className="text-foreground font-bold">NIT Trichy</span>.
                </p>
                <div className="flex items-center gap-6 py-4 border-y border-border/20">
                  <div className="flex flex-col gap-1">
                    <span className="dot-matrix text-[10px] text-accent tracking-widest font-bold">FOCUS</span>
                    <span className="text-xs font-black uppercase tracking-widest text-foreground">CIVIL / BIM / AI</span>
                  </div>
                  <div className="w-[1px] h-10 bg-border/40" />
                  <div className="flex flex-col gap-1">
                    <span className="dot-matrix text-[10px] text-accent tracking-widest font-bold">SPECIALIZATION</span>
                    <span className="text-xs font-black uppercase tracking-widest text-foreground">SITE INTELLIGENCE</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Matrix Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-7 nothing-card p-6 md:p-8 backdrop-blur-md relative z-10 border-border/10 overflow-hidden"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <span className="dot-matrix text-[8px] md:text-[10px] tracking-widest text-foreground">CONTRIBUTION_GRID</span>
                  <div className="h-[1px] w-8 md:w-12 bg-accent/20" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="dot-matrix text-[8px] tracking-[0.4em] text-foreground uppercase font-black">LIVE_FEED</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                </div>
              </div>
              <div className="flex justify-end items-center">
                <MatrixGraph />
              </div>
            </motion.div>
          </div>

          {/* Bottom Row: Experience Cards in 2-column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="nothing-card p-6 sm:p-10 group flex flex-col h-full hover:bg-foreground/[0.03] transition-all duration-500 border-border/10 hover:border-accent/40 relative overflow-hidden"
              >
                {/* Background Glow Effect */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 rounded-full blur-[80px] group-hover:bg-accent/10 transition-colors duration-700" />
                
                {/* Visual Timeline Accent */}
                <div className="absolute left-0 top-10 bottom-10 w-[2px] bg-accent/20 group-hover:bg-accent transition-colors duration-500" />

                <div className="space-y-6 flex-1 pl-4 relative z-10">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl border border-border/30 flex-shrink-0 flex items-center justify-center text-accent group-hover:border-accent/40 transition-all duration-500 bg-foreground/5 shadow-sm">
                          <Briefcase className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold dot-matrix text-accent tracking-[0.4em] uppercase mb-1">{exp.id}</p>
                          <h3 className="text-xl sm:text-2xl font-black tracking-tighter uppercase text-foreground transition-colors leading-none">{exp.role}</h3>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                       <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[10px] font-bold dot-matrix tracking-widest text-accent whitespace-nowrap">
                        {exp.period}
                      </span>
                      <div className="flex items-center gap-2 px-3 py-1 bg-foreground/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-foreground/70">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-foreground font-bold uppercase tracking-widest text-sm py-1">
                    <Building2 className="w-4 h-4 text-accent" />
                    {exp.company}
                  </div>

                  <div className="h-[1px] w-full bg-gradient-to-r from-border/50 to-transparent" />

                  <ul className="space-y-4">
                    {experiences[i].details.map((detail, idx) => (
                      <li key={idx} className="flex gap-4 group/item">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/40 group-hover/item:bg-accent group-hover/item:scale-125 transition-all flex-shrink-0" />
                        <p className="text-foreground/80 text-sm leading-relaxed font-medium group-hover/item:text-foreground transition-colors">
                          {detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
