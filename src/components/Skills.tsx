import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

const skillCategories = [
  { color: "#3b82f6", title: "Civil & BIM Tools",    icon: "🏗️",
    skills: ["AutoCAD", "Autodesk Revit", "STAAD Pro", "EPANET", "QGIS", "MS Project"] },
  { color: "#10b981", title: "Sustainable Design",   icon: "♻️",
    skills: ["Green Building Studio", "Energy Modeling", "Passive Cooling Analysis", "IGBC AP"] },
  { color: "#a855f7", title: "AI & Programming",     icon: "🤖",
    skills: ["Python", "PyTorch", "Computer Vision", "Generative AI", "AI App/Web Dev"] },
  { color: "#f59e0b", title: "Software & Analysis",  icon: "📊",
    skills: ["IBM SPSS", "Microsoft Excel", "Microsoft PowerPoint", "Microsoft Office"] },
  { color: "#06b6d4", title: "Core Competencies",    icon: "🧠",
    skills: ["BIM Management", "AI in Civil Engineering", "Sustainable Infrastructure", "Project Management"] },
];

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="skills" className="section-padding bg-section overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 text-sm uppercase tracking-[0.2em] font-bold mb-3">Capabilities</p>
          <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Skills & <span className="text-hero-gradient">Expertise</span>
          </h2>
          <div className="section-bar bg-blue-500/20" />
        </motion.div>

        {/* DETAILED CATEGORY GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl p-8 glass-card group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-8">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    background: `${cat.color}12`, 
                    border: `1px solid ${cat.color}25` 
                  }}
                >
                  {cat.icon}
                </div>
                <h3 className={`text-lg font-black tracking-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 text-[10px] rounded-xl font-black uppercase tracking-widest transition-all cursor-default border ${
                      isDark 
                        ? 'border-white/5 bg-white/5 text-slate-500 hover:text-blue-400 hover:border-blue-500/30' 
                        : 'border-slate-200 bg-slate-50 text-slate-500 hover:text-blue-600 hover:border-blue-300'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
