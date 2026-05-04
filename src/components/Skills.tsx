import { motion } from "framer-motion";
import { Cpu, Brain, Layout, Box, Zap, Shield } from "lucide-react";

const skillCategories = [
  {
    title: "Civil & BIM Tools",
    subtitle: "Core Engineering Stack",
    skills: ["AUTOCAD", "AUTODESK REVIT", "STAAD PRO", "MS PROJECT", "EPANET", "QGIS"],
    icon: Box,
    id: "MOD_01",
    accent: "#F59E0B",
    accentClass: "text-accent",
    bgClass: "bg-accent/10",
    borderClass: "border-accent/30",
    chipBorder: "border-accent/20 hover:border-accent/50 hover:bg-accent/5"
  },
  {
    title: "AI & Data Science",
    subtitle: "Intelligence Layer",
    skills: ["PYTHON", "PYTORCH", "COMPUTER VISION", "YOLO v11", "GENERATIVE AI", "FASTAPI"],
    icon: Brain,
    id: "MOD_03",
    accent: "#3B82F6",
    accentClass: "text-blue-400",
    bgClass: "bg-blue-500/10",
    borderClass: "border-blue-500/30",
    chipBorder: "border-blue-500/20 hover:border-blue-400/50 hover:bg-blue-500/5"
  },
  {
    title: "Sustainable Design",
    subtitle: "Green Building Expertise",
    skills: ["GREEN BUILDING STUDIO", "ENERGY MODELING", "PASSIVE COOLING", "IGBC AP"],
    icon: Layout,
    id: "MOD_02",
    accent: "#10B981",
    accentClass: "text-emerald-400",
    bgClass: "bg-emerald-500/10",
    borderClass: "border-emerald-500/30",
    chipBorder: "border-emerald-500/20 hover:border-emerald-400/50 hover:bg-emerald-500/5"
  },
  {
    title: "Core Competencies",
    subtitle: "Professional Skills",
    skills: ["BIM MANAGEMENT", "SITE MONITORING", "PROJECT PLANNING", "STRUCTURAL ANALYSIS"],
    icon: Cpu,
    id: "MOD_05",
    accent: "#A855F7",
    accentClass: "text-purple-400",
    bgClass: "bg-purple-500/10",
    borderClass: "border-purple-500/30",
    chipBorder: "border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-500/5"
  }
];

const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-bg-base relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/3 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-blue-500/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-accent dot-matrix text-[10px] tracking-[0.5em] font-bold mb-4 uppercase">// TECHNICAL REGISTRY</p>
            <h2 className="text-4xl md:text-6xl font-3022 tracking-tighter uppercase leading-none text-foreground">
              SKILLS
            </h2>
          </motion.div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="nothing-card group p-8 md:p-10 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ backgroundColor: category.accent + "18" }}
              />

              {/* Card Header */}
              <div className="flex items-center justify-between mb-7 relative z-10">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl ${category.bgClass} border ${category.borderClass} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                    <category.icon className={`w-6 h-6 ${category.accentClass}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tight text-foreground leading-none">{category.title}</h3>
                    <p className="text-[10px] text-foreground/50 uppercase tracking-widest font-medium mt-0.5">{category.subtitle}</p>
                  </div>
                </div>
                <span className={`dot-matrix text-[9px] font-bold ${category.accentClass} opacity-60`}>
                  {category.skills.length} SKILLS
                </span>
              </div>

              {/* Divider */}
              <div className="h-[1px] w-full bg-gradient-to-r from-border/60 to-transparent mb-6 relative z-10" />

              {/* Skill Chips */}
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 + sIdx * 0.04 }}
                    className={`flex items-center gap-2 px-3.5 py-2 border rounded-lg bg-foreground/[0.02] ${category.chipBorder} transition-all duration-300 cursor-default`}
                  >
                    <div
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: category.accent }}
                    />
                    <span className="text-[10px] font-black tracking-wider uppercase text-foreground/80 hover:text-foreground transition-colors whitespace-nowrap">
                      {skill}
                    </span>
                  </motion.div>
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
