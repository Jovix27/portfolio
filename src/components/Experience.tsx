import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    company: "Larsen & Toubro (L&T)",
    location: "Chennai",
    role: "Intern",
    period: "June - July 2025",
    description: [
      "Supported Metro Phase 2 Corridor 3 project execution",
      "Monitored tunneling and TBM operations, ensuring safety compliance",
      "Applied GeoFreq for real-time geotechnical monitoring and AI integration",
      "Conceptualized ClimaNEX AI, an AI-based hyper-local weather forecasting system",
    ],
  },
  {
    company: "National Institute of Technology (NIT) Trichy",
    location: "Tiruchirappalli",
    role: "Research Intern",
    period: "May - June 2024",
    description: [
      "Conducted large-scale driver behavior survey (200+ participants)",
      "Analyzed transportation data using IBM SPSS and improved accuracy by 20%",
      "Provided insights for transportation planning and infrastructure optimization",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg h-fit">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{exp.company}</h3>
                    <p className="text-lg font-semibold text-primary mb-2">{exp.role}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground md:text-right">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3 ml-16">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
