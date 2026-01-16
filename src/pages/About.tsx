import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Leaf, Shield, Lightbulb, Heart, Award, Users, Building, Clock } from "lucide-react";

const values = [
  { icon: Leaf, title: "Sustainability", description: "Building with respect for our environment and future generations" },
  { icon: Shield, title: "Quality", description: "Uncompromising standards in every detail of construction" },
  { icon: Lightbulb, title: "Innovation", description: "Embracing cutting-edge technology and methods" },
  { icon: Heart, title: "Trust", description: "Building lasting relationships through transparency and integrity" },
];

const team = [
  { name: "Robert Williams", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400" },
  { name: "Maria Santos", role: "Chief Architect", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
  { name: "David Chen", role: "VP of Operations", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
  { name: "Sarah Johnson", role: "Sustainability Director", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" },
];

const timeline = [
  { year: "1999", title: "Company Founded", description: "Future Land Capital established in Houston, Texas" },
  { year: "2005", title: "First LEED Project", description: "Completed our first LEED-certified building" },
  { year: "2012", title: "Expansion", description: "Expanded operations across Texas" },
  { year: "2020", title: "500+ Projects", description: "Milestone of 500 completed projects" },
  { year: "2024", title: "Industry Leader", description: "Recognized as Texas' premier sustainable builder" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-5xl md:text-6xl text-card mb-4">
            About Us
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-card/80 text-xl max-w-2xl mx-auto">
            Building Texas' future with sustainable luxury construction since 1999
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Our Story</span>
              <h2 className="font-display text-4xl text-foreground mb-6">A Legacy of Excellence</h2>
              <div className="decorative-line mb-6" />
              <p className="text-muted-foreground mb-4">Founded in 1999 by Robert Williams, Future Land Capital began with a simple vision: to create luxury spaces that honor both craftsmanship and the environment.</p>
              <p className="text-muted-foreground mb-4">Today, we're Texas' leading sustainable construction company, having completed over 500 projects ranging from custom estates to commercial developments.</p>
              <p className="text-muted-foreground">Our commitment to innovation, quality, and environmental responsibility continues to drive everything we do.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-lg overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800" alt="Construction site" className="w-full h-96 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Our Foundation</span>
            <h2 className="font-display text-4xl text-foreground mb-4">Core Values</h2>
            <div className="decorative-line mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card p-8 rounded-lg shadow-lg text-center card-hover">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Leadership</span>
            <h2 className="font-display text-4xl text-foreground mb-4">Our Team</h2>
            <div className="decorative-line mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-secondary">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-display text-xl text-foreground">{member.name}</h3>
                <p className="text-secondary">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Our Journey</span>
            <h2 className="font-display text-4xl text-card mb-4">Milestones</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <motion.div key={item.year} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-6 mb-8">
                <div className="w-20 shrink-0 text-right">
                  <span className="font-display text-2xl text-secondary">{item.year}</span>
                </div>
                <div className="w-3 h-3 bg-secondary rounded-full mt-2 shrink-0" />
                <div>
                  <h3 className="font-display text-xl text-card">{item.title}</h3>
                  <p className="text-card/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
