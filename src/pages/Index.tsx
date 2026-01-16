import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { TrustBadges } from "@/components/home/TrustBadges";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { VisionToReality } from "@/components/home/VisionToReality";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Testimonials } from "@/components/home/Testimonials";
import { Stats } from "@/components/home/Stats";
import { CTABanner } from "@/components/home/CTABanner";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TrustBadges />
      <WhyChooseUs />
      <VisionToReality />
      <FeaturedProjects />
      <Testimonials />
      <Stats />
      <CTABanner />
    </Layout>
  );
};

export default Index;
