import { useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { EarthFallback } from "./canvas/Earth";
import { useTheme } from "@/hooks/useTheme";

const EarthCanvas = lazy(() => import("./canvas/Earth"));

const Contact = () => {
  const { toast } = useToast();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [busy, setBusy] = useState(false);

  const cardStyle = {
    background: isDark ? "rgba(15,23,42,0.60)" : "rgba(255,255,255,0.7)",
    border: `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(59,130,246,0.12)"}`,
    backdropFilter: "blur(24px)",
    boxShadow: isDark ? "0 20px 40px -15px rgba(0,0,0,0.5)" : "0 10px 30px -15px rgba(59,130,246,0.1)",
  };

  const inputStyle = {
    background: isDark ? "rgba(15,23,42,0.40)" : "rgba(255,255,255,0.5)",
    border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(59,130,246,0.15)"}`,
  };

  const inputClass = `
    w-full px-5 py-4 rounded-2xl text-sm outline-none transition-all focus:ring-2 focus:ring-blue-500/20
    ${isDark ? "text-white placeholder:text-slate-600 font-medium" : "text-slate-900 placeholder:text-slate-400 font-medium"}
  `.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      emailjs.init("aEvbeb24MPIqmNjUu");
      const templateParams = {
        user_name: form.name,
        user_email: form.email,
        to_name: "Joseva A",
        message: form.message,
      };
      const result = await emailjs.send("service_5ixterr", "template_qqi02fi", templateParams);
      if (result.status === 200) {
        toast({ title: "Message Sent!", description: "I'll get back to you soon." });
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({ title: "Error", description: "Failed to send. Please try again.", variant: "destructive" });
    } finally {
      setBusy(false);
    }
  };

  const contactInfo = [
    { icon: MapPin, color: "#8b5cf6", label: "Location", value: "Tiruchirappalli, TN", link: null },
    { icon: Mail, color: "#3b82f6", label: "Email", value: "jovinitro007@gmail.com", link: "mailto:jovinitro007@gmail.com" },
    { icon: Phone, color: "#10b981", label: "Phone", value: "+91 8015164110", link: "tel:+918015164110" },
  ];

  const socials = [
    { icon: Linkedin, color: "#3b82f6", label: "LinkedIn", url: "https://linkedin.com/in/joseva2748" },
    { icon: ExternalLink, color: "#8b5cf6", label: "GitHub", url: "https://github.com/Jovix27" },
  ];

  return (
    <section id="contact" className="section-padding bg-section-alt overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-blue-500 text-sm uppercase tracking-[0.2em] font-black mb-3">Let's collaborate</p>
          <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Get In <span className="text-hero-gradient">Touch</span>
          </h2>
          <div className="section-bar bg-blue-500/20" />
          <p className={`mt-6 max-w-xl mx-auto text-sm leading-relaxed font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Open to ConTech roles, BIM engineering positions, and AI-construction research collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div className="space-y-6"
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            {/* Globe Card */}
            <div className="h-72 sm:h-80 md:h-96 relative rounded-3xl overflow-hidden glass-card shadow-2xl"
              style={{ ...cardStyle, border: isDark ? "1px solid rgba(59,130,246,0.15)" : "1px solid rgba(59,130,246,0.2)" }}>
              <div className="absolute inset-0 z-0">
                <Suspense fallback={<EarthFallback />}><EarthCanvas /></Suspense>
              </div>
              <div className={`absolute inset-0 pointer-events-none z-10 ${isDark ? 'bg-gradient-to-t from-[#020617]/80 to-transparent' : 'bg-gradient-to-t from-slate-200/50 to-transparent'}`} />
            </div>


            {/* Contact Chips */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                const inner = (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-5 p-5 rounded-3xl transition-all glass-card"
                    style={cardStyle}
                  >
                    <div className="p-3.5 rounded-2xl flex-shrink-0 shadow-lg"
                      style={{ background: `${info.color}${isDark ? '15' : '10'}`, border: `1px solid ${info.color}${isDark ? '30' : '20'}` }}>
                      <Icon className="h-6 w-6" style={{ color: info.color }} />
                    </div>
                    <div>
                      <p className={`text-[10px] uppercase tracking-[0.2em] font-black ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{info.label}</p>
                      <p className={`text-sm font-black mt-1 ${isDark ? 'text-white' : 'text-slate-800'}`}>{info.value}</p>
                    </div>
                  </motion.div>
                );
                return info.link ? <a key={i} href={info.link} className="block">{inner}</a> : <div key={i}>{inner}</div>;
              })}
            </div>

            {/* Socials */}
            <div className="flex flex-wrap gap-4">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="flex items-center gap-3 px-6 py-3.5 rounded-2xl glass-card transition-all"
                    style={{ background: `${s.color}${isDark ? '15' : '10'}`, border: `1px solid ${s.color}${isDark ? '30' : '20'}` }}
                  >
                    <Icon className="h-4 w-4" style={{ color: s.color }} />
                    <span className="text-xs font-black uppercase tracking-widest" style={{ color: s.color }}>{s.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl p-8 sm:p-12 glass-card shadow-2xl" style={cardStyle}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: "name", label: "Full Name", type: "text", ph: "Enter your name..." },
                { id: "email", label: "Email Address", type: "email", ph: "name@example.com" },
              ].map(({ id, label, type, ph }) => (
                <div key={id}>
                  <label htmlFor={id} className={`block text-[10px] uppercase tracking-[0.2em] font-black mb-3 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{label}</label>
                  <input
                    id={id} type={type} placeholder={ph} required
                    value={(form as any)[id]}
                    onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className={`block text-[10px] uppercase tracking-[0.2em] font-black mb-3 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Message</label>
                <textarea
                  id="message" rows={5} required
                  placeholder="How can I help with your project?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                />
              </div>
              <button
                type="submit" disabled={busy}
                className="w-full h-14 rounded-2xl text-sm font-black uppercase tracking-[0.2em] text-white btn-glow transition-all flex items-center justify-center gap-3 disabled:opacity-60 shadow-xl"
                style={{ background: "linear-gradient(135deg, #3b82f6, #1d4ed8)" }}
              >
                {busy ? <><Loader2 className="h-5 w-5 animate-spin" />Sending</> : <><Send className="h-5 w-5" />Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
