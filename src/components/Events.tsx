import { useFadeIn } from "@/hooks/useFadeIn";
import eventImg from "@/assets/event-workshop.jpg";
import galleryImg from "@/assets/gallery-1.jpg";
import { CalendarDays, MapPin } from "lucide-react";

const events = [
  { title: "Summer Skill Camp", date: "July 2025", location: "Kanjurmarg, Mumbai", image: eventImg, desc: "Intensive 2-week multi-sport skill development camp for all ages." },
  { title: "Inter-Academy Tournament", date: "August 2025", location: "Mumbai Ground", image: galleryImg, desc: "Compete against top academies in football, cricket & calisthenics events." },
  { title: "Fitness Workshop", date: "September 2025", location: "Kanjurmarg, Mumbai", image: eventImg, desc: "Full-day workshop on strength, mobility, and athletic performance." },
];

const Events = () => {
  const ref = useFadeIn();

  return (
    <section id="events" className="py-20 bg-ace-bg-alt">
      <div ref={ref} className="container mx-auto px-4 section-fade-in">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-2 text-ace-text">
          EVENTS & <span className="text-ace-purple">WORKSHOPS</span>
        </h2>
        <p className="text-center text-ace-text-muted mb-10">
          Skill camps, tournament prep, and intensive training programs
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="rounded-xl overflow-hidden bg-ace-surface-soft border border-transparent hover:border-ace-purple/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-lg text-ace-text mb-2">{event.title}</h3>
                <div className="flex items-center gap-4 text-xs text-ace-text-low mb-3">
                  <span className="flex items-center gap-1"><CalendarDays size={14} /> {event.date}</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {event.location}</span>
                </div>
                <p className="text-ace-text-muted text-sm mb-4">{event.desc}</p>
                <button className="text-ace-gold font-semibold text-sm hover:underline">
                  Register →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
