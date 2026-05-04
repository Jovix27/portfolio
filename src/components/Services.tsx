import { motion } from "framer-motion";
import { Ruler, Brain, Leaf } from "lucide-react";
import MatrixGraph from "./MatrixGraph";

const services = [
  {
    icon: Ruler, title: "BIM & 3D Modeling",
    description: "High-fidelity Building Information Models using Revit and AutoCAD — clash detection, energy analysis, and integrated project delivery.",
  },
  {
    icon: Brain, title: "AI-Driven Civil Solutions",
    description: "Deep learning and computer vision frameworks for safety monitoring, geotechnical predictive analysis, and construction site automation.",
  },
  {
    icon: Leaf, title: "Sustainable Infrastructure",
    description: "Eco-friendly, energy-efficient building systems compliant with IGBC standards — focused on reduced environmental impact.",
  },
];

const Services = () => (
  <section id="services" className="section-padding bg-bg-base relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="mb-16 md:mb-24"
      >
        <h2 className="text-4xl md:text-6xl font-3022 tracking-tighter uppercase leading-none text-foreground">
          SERVICES
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((svc, i) => {
          const Icon = svc.icon;
          return (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="nothing-card p-8 md:p-10 group relative overflow-hidden bg-foreground/[0.02]"
            >
              <div className="flex flex-col h-full gap-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl border border-border/30 flex items-center justify-center text-accent bg-bg-base transition-all duration-500 group-hover:scale-110 group-hover:border-accent group-hover:shadow-[0_0_30px_rgba(255,184,0,0.2)]">
                  <Icon className="w-8 h-8" />
                </div>

                <div className="space-y-4 flex-1">
                  <h3 className="text-xl md:text-2xl font-black tracking-tighter text-foreground uppercase leading-none">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed font-medium group-hover:text-foreground transition-colors">
                    {svc.description}
                  </p>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
