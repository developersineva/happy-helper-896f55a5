import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const VisionToReality = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        {/* Left - Construction Image */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-primary/40" />
        </div>

        {/* Right - Completed Home Image */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-primary/30" />
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[600px] md:min-h-[700px]">
        <div className="container mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-secondary font-medium tracking-[0.3em] uppercase text-sm mb-6"
          >
            Our Process
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6"
          >
            From <span className="text-secondary">Vision</span> to Reality
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Where precision meets luxury. Carefully planned, beautifully built.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-base px-8"
            >
              <Link to="/projects">
                See Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
