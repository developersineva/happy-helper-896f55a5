import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { 
  Home, Building2, Leaf, Map, Hammer, ClipboardList, ArrowRight,
  MessageSquare, FileText, Key, Shield, Calendar, DollarSign, HardHat
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import servicesHero from "@/assets/services-hero.jpg";

const services = [
  { 
    icon: Home, 
    title: "Custom Luxury Homes", 
    description: "Bespoke residences crafted to your exact specifications. From contemporary estates to classic manors, we bring your vision to life with uncompromising quality.", 
    features: ["Custom architectural design", "Premium materials", "Smart home integration", "Energy efficiency"] 
  },
  { 
    icon: Building2, 
    title: "Commercial Development", 
    description: "State-of-the-art commercial spaces that inspire productivity and impress clients. Office buildings, retail centers, and mixed-use developments.", 
    features: ["Class A office spaces", "Retail developments", "Mixed-use projects", "Corporate headquarters"] 
  },
  { 
    icon: Leaf, 
    title: "Sustainable Green Building", 
    description: "Eco-conscious construction that meets the highest environmental standards. LEED certification, solar integration, and sustainable materials.", 
    features: ["LEED certification", "Solar panel systems", "Green materials", "Water conservation"] 
  },
  { 
    icon: Map, 
    title: "Land Development & Planning", 
    description: "Comprehensive land development services from site selection to infrastructure. Master-planned communities and commercial subdivisions.", 
    features: ["Site analysis", "Zoning & permits", "Infrastructure", "Master planning"] 
  },
  { 
    icon: Hammer, 
    title: "Renovation & Remodeling", 
    description: "Transform existing spaces into modern masterpieces. Historic restorations, luxury upgrades, and complete property makeovers.", 
    features: ["Historic restoration", "Modern upgrades", "Kitchen & bath", "Additions"] 
  },
  { 
    icon: ClipboardList, 
    title: "Project Management", 
    description: "Full-service construction management ensuring your project stays on time and budget. Expert oversight from concept to completion.", 
    features: ["Budget management", "Timeline tracking", "Quality control", "Vendor coordination"] 
  },
];

const processSteps = [
  { 
    number: "01", 
    icon: MessageSquare, 
    title: "Consultation", 
    description: "Free initial meeting to discuss your vision and requirements" 
  },
  { 
    number: "02", 
    icon: FileText, 
    title: "Planning", 
    description: "Detailed project planning, permits, and timeline creation" 
  },
  { 
    number: "03", 
    icon: HardHat, 
    title: "Construction", 
    description: "Expert execution with regular updates and quality checks" 
  },
  { 
    number: "04", 
    icon: Key, 
    title: "Delivery", 
    description: "Final walkthrough and handover with complete documentation" 
  },
];

const whyChooseUs = [
  { 
    icon: Calendar, 
    title: "25+ Years Experience", 
    description: "Decades of proven excellence in Texas construction" 
  },
  { 
    icon: Shield, 
    title: "Licensed & Insured", 
    description: "Full coverage and certifications for your peace of mind" 
  },
  { 
    icon: ClipboardList, 
    title: "On-Time Delivery", 
    description: "98% of projects completed on or before schedule" 
  },
  { 
    icon: DollarSign, 
    title: "Transparent Pricing", 
    description: "Detailed quotes with no hidden costs or surprises" 
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${servicesHero})` }} 
        />
        <div className="absolute inset-0 bg-[#2D5A3D]/80" />
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">Services</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }} 
            className="text-white/90 text-xl md:text-2xl max-w-2xl"
          >
            Comprehensive Construction Solutions for Every Need
          </motion.p>
        </div>
      </section>


      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-[#333333] mb-4">What We Offer</h2>
            <div className="w-20 h-1 bg-[#A67C52] mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={service.title} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-[#2D5A3D]/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-[#2D5A3D]" />
                  </div>
                  <h3 className="font-display text-2xl text-[#333333] mb-3">{service.title}</h3>
                  <p className="text-[#333333]/70 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-[#333333]/80">
                        <span className="w-2 h-2 bg-[#A67C52] rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-[#2D5A3D] text-[#2D5A3D] hover:bg-[#2D5A3D] hover:text-white transition-all duration-300"
                  >
                    <Link to="/contact">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-[#F5F3EF]">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-[#333333] mb-4">Our Process</h2>
            <div className="w-20 h-1 bg-[#A67C52] mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                {/* Connecting Line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-[#2D5A3D]/20" />
                )}
                
                {/* Number Circle */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#2D5A3D] text-white mb-6">
                  <span className="font-display text-2xl">{step.number}</span>
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 bg-[#A67C52]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-[#A67C52]" />
                </div>
                
                <h3 className="font-display text-xl text-[#333333] mb-2">{step.title}</h3>
                <p className="text-[#333333]/70 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl text-[#333333] mb-4">
              Why Choose Future Land Capital?
            </h2>
            <div className="w-20 h-1 bg-[#A67C52] mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 bg-[#F5F3EF] rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-[#2D5A3D]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-[#2D5A3D]" />
                </div>
                <h3 className="font-display text-lg text-[#333333] mb-2">{item.title}</h3>
                <p className="text-[#333333]/70 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#2D5A3D]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Contact us today for a free consultation and detailed quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-[#A67C52] hover:bg-[#8B6844] text-white px-8 py-6 text-lg"
              >
                <Link to="/contact">
                  Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#2D5A3D] px-8 py-6 text-lg"
              >
                <Link to="/projects">
                  View Our Projects
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
