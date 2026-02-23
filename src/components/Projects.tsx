import { ExternalLink, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "BuildSight: AI-Based Safety Monitoring",
    period: "2025 - 2026",
    description:
      "Developed an AI-driven computer vision system for real-time Personal Protective Equipment (PPE) detection on construction sites. Optimized deep learning models to ensure safety compliance under extreme environmental and lighting conditions.",
    tags: ["AI/ML", "Computer Vision", "Deep Learning", "Construction Tech"],
  },
  {
    title: "Precipitable Water Vapor Validation System",
    period: "2024 - 2025",
    description:
      "Developed AI-driven bias correction models using Random Forest to improve MODIS satellite data accuracy by 89%. Built a Python-based processing pipeline for high-precision climate monitoring and water vapor thermal analysis.",
    tags: ["Python", "AI/ML", "Climate Tech", "Data Science"],
  },
  {
    title: "BIM-Based Energy Efficient Design",
    period: "2024",
    description:
      "Engineered sustainable residential models using Autodesk Revit, achieving a 30% reduction in energy consumption. Conducted advanced thermal performance simulations and optimized building envelopes for passive cooling.",
    tags: ["BIM", "Autodesk Revit", "Sustainable Design", "Energy Efficiency"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Innovative solutions combining AI, BIM, and sustainable design principles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 hover-lift group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{project.period}</span>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
