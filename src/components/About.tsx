import { GraduationCap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Bio */}
          <div className="md:col-span-2 space-y-6 animate-slide-in">
            <Card className="p-8 hover-lift">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm <span className="font-semibold text-foreground">Joseva A</span>, a Civil Engineering
                undergraduate from <span className="font-semibold text-foreground">SASTRA Deemed University</span>,
                passionate about <span className="text-primary font-medium">Building Information Modeling (BIM)</span>,{" "}
                <span className="text-primary font-medium">AI-driven construction</span>, and{" "}
                <span className="text-primary font-medium">sustainable infrastructure design</span>.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                I specialize in integrating{" "}
                <span className="font-semibold text-foreground">Revit, AutoCAD, STAAD Pro</span>, and{" "}
                <span className="font-semibold text-foreground">Python-based modeling tools</span> to enhance project
                efficiency and design accuracy. My work focuses on developing energy-efficient buildings, smart
                construction systems, and AI-powered civil solutions that drive digital transformation and
                sustainability in modern engineering.
              </p>
            </Card>
          </div>

          {/* Education Card */}
          <div className="space-y-6 animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <Card className="p-8 hover-lift bg-gradient-to-br from-primary/5 to-primary-dark/5 border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-foreground">Bachelor of Technology</p>
                  <p className="text-sm text-primary font-medium">Civil Engineering</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">SASTRA Deemed University</p>
                  <p className="text-sm text-muted-foreground">2022 - 2026</p>
                </div>
                <div className="pt-3 border-t border-border">
                  <p className="text-sm text-muted-foreground">CGPA</p>
                  <p className="text-2xl font-bold text-primary">7.10</p>
                  <p className="text-xs text-muted-foreground">(till 6th semester)</p>
                </div>
              </div>
            </Card>

            <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground group">
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Focus Areas */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl font-bold mb-6 text-center">Focus Areas</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Building Information Modeling",
              "Sustainable Infrastructure",
              "AI-enabled Construction",
              "Transportation Engineering",
            ].map((area, index) => (
              <Card
                key={index}
                className="p-6 text-center hover-lift cursor-pointer hover:border-primary transition-colors"
              >
                <p className="font-medium text-foreground">{area}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
