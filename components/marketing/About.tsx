const About = () => {
  return (
    <section id="about" className="py-32 px-4 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        {/* Large Image */}
        <div className="mb-16 rounded-2xl overflow-hidden animate-on-scroll hover-lift">
          <img 
            src="/api/placeholder/800/600" 
            alt="Team collaboration" 
            className="w-full h-[600px] object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8 leading-tight">
              Connecting worlds through talent
            </h2>
          </div>
          
          <div className="space-y-8 animate-on-scroll">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We specialize in connecting exceptional Latin American developers with innovative US companies. 
              Our network spans across time zones, cultures, and industries.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With rigorous vetting processes and dedicated support, we ensure seamless collaboration 
              that drives success for both talent and companies.
            </p>

            <div className="flex items-center gap-8 pt-8 stagger-animation">
              <div className="text-center animate-scale-in" style={{'--stagger': 0} as any}>
                <div className="text-2xl font-light text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
              <div className="text-center animate-scale-in" style={{'--stagger': 1} as any}>
                <div className="text-2xl font-light text-accent mb-1">2000+</div>
                <div className="text-sm text-muted-foreground">Developers</div>
              </div>
              <div className="text-center animate-scale-in" style={{'--stagger': 2} as any}>
                <div className="text-2xl font-light text-primary mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;