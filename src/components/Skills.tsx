import { Code2, Hammer, Brain, BarChart3, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    icon: Hammer,
    title: "Core Civil Tools",
    skills: ["AutoCAD", "Revit", "STAAD Pro", "EPANET", "QGIS", "Plaxis 2D"],
  },
  {
    icon: Target,
    title: "BIM Tools",
    skills: ["Revit", "BIM 360", "IFC Standards", "Green Building Studio"],
  },
  {
    icon: Code2,
    title: "Programming & AI",
    skills: ["Python", "Random Forest", "LSTM", "Generative AI"],
  },
  {
    icon: BarChart3,
    title: "Project Management",
    skills: ["MS Project", "IBM SPSS", "GIS", "Data Visualization"],
  },
  {
    icon: Brain,
    title: "Core Competencies",
    skills: [
      "Sustainable Design",
      "Energy Efficiency",
      "Construction Technology",
      "Transportation Engineering",
      "Infrastructure Planning",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-8 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary rounded-lg">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-secondary text-sm font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
