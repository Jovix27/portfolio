import { motion } from "framer-motion";
import { Trophy, Award, Users } from "lucide-react";

const achievements = [
  { icon: Users,  color: "#3b82f6", title: "Chairperson",          org: "IGBC Student Chapter, SASTRA University",               year: "2024–25" },
  { icon: Users,  color: "#3b82f6", title: "Core Executive Member", org: "Civil Engineering Association (CEA), SASTRA",           year: "2024–25" },
  { icon: Users,  color: "#8b5cf6", title: "Technical Head",        org: "Utsav 2025 (Annual Cultural Festival), SASTRA",         year: "2024–25" },
  { icon: Trophy, color: "#f59e0b", title: "Internal Finalist",     org: "Smart India Hackathon (SIH) — AI Civil Solutions",      year: "2024" },
  { icon: Trophy, color: "#f59e0b", title: "Internal Finalist",     org: "Daksh AI Hackathon — Machine Learning in Construction", year: "2025" },
];

const certifications = [
  { title: "IGBC Accredited Professional (Associate)", issuer: "Indian Green Building Council", year: "2025" },
  { title: "BIM Workshop",                             issuer: "SASTRA University",             year: "2024" },
  { title: "Revit Workshop — L&T Construction Certified", issuer: "Larsen & Toubro",            year: "2023" },
  { title: "3D Printing Technology in Construction",   issuer: "SASTRA University",             year: "2024" },
  { title: "Advances in Transportation Geotechnics",   issuer: "IGS Thanjavur",                 year: "2025" },
];

const Achievements = () => (
  <section id="achievements" className="section-padding bg-section">
    <div className="max-w-7xl mx-auto">

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <p className="text-blue-400 text-sm uppercase tracking-widest font-medium mb-2">Recognition</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Achievements & <span className="text-hero-gradient">Leadership</span>
        </h2>
        <div className="section-bar" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
        {achievements.map((a, i) => {
          const Icon = a.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl glass-card"
              style={{ borderColor: `${a.color}22` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl flex-shrink-0"
                  style={{ background: `${a.color}14`, border: `1px solid ${a.color}28` }}>
                  <Icon className="h-5 w-5" style={{ color: a.color }} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base leading-tight">{a.title}</h3>
                  <p className="text-sm text-white/45 mt-1 leading-snug">{a.org}</p>
                  <span
                    className="inline-block mt-2 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                    style={{ background: `${a.color}14`, color: a.color, border: `1px solid ${a.color}28` }}
                  >{a.year}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <p className="text-blue-400 text-sm uppercase tracking-widest font-medium mb-2">Credentials</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          <span className="text-hero-gradient">Certifications</span>
        </h2>
        <div className="section-bar" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {certifications.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="p-6 rounded-2xl glass-card flex items-start gap-4"
          >
            <div className="p-3 rounded-xl flex-shrink-0"
              style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.22)" }}>
              <Award className="h-5 w-5 text-emerald-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-white text-sm leading-snug">{c.title}</h3>
              <p className="text-xs text-white/40 mt-1">{c.issuer}</p>
              <span className="inline-block mt-2 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                style={{ background: "rgba(16,185,129,0.12)", color: "#10b981", border: "1px solid rgba(16,185,129,0.22)" }}>
                {c.year}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;
