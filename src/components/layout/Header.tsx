import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import futureLandLogo from "@/assets/Future_Land_Logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Sustainability", path: "/sustainability" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={futureLandLogo} 
            alt="Future Land Capital" 
            className="h-16 md:h-20 w-auto drop-shadow-md"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "relative text-sm font-medium uppercase tracking-wider transition-colors hover:text-secondary",
                location.pathname === link.path
                  ? "text-secondary"
                  : isScrolled
                  ? "text-foreground"
                  : "text-card"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary" />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Button
          asChild
          className="hidden lg:flex bg-secondary hover:bg-secondary/90 text-secondary-foreground"
        >
          <Link to="/contact">Get Quote</Link>
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "lg:hidden p-2 transition-colors",
            isScrolled ? "text-foreground" : "text-card"
          )}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-card shadow-xl animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-base font-medium uppercase tracking-wider py-2 border-b border-border transition-colors hover:text-secondary",
                  location.pathname === link.path
                    ? "text-secondary"
                    : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="mt-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              <Link to="/contact">Get Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
