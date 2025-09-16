const Services = () => {
  return (
    <section id="services" className="py-32 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-20 animate-on-scroll">
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-8 leading-tight max-w-4xl">
            Building bridges between talent and opportunity
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            We connect exceptional developers from Latin America with innovative companies 
            across the United States, creating partnerships that transform businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-16 stagger-animation">
          <div className="space-y-6 animate-on-scroll hover-lift" style={{'--stagger': 0} as any}>
            <h3 className="text-xl font-medium text-foreground text-gradient">
              Talent Sourcing
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Access our curated network of senior developers, 
              each rigorously vetted for technical excellence 
              and cultural alignment.
            </p>
          </div>

          <div className="space-y-6 animate-on-scroll hover-lift" style={{'--stagger': 1} as any}>
            <h3 className="text-xl font-medium text-foreground text-gradient">
              Team Integration
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Seamless onboarding and ongoing support ensure 
              your new team members contribute from day one 
              and grow with your organization.
            </p>
          </div>

          <div className="space-y-6 animate-on-scroll hover-lift" style={{'--stagger': 2} as any}>
            <h3 className="text-xl font-medium text-foreground text-gradient">
              Partnership Management
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Dedicated account management and continuous 
              optimization of working relationships for 
              sustained success and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;