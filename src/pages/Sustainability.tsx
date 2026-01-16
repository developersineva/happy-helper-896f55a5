import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Leaf, Sun, Droplets, Recycle, Award, TreePine } from "lucide-react";

const practices = [
  { icon: Sun, title: "Solar Integration", description: "State-of-the-art solar panel systems reducing energy costs by up to 70%" },
  { icon: Droplets, title: "Water Conservation", description: "Rainwater harvesting, greywater recycling, and drought-resistant landscaping" },
  { icon: Recycle, title: "Sustainable Materials", description: "Locally-sourced, recycled, and responsibly harvested building materials" },
  { icon: TreePine, title: "Green Spaces", description: "Native landscaping and rooftop gardens that support local ecosystems" },
];

const certifications = [
  { name: "LEED Platinum", description: "Highest level of green building certification", projects: "45+ Projects" },
  { name: "Energy Star", description: "Superior energy performance standards", projects: "120+ Projects" },
  { name: "Green Globe", description: "International environmental certification", projects: "30+ Projects" },
];

const Sustainability = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <pattern id="leaves" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M10 0 Q15 10 10 20 Q5 10 10 0" fill="currentColor" className="text-card" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#leaves)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full mb-6">
            <Leaf className="w-5 h-5 text-secondary" />
            <span className="text-card text-sm font-medium">Committed to Our Planet</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-5xl md:text-6xl text-card mb-4">
            Sustainability
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-card/80 text-xl max-w-2xl mx-auto">
            Building a greener future through innovative, eco-conscious construction practices
          </motion.p>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Our Commitment</span>
              <h2 className="font-display text-4xl text-foreground mb-6">Building for Future Generations</h2>
              <div className="decorative-line mb-6" />
              <p className="text-muted-foreground mb-4">At Future Land Capital, sustainability isn't just a buzzword—it's the foundation of everything we build. We believe luxury and environmental responsibility go hand in hand.</p>
              <p className="text-muted-foreground mb-4">Every project we undertake is designed to minimize environmental impact while maximizing comfort, efficiency, and beauty. From material selection to energy systems, we consider the full lifecycle of our buildings.</p>
              <p className="text-muted-foreground">Our goal is simple: create spaces that enhance lives today without compromising tomorrow.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-lg overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800" alt="Sustainable building" className="w-full h-96 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practices */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">How We Build</span>
            <h2 className="font-display text-4xl text-foreground mb-4">Green Building Practices</h2>
            <div className="decorative-line mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practices.map((practice, i) => (
              <motion.div key={practice.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card p-8 rounded-lg shadow-lg text-center card-hover">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <practice.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{practice.title}</h3>
                <p className="text-muted-foreground text-sm">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Recognition</span>
            <h2 className="font-display text-4xl text-card mb-4">Certifications & Awards</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {certifications.map((cert, i) => (
              <motion.div key={cert.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-primary-foreground/10 p-8 rounded-lg text-center border border-primary-foreground/20">
                <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-display text-2xl text-card mb-2">{cert.name}</h3>
                <p className="text-card/70 text-sm mb-4">{cert.description}</p>
                <span className="text-secondary font-bold">{cert.projects}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sustainability;
