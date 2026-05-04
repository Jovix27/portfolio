import { motion } from "framer-motion";
import { Send, Mail, MapPin, Linkedin, Github, Globe } from "lucide-react";
import EarthCanvas from "./canvas/Earth";

const Contact = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section id="contact" className="section-padding py-12 md:py-20 bg-bg-alt relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          
          {/* Header & Earth Widget */}
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-accent dot-matrix text-[10px] tracking-[0.5em] font-bold mb-4 uppercase">// UPLINK INITIATION</p>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-6 text-foreground">
                CONTACT
              </h2>
              <p className="text-foreground font-medium text-base md:text-lg leading-relaxed max-w-md">
                Ready to integrate into your next engineering lifecycle or BIM ecosystem.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="nothing-card p-4 aspect-square bg-black relative overflow-hidden flex flex-col justify-between border border-border/20"
            >
               <div className="absolute inset-0 opacity-60">
                  <EarthCanvas />
               </div>
               <div className="relative z-10 p-4 md:p-6 pb-20 md:pb-24">
                  <div className="flex items-center gap-2">
                     <Globe className="w-4 h-4 text-accent" />
                     <span className="text-[10px] md:text-xs font-bold dot-matrix tracking-widest text-accent drop-shadow-sm">PLANET EARTH</span>
                  </div>
               </div>
               <div className="relative z-10 p-4 md:p-6 flex justify-between items-end border-t border-white/5 bg-gradient-to-t from-black/80 to-transparent">
                   <span className="dot-matrix text-[8px] md:text-[10px] tracking-widest text-white">GEO TRACKING V4.0</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(255,184,0,0.5)]" />
               </div>
            </motion.div>
          </div>

          {/* Contact Form Widget */}
          <motion.div 
            initial={{ opacity: 0, x: isMobile ? 0 : 40, y: isMobile ? 40 : 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 nothing-card p-6 md:p-12 flex flex-col justify-between relative overflow-hidden border border-border/20"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 md:opacity-10 pointer-events-none hidden sm:block">
              <span className="dot-matrix text-[40px] md:text-[60px] font-black leading-none tracking-tighter">@CONTACT</span>
            </div>

            <form className="space-y-8 md:space-y-10 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
                <div className="group/field space-y-3">
                  <div className="flex justify-between items-center px-1">
                     <label className="dot-matrix text-[10px] tracking-widest text-foreground font-black uppercase">FULL NAME</label>
                    <span className="text-[8px] font-bold text-accent opacity-0 group-focus-within/field:opacity-100 transition-opacity">REQUIRED</span>
                  </div>
                  <input 
                    type="text" 
                    placeholder="IDENTIFY..."
                    className="w-full bg-transparent border-b border-border py-3 focus:border-accent outline-none font-bold tracking-tight text-lg md:text-xl transition-all placeholder:opacity-20"
                  />
                </div>
                <div className="group/field space-y-3">
                  <div className="flex justify-between items-center px-1">
                     <label className="dot-matrix text-[10px] tracking-widest text-foreground font-black uppercase">UPLINK EMAIL</label>
                    <span className="text-[8px] font-bold text-accent opacity-0 group-focus-within/field:opacity-100 transition-opacity">VALID_REQUIRED</span>
                  </div>
                  <input 
                    type="email" 
                    placeholder="DESTINATION..."
                    className="w-full bg-transparent border-b border-border py-3 focus:border-accent outline-none font-bold tracking-tight text-lg md:text-xl transition-all placeholder:opacity-20"
                  />
                </div>
              </div>

              <div className="group/field space-y-3">
                <div className="flex justify-between items-center px-1">
                   <label className="dot-matrix text-[10px] tracking-widest text-foreground font-black uppercase">TRANSMISSION DATA</label>
                   <span className="text-[8px] font-bold text-accent opacity-0 group-focus-within/field:opacity-100 transition-opacity">DATA PACKET READY</span>
                </div>
                <textarea 
                  rows={4}
                  placeholder="BEGIN_MESSAGE..."
                  className="w-full bg-transparent border-b border-border py-3 focus:border-accent outline-none font-bold tracking-tight text-lg md:text-xl transition-all placeholder:opacity-20 resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full sm:w-auto px-10 py-5 bg-foreground text-background rounded-full font-black text-base md:text-lg tracking-tighter flex items-center justify-center gap-4 hover:bg-accent hover:text-black hover:shadow-[0_0_30px_rgba(255,184,0,0.3)] transition-all group"
              >
                SEND UPLINK
                <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
              </button>
            </form>

            <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-border/30 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 relative z-10">
               <div className="group/link cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover/link:animate-ping" />
                     <span className="dot-matrix text-[8px] tracking-[0.4em] text-foreground uppercase font-black">GITHUB CORE</span>
                  </div>
                  <a href="https://github.com/Jovix27" target="_blank" rel="noopener noreferrer" className="block font-black text-xs md:text-sm tracking-tight hover:text-accent transition-colors">github.com/Jovix27</a>
               </div>
               <div className="group/link cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover/link:animate-ping" />
                     <span className="dot-matrix text-[8px] tracking-[0.4em] text-foreground uppercase font-black">LINKEDIN SYNC</span>
                  </div>
                  <a href="https://linkedin.com/in/joseva2748" target="_blank" rel="noopener noreferrer" className="block font-black text-xs md:text-sm tracking-tight hover:text-accent transition-colors">linkedin.com/joseva2748</a>
               </div>
               <div className="group/link cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent group-hover/link:animate-ping" />
                     <span className="dot-matrix text-[8px] tracking-[0.4em] text-foreground uppercase font-black">DIRECT MAIL</span>
                  </div>
                  <a href="mailto:ajoseva04@gmail.com" className="block font-black text-xs md:text-sm tracking-tight hover:text-accent transition-colors truncate">ajoseva04@gmail.com</a>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
