import { motion } from "framer-motion";
import { User, Cpu, Award, Database, Download } from "lucide-react";

const stats = [
  { label: "ENGINEERING PROJECTS", value: "3+", icon: Cpu },
  { label: "IGBC AP ASSOCIATE", value: "IGBC", icon: Award },
  { label: "BIM & AI SKILLSET", value: "15+", icon: Database },
  { label: "RESEARCH CONTRIBUTIONS", value: "3+", icon: User },
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-bg-base relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <p className="text-accent dot-matrix text-[10px] tracking-[0.5em] font-bold mb-4 uppercase">// IDENTITY MODULE</p>
          <h2 className="text-4xl md:text-6xl font-3022 tracking-tighter uppercase leading-none text-foreground">
            ABOUT ME
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side: Bio and Stats */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="nothing-card p-6 md:p-10 flex flex-col gap-6"
            >
              <div className="space-y-6 text-base md:text-lg text-foreground leading-relaxed">
                <p>
                  I'm <span className="text-foreground font-bold italic">Joseva A</span> — a <span className="text-foreground font-bold">Civil Engineering Professional</span> specialized in the integration of <span className="text-accent font-bold">AI systems</span>, <span className="text-accent font-bold">BIM workflows</span>, and <span className="text-[#10B981] font-bold">Sustainable Infrastructure</span>.
                </p>
                <p>
                  I engineer intelligent solutions that optimize construction safety and energy efficiency. My work bridges the gap between traditional engineering and modern technology, delivering production-ready systems for the built environment.
                </p>
                <p className="text-xs italic text-foreground font-medium">
                  Graduate of SASTRA Deemed University. Professional experience with <span className="text-accent">L&T Chennai Metro</span> and research history at <span className="text-accent">NIT Trichy</span>.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="nothing-card p-6 md:p-8 flex flex-col items-center justify-center text-center group relative cursor-pointer overflow-hidden"
                >
                  <span className="text-4xl font-black tracking-tighter mb-1 text-foreground group-hover:text-accent transition-colors">{stat.value}</span>
                  <span className="text-[10px] font-bold dot-matrix tracking-widest text-foreground uppercase">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Photo and Education */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Profile Photo Circular */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-accent/30 relative group bg-muted">
                <motion.img
                  src="./profile photo dot matrix.png"
                  alt="Joseva A"
                  loading="lazy"
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 1 }
                  }}
                  className="w-full h-full object-cover"
                />
                
                {/* Dot Matrix Animation Overlay */}
                <motion.div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle, var(--accent) 1px, transparent 1px)`,
                    backgroundSize: '4px 4px',
                    opacity: 0.3
                  }}
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.01, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Digital Flicker Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-accent/5 pointer-events-none"
                  animate={{
                    opacity: [0, 0.1, 0, 0.05, 0],
                  }}
                  transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 5
                  }}
                />
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="nothing-card p-6 md:p-8 flex flex-col gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                   <User className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter text-foreground">Education</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-tight text-foreground">Bachelor of Technology</p>
                  <p className="text-xs font-bold text-accent uppercase tracking-widest">CIVIL ENGINEERING</p>
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm font-bold text-foreground">SASTRA Deemed University</p>
                  <p className="text-[10px] text-foreground font-bold uppercase tracking-widest">2022 — 2026 · Thanjavur, TN</p>
                </div>

                <div className="pt-4 border-t border-border/50 flex items-end justify-between">
                   <div>
                      <p className="text-[8px] font-bold uppercase tracking-widest text-foreground mb-1">CUMULATIVE GPA</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-accent">7.2</span>
                        <span className="text-xs font-bold text-foreground">/ 10</span>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* Resume Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const link = document.createElement("a");
                link.href = "./resume.pdf";
                link.download = "Joseva_A_Resume.pdf";
                link.click();
              }}
              className="w-full py-5 bg-accent text-accent-foreground rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-accent/20"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
