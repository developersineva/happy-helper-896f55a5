import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/home/CTABanner";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Introduction />
      <FeaturedProjects />
      <Stats />
      <Testimonials />
      <CTABanner />
    </Layout>
  );
};

export default Index;
