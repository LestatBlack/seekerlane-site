const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/30">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8 leading-tight">
            Ready to build your team?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:hello@seekerlane.com"
              className="text-lg text-accent hover:text-accent/80 transition-smooth underline underline-offset-4"
            >
              hello@seekerlane.com
            </a>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <a 
              href="tel:+15551234567"
              className="text-lg text-muted-foreground hover:text-foreground transition-smooth"
            >
              +1 (555) 123-4567
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-3">
              <span className="text-xl font-light text-foreground">SeekerLane</span>
              <span className="text-muted-foreground">©2025</span>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth text-sm">Privacy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth text-sm">Terms</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth text-sm">Careers</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;