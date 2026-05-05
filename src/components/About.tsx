import { motion } from "framer-motion";
import { User, Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding pt-24 pb-8 md:pt-32 md:pb-12 bg-bg-base relative overflow-hidden">

      {/* ── Dot Matrix Background ───────────────────────────────── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          opacity: 0.04,
          color: "var(--foreground)",
        }}
      />
      {/* Accent glow blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* ── Left: Bio & Stats ──────────────────────────────────── */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Section label */}
              <span className="dot-matrix text-accent font-bold tracking-[0.35em] text-[10px] uppercase block mb-4">
                WHO I AM
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8 tracking-tighter uppercase leading-none">
                ABOUT <span className="text-accent">ME</span>
              </h2>
              <div className="space-y-5 max-w-2xl">
                <p className="text-lg md:text-xl font-medium leading-relaxed text-foreground/90 uppercase">
                  I'm <span className="text-foreground italic">Joseva A</span> — a{" "}
                  <span className="text-accent">Civil Engineering Professional</span> specializing in{" "}
                  <span className="text-accent">AI-Driven BIM Automation</span> and{" "}
                  <span className="text-foreground">Sustainable Infrastructure</span>.
                </p>
                <p className="text-base text-foreground/60 leading-relaxed uppercase">
                  My work bridges the gap between traditional structural engineering and modern software intelligence,
                  focusing on safety optimization and energy efficiency within the built environment.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                 { label: "DEPLOYABLE PROJECTS", value: "3+", sub: "DEPLOYED" },
                { label: "BIM & AI SKILLS", value: "15+", sub: "CERTIFIED" },
                { label: "RESEARCH ITEMS", value: "3+", sub: "CONTRIBUTED" },
                { label: "IGBC", value: "AP ASSOC", sub: "CREDENTIAL" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="nothing-card p-5 flex flex-col justify-center items-center text-center relative overflow-hidden group"
                >
                  {/* Mini dot-matrix per-card overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{
                      backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
                      backgroundSize: "12px 12px",
                      color: "var(--foreground)",
                    }}
                  />
                  <p className="text-2xl md:text-3xl font-black text-foreground mb-1 relative z-10">
                    {stat.label === "IGBC" ? <span className="font-bold">IGBC</span> : stat.value}
                  </p>
                  <p className="text-[8px] md:text-[9px] font-bold dot-matrix text-foreground/40 tracking-widest uppercase relative z-10">
                    {stat.label === "IGBC" ? stat.value : stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right: Education ───────────────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col pt-4 lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="nothing-card p-6 md:p-8 space-y-6 w-full relative overflow-hidden"
            >
              {/* Dot matrix texture on education card */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                  color: "var(--foreground)",
                }}
              />

              <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-black tracking-tighter uppercase text-foreground">Education</h3>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="space-y-0.5">
                  <p className="text-base font-black tracking-tight text-foreground uppercase">Bachelor of Technology</p>
                  <p className="text-sm font-black text-accent tracking-tight uppercase">Civil Engineering</p>
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-base font-black text-foreground">SASTRA Deemed University</h4>
                  <p className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest">2022 — 2026 • Thanjavur, TN</p>
                </div>

                <div className="pt-4 border-t border-foreground/10 flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-foreground/40 uppercase tracking-[0.2em]">Cumulative GPA</p>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl font-black text-accent">7.2</span>
                      <span className="text-sm font-black text-foreground/50">/ 10</span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "./resume.pdf";
                      link.download = "Joseva_A_Resume.pdf";
                      link.click();
                    }}
                    className="px-5 py-2.5 bg-foreground text-bg-base rounded-xl font-black uppercase text-[9px] tracking-[0.2em] flex items-center gap-2 hover:bg-accent hover:text-bg-base transition-all group"
                  >
                    <Download className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
                    Resume
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
