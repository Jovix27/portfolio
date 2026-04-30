import { motion } from "framer-motion";
import { Ruler, Brain, Leaf } from "lucide-react";

const services = [
  {
    icon: Ruler, color: "#3b82f6", title: "BIM & 3D Modeling",
    description: "High-fidelity Building Information Models using Revit and AutoCAD — clash detection, energy analysis, and integrated project delivery.",
  },
  {
    icon: Brain, color: "#8b5cf6", title: "AI-Driven Civil Solutions",
    description: "Deep learning and computer vision frameworks for safety monitoring, geotechnical predictive analysis, and construction site automation.",
  },
  {
    icon: Leaf, color: "#10b981", title: "Sustainable Infrastructure",
    description: "Eco-friendly, energy-efficient building systems compliant with IGBC standards — focused on reduced environmental impact and passive design.",
  },
];

const Services = () => (
  <section id="services" className="section-padding bg-section">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-blue-400 text-sm uppercase tracking-widest font-medium mb-2">What I offer</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Core <span className="text-hero-gradient">Services</span>
        </h2>
        <div className="section-bar" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((svc, i) => {
          const Icon = svc.icon;
          return (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="rounded-2xl p-8 text-center group cursor-default glass-card"
              style={{ borderColor: `${svc.color}25` }}
            >
              {/* Icon ring */}
              <div
                className="inline-flex p-4 rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${svc.color}14`, border: `1px solid ${svc.color}28` }}
              >
                <Icon className="h-8 w-8" style={{ color: svc.color }} />
              </div>
              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
                style={{ background: `linear-gradient(90deg,transparent,${svc.color},transparent)` }}
              />
              <h3 className="text-xl font-bold text-white mb-3">{svc.title}</h3>
              <p className="text-white/45 leading-relaxed text-sm">{svc.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
