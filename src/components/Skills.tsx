import { motion } from "framer-motion";
import TechBallCanvas from "./canvas/TechBall";

const technologies = [
  { name: "AutoCAD",        color: "#ef4444" },
  { name: "Autodesk Revit", color: "#3b82f6" },
  { name: "STAAD Pro",      color: "#10b981" },
  { name: "QGIS",           color: "#f59e0b" },
  { name: "Plaxis 2D",      color: "#8b5cf6" },
  { name: "Python",         color: "#06b6d4" },
  { name: "MS Project",     color: "#ec4899" },
  { name: "IBM SPSS",       color: "#f97316" },
];

const skillCategories = [
  { color: "#3b82f6", title: "Civil & BIM Tools",    icon: "🏗️",
    skills: ["AutoCAD", "Autodesk Revit", "STAAD Pro", "EPANET", "QGIS", "Plaxis 2D"] },
  { color: "#10b981", title: "Sustainable Design",   icon: "♻️",
    skills: ["Green Building Studio", "Energy Modeling", "Passive Cooling Analysis", "ASHRAE 90.1"] },
  { color: "#8b5cf6", title: "AI & Programming",     icon: "🤖",
    skills: ["Python", "Random Forest", "LSTM", "YOLOv8", "Generative AI", "Computer Vision"] },
  { color: "#f59e0b", title: "Software & Analysis",  icon: "📊",
    skills: ["MS Project", "IBM SPSS", "Excel Advanced", "Power BI", "Tableau"] },
  { color: "#06b6d4", title: "Core Competencies",    icon: "🧠",
    skills: ["Building Information Modeling", "AI in Civil Engineering", "Transportation Planning", "Project Management", "Sustainable Infrastructure"] },
];

const Skills = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <section id="skills" className="section-padding bg-section-alt">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-4"
        >
          <p className="text-blue-400 text-sm uppercase tracking-widest font-medium mb-2">My technical arsenal</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Skills & <span className="text-hero-gradient">Expertise</span>
          </h2>
          <div className="section-bar" />
        </motion.div>

        {/* Tech Balls — desktop only */}
        {!isMobile ? (
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 flex flex-wrap justify-center gap-8"
          >
            {technologies.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-2">
                <div className="w-24 h-24">
                  <TechBallCanvas icon="" label={tech.name} color={tech.color} />
                </div>
                <p className="text-xs text-white/50 font-medium text-center">{tech.name}</p>
              </div>
            ))}
          </motion.div>
        ) : (
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className="px-4 py-2 rounded-full text-xs font-semibold"
                style={{ background: `${tech.color}15`, color: tech.color, border: `1px solid ${tech.color}30` }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        )}

        {/* Category grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="rounded-2xl p-6 glass-card"
              style={{ borderColor: `${cat.color}25` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}30` }}
                >
                  {cat.icon}
                </div>
                <h3 className="text-white font-bold text-sm">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-full font-medium cursor-default transition-all hover:scale-105"
                    style={{ background: `${cat.color}12`, color: cat.color, border: `1px solid ${cat.color}25` }}
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
