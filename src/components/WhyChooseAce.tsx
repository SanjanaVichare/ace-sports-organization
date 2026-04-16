import { useFadeIn } from "@/hooks/useFadeIn";
import footballImg from "@/assets/football.jpg";
import calisthenicsImg from "@/assets/calisthenics.jpg";
import cricketImg from "@/assets/cricket.jpg";
import archeryImg from "@/assets/archery.jpg";

const WhyChooseAce = () => {
  const ref = useFadeIn();

  return (
    <section id="why-ace" className="py-20 bg-ace-bg-alt relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 800">
          <path d="M0,200 Q300,150 600,200 T1200,200" fill="none" stroke="hsl(270 48% 37%)" strokeWidth="2" />
          <path d="M0,400 Q300,350 600,400 T1200,400" fill="none" stroke="hsl(270 48% 37%)" strokeWidth="2" />
          <path d="M0,600 Q300,550 600,600 T1200,600" fill="none" stroke="hsl(270 48% 37%)" strokeWidth="2" />
        </svg>
      </div>

      <div ref={ref} className="container mx-auto px-4 section-fade-in">
        <div className="flex gap-4 justify-center mb-12 overflow-hidden">
          {[footballImg, calisthenicsImg, cricketImg, archeryImg].map((img, i) => (
            <div key={i} className="w-40 h-28 md:w-56 md:h-40 rounded-xl overflow-hidden shadow-lg -rotate-2 hover:rotate-0 transition-transform">
              <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-ace-gold italic text-sm mb-3 tracking-wider">
            One platform, multiple sports, Endless Possibilities
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ace-text mb-4">
            Why <span className="text-ace-purple font-black">CHOOSE</span> ACE
          </h2>
          <p className="text-ace-text-muted leading-relaxed mb-6">
            Discipline-driven training in Mumbai — football, calisthenics, cricket & archery for all ages and levels.
          </p>
          <a href="/about" className="inline-flex px-8 py-3 rounded-pill bg-ace-text text-ace-surface font-heading font-bold text-sm hover:opacity-90 transition-opacity">
            Know Who We Are →
          </a>
        </div>

        <div className="flex gap-4 justify-center overflow-hidden">
          {[archeryImg, footballImg, calisthenicsImg, cricketImg].map((img, i) => (
            <div key={i} className="w-40 h-28 md:w-56 md:h-40 rounded-xl overflow-hidden shadow-lg rotate-2 hover:rotate-0 transition-transform">
              <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAce;
