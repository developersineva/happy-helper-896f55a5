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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 py-3">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo + Company Name */}
        <Link to="/" className="flex items-center">
          <img 
            src={futureLandLogo} 
            alt="Future Land Capital" 
            className="h-12 md:h-14 w-auto"
          />
        </Link>

        {/* Centered Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium uppercase tracking-wider transition-colors",
                location.pathname === link.path
                  ? "text-secondary"
                  : "text-muted-foreground hover:text-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Get Quote Button */}
        <Button
          asChild
          className="hidden lg:flex bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-6"
        >
          <Link to="/contact">Get Quote</Link>
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-foreground"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl animate-fade-in border-t border-gray-100">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-base font-medium uppercase tracking-wider py-2 border-b border-gray-100 transition-colors",
                  location.pathname === link.path
                    ? "text-secondary"
                    : "text-foreground hover:text-secondary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="mt-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full"
            >
              <Link to="/contact">Get Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
