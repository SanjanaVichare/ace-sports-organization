import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Offerings from "@/components/Offerings";
import WhyChooseAce from "@/components/WhyChooseAce";
import CtaBanner from "@/components/CtaBanner";
import OurTeam from "@/components/OurTeam";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <Layout>
      <ScrollToTop />
      <Hero />
      <Offerings />
      <WhyChooseAce />
      <OurTeam />
      <CtaBanner />
    </Layout>
  );
};

export default Index;