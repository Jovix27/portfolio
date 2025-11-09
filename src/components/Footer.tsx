const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Joseva A. All rights reserved.
          </p>
          <p className="text-xs text-background/70 mt-2">
            Built with passion for sustainable innovation in civil engineering
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
