import { motion } from "framer-motion";

// Static image fallback — shown on mobile AND when no 3D model is available
const DeskFallback = () => (
  <div className="w-full h-full relative rounded-2xl overflow-hidden flex items-center justify-center">
    {/* Ambient glow behind image */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-emerald-500/10 pointer-events-none z-10" />

    <motion.img
      src={`${import.meta.env.BASE_URL}Architect Desktop image.jpeg`}
      alt="Architect Desktop — BIM workspace"
      className="w-full h-full object-cover object-center"
      initial={{ scale: 1.06, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
    />

    {/* Bottom gradient fade into page */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-alt via-bg-alt/40 to-transparent z-20 pointer-events-none" />

    {/* Floating label */}
    <div className="absolute bottom-4 left-4 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 border border-border/30 backdrop-blur-sm shadow-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
      <span className="text-xs text-foreground font-medium">BIM Workspace</span>
    </div>
  </div>
);

// Main export — uses the image for all screen sizes (no GLTF required)
const ArchitectDeskCanvas = () => <DeskFallback />;

export default ArchitectDeskCanvas;
