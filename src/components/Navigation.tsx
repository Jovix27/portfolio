import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const navLinks = [
  { name: "About",      href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills",     href: "#skills" },
  { name: "Projects",   href: "#projects" },
  { name: "Contact",    href: "#contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goto = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const navBg = scrolled
    ? isDark
      ? "rgba(10,15,30,0.90)"
      : "rgba(248,250,252,0.85)"
    : "transparent";

  const borderColor = scrolled
    ? isDark
      ? "rgba(59,130,246,0.18)"
      : "rgba(59,130,246,0.10)"
    : "transparent";

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: navBg,
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: `1px solid ${borderColor}`,
        boxShadow: scrolled ? (isDark ? "0 4px 30px rgba(0,0,0,0.30)" : "0 4px 30px rgba(59,130,246,0.06)") : "none",
      }}
    >
      {/* Nav inner — explicit height so it's never undersized */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 h-16 sm:h-20 flex items-center justify-between">

        {/* Logo Brand */}
        <a
          href="/"
          className="flex items-center gap-2 sm:gap-3 group z-50 flex-shrink-0"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Logo"
            className="h-9 w-auto sm:h-11 brightness-110 group-hover:scale-105 transition-transform"
          />
          <span
            className="text-xl sm:text-2xl font-black tracking-tighter"
            style={{
              background: "linear-gradient(90deg,#3b82f6,#10b981)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Joseva A
          </span>
        </a>

        {/* Desktop links + controls */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((l) => (
            <a
              key={l.name}
              href={l.href}
              onClick={(e) => { e.preventDefault(); goto(l.href); }}
              className="text-sm font-medium transition-colors relative group"
              style={{ color: isDark ? "#94a3b8" : "#64748b" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = isDark ? "#e2e8f0" : "#0f172a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = isDark ? "#94a3b8" : "#64748b")}
            >
              {l.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-emerald-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* Theme toggle switch */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative flex items-center w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            style={{
              background: isDark
                ? "linear-gradient(135deg,#1e293b,#0f172a)"
                : "linear-gradient(135deg,#e0f2fe,#bfdbfe)",
              border: isDark ? "1px solid rgba(59,130,246,0.35)" : "1px solid rgba(59,130,246,0.25)",
            }}
          >
            {/* Track icons */}
            <Sun
              size={12}
              className="absolute left-1.5 transition-opacity duration-300"
              style={{ color: "#f59e0b", opacity: isDark ? 0.4 : 1 }}
            />
            <Moon
              size={12}
              className="absolute right-1.5 transition-opacity duration-300"
              style={{ color: "#818cf8", opacity: isDark ? 1 : 0.4 }}
            />
            {/* Thumb */}
            <span
              className="absolute top-0.5 w-6 h-6 rounded-full shadow-md transition-all duration-300 flex items-center justify-center"
              style={{
                left: isDark ? "calc(100% - 1.625rem)" : "0.125rem",
                background: isDark
                  ? "linear-gradient(135deg,#3b82f6,#6366f1)"
                  : "linear-gradient(135deg,#fbbf24,#f59e0b)",
              }}
            >
              {isDark
                ? <Moon size={11} className="text-white" />
                : <Sun size={11} className="text-white" />
              }
            </span>
          </button>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); goto("#contact"); }}
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white btn-glow transition-all"
            style={{ background: "linear-gradient(135deg,#3b82f6,#1d4ed8)" }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile right controls */}
        <div className="md:hidden flex items-center gap-3">
          {/* Menu Button (Hamburger) */}
          <button
            className="p-2 sm:p-2.5 transition-colors rounded-xl hover:bg-blue-500/10"
            style={{ color: isDark ? "#ffffff" : "#0f172a" }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} strokeWidth={2.5} />}
          </button>

          {/* Mobile theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 sm:p-3 rounded-xl transition-all duration-200"
            style={{
              background: isDark ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.08)",
              border: "1px solid rgba(59,130,246,0.25)",
            }}
          >
            {isDark
              ? <Sun size={20} style={{ color: "#fbbf24" }} />
              : <Moon size={20} style={{ color: "#6366f1" }} />
            }
          </button>
        </div>

      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t shadow-2xl"
          style={{
            background: isDark ? "rgba(10,15,30,0.98)" : "rgba(248,250,252,0.98)",
            backdropFilter: "blur(24px)",
            borderColor: isDark ? "rgba(59,130,246,0.18)" : "rgba(59,130,246,0.10)",
          }}
        >
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={(e) => { e.preventDefault(); goto(l.href); }}
                className="block text-base font-medium transition-colors"
                style={{ color: isDark ? "#94a3b8" : "#64748b" }}
              >
                {l.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); goto("#contact"); }}
              className="block w-full text-center px-5 py-2.5 rounded-full text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg,#3b82f6,#1d4ed8)" }}
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
