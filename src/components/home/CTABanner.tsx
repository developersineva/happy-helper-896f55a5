import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTABanner = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-secondary via-secondary to-[hsl(28,40%,55%)]">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="cta-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="currentColor" className="text-white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-white mb-6"
          >
            Ready to Build Your{" "}
            <span className="text-primary-foreground/90">Dream?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 text-lg mb-8"
          >
            Schedule a free consultation with our expert team and let's bring your vision to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-white/90 text-secondary hover:text-secondary text-base px-10"
            >
              <Link to="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
