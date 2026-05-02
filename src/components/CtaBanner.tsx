import { useFadeIn } from "@/hooks/useFadeIn";
import { Phone, Mail, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-bg.png";

const CONTACT_ITEMS = [
  { icon: Phone, label: "Call", value: "+91 80972 55129", href: "tel:+918097255129" },
  { icon: Mail, label: "Email", value: "acexi.official@gmail.com", href: "mailto:acexi.official@gmail.com" },
  { icon: MapPin, label: "Location", value: "Kanjurmarg East, Mumbai", href: "https://maps.google.com/?q=Kanjurmarg+East+Mumbai" },
];

const STATS = [
  { value: "500+", label: "Athletes Trained" },
  { value: "4", label: "Sports Programs" },
  { value: "5★", label: "Rated Coaches" },
];

const CtaBanner = () => {
  const ref = useFadeIn();

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-purple-dark py-16 lg:py-24">

      {/* Gold dot pattern */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: "radial-gradient(circle, hsl(43 69% 52%) 1.5px, transparent 1.5px)",
        backgroundSize: "20px 20px",
      }} />

      {/* Ambient glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-ace-purple/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-ace-gold/10 blur-3xl pointer-events-none" />

      <div ref={ref} className="relative container mx-auto px-4 section-fade-in">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* ── LEFT: image + stats ── */}
          <div className="w-full lg:w-[45%]">

            {/* Image */}
            <div className="relative">
              {/* Gold accent border */}
              <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-ace-gold/60 via-transparent to-ace-purple/60" />
              <img
                src={heroImg}
                alt="Athletes training at ACE Sports"
                className="relative rounded-2xl w-full h-56 sm:h-72 lg:h-80 object-cover"
                loading="lazy"
              />
            </div>

            {/* Stats strip */}
            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl bg-white/5 border border-white/10 px-3 py-3 text-center"
                >
                  <p className="font-heading font-black text-xl sm:text-2xl text-ace-gold">{s.value}</p>
                  <p className="text-ace-surface/60 text-[11px] sm:text-xs mt-0.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: content ── */}
          <div className="w-full lg:w-[55%]">

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-heading font-black text-ace-surface leading-tight mb-4">
              Start Your <br className="hidden sm:block" />
              <span className="text-ace-gold">Sports Journey</span>
            </h2>

            <p className="text-ace-surface/70 leading-relaxed mb-8 text-sm sm:text-base max-w-lg">
              Whether you're a beginner or a competitive athlete, ACE Sports has the right program for you.
              Join hundreds of athletes training across Mumbai.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="https://wa.me/918097255129"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-pill bg-ace-whatsapp text-white font-heading font-bold text-sm hover:opacity-90 transition-opacity active:scale-95"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
              <a
                href="tel:+918097255129"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-pill border-2 border-ace-gold text-ace-gold font-heading font-bold text-sm hover:bg-ace-gold hover:text-ace-text transition-colors active:scale-95"
              >
                <Phone size={16} />
                Call Now
              </a>
              <a
                href="#programs"
                className="flex items-center justify-center gap-1.5 px-7 py-3.5 rounded-pill bg-white/5 border border-white/15 text-ace-surface font-heading font-semibold text-sm hover:bg-white/10 transition-colors active:scale-95"
              >
                View Programs
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Contact info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-3 py-3 hover:bg-white/10 hover:border-ace-gold/30 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-ace-gold/15 flex items-center justify-center flex-shrink-0 group-hover:bg-ace-gold/25 transition-colors">
                    <Icon size={14} className="text-ace-gold" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-ace-surface/40 text-[10px] uppercase tracking-wider font-semibold">{label}</p>
                    <p className="text-ace-surface/80 text-xs font-medium truncate">{value}</p>
                  </div>
                </a>
              ))}
            </div>

          </div >
        </div >
      </div >
    </section >
  );
};

export default CtaBanner;