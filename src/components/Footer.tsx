import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/joseva2748",
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/Jovix27",
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:ajoseva04@gmail.com",
    },
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 rounded-full hover:bg-primary transition-colors hover:text-primary-foreground"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
          <div className="text-center">
            <p className="text-sm font-medium">
              © {new Date().getFullYear()} Joseva A. All rights reserved.
            </p>
            <p className="text-xs text-background/60 mt-2 max-w-md mx-auto">
              Synthesizing AI, BIM, and Sustainable Design to build the future of infrastructure.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
