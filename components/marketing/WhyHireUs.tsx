const WhyHireUs = () => {
  return (
    <section id="why-hire-us" className="py-32 px-4 bg-muted/10">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-20 animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8 leading-tight max-w-4xl">
            Quality that speaks for itself
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-16 mb-20 stagger-animation">
          <div className="text-center animate-on-scroll hover-lift" style={{'--stagger': 0} as any}>
            <div className="text-4xl font-light text-primary mb-2 animate-glow">97%</div>
            <div className="text-muted-foreground">Client retention</div>
          </div>
          <div className="text-center animate-on-scroll hover-lift" style={{'--stagger': 1} as any}>
            <div className="text-4xl font-light text-accent mb-2 animate-glow">3%</div>
            <div className="text-muted-foreground">Acceptance rate</div>
          </div>
          <div className="text-center animate-on-scroll hover-lift" style={{'--stagger': 2} as any}>
            <div className="text-4xl font-light text-primary mb-2 animate-glow">500+</div>
            <div className="text-muted-foreground">Companies served</div>
          </div>
          <div className="text-center animate-on-scroll hover-lift" style={{'--stagger': 3} as any}>
            <div className="text-4xl font-light text-accent mb-2 animate-glow">2000+</div>
            <div className="text-muted-foreground">Developers</div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-20 stagger-animation">
          <div className="space-y-8 animate-on-scroll" style={{'--stagger': 0} as any}>
            <h3 className="text-2xl font-light text-foreground text-gradient">
              Rigorous selection
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our comprehensive vetting process ensures only exceptional developers 
              join our network. Technical excellence, cultural alignment, and 
              communication skills are all carefully evaluated.
            </p>
          </div>

          <div className="space-y-8 animate-on-scroll" style={{'--stagger': 1} as any}>
            <h3 className="text-2xl font-light text-foreground text-gradient">
              Seamless integration
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Time zone compatibility and shared business culture enable 
              effortless collaboration. Our developers integrate smoothly 
              into your existing workflows and team dynamics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireUs;