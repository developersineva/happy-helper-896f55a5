import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "The Oaks Estate",
    location: "River Oaks, Houston",
    category: "Residential",
    value: "$8.5M",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
  },
  {
    id: 2,
    title: "Skyline Tower",
    location: "Downtown Dallas",
    category: "Commercial",
    value: "$45M",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    title: "Verde Residence",
    location: "Austin Hills",
    category: "Sustainable",
    value: "$5.2M",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    title: "Lakeside Manor",
    location: "Lake Travis",
    category: "Residential",
    value: "$12M",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  },
];

export const FeaturedProjects = () => {
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
            Our Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl text-foreground mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="decorative-line mx-auto"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-lg overflow-hidden bg-card shadow-lg card-hover"
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                  {project.category}
                </span>
              </div>


              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/80 to-transparent p-6 pt-16">
                <h3 className="font-display text-xl text-white mb-1">
                  {project.title}
                </h3>
                <div className="flex items-center text-white/80 text-sm mb-2">
                  <MapPin size={14} className="mr-1" />
                  {project.location}
                </div>
                <p className="text-secondary font-semibold">{project.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Link to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
