import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { TrustBadges } from "@/components/home/TrustBadges";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { VisionToReality } from "@/components/home/VisionToReality";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Testimonials } from "@/components/home/Testimonials";
import { Stats } from "@/components/home/Stats";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

const Index = () => {
  useDocumentTitle({ title: "Future Land Capital | Premium Construction in Colombia", description: "Future Land Capital is Bogotá's premier construction company, delivering luxury residential and commercial projects with over 10 years of expertise across Colombia." });
  
  return (
    <Layout>
      <Hero />
      <TrustBadges />
      <WhyChooseUs />
      <VisionToReality />
      <FeaturedProjects />
      <Testimonials />
      <Stats />
    </Layout>
  );
};

export default Index;
