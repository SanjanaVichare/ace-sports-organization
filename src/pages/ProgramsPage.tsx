import Layout from "@/components/Layout";
import Programs from "@/components/Programs";
import SchoolBanner from "@/components/SchoolBanner";

const ProgramsPage = () => {
  return (
    <Layout>
      <div className="pt-20" />
      <Programs />
      <SchoolBanner />
    </Layout>
  );
};

export default ProgramsPage;
