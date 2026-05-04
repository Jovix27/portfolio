import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Cpu, Sun, Moon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "SKILLS", href: "#skills" },
  { name: "SERVICES", href: "#services" },
  { name: "PROJECTS", href: "#projects" },
  { name: "ACHIEVEMENTS", href: "#achievements" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 lg:px-24 py-6 ${
        scrolled ? "bg-bg-base/80 backdrop-blur-2xl py-4 border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-border bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
             <img src="./profile photo dot matrix.png" alt="Joseva A" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
             <span className="dot-matrix text-lg font-bold tracking-widest text-foreground">JOSEVA A</span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-black tracking-[0.3em] text-muted-foreground hover:text-accent transition-colors dot-matrix"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="#contact"
            className="px-6 py-3 bg-foreground text-background rounded-full text-[10px] font-black tracking-widest hover:scale-105 transition-transform dot-matrix"
          >
            CONTACT
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(true)}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted text-foreground transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 250 }}
            className="fixed inset-0 z-[150] bg-background/80 backdrop-blur-2xl text-foreground flex flex-col p-8 md:p-12 overflow-hidden"
          >
            {/* Background Dot Grid inside menu */}
            <div className="absolute inset-0 pointer-events-none opacity-20" 
              style={{
                backgroundImage: 'radial-gradient(var(--accent) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }} 
            />

            <div className="flex justify-end items-center mb-16 relative z-10">
              <button 
                onClick={() => setIsOpen(false)}
                className="w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-muted text-foreground transition-colors bg-background shadow-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-8 relative z-10 mt-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 group"
                >
                  <span className="dot-matrix text-[10px] font-bold text-accent opacity-40 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                  <span className="text-3xl md:text-5xl font-black tracking-tighter text-foreground group-hover:text-accent transition-all duration-300 uppercase leading-none">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-border flex justify-center items-center relative z-10">
               <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">© 2026 Joseva A // CIVIL AI</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
