import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Offerings from "@/components/Offerings";
import WhyChooseAce from "@/components/WhyChooseAce";
import CtaBanner from "@/components/CtaBanner";
import OurTeam from "@/components/OurTeam";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Offerings />
      <WhyChooseAce />
      <OurTeam />
      <CtaBanner />
    </Layout>
  );
};

export default Index;
