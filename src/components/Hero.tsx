import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <img
        src={heroBg}
        alt="Athletes training on the field"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(26,26,46,0.4)] to-[rgba(26,26,46,0.75)]" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="font-heading font-black text-[140px] md:text-[220px] text-ace-surface opacity-[0.06] select-none tracking-widest">
          ACE
        </span>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-purple flex items-center justify-center">
          <span className="font-heading font-black text-2xl text-ace-gold">A</span>
        </div>

        <p className="text-ace-gold font-body italic text-lg mb-4 tracking-wide">
          We Play. We Fight. We Ace.
        </p>

        <h1 className="font-heading text-5xl md:text-7xl leading-tight mb-8">
          <span className="text-ace-surface font-light">Building</span>
          <br />
          <span className="text-ace-gold font-black">CHAMPIONS</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/programs"
            className="px-8 py-3.5 rounded-pill border-2 border-ace-purple text-ace-surface font-heading font-semibold text-sm hover:bg-ace-purple transition-colors"
          >
            Explore Programs
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3.5 rounded-pill bg-ace-gold text-ace-text font-heading font-bold text-sm hover:bg-ace-gold-bright transition-colors"
          >
            Join Now
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-indicator">
        <ChevronDown className="text-ace-surface" size={32} />
      </div>
    </section>
  );
};

export default Hero;
