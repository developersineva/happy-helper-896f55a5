import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-primary-foreground"
              fill="currentColor"
            >
              <path d="M12 2L8 6H4v4l-4 4 4 4v4h4l4 4 4-4h4v-4l4-4-4-4V6h-4L12 2zm0 3.5L14.5 8H16v1.5L18.5 12 16 14.5V16h-1.5L12 18.5 9.5 16H8v-1.5L5.5 12 8 9.5V8h1.5L12 5.5z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                "font-display text-lg font-bold tracking-[0.2em] uppercase transition-colors",
                isScrolled ? "text-foreground" : "text-card"
              )}
            >
              FUTURE LAND
            </span>
            <span
              className={cn(
                "text-xs tracking-[0.15em] uppercase transition-colors",
                isScrolled ? "text-secondary" : "text-secondary"
              )}
            >
              CAPITAL
            </span>
          </div>
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
