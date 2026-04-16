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
  { title: "Discipline", desc: "Structure, consistency, and commitment in every session.", icon: Shield },
  { title: "Performance", desc: "Push limits, track progress, achieve measurable results.", icon: Zap },
  { title: "Mindset", desc: "Mental toughness, resilience, and a champion's attitude.", icon: Brain },
];

const StatCard = ({ label, value, suffix, icon: Icon }: { label: string; value: number; suffix: string; icon: typeof Users }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <Icon className="mx-auto mb-3 text-ace-gold" size={28} />
      <div className="text-4xl md:text-5xl font-heading font-black text-ace-gold mb-1">
        {count}{suffix}
      </div>
      <p className="text-ace-surface/70 text-sm">{label}</p>
    </div>
  );
};

const Philosophy = () => {
  const ref = useFadeIn();

  return (
    <section id="philosophy" className="py-20 bg-gradient-purple-dark">
      <div ref={ref} className="container mx-auto px-4 section-fade-in">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-2 text-ace-surface">
          ACE <span className="text-ace-gold">PHILOSOPHY</span>
        </h2>
        <p className="text-center text-ace-surface/70 italic mb-12">
          We Play. We Fight. We Ace.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {philosophy.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="text-center p-8 rounded-2xl bg-ace-surface/5 border border-ace-surface/10">
                <Icon className="mx-auto mb-4 text-ace-gold" size={36} />
                <h3 className="font-heading font-bold text-xl text-ace-surface mb-2">{item.title}</h3>
                <p className="text-ace-surface/60 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
