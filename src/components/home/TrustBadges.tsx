import { motion } from "framer-motion";
import { Users, ShieldCheck, Clock, Eye } from "lucide-react";

const badges = [
  {
    icon: Users,
    title: "Skilled Teams",
    description: "Certified professionals, pride in every build",
  },
  {
    icon: ShieldCheck,
    title: "ISO Certified",
    description: "100% Structural Testing Passed",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "4 Month Average Completion",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Live Project Dashboard Access 24/7",
  },
];

export const TrustBadges = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary/10 mb-4">
                <badge.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">
                {badge.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
