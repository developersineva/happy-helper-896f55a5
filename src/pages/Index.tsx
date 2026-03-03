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
  useDocumentTitle({ title: "Future Land Capital | Premium Construction in Florida", description: "Future Land Capital is South Florida's premier construction company, delivering luxury residential and commercial projects with over 10 years of expertise across Florida." });
  
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
