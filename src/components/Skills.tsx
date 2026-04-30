import { motion } from "framer-motion";

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
  return (
    <section id="skills" className="section-padding bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 text-sm uppercase tracking-widest font-medium mb-2">Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Skills & <span className="text-hero-gradient">Expertise</span>
          </h2>
          <div className="section-bar" />
        </motion.div>

        {/* DETAILED CATEGORY GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl p-8 bg-white border border-blue-500/10 shadow-lg shadow-blue-500/5 group hover:border-blue-500/30 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl bg-blue-500/5 border border-blue-500/10 group-hover:border-blue-500/40 transition-colors"
                  style={{ borderColor: `${cat.color}33` }}
                >
                  {cat.icon}
                </div>
                <h3 className="text-slate-900 font-bold tracking-tight">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-[10px] rounded-xl font-bold border border-slate-200 bg-slate-50 text-slate-500 uppercase tracking-widest hover:border-blue-300 hover:text-blue-600 transition-all cursor-default"
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
