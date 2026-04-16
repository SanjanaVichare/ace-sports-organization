import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingUI from "@/components/FloatingUI";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
      <Footer />
      <FloatingUI />
    </div>
  );
};

export default Layout;
