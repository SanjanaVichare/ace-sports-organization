import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import footballImg from "@/assets/football.jpg";
import calisthenicsImg from "@/assets/calisthenics.jpg";
import cricketImg from "@/assets/cricket.jpg";
import archeryImg from "@/assets/archery.jpg";
import { Dribbble, Dumbbell, Target, Crosshair, LayoutGrid } from "lucide-react";

const sports = [
  { id: "all", label: "All Sports", icon: LayoutGrid },
  { id: "football", label: "Football", icon: Dribbble },
  { id: "calisthenics", label: "Calisthenics", icon: Dumbbell },
  { id: "cricket", label: "Cricket", icon: Target },
  { id: "archery", label: "Archery", icon: Crosshair },
];

const programs = [
  { sport: "football", title: "Football Fundamentals", level: "Beginner", sessions: "3x/week", image: footballImg, desc: "Build core football skills from dribbling to passing with structured drills." },
  { sport: "football", title: "Match Simulation Pro", level: "Advanced", sessions: "4x/week", image: footballImg, desc: "Game-realistic tactical training and position-specific development." },
  { sport: "calisthenics", title: "Bodyweight Basics", level: "Beginner", sessions: "3x/week", image: calisthenicsImg, desc: "Master foundational bodyweight movements and build functional strength." },
  { sport: "calisthenics", title: "Advanced Skills", level: "Advanced", sessions: "5x/week", image: calisthenicsImg, desc: "Progress to advanced holds, muscle-ups, and freestyle skills." },
  { sport: "cricket", title: "Batting Masterclass", level: "Intermediate", sessions: "3x/week", image: cricketImg, desc: "Technique refinement, shot selection, and match-situation batting." },
  { sport: "cricket", title: "All-Rounder Program", level: "Advanced", sessions: "4x/week", image: cricketImg, desc: "Complete cricket training — batting, bowling, fielding & fitness." },
  { sport: "archery", title: "Archery Foundations", level: "Beginner", sessions: "2x/week", image: archeryImg, desc: "Learn proper form, stance, and aiming techniques from scratch." },
  { sport: "archery", title: "Competitive Archery", level: "Advanced", sessions: "4x/week", image: archeryImg, desc: "Tournament preparation with precision drills and mental focus training." },
];

const Programs = () => {
  const [active, setActive] = useState("all");
  const ref = useFadeIn();

  const filtered = active === "all" ? programs : programs.filter((p) => p.sport === active);

  return (
    <section id="programs" className="py-20 bg-ace-surface">
      <div ref={ref} className="container mx-auto px-4 section-fade-in">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-2 text-ace-text">
          Our <span className="text-ace-purple">PROGRAMS</span>
        </h2>
        <p className="text-center text-ace-text-muted mb-10">
          Discipline-driven, performance-focused
        </p>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {sports.map((s) => {
            const Icon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                  active === s.id
                    ? "bg-ace-purple text-primary-foreground shadow-lg shadow-ace-purple/25"
                    : "bg-ace-surface border border-ace-purple/20 text-ace-text-muted hover:border-ace-purple/50 hover:text-ace-purple"
                }`}
              >
                <Icon size={16} />
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p, i) => (
            <div
              key={`${p.title}-${i}`}
              className="rounded-2xl overflow-hidden bg-ace-surface border border-border hover:shadow-xl hover:border-ace-purple/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="h-44 overflow-hidden relative">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-ace-surface/90 backdrop-blur-sm text-ace-purple text-xs font-bold">
                    {p.level}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-base text-ace-text">{p.title}</h3>
                </div>
                <p className="text-ace-text-muted text-sm leading-relaxed mb-4 line-clamp-2">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-ace-text-low text-xs font-medium">{p.sessions}</span>
                  <button className="px-5 py-2 rounded-pill bg-ace-gold text-ace-text font-heading font-bold text-xs hover:bg-ace-gold-bright transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
