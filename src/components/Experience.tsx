import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Briefcase, GraduationCap, Star } from "lucide-react";

const experiences = [
  {
    title: "Engineering Intern",
    company: "Larsen & Toubro (L&T)",
    location: "Chennai Metro Phase 2",
    period: "June – July 2025",
    icon: Briefcase,
    color: "#3b82f6",
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
    points: [
      "Optimized transportation datasets using IBM SPSS, achieving a 20% improvement in reliability through advanced bias correction.",
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
    points: [
      "Specializing in BIM, AI-integrated construction systems, and sustainable infrastructure design.",
      "CGPA: 7.2 (till 7th semester) with focus on computational structural engineering and smart building technologies.",
      "Led research on PWV satellite data bias correction using ML (Random Forest), achieving 89% accuracy improvement.",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="section-padding bg-section">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="text-center mb-4"
      >
        <p className="text-blue-600 text-sm uppercase tracking-widest font-medium mb-2">What I have done so far</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          Work <span className="text-hero-gradient">Experience</span>
        </h2>
        <div className="section-bar bg-blue-500/20" />
      </motion.div>

      <div className="mt-16">
        <VerticalTimeline lineColor="rgba(59,130,246,0.12)">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <VerticalTimelineElement
                key={i}
                contentStyle={{
                  background: "rgba(255,255,255,0.85)",
                  border: `1px solid ${exp.color}20`,
                  backdropFilter: "blur(16px)",
                  boxShadow: `0 4px 20px rgba(59,130,246,0.08), 0 0 15px ${exp.color}08`,
                  borderRadius: "1rem",
                  color: "#0f172a",
                }}
                contentArrowStyle={{ borderRight: `7px solid ${exp.color}28` }}
                date={exp.period}
                dateClassName="!text-slate-400 !font-medium !text-[11px] sm:!text-sm"
                iconStyle={{
                  background: exp.color,
                  boxShadow: `0 0 0 4px ${exp.color}28, 0 0 20px ${exp.color}40`,
                }}
                icon={<Icon className="w-5 h-5 text-white" />}
              >
                <h3 className="text-slate-900 font-bold text-xl">{exp.title}</h3>
                <p className="text-sm font-semibold mt-0.5" style={{ color: exp.color }}>{exp.company}</p>
                <p className="text-xs text-slate-400 mt-0.5">{exp.location}</p>

                <ul className="mt-5 space-y-2.5">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex gap-3 text-sm text-slate-500 leading-relaxed">
                      <span className="mt-[3px] flex-shrink-0 font-bold" style={{ color: exp.color }}>▸</span>
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

export default Experience;
