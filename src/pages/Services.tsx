import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Home, Building2, Leaf, Map, Hammer, ClipboardList, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  { icon: Home, title: "Custom Luxury Homes", description: "Bespoke residences crafted to your exact specifications. From contemporary estates to classic manors, we bring your vision to life with uncompromising quality.", features: ["Custom architectural design", "Premium materials", "Smart home integration", "Energy efficiency"] },
  { icon: Building2, title: "Commercial Development", description: "State-of-the-art commercial spaces that inspire productivity and impress clients. Office buildings, retail centers, and mixed-use developments.", features: ["Class A office spaces", "Retail developments", "Mixed-use projects", "Corporate headquarters"] },
  { icon: Leaf, title: "Sustainable Green Building", description: "Eco-conscious construction that meets the highest environmental standards. LEED certification, solar integration, and sustainable materials.", features: ["LEED certification", "Solar panel systems", "Green materials", "Water conservation"] },
  { icon: Map, title: "Land Development", description: "Comprehensive land development services from site selection to infrastructure. Master-planned communities and commercial subdivisions.", features: ["Site analysis", "Zoning & permits", "Infrastructure", "Master planning"] },
  { icon: Hammer, title: "Renovation & Remodeling", description: "Transform existing spaces into modern masterpieces. Historic restorations, luxury upgrades, and complete property makeovers.", features: ["Historic restoration", "Modern upgrades", "Kitchen & bath", "Additions"] },
  { icon: ClipboardList, title: "Project Management", description: "Full-service construction management ensuring your project stays on time and budget. Expert oversight from concept to completion.", features: ["Budget management", "Timeline tracking", "Quality control", "Vendor coordination"] },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-5xl md:text-6xl text-card mb-4">
            Our Services
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-card/80 text-xl max-w-2xl mx-auto">
            Comprehensive construction solutions for luxury residential and commercial projects
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-lg shadow-lg overflow-hidden card-hover group">
                <div className="p-8">
                  <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link to="/contact">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl text-foreground mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Contact us today for a free consultation and let's discuss how we can bring your vision to life.</p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <Link to="/contact">Get Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
