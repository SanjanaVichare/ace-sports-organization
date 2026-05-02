import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import footballImg from "@/assets/football.jpg";
import calisthenicsImg from "@/assets/calisthenics.jpg";
import cricketImg from "@/assets/cricket.jpg";
import archeryImg from "@/assets/archery.jpg";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Target, Dumbbell, Trophy, Crosshair } from "lucide-react";

const offerings = [
  {
    title: "ACEXI",
    image: footballImg,
    link: "/programs/football",
    desc: "Position-specific training & match simulation",
    icon: Trophy,
    details: [
      "Position-specific drills",
      "Tactical match simulation",
      "Strength & conditioning",
      "Video analysis sessions",
    ],
    tagline: "Train like a pro",
  },
  {
    title: "Cricket",
    image: cricketImg,
    link: "/programs/cricket",
    desc: "Batting, bowling & fielding technique",
    icon: Target,
    details: [
      "Batting technique & footwork",
      "Pace & spin bowling drills",
      "Fielding & catching circuits",
      "Match pressure simulation",
    ],
    tagline: "Precision every delivery",
  },
  {
    title: "CalFit",
    image: calisthenicsImg,
    link: "/programs/calisthenics",
    desc: "Bodyweight strength & progressive skills",
    icon: Dumbbell,
    details: [
      "Progressive skill tracks",
      "Muscle-up & handstand paths",
      "Core & mobility work",
      "Beginner to advanced levels",
    ],
    tagline: "Master your body",
  },
  {
    title: "Archery",
    image: archeryImg,
    link: "/programs/archery",
    desc: "Precision, focus & competitive marksmanship",
    icon: Crosshair,
    details: [
      "Form & stance fundamentals",
      "Mental focus training",
      "Distance progression",
      "Competition preparation",
    ],
    tagline: "Still the mind, hit the mark",
  },
];

const Offerings = () => {
  const ref = useFadeIn();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(null);

  return (
    <section id="offerings" className="pt-20 pb-10 bg-ace-bg-alt">
      <div ref={ref} className="container mx-auto px-4 section-fade-in">
        <h2
          className="font-black uppercase leading-[0.88]"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(2.8rem, 8vw, 5rem)",
            color: "#0B0612",
          }}
        >
          Our <span style={{ color: "#4B1FA7" }}>Programs</span>
        </h2><br></br>

        {/* ── Desktop: horizontal accordion ── */}
        <div className="hidden md:flex h-[500px] gap-2 rounded-2xl overflow-hidden">
          {offerings.map((sport, i) => {
            const Icon = sport.icon;
            const isActive = activeIndex === i;
            return (
              <Link
                key={sport.title}
                to={sport.link}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                className={`
                  relative overflow-hidden cursor-pointer block
                  transition-all duration-500 ease-in-out
                  ${isActive ? "flex-[4]" : "flex-[1]"}
                `}
              >
                {/* Image */}
                <img
                  src={sport.image}
                  alt={sport.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isActive ? "scale-105" : "scale-100"}`}
                  loading="lazy"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 transition-all duration-500 ${isActive
                    ? "bg-gradient-to-t from-[rgba(26,26,46,0.92)] via-[rgba(26,26,46,0.4)] to-[rgba(26,26,46,0.15)]"
                    : "bg-[rgba(26,26,46,0.65)]"
                    }`}
                />

                {/* Collapsed label — vertical text */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
                >
                  <span className="text-ace-surface font-heading font-bold text-base tracking-widest [writing-mode:vertical-rl] [text-orientation:mixed] rotate-180 select-none">
                    {sport.title}
                  </span>
                </div>

                {/* Expanded content */}
                <div
                  className={`absolute bottom-0 left-0 right-0 p-7 transition-all duration-500 ${isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={14} className="text-ace-gold" />
                    <span className="text-ace-gold text-xs font-semibold uppercase tracking-widest">
                      {sport.tagline}
                    </span>
                  </div>

                  <h3 className="text-3xl font-heading font-black text-ace-surface mb-2">
                    {sport.title}
                  </h3>
                  <p className="text-ace-surface/70 text-sm mb-5">{sport.desc}</p>

                  <ul className="space-y-1.5 mb-6">
                    {sport.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-ace-surface/80 text-sm">
                        <span className="w-1 h-1 rounded-full bg-ace-gold flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-ace-gold font-heading font-bold text-sm group/btn">
                    Explore Program
                    <ArrowRight size={15} className="transition-transform group-hover/btn:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ── Mobile: tap-to-expand cards ── */}
        <div className="flex flex-col gap-3 md:hidden">
          {offerings.map((sport, i) => {
            const Icon = sport.icon;
            const isOpen = mobileOpen === i;
            return (
              <div
                key={sport.title}
                className="rounded-xl overflow-hidden cursor-pointer"
                onClick={() => {
                  if (isOpen) {
                    navigate(sport.link);
                  } else {
                    setMobileOpen(i);
                  }
                }}
              >
                {/* Card header — always visible */}
                <div className="relative h-[100px] flex items-end">
                  <img
                    src={sport.image}
                    alt={sport.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${isOpen ? "scale-105" : "scale-100"
                      }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,26,46,0.85)] to-[rgba(26,26,46,0.3)]" />
                  <div className="relative z-10 flex items-center justify-between w-full px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-ace-gold/20 border border-ace-gold/40 flex items-center justify-center flex-shrink-0">
                        <Icon size={14} className="text-ace-gold" />
                      </div>
                      <div>
                        <h3 className="text-ace-surface font-heading font-bold text-lg leading-tight">
                          {sport.title}
                        </h3>
                        <p className="text-ace-surface/60 text-xs">{sport.desc}</p>
                      </div>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-full border border-ace-surface/30 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-90" : ""
                        }`}
                    >
                      <ArrowRight size={12} className="text-ace-surface" />
                    </div>
                  </div>
                </div>

                {/* Expandable detail panel */}
                <div
                  className={`bg-[rgba(26,26,46,0.97)] overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="px-4 py-4">
                    <p className="text-ace-gold text-xs font-semibold uppercase tracking-widest mb-3">
                      {sport.tagline}
                    </p>
                    <ul className="space-y-2 mb-4">
                      {sport.details.map((d) => (
                        <li key={d} className="flex items-center gap-2.5 text-ace-surface/80 text-sm">
                          <span className="w-1 h-1 rounded-full bg-ace-gold flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-1.5 text-ace-gold font-heading font-bold text-sm">
                      Explore {sport.title} <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offerings;