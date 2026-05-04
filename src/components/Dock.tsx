import { Search, Linkedin, Github, Mail, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Dock = () => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[120] w-full max-w-lg px-6">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 100 }}
        className="nothing-card p-2 flex flex-col gap-2 bg-background/80 backdrop-blur-3xl border-border/30"
      >
        {/* Search Bar style */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-foreground/5 border border-border/20">
          <Search className="w-4 h-4 text-muted-foreground" />
          <span className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase dot-matrix flex-1">Search_Module</span>
        </div>

        {/* Apps Dock */}
        <div className="flex justify-around items-center py-1">
          {[
            { Icon: Linkedin, href: "#" },
            { Icon: Github, href: "#" },
            { Icon: Mail, href: "mailto:joseva@example.com" },
            { Icon: Instagram, href: "#" }
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-bg-alt border border-border/50 flex items-center justify-center shadow-sm hover:shadow-md transition-all text-foreground"
            >
              <item.Icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Dock;
