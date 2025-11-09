import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 section-padding">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg font-medium">Hi There,</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              I am <span className="text-gradient">Joseva A</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Civil Engineering Undergraduate | AI & BIM Enthusiast
            </p>
            <p className="text-lg text-muted-foreground">
              Sustainable Design Innovator
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => scrollToSection("#projects")}
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground group"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={() => scrollToSection("#contact")}
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Contact Me
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-border">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <p className="text-xs font-medium">Email</p>
              </div>
              <a
                href="mailto:ajoseva04@gmail.com"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                ajoseva04@gmail.com
              </a>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <p className="text-xs font-medium">Phone</p>
              </div>
              <a
                href="tel:+918015164110"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                +91 8015164110
              </a>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <p className="text-xs font-medium">Location</p>
              </div>
              <p className="text-sm font-medium">Tiruchirappalli, Tamil Nadu</p>
            </div>
          </div>
        </div>

        {/* Right Content - Profile Image with Geometric Design */}
        <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative z-10">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://i.postimg.cc/hGt6x44W/Whats-App-Image-2025-11-09-at-22-09-50-678d5967.jpg"
                alt="Joseva A - Civil Engineering Professional"
                className="w-full h-auto object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
          
          {/* Geometric Background Elements */}
          <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary-dark/10 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
