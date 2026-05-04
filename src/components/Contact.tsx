import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Linkedin, Github, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import EarthCanvas from "./canvas/Earth";
import MatrixGraph from "./MatrixGraph";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);
    try {
      await emailjs.sendForm(
        'service_5ixterr',
        'template_qqi02fi',
        form.current,
        'aEvbeb24MPIqmNjUu'
      );
      toast.success("MESSAGE SENT SUCCESSFULLY", {
        description: "I'll get back to you as soon as possible.",
      });
      form.current.reset();
    } catch (error) {
      toast.error("FAILED TO SEND MESSAGE", {
        description: "Please try again later or reach out via LinkedIn.",
      });
      console.error('EmailJS Error:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding py-16 md:py-24 bg-bg-base relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Header & Earth Widget */}
          <div className="lg:col-span-5 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-6xl md:text-8xl font-3022 text-foreground mb-8 tracking-tighter uppercase leading-[0.8] flex flex-col">
                LET'S <span className="text-accent">CONNECT</span>
              </h2>
              <p className="text-lg text-foreground/70 font-medium leading-relaxed max-w-sm">
                AVAILABLE FOR COMPLEX SYSTEM INTEGRATIONS AND ARCHITECTURAL AUTOMATION.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="nothing-card p-4 relative group overflow-hidden bg-foreground/[0.03] backdrop-blur-xl"
            >
                <div className="relative overflow-hidden flex flex-col gap-6">
                  <div className="aspect-[4/3] relative rounded-xl overflow-hidden bg-black border border-white/5 z-10 shadow-inner">
                    <EarthCanvas />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_var(--accent)]" />
                      <span className="dot-matrix text-[10px] text-white tracking-[0.2em] uppercase font-bold">13.08° N, 80.27° E</span>
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>

          {/* Contact Form Widget */}
          <div className="lg:col-span-7 flex flex-col justify-end">
            <motion.div 
              initial={{ opacity: 0, x: isMobile ? 0 : 40, y: isMobile ? 40 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="nothing-card p-8 md:p-12 relative overflow-hidden flex flex-col justify-center bg-foreground/[0.02]"
            >
              {/* Minimalist Mail Icon Decoration */}
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none select-none">
                  <Mail className="w-32 h-32 text-accent rotate-[15deg] stroke-[0.5]" />
              </div>

              <form ref={form} onSubmit={sendEmail} className="space-y-10 relative z-10 w-full">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group space-y-4">
                    <label className="dot-matrix text-[10px] tracking-[0.4em] text-foreground/40 group-focus-within:text-accent transition-all font-bold uppercase">Name</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        name="user_name"
                        required
                        placeholder="ENTER NAME"
                        className="w-full bg-transparent border-b border-border/40 py-3 focus:border-accent outline-none font-bold text-lg transition-all placeholder:text-foreground/10 text-foreground uppercase tracking-tight"
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-focus-within:w-full transition-all duration-700" />
                    </div>
                  </div>
                  <div className="group space-y-4">
                    <label className="dot-matrix text-[10px] tracking-[0.4em] text-foreground/40 group-focus-within:text-accent transition-all font-bold uppercase">Email</label>
                    <div className="relative">
                      <input 
                        type="email" 
                        name="user_email"
                        required
                        placeholder="EMAIL@ADDRESS.COM"
                        className="w-full bg-transparent border-b border-border/40 py-3 focus:border-accent outline-none font-bold text-lg transition-all placeholder:text-foreground/10 text-foreground uppercase tracking-tight"
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-focus-within:w-full transition-all duration-700" />
                    </div>
                  </div>
                </div>

                <div className="group space-y-4">
                  <label className="dot-matrix text-[10px] tracking-[0.4em] text-foreground/40 group-focus-within:text-accent transition-all font-bold uppercase">Message</label>
                  <div className="relative">
                    <textarea 
                      name="message"
                      rows={4}
                      required
                      placeholder="YOUR MESSAGE..."
                      className="w-full bg-transparent border-b border-border/40 py-3 focus:border-accent outline-none font-bold text-lg transition-all placeholder:text-foreground/10 resize-none text-foreground uppercase tracking-tight"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-focus-within:w-full transition-all duration-700" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-12 pt-6">
                  <button 
                    type="submit"
                    disabled={isSending}
                    className="w-full sm:w-auto px-10 py-5 bg-foreground text-background rounded-full font-black text-[10px] tracking-[0.4em] flex items-center justify-center gap-5 hover:bg-accent hover:text-black transition-all group dot-matrix uppercase overflow-hidden relative shadow-2xl shadow-black/40 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {isSending ? (
                        <>
                          SENDING...
                          <Loader2 className="w-4 h-4 animate-spin" />
                        </>
                      ) : (
                        <>
                          Send Me
                          <Send className="w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                        </>
                      )}
                    </span>
                  </button>

                  <div className="flex items-center gap-4">
                    {[
                      { Icon: Github, href: "https://github.com/Jovix27" },
                      { Icon: Linkedin, href: "https://linkedin.com/in/joseva2748" },
                      { Icon: Mail, href: "mailto:ajoseva04@gmail.com" }
                    ].map(({ Icon, href }, idx) => (
                      <a 
                        key={idx}
                        href={href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-14 h-14 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-accent hover:text-black hover:border-accent transition-all duration-500 text-foreground group"
                      >
                        <Icon className="w-6 h-6 transition-transform group-hover:scale-125" />
                      </a>
                    ))}
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
