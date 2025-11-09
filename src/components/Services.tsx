import { Ruler, Brain, Leaf } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Ruler,
    title: "CAD Drafting",
    description:
      "Professional 2D drafting and design using AutoCAD for precision civil layouts, construction drawings, and technical documentation.",
  },
  {
    icon: Brain,
    title: "AI in Construction",
    description:
      "Integration of AI and data analytics in construction planning, monitoring, and optimization for enhanced project efficiency.",
  },
  {
    icon: Leaf,
    title: "Sustainable Building Design",
    description:
      "BIM-based energy-efficient design focusing on green and eco-conscious infrastructure with reduced environmental impact.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center hover-lift group cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary transition-colors">
                  <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
