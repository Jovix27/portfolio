import { Linkedin, ExternalLink, Mail, ArrowUpCircle } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const socials = [
  { icon: Linkedin,    label: "LinkedIn", url: "https://linkedin.com/in/joseva2748" },
  { icon: ExternalLink,label: "GitHub",   url: "https://github.com/Jovix27" },
  { icon: Mail,        label: "Email",    url: "mailto:jovinitro007@gmail.com" },
];

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
  <footer
    className="py-16 pb-12 relative overflow-hidden"
    style={{
      background: "var(--bg-base)",
      borderTop: "1px solid var(--card-border)",
    }}
  >
    {/* Blueprint grid background */}
    <div 
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage: "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      }}
    />

    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center gap-10 relative z-10">
      {/* Scroll to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="group flex flex-col items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
      >
        <ArrowUpCircle className="h-10 w-10 stroke-[1.2] group-hover:-translate-y-1 transition-transform" />
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Back to Top</span>
      </button>

      {/* Main Content Row */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pt-6 border-t border-blue-50">
        {/* Logo & Name */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-3">
            <img 
              src={`${import.meta.env.BASE_URL}logo.png`} 
              alt="Joseva A Logo" 
              className="h-10 w-auto object-contain"
            />
            <span
              className="text-xl font-black tracking-tight"
              style={{
                background: "linear-gradient(90deg,#3b82f6,#10b981)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Joseva A
            </span>
          </div>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold ml-1">
            AI + BIM Engineer
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs text-slate-500 font-bold uppercase tracking-wider">
          {["About","Experience","Skills","Projects","Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={(e) => { e.preventDefault(); document.querySelector(`#${l.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" }); }}
              className="hover:text-blue-600 transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Social Connections */}
        <div className="flex gap-3">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2.5 rounded-xl transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/10"
                style={{
                  background: isDark ? "rgba(15,23,42,0.80)" : "white",
                  border: `1px solid ${isDark ? "rgba(59,130,246,0.25)" : "rgba(59,130,246,0.15)"}`,
                }}
              >
                <Icon className="h-4 w-4 text-blue-600" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Legal & Mission */}
      <div className="text-center space-y-4 max-w-2xl">
        <p className="text-[10px] sm:text-xs text-slate-400 leading-relaxed italic">
          "Synthesizing AI, BIM &amp; Sustainable Design to build the future of infrastructure."
        </p>
        <div className="h-px w-12 bg-blue-100 mx-auto" />
        <p className="text-[10px] text-slate-400 font-medium tracking-wide">
          © {new Date().getFullYear()} Joseva A. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
