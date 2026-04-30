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

  const card = {
    background: isDark ? "rgba(15,23,42,0.80)" : "rgba(255,255,255,0.7)",
    border: `1px solid ${isDark ? "rgba(59,130,246,0.20)" : "rgba(59,130,246,0.12)"}`,
    backdropFilter: "blur(16px)",
    boxShadow: isDark ? "0 10px 30px -15px rgba(0,0,0,0.40)" : "0 10px 30px -15px rgba(59,130,246,0.1)",
  };

  const inputStyle = {
    background: isDark ? "rgba(15,23,42,0.60)" : "rgba(255,255,255,0.5)",
    border: `1px solid ${isDark ? "rgba(59,130,246,0.25)" : "rgba(59,130,246,0.15)"}`,
  };

  const inputClass = `
    w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-blue-100
    ${isDark ? "text-slate-100 placeholder:text-slate-500" : "text-slate-900 placeholder:text-slate-400"}
  `.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      // No need to init inside handleSubmit if it's already initialized, 
      // but let's ensure it's correct.
      emailjs.init("aEvbeb24MPIqmNjUu");

      const templateParams = {
        user_name: form.name,
        user_email: form.email,
        to_name: "Joseva A",
        message: form.message,
      };

      const result = await emailjs.send(
        "service_5ixterr",
        "template_qqi02fi",
        templateParams
      );

      if (result.status === 200) {
        toast({ title: "Message Sent!", description: "I'll get back to you soon." });
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error",
        description: "Failed to send. Please try again or email directly.",
        variant: "destructive"
      });
    } finally {
      setBusy(false);
    }
  };

  const isMobile = window.innerWidth < 768;

  const contactInfo = [
    { icon: MapPin, color: "#8b5cf6", label: "Location", value: "Tiruchirappalli, TN", link: null },
    { icon: Mail, color: "#2563eb", label: "Email", value: "jovinitro007@gmail.com", link: "mailto:jovinitro007@gmail.com" },
    { icon: Phone, color: "#059669", label: "Phone", value: "+91 8015164110", link: "tel:+918015164110" },
  ];

  const socials = [
    { icon: Linkedin, color: "#0ea5e9", label: "LinkedIn", url: "https://linkedin.com/in/joseva2748" },
    { icon: ExternalLink, color: "#8b5cf6", label: "GitHub", url: "https://github.com/Jovix27" },
  ];

  return (
    <section id="contact" className="section-padding bg-section-alt">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 text-sm uppercase tracking-widest font-medium mb-2">Let's collaborate</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Get In <span className="text-hero-gradient">Touch</span>
          </h2>
          <div className="section-bar" />
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm">
            Open to ConTech roles, BIM engineering positions, and AI-construction research collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <motion.div className="space-y-5"
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            {/* Globe */}
            <div className="h-52 sm:h-64 md:h-72 relative rounded-2xl overflow-hidden"
              style={{ ...card, border: "1px solid rgba(59,130,246,0.2)" }}>
              {isMobile
                ? <EarthFallback />
                : <Suspense fallback={<EarthFallback />}><EarthCanvas /></Suspense>
              }
              <div className="absolute inset-0 bg-gradient-to-t from-slate-200/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Contact chips */}
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              const inner = (
                <motion.div
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4, transition: { duration: 0.15 } }}
                  className="flex items-center gap-4 p-4 rounded-2xl transition-all"
                  style={{ ...card }}
                >
                  <div className="p-3 rounded-xl flex-shrink-0"
                    style={{ background: `${info.color}12`, border: `1px solid ${info.color}25` }}>
                    <Icon className="h-5 w-5" style={{ color: info.color }} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{info.label}</p>
                    <p className="text-sm font-bold text-slate-800 mt-0.5">{info.value}</p>
                  </div>
                </motion.div>
              );
              return info.link
                ? <a key={i} href={info.link} className="block">{inner}</a>
                : <div key={i}>{inner}</div>;
            })}

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ y: -3, transition: { duration: 0.15 } }}
                    className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl"
                    style={{ background: `${s.color}10`, border: `1px solid ${s.color}25`, backdropFilter: "blur(12px)" }}
                  >
                    <Icon className="h-4 w-4" style={{ color: s.color }} />
                    <span className="text-sm font-medium" style={{ color: s.color }}>{s.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-2xl p-6 sm:p-8" style={card}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { id: "name", label: "Your Name", type: "text", ph: "John Doe" },
                { id: "email", label: "Email Address", type: "email", ph: "john@company.com" },
              ].map(({ id, label, type, ph }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-2">{label}</label>
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
                <label htmlFor="message" className="block text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-2">Message</label>
                <textarea
                  id="message" rows={5} required
                  placeholder="Tell me about the role or collaboration opportunity..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                  style={inputStyle}
                />
              </div>
              <button
                type="submit" disabled={busy}
                className="w-full h-12 rounded-xl text-sm font-semibold text-white btn-glow transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                style={{ background: "linear-gradient(135deg,#3b82f6,#1d4ed8)" }}
              >
                {busy
                  ? <><Loader2 className="h-4 w-4 animate-spin" />Sending...</>
                  : <><Send className="h-4 w-4" />Send Message</>
                }
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
