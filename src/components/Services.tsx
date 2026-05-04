import { motion } from "framer-motion";
import { Ruler, Brain, Leaf } from "lucide-react";

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
  <section id="services" className="section-padding bg-bg-alt relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="mb-16 md:mb-24"
      >
        <p className="text-accent dot-matrix text-[10px] tracking-[0.4em] font-bold mb-4">// SYSTEM UTILITIES</p>
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
              className="nothing-card p-8 md:p-10 group relative overflow-hidden"
            >
              <div className="flex flex-col h-full gap-8">
                <div className="w-16 h-16 rounded-full border border-border/30 flex items-center justify-center text-accent bg-foreground/5 transition-all duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="w-8 h-8" />
                </div>

                <div className="space-y-4 flex-1">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tighter text-foreground">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-foreground leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-border/20">
                  <span className="text-[9px] font-bold text-foreground dot-matrix tracking-[0.4em]">UTILITY CORE 0{i + 1}</span>
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
