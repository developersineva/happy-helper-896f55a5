import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import {
  Leaf,
  Shield,
  Lightbulb,
  Award,
  Users,
  Target,
  Eye,
  Hammer,
  Monitor,
  CheckCircle,
  Building,
  Clock,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const missionVision = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To build exceptional spaces that exceed expectations while maintaining the highest standards of quality, sustainability, and client satisfaction.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be Colombia's most trusted construction company, known for innovation, integrity, and lasting relationships.",
  },
];

const whatSetsUsApart = [
  { icon: Hammer, title: "Expert Builders", description: "15+ Years Average Experience per team member" },
  { icon: CheckCircle, title: "ISO Certified", description: "100% Structural Testing Passed on every project" },
  { icon: Monitor, title: "Modern Technology", description: "3D Planning & Smart Construction methods" },
  { icon: Eye, title: "Transparent Process", description: "Live Dashboard Access 24/7 for clients" },
];

const values = [
  { icon: Award, title: "Quality First", description: "Premium materials and craftsmanship in every detail" },
  { icon: Leaf, title: "Sustainability", description: "Eco-friendly practices that protect our future" },
  { icon: Shield, title: "Integrity", description: "Honest communication and transparent pricing" },
  { icon: Lightbulb, title: "Innovation", description: "Modern technology meets traditional craftsmanship" },
];

const team = [
  {
    name: "Sofía Alejandra Bermúdez Llanos",
    role: "Founder & Manager",
    bio: "Sofía Alejandra Bermúdez Llanos is a goal-oriented executive with over 10 years of experience in the construction industry. As the Manager of Berdez S.A.S. in Bogotá, Colombia, she specializes in leading high-performance teams to deliver exceptional construction projects. A graduate of The Australian National University, Sofía combines international education with local expertise to drive organizational success in Colombia's competitive construction market.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
  },
];

const achievements = [
  { value: "500+", label: "Projects Completed" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "15+", label: "Industry Awards" },
];

const certifications = [
  { name: "LEED Certified", color: "bg-green-600" },
  { name: "ISO 9001", color: "bg-blue-600" },
  { name: "Colombian Licensed Builder", color: "bg-[#A67C52]" },
  { name: "S.A.S. Registered", color: "bg-blue-700" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920')" }}
        />
        <div className="absolute inset-0 bg-[#2D5A3D]/80" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-white/70 hover:text-white">
                      Home
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/50" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">About</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl text-white mb-4"
          >
            About Berdez S.A.S.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-xl max-w-2xl"
          >
            Building Excellence in Bogotá, Colombia
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-[#F5F3EF]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"
                alt="Luxury completed home"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-[#A67C52] font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
                Our Journey
              </span>
              <h2 className="font-display text-4xl text-[#333333] mb-6">Our Story</h2>
              <div className="w-16 h-1 bg-[#A67C52] mb-6" />
              <p className="text-[#333333]/80 text-lg leading-relaxed">
                Berdez S.A.S. (Bermudez Construction SAS) has established itself as a leading construction company in
                Bogotá, Colombia. Under the leadership of Sofía Alejandra Bermúdez Llanos, our company has grown into
                one of Colombia's most respected construction firms, known for our commitment to quality, innovation,
                and client satisfaction. As a Sociedad por Acciones Simplificada (S.A.S.), we bring over a decade of
                executive-level experience in both residential and commercial construction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {missionVision.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-lg shadow-lg border border-gray-100"
              >
                <div className="w-16 h-16 bg-[#2D5A3D]/10 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-[#2D5A3D]" />
                </div>
                <h3 className="font-display text-2xl text-[#333333] mb-4">{item.title}</h3>
                <p className="text-[#333333]/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-24 bg-[#F5F3EF]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl text-[#333333] mb-4"
            >
              Skilled Teams. Certified Professionals. Pride in Every Build.
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatSetsUsApart.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="w-14 h-14 bg-[#2D5A3D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[#2D5A3D]" />
                </div>
                <h3 className="font-display text-xl text-[#333333] mb-2">{item.title}</h3>
                <p className="text-[#333333]/70 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#A67C52] font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
              Our Foundation
            </span>
            <h2 className="font-display text-4xl text-[#333333] mb-4">Our Core Values</h2>
            <div className="w-16 h-1 bg-[#A67C52] mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-[#2D5A3D]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-[#2D5A3D]" />
                </div>
                <h3 className="font-display text-xl text-[#333333] mb-2">{value.title}</h3>
                <p className="text-[#333333]/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section - Modern Split Layout */}
      <section className="py-24 bg-[#F5F5F0]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch max-w-6xl mx-auto overflow-hidden rounded-lg shadow-xl">
            {/* LEFT SIDE - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] lg:h-auto min-h-[600px]"
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800"
                alt="Sofía Alejandra Bermúdez Llanos"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay on right edge */}
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white/20 to-transparent hidden lg:block" />
              {/* Subtle shadow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </motion.div>

            {/* RIGHT SIDE - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 lg:p-12 flex flex-col justify-center"
            >
              {/* Section Label */}
              <span className="text-[#A67C52] font-medium tracking-[0.2em] uppercase text-sm mb-4 block">
                Leadership
              </span>

              {/* Heading */}
              <h2 className="font-display text-3xl lg:text-4xl text-[#333333] mb-6">
                Meet Our Founder
              </h2>
              <div className="w-16 h-1 bg-[#A67C52] mb-8" />

              {/* Name & Title */}
              <h3 className="font-display text-2xl text-[#333333] mb-2">
                Sofía Alejandra Bermúdez Llanos
              </h3>
              <p className="text-[#A67C52] font-semibold text-lg mb-6">
                Founder & Manager
              </p>

              {/* Bio */}
              <p className="text-[#333333]/80 leading-relaxed mb-8">
                Sofía Alejandra Bermúdez Llanos is a goal-oriented executive with over 10 years of experience in the construction industry. As the Manager of Berdez S.A.S. in Bogotá, Colombia, she specializes in leading high-performance teams to deliver exceptional construction projects. A graduate of The Australian National University, Sofía combines international education with local expertise to drive organizational success in Colombia's competitive construction market.
              </p>

              {/* Education & Location with Icons */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#A67C52] flex-shrink-0" />
                  <span className="text-[#333333]/70">
                    <span className="font-medium text-[#333333]">Education:</span> The Australian National University
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Building className="w-5 h-5 text-[#A67C52] flex-shrink-0" />
                  <span className="text-[#333333]/70">
                    <span className="font-medium text-[#333333]">Location:</span> Bogotá, Distrito Capital, Colombia
                  </span>
                </div>
              </div>

              {/* LinkedIn Button */}
              <a
                href="https://co.linkedin.com/in/sofia-bermudez-6923311b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#2D5A3D] hover:text-[#A67C52] transition-colors font-medium w-fit"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-[#2D5A3D]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-white mb-4">10 Years Building Dreams</h2>
            <div className="w-16 h-1 bg-[#A67C52] mx-auto" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-5xl md:text-6xl text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
