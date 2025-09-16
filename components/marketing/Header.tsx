import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
             src="/seekerlane-logo.png"   // the file must be in /public
             alt="SeekerLane Logo"
             width={40}
             height={40}
             className="w-10 h-10 object-contain"
             priority
            />
            <div>
              <span className="text-2xl font-bold text-foreground">SeekerLane</span>
              <p className="text-xs text-muted-foreground -mt-1">Where talent finds its path</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-smooth font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-primary transition-smooth font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('why-hire-us')}
              className="text-muted-foreground hover:text-primary transition-smooth font-medium"
            >
              Why Hire Us
            </button>
            <button className="text-muted-foreground hover:text-primary transition-smooth font-medium">
              Jobs
            </button>
          </nav>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
            className={cn(
            buttonVariants({ variant: "primary", size: "md" }),
            "bg-gradient-primary hover:shadow-glow transition-smooth shadow-soft"
            )}
            >
            Contact
           </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6 text-foreground" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('why-hire-us')}
                className="text-left text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                Why Hire Us
              </button>
              <button className="text-left text-muted-foreground hover:text-primary transition-smooth font-medium">
                Jobs
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;