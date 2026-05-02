import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Offerings from "@/components/Offerings";
import WhyChooseAce from "@/components/WhyChooseAce";
import CtaBanner from "@/components/CtaBanner";
import OurTeam from "@/components/OutTeam";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Offerings />
      <WhyChooseAce />
      <CtaBanner />
      <OurTeam />
    </Layout>
  );
};

export default Index;
