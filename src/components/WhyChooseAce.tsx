import { useRef, useEffect, useState } from "react";

const SERVICES = [
  {
    num: "01",
    tag: "Expert · Sports-First",
    name: "Sports-Dedicated Management",
    desc: "Every decision is rooted in sport. Our team understands the rhythm of athletes, seasons, and competition — so your programme is always in expert hands.",
    color: "#F5C842",
    dark: "#0B0612",
  },
  {
    num: "02",
    tag: "Structured · End-to-End",
    name: "Professional Management",
    desc: "From scheduling and logistics to athlete welfare and compliance — we operate with the precision of a top-tier organisation. Nothing falls through the cracks.",
    color: "#632082",
    dark: "#fff",
  },
  {
    num: "03",
    tag: "Content · Coverage",
    name: "Specialised Media Team",
    desc: "From match-day coverage to brand storytelling, we capture narratives that elevate athletes and academies — built for real reach and engagement.",
    color: "#1A1A2E",
    dark: "#fff",
  },
  {
    num: "04",
    tag: "Revenue · Growth",
    name: "Specialised Sales Team",
    desc: "Sponsorships, memberships, merchandise — our dedicated sports-market sales force converts every opportunity into measurable revenue for your academy.",
    color: "#F5C842",
    dark: "#0B0612",
  },
  {
    num: "05",
    tag: "Digital · Custom-Built",
    name: "Web & Product Development",
    desc: "Custom-built digital products for sports ecosystems — portals, registration platforms, performance dashboards, and fan-facing apps that actually work.",
    color: "#622778",
    dark: "#fff",
  },
  {
    num: "06",
    tag: "Transparent · No Hidden Fees",
    name: "Best Rates in Market",
    desc: "Premium service at competitive prices. No hidden fees, no compromises. Transparent pricing that delivers maximum value for every rupee you invest.",
    color: "#1A1A2E",
    dark: "#fff",
  },
];

const ServiceCard = ({
  s,
  i,
  inView,
}: {
  s: (typeof SERVICES)[0];
  i: number;
  inView: boolean;
}) => {
  const [active, setActive] = useState(false);
  const isDark = s.dark === "#0B0612";

  const handleTouchStart = () => setActive(true);
  const handleTouchEnd = () => setTimeout(() => setActive(false), 220);
  const handleTouchCancel = () => setActive(false);

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col relative"
      style={{
        background: s.color,
        minHeight: "clamp(280px, 40vw, 340px)",
        opacity: inView ? 1 : 0,
        transform: inView
          ? active
            ? "scale(0.965) translateY(3px)"
            : "scale(1) translateY(0)"
          : "translateY(48px) scale(0.97)",
        transition: inView
          ? `transform 0.32s cubic-bezier(0.34, 1.4, 0.64, 1), box-shadow 0.32s ease, opacity 0.7s ease ${i * 120}ms`
          : `opacity 0.7s ease ${i * 120}ms, transform 0.7s ease ${i * 120}ms`,
        boxShadow: active
          ? "0 2px 10px rgba(0,0,0,0.15)"
          : "0 6px 24px rgba(0,0,0,0.07)",
        WebkitTapHighlightColor: "transparent",
        userSelect: "none",
        cursor: "pointer",
        willChange: "transform",
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
    >
      {/* Shine ripple on press */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: active
            ? isDark
              ? "rgba(255,255,255,0.07)"
              : "rgba(255,255,255,0.09)"
            : "transparent",
          transition: "background 0.2s ease",
        }}
      />

      <div className="relative p-6 lg:p-8 flex flex-col flex-1">
        {/* Number + tag row */}
        <div className="flex items-start justify-between mb-5">
          <span
            className="font-black leading-none select-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3.2rem, 9vw, 5rem)",
              color: isDark ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
            }}
          >
            {s.num}
          </span>
          <span
            className="text-[9px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full mt-2 whitespace-nowrap"
            style={{
              color: isDark ? "#0B0612" : "#F5C842",
              background: isDark
                ? "rgba(0,0,0,0.12)"
                : "rgba(245,200,66,0.15)",
            }}
          >
            {s.tag}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-black uppercase leading-[0.9] mb-3"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(1.75rem, 5vw, 2.6rem)",
            color: s.dark,
            letterSpacing: active ? "0.025em" : "0em",
            transition: "letter-spacing 0.3s ease",
          }}
        >
          {s.name}
        </h3>

        {/* Animated underline */}
        <div
          style={{
            height: "1.5px",
            marginBottom: "12px",
            background: isDark
              ? "rgba(0,0,0,0.18)"
              : "rgba(255,255,255,0.22)",
            width: active ? "100%" : "36%",
            transition: "width 0.45s cubic-bezier(0.34, 1.4, 0.64, 1)",
          }}
        />

        {/* Description */}
        <p
          className="text-sm font-light leading-relaxed flex-1"
          style={{
            color: isDark
              ? "rgba(0,0,0,0.55)"
              : "rgba(255,255,255,0.65)",
          }}
        >
          {s.desc}
        </p>

        {/* "Learn more" cue — slides in on touch/hover */}
        <div
          className="flex items-center gap-1.5 mt-4"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "translateX(0)" : "translateX(-10px)",
            transition: "opacity 0.28s ease, transform 0.28s ease",
          }}
        >
          <span
            className="text-[10px] font-bold tracking-widest uppercase"
            style={{ color: isDark ? "#0B0612" : "#F5C842" }}
          >
            Learn more
          </span>
          <svg
            width="13"
            height="13"
            viewBox="0 0 14 14"
            fill="none"
            style={{ color: isDark ? "#0B0612" : "#F5C842" }}
          >
            <path
              d="M1 7h12M8 2l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const WhyChooseAce = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-ace"
      className="py-14 lg:py-24 px-4 sm:px-6 lg:px-16"
      style={{ background: "#F5F4FF" }}
    >
      {/* Header */}
      <div className="text-center mb-8 lg:mb-14">
        <p
          className="text-[10px] font-bold tracking-[0.28em] uppercase mb-3"
          style={{ color: "#4B1FA7" }}
        >
          What sets us apart
        </p>
        <h2
          className="font-black uppercase leading-[0.88]"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(2.8rem, 8vw, 5rem)",
            color: "#0B0612",
          }}
        >
          Why <span style={{ color: "#4B1FA7" }}>Choose</span> ACE
        </h2>
      </div>

      {/* Grid: 1 col → 2 col (sm) → 3 col (lg) */}
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5"
      >
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.num} s={s} i={i} inView={inView} />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseAce;