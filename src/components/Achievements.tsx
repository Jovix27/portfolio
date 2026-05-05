import { motion } from "framer-motion";
import { Trophy, Award, Users, ChevronRight } from "lucide-react";

const achievements = [
  { icon: Users,  title: "Chairperson",          org: "IGBC Student Chapter, SASTRA University",               year: "2025-2026" },
  { icon: Users,  title: "Core Executive Member", org: "Civil Engineering Association (CEA), SASTRA",           year: "2025-2026" },
  { icon: Users,  title: "Technical Head",        org: "Utsav 2025 (Annual Cultural Festival), SASTRA",         year: "2025" },
  { icon: Trophy, title: "Internal Finalist",     org: "Smart India Hackathon (SIH) — AI Civil Solutions",      year: "2024" },
  { icon: Trophy, title: "Internal Finalist",     org: "Daksh AI Hackathon — Machine Learning in Construction", year: "2025" },
];

const certifications = [
   { title: (<span><span className="font-bold">IGBC</span> Accredited Professional (Associate)</span>), issuer: "Indian Green Building Council", year: "2025" },
  { title: "BIM Workshop",                             issuer: "SASTRA University",             year: "2024" },
  { title: "Revit Workshop — L&T Construction Certified", issuer: "Larsen & Toubro",            year: "2023" },
  { title: "3D Printing Technology in Construction",   issuer: "SASTRA University",             year: "2024" },
  { title: "Advances in Transportation Geotechnics",   issuer: "IGS Thanjavur",                 year: "2025" },
];

const Achievements = () => (
  <section id="achievements" className="section-padding bg-bg-base relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.98 }} 
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-6xl font-3022 tracking-tighter uppercase leading-none text-foreground">
          EXPERIENCE
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {achievements.map((a, i) => {
          const Icon = a.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
              className="nothing-card p-6 group hover:bg-foreground/5 transition-all relative overflow-hidden flex flex-col justify-between min-h-[180px]"
            >
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2.5 rounded-full border border-border/30 text-accent bg-bg-base group-hover:border-accent/50 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-3022 text-lg text-foreground/40 group-hover:text-accent transition-colors">{a.year.split('–')[0]}</span>
                </div>
                <div>
                  <h3 className="text-base font-bold tracking-tight mb-2 uppercase text-foreground leading-tight">
                    {a.title}
                  </h3>
                  <p className="text-[9px] text-foreground/50 dot-matrix tracking-widest uppercase leading-relaxed group-hover:text-foreground transition-colors">
                    {a.org}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase leading-none text-foreground">
          CERTIFICATIONS
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex items-center justify-between p-6 nothing-card group hover:border-accent transition-all relative overflow-hidden"
          >
            {/* Background Accent Pulse */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors" />
            
            <div className="flex items-center gap-6 relative z-10">
              <div className="w-12 h-12 rounded-full border border-border/30 flex items-center justify-center bg-bg-base group-hover:border-accent group-hover:text-accent transition-all duration-500">
                <Award className="w-6 h-6 text-foreground group-hover:text-accent group-hover:scale-110 transition-all" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm md:text-lg font-bold tracking-tight uppercase group-hover:text-foreground transition-colors text-foreground">
                  {c.title}
                </h3>
                <div className="flex items-center gap-3">
                  <p className="text-[10px] text-foreground/50 dot-matrix tracking-widest uppercase group-hover:text-foreground transition-colors">
                    {c.issuer} • {c.year}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative z-10 p-2 rounded-full border border-border/20 group-hover:border-accent/30 group-hover:translate-x-1 transition-all">
              <ChevronRight className="w-4 h-4 text-foreground group-hover:text-accent" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
