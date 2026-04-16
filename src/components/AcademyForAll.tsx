import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { GraduationCap, Trophy, Heart, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const tabs = [
  {
    id: "school",
    label: "School Students",
    shortLabel: "School",
    icon: GraduationCap,
    tagline: "Build the foundation early",
    desc: "Sport starts with the right basics. Our school programs build discipline, teamwork, and a love for sport in a safe environment.",
    features: [
      "Age-appropriate sports fundamentals",
      "After-school structured programs",
      "Focus on teamwork & discipline",
      "Safe, supervised training environment",
    ],
    accentColor: "from-blue-500/20 to-transparent",
  },
  {
    id: "college",
    label: "College Athletes",
    shortLabel: "College",
    icon: Trophy,
    tagline: "Compete at the next level",
    desc: "Sharpen your edge with advanced tactical training, analytics, and position-specific coaching designed for competitive play.",
    features: [
      "Competitive inter-college preparation",
      "Advanced tactical training",
      "Position-specific skill development",
      "Performance analytics & feedback",
    ],
    accentColor: "from-ace-gold/20 to-transparent",
  },
  {
    id: "fitness",
    label: "Fitness Enthusiasts",
    shortLabel: "Fitness",
    icon: Heart,
    tagline: "Master your body",
    desc: "From beginner calisthenics to advanced bodyweight skills — train at your own pace with structured, progressive programming.",
    features: [
      "Calisthenics & bodyweight mastery",
      "Flexible scheduling options",
      "Progressive difficulty levels",
      "Strength, mobility & endurance",
    ],
    accentColor: "from-rose-500/20 to-transparent",
  },
  {
    id: "beginners",
    label: "Beginners",
    shortLabel: "Beginners",
    icon: Star,
    tagline: "Everyone starts somewhere",
    desc: "No experience? No problem. Our coaches meet you exactly where you are and help you discover the sport that fits you best.",
    features: [
      "Zero experience welcome",
      "Patient, step-by-step coaching",
      "Build confidence through sport",
      "Discover your best sport fit",
    ],
    accentColor: "from-emerald-500/20 to-transparent",
  },
];

const AcademyForAll = () => {
  const [active, setActive] = useState("school");
  const ref = useFadeIn();
  const activeTab = tabs.find((t) => t.id === active)!;
  const Icon = activeTab.icon;

  return (
    <section className="relative py-16 lg:py-24 bg-ace-surface overflow-hidden">

      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div ref={ref} className="relative container mx-auto px-4 section-fade-in">

        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-ace-text mb-2">
            One Academy <span className="text-ace-gold">FOR ALL</span>
          </h2>
        </div>

        {/* ── Tab bar ──
            Desktop: pill row   |   Mobile: 2×2 icon grid */}

        {/* Desktop tabs */}
        <div className="hidden sm:flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-heading font-semibold transition-all duration-200 active:scale-95 ${isActive
                  ? "bg-ace-text text-ace-surface border-2 border-ace-gold shadow-md"
                  : "bg-transparent border border-border text-ace-text-muted hover:border-ace-purple/40 hover:text-ace-text"
                  }`}
              >
                <TabIcon size={15} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Mobile tabs — 2×2 grid of icon cards */}
        <div className="grid grid-cols-2 gap-2.5 sm:hidden mb-8">
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex flex-col items-center gap-1.5 rounded-2xl border py-4 px-3 transition-all duration-200 active:scale-95 ${isActive
                  ? "bg-ace-text border-ace-gold text-ace-surface shadow-md"
                  : "bg-ace-bg-alt border-border text-ace-text-muted"
                  }`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${isActive ? "bg-ace-gold/20" : "bg-border/40"
                  }`}>
                  <TabIcon size={18} className={isActive ? "text-ace-gold" : "text-ace-text-muted"} />
                </div>
                <span className="font-heading font-bold text-xs text-center leading-tight">
                  {tab.shortLabel}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Content card ── */}
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-2xl bg-ace-bg-alt border border-border overflow-hidden">

            {/* Gradient accent top */}
            <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${activeTab.accentColor} pointer-events-none`} />

            <div className="relative p-6 sm:p-8">

              {/* Card header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-ace-text/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="text-ace-gold" size={22} />
                </div>
                <div>
                  <p className="text-ace-gold font-heading font-semibold text-xs uppercase tracking-widest mb-0.5">
                    {activeTab.tagline}
                  </p>
                  <h3 className="font-heading font-black text-xl sm:text-2xl text-ace-text">
                    {activeTab.label}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-ace-text-muted text-sm leading-relaxed mb-6 border-l-2 border-ace-gold/30 pl-4">
                {activeTab.desc}
              </p>

              {/* Feature list */}
              <div className="space-y-3 mb-7">
                {activeTab.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-ace-gold/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-ace-gold" />
                    </div>
                    <p className="text-ace-text text-sm leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-ace-text text-ace-surface font-heading font-bold text-sm hover:opacity-90 transition-opacity active:scale-95"
              >
                Get Started
                <ArrowRight size={15} />
              </Link>

            </div>
          </div>

          {/* Tab progress dots — mobile only */}
          <div className="flex justify-center gap-1.5 mt-4 sm:hidden">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`rounded-full transition-all duration-300 ${active === tab.id
                  ? "w-5 h-1.5 bg-ace-gold"
                  : "w-1.5 h-1.5 bg-border"
                  }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section >
  );
};

export default AcademyForAll;