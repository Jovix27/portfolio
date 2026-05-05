import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 lg:px-24 py-5 ${
        scrolled
          ? "bg-bg-base/85 backdrop-blur-2xl py-4 border-b border-border/40 shadow-xl shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-border bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ring-2 ring-transparent group-hover:ring-accent/20">
            <img src="./profile photo dot matrix.png" alt="Joseva A" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <span className="dot-matrix text-sm font-bold tracking-widest text-foreground group-hover:text-accent transition-colors duration-300">
            JOSEVA A
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-black tracking-[0.3em] text-foreground/60 hover:text-accent transition-colors duration-200 dot-matrix uppercase"
            >
              {link.name}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="#contact"
            className="px-6 py-2.5 bg-foreground text-background rounded-xl text-[10px] font-black tracking-widest hover:bg-accent hover:text-black transition-all duration-300 dot-matrix uppercase"
          >
            CONTACT
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            className="w-11 h-11 rounded-xl border border-border/60 flex items-center justify-center hover:bg-muted text-foreground transition-colors bg-bg-base/60 backdrop-blur-md"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[140] bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar panel — slides in from right */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 280, mass: 0.8 }}
              className="fixed top-0 right-0 h-full w-[min(340px,90vw)] z-[150] bg-bg-base border-l border-border/30 flex flex-col shadow-2xl shadow-black/40"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-7 pt-7 pb-6 border-b border-border/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-border">
                    <img src="./profile photo dot matrix.png" alt="Joseva A" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="dot-matrix text-[9px] text-accent font-bold tracking-[0.3em]">JOSEVA A</p>
                    <p className="text-[8px] text-foreground/40 font-bold uppercase tracking-widest">AI CIVIL ENGINEER</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="w-9 h-9 rounded-lg border border-border/40 flex items-center justify-center hover:bg-muted text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 flex flex-col px-5 py-6 gap-1 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.045, duration: 0.3 }}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-4 py-4 rounded-xl group hover:bg-foreground/5 transition-all duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <span className="dot-matrix text-[9px] font-bold text-accent/50 group-hover:text-accent transition-colors w-5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xl font-black tracking-tight uppercase text-foreground group-hover:text-accent transition-colors duration-200">
                        {link.name}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-foreground/20 group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-200" />
                  </motion.a>
                ))}
              </nav>

              {/* Footer CTA */}
              <div className="px-5 pb-7 pt-5 border-t border-border/20 space-y-3">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-black rounded-xl font-black text-[11px] tracking-[0.2em] uppercase hover:brightness-110 transition-all duration-200"
                >
                  CONTACT ME
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <p className="text-center text-[8px] font-bold text-foreground/30 tracking-widest uppercase">
                  © 2026 Joseva A
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
