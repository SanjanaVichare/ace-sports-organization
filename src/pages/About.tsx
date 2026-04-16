import Layout from "@/components/Layout";
import WhyChooseAce from "@/components/WhyChooseAce";
import Philosophy from "@/components/Philosophy";
import AcademyForAll from "@/components/AcademyForAll";
import MeetTheTeam from "@/components/MeetTheTeam";

const About = () => {
  return (
    <Layout>
      <div className="pt-20" />
      <WhyChooseAce />
      <Philosophy />
      <AcademyForAll />
      <MeetTheTeam />
    </Layout>
  );
};

export default About;
