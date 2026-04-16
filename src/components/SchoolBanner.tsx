import { useFadeIn } from "@/hooks/useFadeIn";
import schoolImg from "@/assets/school-coaching.jpg";

const SchoolBanner = () => {
  const ref = useFadeIn();

  return (
    <section ref={ref} className="section-fade-in relative overflow-hidden bg-gradient-purple py-20">
      {/* Gold dot pattern */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "radial-gradient(circle, hsl(43 69% 52%) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-ace-surface mb-4">
            SCHOOL & COLLEGE <span className="text-ace-gold">COACHING</span>
          </h2>
          <p className="text-ace-surface/80 text-lg leading-relaxed mb-6">
            From PE fundamentals to competitive inter-college training. We bring structured, sport-specific coaching directly to educational institutions.
          </p>
          <a href="#contact" className="inline-flex px-8 py-3 rounded-pill bg-ace-gold text-ace-text font-heading font-bold text-sm hover:bg-ace-gold-bright transition-colors">
            Learn More →
          </a>
        </div>
        <div className="lg:w-1/2 relative">
          <img
            src={schoolImg}
            alt="School coaching session"
            className="rounded-xl shadow-2xl w-full object-cover h-64 lg:h-80"
            loading="lazy"
            width={1200}
            height={600}
          />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl bg-ace-gold/20 -z-10" />
        </div>
      </div>
    </section>
  );
};

export default SchoolBanner;
