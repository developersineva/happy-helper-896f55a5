import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import futureLandLogo from "@/assets/Future_Land_Logo.png";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
const quickLinks = [{
  name: "About Us",
  path: "/about"
}, {
  name: "Services",
  path: "/services"
}, {
  name: "Projects",
  path: "/projects"
}, {
  name: "Contact",
  path: "/contact"
}];

const socialLinks = [{
  icon: Facebook,
  href: "#",
  label: "Facebook"
}, {
  icon: Instagram,
  href: "#",
  label: "Instagram"
}, {
  icon: Linkedin,
  href: "#",
  label: "LinkedIn"
}, {
  icon: Twitter,
  href: "#",
  label: "Twitter"
}];
export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    try {
      const {
        error
      } = await supabase.from("newsletter_subscriptions").insert({
        email: email.trim()
      });
      if (error) {
        if (error.code === "23505") {
          toast({
            title: "Already subscribed",
            description: "This email is already subscribed to our newsletter."
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Successfully subscribed!",
          description: "Thank you for subscribing to our newsletter."
        });
        setEmail("");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  return <footer className="bg-[#F5F3EF] text-charcoal">
      {/* Newsletter Section */}
      <div className="border-b border-charcoal/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-3xl mb-3 text-charcoal">Stay Updated</h3>
            <p className="text-charcoal/80 mb-6">
              Subscribe to our newsletter for the latest projects, industry insights, and exclusive offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} className="bg-white border-charcoal/30 text-charcoal placeholder:text-charcoal/50 flex-1" required />
              <Button type="submit" disabled={isLoading} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img src={futureLandLogo} alt="Future Land Capital" className="h-[80px] w-auto" />
            </div>
            <p className="text-charcoal/80 text-sm leading-relaxed mb-6">
              Building tomorrow's legacy today. Texas' premier sustainable luxury construction company, creating
              exceptional spaces for discerning clients.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(social => <a key={social.label} href={social.href} aria-label={social.label} className="w-10 h-10 rounded-full bg-charcoal/10 flex items-center justify-center text-charcoal transition-colors hover:bg-secondary hover:text-white">
                  <social.icon size={18} />
                </a>)}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl mb-6 text-charcoal">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => <li key={link.path}>
                  <Link to={link.path} className="text-charcoal/80 hover:text-secondary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>


          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl mb-6 text-charcoal">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary mt-0.5 shrink-0" />
              <span className="text-charcoal/80 text-sm">
                  200 E LAS OLAS BLVD 1100
                  <br />
                  FORT LAUDERDALE, FL 33301-2209
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary shrink-0" />
                <a href="tel:+18322896124" className="text-charcoal/80 hover:text-secondary transition-colors text-sm">
                  +1 (832) 289-6124
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary shrink-0" />
                <a href="mailto:info@futurelandcapital.com" className="text-charcoal/80 hover:text-secondary transition-colors text-sm">
                  info@futurelandcapital.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal/20">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-charcoal/60">
            <p>© 2026 Future Land Capital. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>;
};