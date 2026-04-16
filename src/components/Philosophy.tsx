import { useFadeIn } from "@/hooks/useFadeIn";
import { useCountUp } from "@/hooks/useCountUp";
import { Shield, Zap, Brain, Users, Trophy, Clock, Target } from "lucide-react";

const stats = [
  { label: "Athletes Trained", value: 500, suffix: "+", icon: Users },
  { label: "Sports Offered", value: 4, suffix: "", icon: Trophy },
  { label: "Years Active", value: 4, suffix: "+", icon: Clock },
  { label: "Sessions Completed", value: 2000, suffix: "+", icon: Target },
];

const philosophy = [
  {
    title: "Discipline",
    desc: "Structure, consistency, and commitment in every session.",
    icon: Shield,
    tagline: "Show up every day",
  },
  {
    title: "Performance",
    desc: "Push limits, track progress, achieve measurable results.",
    icon: Zap,
    tagline: "Exceed your ceiling",
  },
  {
    title: "Mindset",
    desc: "Mental toughness, resilience, and a champion's attitude.",
    icon: Brain,
    tagline: "Think like a champion",
  },
];

const StatCard = ({
  label,
  value,
  suffix,
  icon: Icon,
}: {
  label: string;
  value: number;
  suffix: string;
  icon: typeof Users;
}) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="flex flex-col items-center text-center rounded-2xl bg-white/5 border border-white/10 px-3 py-5 sm:py-6">
      <div className="w-10 h-10 rounded-xl bg-ace-gold/15 flex items-center justify-center mb-3">
        <Icon className="text-ace-gold" size={20} />
      </div>
      <div className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-ace-gold leading-none mb-1">
        {count}{suffix}
      </div>
      <p className="text-ace-surface/60 text-xs sm:text-sm mt-1 leading-tight">{label}</p>
    </div>
  );
};

const Philosophy = () => {
  const ref = useFadeIn();

  return (
    <section id="philosophy" className="relative py-16 lg:py-24 bg-gradient-purple-dark overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-ace-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-ace-purple/20 blur-3xl pointer-events-none" />

      <div ref={ref} className="relative container mx-auto px-4 section-fade-in">

        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-ace-surface mb-2">
            ACE <span className="text-ace-gold">PHILOSOPHY</span>
          </h2>
          <p className="text-ace-surface/50 italic text-sm sm:text-base">
            We Play. We Fight. We Ace.
          </p>
        </div>

        {/* Stats grid — 2×2 on mobile, 4-col on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 lg:mb-14">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10 lg:mb-14">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-ace-gold/50 text-xs uppercase tracking-widest font-semibold">Built on three pillars</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Philosophy cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {philosophy.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 hover:bg-white/8 hover:border-ace-gold/30 transition-all duration-300 overflow-hidden"
              >
                {/* Large faded number */}
                <span className="absolute top-3 right-4 font-heading font-black text-[5rem] leading-none text-white/[0.03] select-none pointer-events-none">
                  {i + 1}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-ace-gold/15 flex items-center justify-center mb-5 group-hover:bg-ace-gold/25 transition-colors">
                  <Icon className="text-ace-gold" size={22} />
                </div>

                {/* Tagline */}
                <p className="text-ace-gold/70 font-heading font-semibold text-xs uppercase tracking-widest mb-2">
                  {item.tagline}
                </p>

                <h3 className="font-heading font-black text-xl sm:text-2xl text-ace-surface mb-2">
                  {item.title}
                </h3>
                <p className="text-ace-surface/55 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Bottom accent line — appears on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-ace-gold/0 via-ace-gold/60 to-ace-gold/0 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Philosophy;