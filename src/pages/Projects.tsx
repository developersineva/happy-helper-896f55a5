import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  { id: 1, title: "The Oaks Estate", location: "River Oaks, Houston", category: "Residential", value: "$8.5M", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800", description: "A stunning 12,000 sq ft estate featuring sustainable materials and smart home technology." },
  { id: 2, title: "Skyline Tower", location: "Downtown Dallas", category: "Commercial", value: "$45M", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800", description: "40-story LEED Platinum certified office building with panoramic city views." },
  { id: 3, title: "Verde Residence", location: "Austin Hills", category: "Sustainable", value: "$5.2M", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", description: "Net-zero energy home with solar panels, geothermal heating, and rainwater harvesting." },
  { id: 4, title: "Lakeside Manor", location: "Lake Travis", category: "Residential", value: "$12M", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800", description: "Waterfront luxury estate with private dock and infinity pool overlooking the lake." },
  { id: 5, title: "Innovation Hub", location: "The Woodlands", category: "Commercial", value: "$28M", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800", description: "Modern tech campus with collaborative spaces and green building features." },
  { id: 6, title: "Eco Villa", location: "San Antonio", category: "Sustainable", value: "$3.8M", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800", description: "Award-winning sustainable home built with reclaimed materials and passive solar design." },
  { id: 7, title: "Highland Retreat", location: "Hill Country", category: "Residential", value: "$7.2M", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800", description: "Contemporary ranch home blending modern design with Texas Hill Country aesthetics." },
  { id: 8, title: "Metro Plaza", location: "Houston Galleria", category: "Commercial", value: "$55M", image: "https://images.unsplash.com/photo-1545324418-cc6a8b25d7b6?w=800", description: "Mixed-use development featuring retail, office, and luxury residential spaces." },
];

const categories = ["All", "Residential", "Commercial", "Sustainable"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-5xl md:text-6xl text-card mb-4">
            Our Projects
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-card/80 text-xl max-w-2xl mx-auto">
            Explore our portfolio of luxury residential and commercial developments
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Button key={cat} variant={filter === cat ? "default" : "outline"} onClick={() => setFilter(cat)} className={filter === cat ? "bg-primary text-primary-foreground" : "border-primary text-charcoal hover:bg-primary hover:text-primary-foreground"}>
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="group cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <div className="bg-card rounded-lg overflow-hidden shadow-lg card-hover">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute top-3 left-3">
                        <span className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-full">{project.category}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-xl text-foreground mb-1">{project.title}</h3>
                      <div className="flex items-center text-muted-foreground text-sm mb-2">
                        <MapPin size={14} className="mr-1" /> {project.location}
                      </div>
                      <p className="text-secondary font-semibold">{project.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-80 object-cover" />
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70">
                  <X size={20} />
                </button>
                <span className="absolute bottom-4 left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-medium">{selectedProject.category}</span>
              </div>
              <div className="p-8">
                <h2 className="font-display text-3xl text-foreground mb-2">{selectedProject.title}</h2>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin size={16} className="mr-1" /> {selectedProject.location}
                </div>
                <p className="text-muted-foreground mb-4">{selectedProject.description}</p>
                <p className="text-2xl text-secondary font-bold">{selectedProject.value}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Projects;
