import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
import BootSequence from "@/components/BootSequence";
import MatrixBackground from "@/components/MatrixBackground";
import StatusBar from "@/components/StatusBar";
import Dock from "@/components/Dock";

const Index = () => {
  const [isBooting, setIsBooting] = useState(true);

  return (
    <div className="min-h-screen relative overflow-hidden bg-bg-base">
      <MatrixBackground />
      {/* Frosted Overlay from Image 1 */}
      <div className="fixed inset-0 bg-white/5 dark:bg-black/5 backdrop-blur-[2px] pointer-events-none z-[1]" />

      <AnimatePresence>
        {isBooting && (
          <BootSequence key="boot" onComplete={() => setIsBooting(false)} />
        )}
      </AnimatePresence>

      {!isBooting && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10"
        >
          <StatusBar />
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
        </motion.div>
      )}
    </div>
  );
};

export default Index;
