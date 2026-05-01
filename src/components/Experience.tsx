import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Briefcase, GraduationCap, Star, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const experiences = [
  {
    title: "Engineering Intern",
    company: "Larsen & Toubro (L&T)",
    location: "Chennai Metro Phase 2",
    period: "June – July 2025",
    icon: Briefcase,
    color: "#3b82f6",
    certificateUrl: "/portfolio/L&T%20Intership%20Certificate%20.pdf",
    points: [
      "Deployed on Metro Phase 2 Corridor 3 — one of India's largest urban transit projects, gaining direct site experience in TBM tunneling operations.",
      "Applied GeoFreq for real-time geotechnical monitoring, integrating live sensor feeds with AI-based geological predictive modeling.",
      "Conceptualized ClimaNEX AI — an AI-driven hyper-local weather forecasting system designed specifically for construction site safety.",
      "Enforced and monitored safety protocols across tunneling operations in a high-risk underground environment.",
    ],
  },
  {
    title: "Research Intern – Transportation",
    company: "NIT Trichy",
    location: "National Institute of Technology, Tiruchirappalli",
    period: "May – June 2024",
    icon: Star,
    color: "#8b5cf6",
    certificateUrl: "/portfolio/NIT%20Internship%20Certificate.pdf",
    points: [
      "Collaborated on driver behavior analysis in Tiruchirappalli, collecting and preprocessing 111+ comprehensive driver behavior datasets from field observations.",
      "Optimized transportation datasets using IBM's SPSS software, achieving a 20% improvement in reliability through advanced bias correction.",
      "Conducted statistical modeling to identify urban infrastructure bottlenecks, delivering actionable insights for strategic transportation planning.",
      "Designed data-driven frameworks for analyzing traffic psychology and risk perception metrics.",
    ],
  },
  {
    title: "B.Tech – Civil Engineering",
    company: "SASTRA Deemed University",
    location: "Thanjavur, Tamil Nadu",
    period: "2022 – 2026",
    icon: GraduationCap,
    color: "#10b981",
    certificateUrl: null, // Academic foundation - no certificate trigger
    points: [
      "Specializing in BIM, AI-integrated construction systems, and sustainable infrastructure design.",
      "CGPA: 7.2 (till 7th semester) with focus on computational structural engineering and smart building technologies.",
      "Led research on PWV satellite data bias correction using ML (Random Forest), achieving 89% accuracy improvement.",
    ],
  },
];

const Experience = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="experience" className="section-padding bg-section overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-4"
        >
          <p className="text-blue-500 text-sm uppercase tracking-[0.2em] font-bold mb-3">What I have done so far</p>
          <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Work <span className="text-hero-gradient">Experience</span>
          </h2>
          <div className="section-bar bg-blue-500/20" />
        </motion.div>

        <div className="mt-20">
          <VerticalTimeline lineColor={isDark ? "rgba(255,255,255,0.06)" : "rgba(59,130,246,0.12)"}>
            {experiences.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <VerticalTimelineElement
                  key={i}
                  contentStyle={{
                    background: isDark ? "rgba(15,23,42,0.6)" : "rgba(255,255,255,0.7)",
                    border: isDark ? "1px solid rgba(255,255,255,0.05)" : `1px solid ${exp.color}20`,
                    backdropFilter: "blur(24px)",
                    boxShadow: isDark ? "0 8px 32px rgba(0,0,0,0.4)" : `0 8px 32px rgba(31, 38, 135, 0.05)`,
                    borderRadius: "1.5rem",
                    padding: "2rem",
                  }}
                  contentArrowStyle={{ borderRight: `7px solid ${isDark ? 'rgba(15,23,42,0.6)' : 'rgba(255,255,255,0.7)'}` }}
                  date={exp.period}
                  dateClassName={`!font-black !text-[11px] sm:!text-xs !tracking-widest !uppercase ${isDark ? '!text-slate-500' : '!text-slate-400'}`}
                  iconStyle={{
                    background: exp.color,
                    boxShadow: isDark ? `0 0 0 4px rgba(0,0,0,0.6), 0 0 20px ${exp.color}40` : `0 0 0 4px ${exp.color}28, 0 0 20px ${exp.color}30`,
                  }}
                  icon={<Icon className="w-5 h-5 text-white" />}
                >
                  <div className="relative">
                    {exp.certificateUrl && (
                      <motion.a
                        href={exp.certificateUrl}
                        download
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1, backgroundColor: `${exp.color}20` }}
                        className="absolute -top-4 -right-4 p-2.5 rounded-xl border border-blue-500/20 bg-blue-500/5 transition-all group/cert shadow-lg shadow-blue-500/5"
                        title="View Verified Experience"
                      >
                        <ArrowUpRight className="w-4 h-4 text-blue-500 transition-transform group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5" />
                        <div className="absolute top-0 right-full mr-3 py-1 px-2.5 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded opacity-0 pointer-events-none transition-opacity group-hover/cert:opacity-100 whitespace-nowrap shadow-xl">
                          View Verified Experience
                        </div>
                      </motion.a>
                    )}
                    <h3 className={`font-black text-xl tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{exp.title}</h3>
                    <p className="text-sm font-black mt-1 uppercase tracking-widest" style={{ color: exp.color }}>{exp.company}</p>
                    <p className={`text-xs mt-1.5 font-medium ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{exp.location}</p>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {exp.points.map((pt, j) => (
                      <li key={j} className={`flex gap-3 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        <span className="mt-[4px] flex-shrink-0 font-bold" style={{ color: exp.color }}>▸</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Experience;
