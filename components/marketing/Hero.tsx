import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link"; // if this CTA navigates to a page

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-background">
      {/* Scattered Profile Images */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left */}
        <div className="absolute top-32 left-20 w-16 h-16 rounded-full bg-gradient-card opacity-20 blur-sm animate-pulse-slow" />
        <div className="absolute top-48 left-40 w-12 h-12 rounded-full bg-accent opacity-30 animate-fade-in" style={{'--stagger': 1} as any} />
        
        {/* Top Right */}
        <div className="absolute top-36 right-32 w-20 h-20 rounded-full bg-primary opacity-25 blur-sm animate-glow" />
        <div className="absolute top-56 right-16 w-14 h-14 rounded-full bg-gradient-logo opacity-20 animate-fade-in" style={{'--stagger': 2} as any} />
        
        {/* Bottom Left */}
        <div className="absolute bottom-40 left-16 w-18 h-18 rounded-full bg-accent opacity-25 animate-pulse-slow" />
        <div className="absolute bottom-28 left-48 w-10 h-10 rounded-full bg-primary opacity-30 blur-sm animate-fade-in" style={{'--stagger': 3} as any} />
        
        {/* Bottom Right */}
        <div className="absolute bottom-32 right-24 w-16 h-16 rounded-full bg-gradient-card opacity-20 animate-fade-in" style={{'--stagger': 4} as any} />
        <div className="absolute bottom-48 right-52 w-12 h-12 rounded-full bg-accent opacity-25 blur-sm animate-glow" />
        
        {/* Center scattered elements */}
        <div className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full bg-primary opacity-20 animate-pulse-slow" />
        <div className="absolute top-2/3 right-1/3 w-6 h-6 rounded-full bg-accent opacity-25 animate-fade-in" style={{'--stagger': 5} as any} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto animate-fade-in-up">        
        {/* Main Heading - Large Typography */}
        <h1 className="font-light mb-8 leading-[0.9] tracking-tight stagger-animation">
          <span className="block text-6xl md:text-8xl lg:text-9xl bg-gradient-logo bg-clip-text text-transparent font-light animate-slide-in-left" style={{'--stagger': 0} as any}>SeekerLane</span>
          <span className="block text-2xl md:text-3xl lg:text-4xl text-foreground font-light animate-slide-in-left mt-4" style={{'--stagger': 1} as any}>Where Talent</span>
          <span className="block text-2xl md:text-3xl lg:text-4xl text-foreground font-light animate-slide-in-left" style={{'--stagger': 2} as any}>finds its</span>
          <span className="block text-2xl md:text-3xl lg:text-4xl text-foreground font-light animate-slide-in-left" style={{'--stagger': 3} as any}>Path</span>
        </h1>
        
        {/* CTA Button */}
        <div className="mt-12 animate-scale-in" style={{'animationDelay': '1s'} as any}>
         <Link
         href="/jobs"
         className={cn(
         buttonVariants({ variant: "primary", size: "lg" }),
         "border-accent/30 text-accent hover:bg-accent/10 transition-smooth px-8 py-4 text-base font-normal"
         )}
         >
  View opportunities
</Link>

            View opportunities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;