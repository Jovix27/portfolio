import { Linkedin, ExternalLink, Mail } from "lucide-react";

const socials = [
  { icon: Linkedin,    label: "LinkedIn", url: "https://linkedin.com/in/joseva2748" },
  { icon: ExternalLink,label: "GitHub",   url: "https://github.com/Jovix27" },
  { icon: Mail,        label: "Email",    url: "mailto:ajoseva04@gmail.com" },
];

const Footer = () => (
  <footer
    style={{
      background: "rgba(5,8,22,0.95)",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      backdropFilter: "blur(20px)",
    }}
    className="py-12"
  >
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center gap-6">
      {/* Logo */}
      <span
        className="text-2xl font-black tracking-tight select-none"
        style={{
          background: "linear-gradient(90deg,#3b82f6,#10b981)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Joseva A
      </span>

      {/* Nav links */}
      <div className="flex flex-wrap justify-center gap-6 text-sm text-white/35 font-medium">
        {["About","Experience","Skills","Projects","Contact"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={(e) => { e.preventDefault(); document.querySelector(`#${l.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" }); }}
            className="hover:text-white transition-colors"
          >
            {l}
          </a>
        ))}
      </div>

      {/* Social icons */}
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
              className="p-2.5 rounded-full transition-all hover:scale-110"
              style={{
                background: "rgba(59,130,246,0.08)",
                border: "1px solid rgba(59,130,246,0.16)",
              }}
            >
              <Icon className="h-4 w-4 text-blue-400" />
            </a>
          );
        })}
      </div>

      {/* Copyright */}
      <p className="text-xs text-white/25 text-center">
        © {new Date().getFullYear()} Joseva A · AI + BIM Engineer
        <span className="mx-2">·</span>
        Synthesizing AI, BIM &amp; Sustainable Design to build the future of infrastructure.
      </p>
    </div>
  </footer>
);

export default Footer;
