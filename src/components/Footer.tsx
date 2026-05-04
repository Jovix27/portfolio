import { Cpu, Linkedin, Github, Mail } from "lucide-react";
import ContributionGrid from "./ContributionGrid";
import MatrixGraph from "./MatrixGraph";

const Footer = () => {
  return (
    <footer className="bg-bg-base border-t border-border/50 py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Matrix Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <MatrixGraph />
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 relative z-10">
        
        <div className="space-y-8 max-w-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-border bg-muted flex items-center justify-center p-0.5">
               <img src="./profile photo dot matrix.png" alt="Joseva A" loading="lazy" className="w-full h-full object-cover rounded-full" />
            </div>
            <span className="dot-matrix text-lg font-bold tracking-widest text-foreground">JOSEVA A</span>
          </div>
          
          <p className="text-foreground font-medium text-lg leading-relaxed">
             Redefining the intersection of physical infrastructure and digital intelligence. 
             Engineered for precision, optimized for performance.
          </p>

          <div className="flex gap-4">
             {[
               { icon: Linkedin, url: "https://linkedin.com/in/joseva2748" },
               { icon: Github, url: "https://github.com/Jovix27" },
               { icon: Mail, url: "mailto:ajoseva04@gmail.com" }
             ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.url} 
                  target={item.url.startsWith('http') ? "_blank" : undefined}
                  rel={item.url.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 text-foreground group"
                >
                  <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
             ))}
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-4">
           <p className="text-[12px] font-bold dot-matrix tracking-[0.5em] text-accent uppercase">
              DESIGNED BY JOVI
           </p>
           <p className="text-[10px] font-medium dot-matrix tracking-[0.4em] text-foreground/60 uppercase">
              © 2026 Joseva A | ALL RIGHTS RESERVED
          </p>
          <div className="mt-6 w-full max-w-md overflow-hidden" style={{ height: "120px" }}>
            <ContributionGrid />
          </div>
        </div>

      </div>
      

    </footer>
  );
};

export default Footer;
