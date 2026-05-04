import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 bg-foreground/5 hover:bg-foreground/10 border border-border/40 group relative overflow-hidden"
      aria-label="Toggle Theme"
    >
      <div className="relative flex items-center justify-center">
        {theme === "light" ? (
          <motion.div
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
          >
            <Moon className="w-4 h-4 text-sky-500 fill-sky-500/10" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
          >
            <Sun className="w-4 h-4 text-amber-500 fill-amber-500/10" />
          </motion.div>
        )}
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
