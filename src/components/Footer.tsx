import { Cpu, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-bg-base border-t border-border/50 py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
        
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
             {[Linkedin, Github, Mail].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors text-foreground"
                >
                  <Icon className="w-5 h-5" />
                </a>
             ))}
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-6">
           <p className="text-[10px] font-medium dot-matrix tracking-[0.4em] text-foreground uppercase">
              © 2026 Joseva A // ALL RIGHTS RESERVED
           </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
