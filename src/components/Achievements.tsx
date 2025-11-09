import { Trophy, Award, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const achievements = [
  {
    icon: Users,
    title: "Chairperson",
    organization: "IGBC Student Chapter, SASTRA University",
    year: "2025",
  },
  {
    icon: Users,
    title: "Core Executive Member",
    organization: "Civil Engineering Association (CEA), SASTRA",
    year: "2025",
  },
  {
    icon: Users,
    title: "Technical Head",
    organization: "Utsav 2025, SASTRA University",
    year: "2025",
  },
  {
    icon: Trophy,
    title: "Internal Finalist",
    organization: "Smart India Hackathon - AI-based civil innovations",
    year: "2024, 2025",
  },
  {
    icon: Trophy,
    title: "Finalist",
    organization: "Daksh AI Hackathon - Sustainable ML construction design",
    year: "2025",
  },
];

const certifications = [
  {
    title: "IGBC Accredited Professional (Associate)",
    issuer: "Indian Green Building Council",
    year: "2025",
  },
  {
    title: "BIM Workshop",
    issuer: "SASTRA University",
    year: "2024",
  },
  {
    title: "Revit Workshop - L&T Construction Certified",
    issuer: "Larsen & Toubro",
    year: "2023",
  },
  {
    title: "3D Printing Technology in Construction",
    issuer: "SASTRA University",
    year: "2024",
  },
  {
    title: "Advances in Transportation Geotechnics",
    issuer: "IGS Thanjavur",
    year: "2025",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Achievements */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Achievements & <span className="text-gradient">Leadership</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover-lift animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{achievement.organization}</p>
                      <span className="text-xs font-medium text-primary">{achievement.year}</span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-6 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                    <span className="text-xs font-medium text-primary">{cert.year}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
