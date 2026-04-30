import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { useTheme } from "@/hooks/useTheme";

/* Ambient orb layer — provides the depth backdrop for glassmorphism */
const AmbientOrbs = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (!isDark) {
    /* Light mode: soft pastel blobs */
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
        <div className="ambient-orb w-[500px] h-[500px] -top-32 -left-32"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)" }} />
        <div className="ambient-orb w-[400px] h-[400px] top-1/3 -right-24"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 70%)", animationDelay: "-6s" }} />
        <div className="ambient-orb w-[350px] h-[350px] bottom-1/4 left-1/3"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)", animationDelay: "-12s" }} />
      </div>
    );
  }

  /* Dark mode: vivid deep-space glows */
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      {/* Top-left blue */}
      <div className="ambient-orb w-[600px] h-[600px] -top-40 -left-40"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.28) 0%, rgba(59,130,246,0.10) 45%, transparent 70%)" }} />
      {/* Right emerald */}
      <div className="ambient-orb w-[500px] h-[500px] top-1/2 -right-32"
        style={{ background: "radial-gradient(circle, rgba(5,150,105,0.22) 0%, rgba(16,185,129,0.08) 45%, transparent 70%)", animationDelay: "-7s" }} />
      {/* Center violet */}
      <div className="ambient-orb w-[450px] h-[450px] top-1/3 left-1/4"
        style={{ background: "radial-gradient(circle, rgba(109,40,217,0.18) 0%, rgba(139,92,246,0.06) 50%, transparent 70%)", animationDelay: "-14s" }} />
      {/* Bottom-left amber */}
      <div className="ambient-orb ambient-orb-sm w-[300px] h-[300px] bottom-0 left-1/3"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.14) 0%, transparent 70%)", animationDelay: "-3s" }} />
    </div>
  );
};

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen relative">
          <AmbientOrbs />
          <div className="relative z-10">
            <Navigation />
            <main>
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Services />
              <Projects />
              <Achievements />
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
