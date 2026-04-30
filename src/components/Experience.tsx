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
      "Designed and conducted a large-scale driver behavior survey with 200+ participants, analyzing traffic psychology and risk perception.",
      "Processed and analyzed complex transportation datasets using IBM SPSS, improving dataset reliability by 20% through bias correction techniques.",
      "Derived strategic insights for urban transportation planning, identifying key infrastructure bottlenecks through statistical modeling.",
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
        <p className="text-blue-400 text-sm uppercase tracking-widest font-medium mb-2">What I have done so far</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Work <span className="text-hero-gradient">Experience</span>
        </h2>
        <div className="section-bar" />
      </motion.div>

      <div className="mt-16">
        <VerticalTimeline lineColor="rgba(59,130,246,0.18)">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <VerticalTimelineElement
                key={i}
                contentStyle={{
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${exp.color}28`,
                  backdropFilter: "blur(16px)",
                  boxShadow: `0 4px 24px rgba(0,0,0,0.35), 0 0 20px ${exp.color}10`,
                  borderRadius: "1rem",
                  color: "#fff",
                }}
                contentArrowStyle={{ borderRight: `7px solid ${exp.color}28` }}
                date={exp.period}
                dateClassName="!text-white/40 !font-medium !text-sm"
                iconStyle={{
                  background: exp.color,
                  boxShadow: `0 0 0 4px ${exp.color}28, 0 0 20px ${exp.color}40`,
                }}
                icon={<Icon className="w-5 h-5 text-white" />}
              >
                <h3 className="text-white font-bold text-xl">{exp.title}</h3>
                <p className="text-sm font-semibold mt-0.5" style={{ color: exp.color }}>{exp.company}</p>
                <p className="text-xs text-white/30 mt-0.5">{exp.location}</p>

                <ul className="mt-5 space-y-2.5">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex gap-3 text-sm text-white/55 leading-relaxed">
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
