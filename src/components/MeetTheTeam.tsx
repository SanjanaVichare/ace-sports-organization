import { useFadeIn } from "@/hooks/useFadeIn";
import coachRohan from "@/assets/coach-rohan.jpg";
import coachSaddam from "@/assets/coach-saddam.jpg";
import coachAkash from "@/assets/coach-akash.jpg";

const team = [
  { name: "Rohan Rane", role: "Founder", image: coachRohan },
  { name: "Saddam Shaikh", role: "Head Coach", image: coachSaddam },
  { name: "Akash Dhurat", role: "Assistant Coach", image: coachAkash },
];

const MeetTheTeam = () => {
  const ref = useFadeIn();

  return (
    <section id="team" className="py-20 bg-ace-surface">
      <div ref={ref} className="container mx-auto px-4 section-fade-in">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left */}
          <div className="lg:w-[40%]">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-ace-text mb-4">
              Meet the <span className="text-ace-gold font-black">TEAM</span>
            </h2>
            <p className="text-ace-text-muted leading-relaxed mb-6">
              The minds behind your performance. Our experienced coaches bring passion, discipline, and deep sports expertise to every session.
            </p>
            <a href="#contact" className="inline-flex px-8 py-3 rounded-pill bg-ace-purple text-primary-foreground font-heading font-bold text-sm hover:opacity-90 transition-opacity">
              JOIN AS ATHLETE
            </a>
          </div>

          {/* Right — mosaic */}
          <div className="lg:w-[60%] grid grid-cols-2 gap-4">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`relative rounded-xl overflow-hidden group ${
                  i === 0 ? "row-span-2 h-80 md:h-[400px]" : "h-48 md:h-[192px]"
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(26,26,46,0.8)] to-transparent p-4">
                  <div className="border-b-2 border-ace-gold pb-2 inline-block">
                    <h3 className="font-heading font-bold text-ace-surface text-lg">{member.name}</h3>
                    <p className="text-ace-text-low text-sm">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
