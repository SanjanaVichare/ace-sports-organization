import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { GraduationCap, Trophy, Heart, Star } from "lucide-react";

const tabs = [
  {
    id: "school",
    label: "School Students",
    icon: GraduationCap,
    features: [
      "Age-appropriate sports fundamentals",
      "After-school structured programs",
      "Focus on teamwork & discipline",
      "Safe, supervised training environment",
    ],
  },
  {
    id: "college",
    label: "College Athletes",
    icon: Trophy,
    features: [
      "Competitive inter-college preparation",
      "Advanced tactical training",
      "Position-specific skill development",
      "Performance analytics & feedback",
    ],
  },
  {
    id: "fitness",
    label: "Fitness Enthusiasts",
    icon: Heart,
    features: [
      "Calisthenics & bodyweight mastery",
      "Flexible scheduling options",
      "Progressive difficulty levels",
      "Strength, mobility & endurance",
    ],
  },
  {
    id: "beginners",
    label: "Beginners",
    icon: Star,
    features: [
      "Zero experience welcome",
      "Patient, step-by-step coaching",
      "Build confidence through sport",
      "Discover your best sport fit",
    ],
  },
];

const AcademyForAll = () => {
  const [active, setActive] = useState("school");
  const ref = useFadeIn();
  const activeTab = tabs.find((t) => t.id === active)!;

  return (
    <section className="py-20 bg-ace-surface">
      <div ref={ref} className="container mx-auto px-4 section-fade-in">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-2 text-ace-text">
          One Academy <span className="text-ace-gold font-black">FOR ALL</span>
        </h2>
        <p className="text-center text-ace-text-muted mb-10">Train, grow, perform</p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  active === tab.id
                    ? "bg-ace-text text-ace-surface border-2 border-ace-gold"
                    : "bg-ace-surface border border-border text-ace-text-muted hover:border-ace-purple/30"
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="max-w-lg mx-auto bg-ace-bg-alt rounded-2xl p-8 border border-border">
          <div className="space-y-4">
            {activeTab.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-ace-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-ace-gold" />
                </div>
                <p className="text-ace-text leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademyForAll;
