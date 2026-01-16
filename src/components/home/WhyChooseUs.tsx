import { motion } from "framer-motion";
import { Cpu, Gem, Zap } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Smart Construction",
    subtitle: "3D Planning & Modern Technology",
    description: "100% Faster Delivery",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Gem,
    title: "Premium Materials",
    subtitle: "Craftsmanship & Sustainable Quality",
    description: "Built to Last Generations",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Zap,
    title: "Built Fast, Built Right",
    subtitle: "No Compromise on Timeline",
    description: "Or Quality",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-foreground mb-4"
          >
            Engineered for Strength
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="decorative-line mx-auto"
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 -mt-12 relative z-10 border-4 border-card">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary font-medium mb-1">
                  {feature.subtitle}
                </p>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
