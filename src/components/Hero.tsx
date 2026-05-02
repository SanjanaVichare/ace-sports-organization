import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.png";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <img
        src={heroBg}
        alt="Athletes training on the field"
        className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(26,26,46,0.4)] to-[rgba(26,26,46,0.75)]" />

    </section>
  );
};
export default Hero;