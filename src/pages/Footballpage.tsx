import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── HOOKS ────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setInView(true); obs.unobserve(el); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return { ref, inView };
}

function useCountUp(target: number, active: boolean) {
    const [n, setN] = useState(0);
    useEffect(() => {
        if (!active) return;
        let v = 0;
        const step = Math.ceil(target / 40);
        const t = setInterval(() => {
            v = Math.min(v + step, target);
            setN(v);
            if (v >= target) clearInterval(t);
        }, 40);
        return () => clearInterval(t);
    }, [active, target]);
    return n;
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
// Desktop: Left half = text content, Right half = diagonal purple/yellow slash
// Mobile: Full width stacked

function Hero() {
    const [tick, setTick] = useState(0);
    const words = ["PRO.", "ACE.", "WIN."];
    useEffect(() => {
        const t = setInterval(() => setTick(c => c + 1), 2200);
        return () => clearInterval(t);
    }, []);

    return (
        <section className="relative min-h-screen bg-[#0B0612] overflow-hidden flex flex-col">
            {/* Ghost XI — desktop only, positioned right */}
            <span
                className="hidden lg:block absolute right-[-0.05em] top-1/2 -translate-y-1/2 font-black text-[28vw] leading-none text-white/[0.03] select-none pointer-events-none z-0"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
                XI
            </span>

            {/* Diagonal slash — desktop: right 45%, mobile: bottom strip */}
            <div
                className="absolute top-0 right-0 h-full bg-[#F5C842]"
                style={{
                    width: "clamp(0px, 44vw, 700px)",
                    clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
            />
            <div
                className="absolute top-0 right-0 h-full bg-[#4B1FA7] opacity-85"
                style={{
                    width: "clamp(0px, 44vw, 700px)",
                    clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)",
                }}
            />

            {/* Nav bar inside hero (mobile mini-nav, desktop hidden since Navbar handles it) */}
            <div className="relative z-10 flex items-center justify-between px-6 lg:px-16 pt-8 lg:pt-10">
                <div className="flex items-center gap-2 lg:hidden">
                    <div className="w-7 h-7 rounded-full bg-[#F5C842] flex items-center justify-center">
                        <span className="text-[#0B0612] font-black text-xs" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>A</span>
                    </div>
                    <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase font-light">ACE XI Football</span>
                </div>
                <div className="hidden lg:block" />
                <Link
                    to="/contact"
                    className="lg:hidden flex items-center gap-1.5 text-[#F5C842] text-[10px] font-bold tracking-[0.16em] uppercase border border-[#F5C842]/40 rounded-full px-4 py-2"
                >
                    Join <ArrowUpRight size={11} />
                </Link>
            </div>

            {/* Main content */}
            <div className="relative z-10 flex-1 flex flex-col justify-center px-6 lg:px-16 mt-4 lg:mt-0 max-w-[55%] lg:max-w-[52%]">
                <p className="text-[#F5C842] text-[9px] lg:text-[11px] font-bold tracking-[0.22em] uppercase mb-4 lg:mb-6">
                    ⚽ Mumbai's Elite Football Academy
                </p>

                <h1
                    className="font-black text-white leading-[0.88] uppercase mb-1"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3.8rem, 10vw, 8.5rem)", letterSpacing: "-0.01em" }}
                >
                    TRAIN
                </h1>
                <h1
                    className="font-black text-white leading-[0.88] uppercase mb-1"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3.8rem, 10vw, 8.5rem)", letterSpacing: "-0.01em" }}
                >
                    LIKE A
                </h1>
                <h1
                    className="font-black leading-[0.88] uppercase mb-8 lg:mb-12 transition-all duration-500"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3.8rem, 10vw, 8.5rem)", letterSpacing: "-0.01em", color: "#F5C842" }}
                >
                    {words[tick % words.length]}
                </h1>

                <div className="flex items-center gap-4 lg:gap-6">
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-[#F5C842] text-[#0B0612] font-black uppercase px-6 lg:px-8 py-3.5 lg:py-4 rounded-full"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.12em", fontSize: "clamp(0.75rem, 1.1vw, 1rem)" }}
                    >
                        Join Now <ChevronRight size={14} />
                    </Link>
                </div>
            </div>
        </section>
    );
}

// ─── PROGRAMS ─────────────────────────────────────────────────────────────────
// Desktop: 3 cards side-by-side in a row
// Mobile: stacked vertically

const PROGRAMS = [
    {
        num: "01",
        tag: "Seasonal · Mon–Fri",
        name: "Summer Camp",
        desc: "Skill development, fitness & fun. Perfect for beginners to intermediate players.",
        batches: ["7:00–8:00 AM", "8:00–9:00 AM", "9:00–10:00 AM"],
        color: "#F5C842",
        dark: "#0B0612",
    },
    {
        num: "02",
        tag: "Regular · Mon–Sat",
        name: "Academy Training",
        desc: "Structured evening sessions, 3×/week model tailored by age group.",
        batches: ["U6·U8·U10·Girls → Mon·Wed·Fri", "U12·U14·U16 → Tue·Thu·Sat"],
        color: "#4B1FA7",
        dark: "#fff",
    },
    {
        num: "03",
        tag: "All Ages · All Levels",
        name: "Training Levels",
        desc: "Every player assessed and placed in the right level for maximum growth.",
        batches: ["Beginner", "Intermediate", "Advanced"],
        color: "#1A1A2E",
        dark: "#fff",
    },
];

function Programs() {
    const { ref, inView } = useInView();

    return (
        <section className="bg-[#F5F4FF] py-16 lg:py-24 px-5 lg:px-16" id="programs">
            {/* Header row */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 lg:mb-14 gap-4">
                <div>
                    <h2
                        className="font-black uppercase text-[#0B0612] leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
                    >
                        Our <span className="text-[#4B1FA7]">Programs</span>
                    </h2>
                </div>
                <p className="text-[#6B6B8A] text-sm font-light max-w-xs lg:max-w-sm leading-relaxed">
                    Football by ACE XI
                </p>
            </div>

            {/* Cards: desktop = 3 cols, mobile = stacked */}
            <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
                {PROGRAMS.map((p, i) => (
                    <div
                        key={p.num}
                        className="rounded-2xl overflow-hidden flex flex-col transition-all duration-700"
                        style={{
                            background: p.color,
                            transitionDelay: `${i * 120}ms`,
                            opacity: inView ? 1 : 0,
                            transform: inView ? "translateY(0)" : "translateY(40px)",
                            minHeight: "340px",
                        }}
                    >
                        <div className="p-6 lg:p-8 flex flex-col flex-1">
                            {/* Number + tag */}
                            <div className="flex items-start justify-between mb-6">
                                <span
                                    className="font-black leading-none"
                                    style={{
                                        fontFamily: "'Bebas Neue', sans-serif",
                                        fontSize: "5rem",
                                        color: p.dark === "#0B0612" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
                                    }}
                                >
                                    {p.num}
                                </span>
                                <span
                                    className="text-[9px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full mt-2 whitespace-nowrap"
                                    style={{
                                        color: p.dark === "#0B0612" ? "#0B0612" : "#F5C842",
                                        background: p.dark === "#0B0612" ? "rgba(0,0,0,0.12)" : "rgba(245,200,66,0.15)",
                                    }}
                                >
                                    {p.tag}
                                </span>
                            </div>

                            <h3
                                className="font-black uppercase leading-[0.9] mb-3"
                                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 3.5vw, 2.6rem)", color: p.dark }}
                            >
                                {p.name}
                            </h3>
                            <p
                                className="text-sm font-light leading-relaxed mb-6 flex-1"
                                style={{ color: p.dark === "#0B0612" ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.6)" }}
                            >
                                {p.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {p.batches.map((b) => (
                                    <span
                                        key={b}
                                        className="text-[10px] lg:text-xs font-semibold px-3 py-1.5 rounded-full"
                                        style={{
                                            background: p.dark === "#0B0612" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.12)",
                                            color: p.dark === "#0B0612" ? "#0B0612" : "rgba(255,255,255,0.85)",
                                        }}
                                    >
                                        {b}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

// ─── STATS ────────────────────────────────────────────────────────────────────
// Desktop: stats left, quote right (2-col)
// Mobile: stacked

function StatBlock({ n, label, active, delay }: { n: number; label: string; active: boolean; delay: number }) {
    const count = useCountUp(n, active);
    return (
        <div
            className="transition-all duration-700"
            style={{ transitionDelay: `${delay}ms`, opacity: active ? 1 : 0, transform: active ? "none" : "translateY(20px)" }}
        >
            <div
                className="font-black leading-none text-[#F5C842] mb-2"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 6vw, 6rem)" }}
            >
                {count}+
            </div>
            <div className="text-white/50 text-[10px] lg:text-xs font-light tracking-wide uppercase">{label}</div>
        </div>
    );
}

function TrustStats() {
    const { ref, inView } = useInView(0.3);
    return (
        <section ref={ref} className="bg-[#0B0612] px-5 lg:px-16 py-16 lg:py-24" id="trust">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left: stats */}
                <div>
                    <p className="text-[#4B1FA7] text-[9px] lg:text-[11px] font-bold tracking-[0.22em] uppercase mb-10">Numbers That Speak</p>
                    <div className="grid grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-10">
                        <StatBlock n={3} label="Partner Schools" active={inView} delay={0} />
                        <StatBlock n={85} label="Parents Trust Us" active={inView} delay={150} />
                        <StatBlock n={25} label="Teams Competed" active={inView} delay={300} />
                    </div>
                </div>

                {/* Right: quote */}
                <div className="border-l border-white/10 lg:pl-16">
                    <div className="text-[#F5C842] text-5xl lg:text-7xl mb-4 font-black" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>"</div>
                    <p
                        className="text-white font-black uppercase leading-[1.05]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.6rem, 3.5vw, 3rem)" }}
                    >
                        We don't just train players.
                        <br />
                        <span className="text-[#F5C842]">We build champions.</span>
                    </p>
                    <div className="mt-8 flex items-center gap-3">
                        <div className="w-10 h-[2px] bg-[#F5C842]" />
                        <span className="text-white/30 text-xs tracking-widest uppercase font-light">ACE XI Football Academy</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── COACHES ─────────────────────────────────────────────────────────────────
// Desktop: 4 cards in a row + credentials below in 3 cols
// Mobile: 2x2 grid + stacked credentials

const COACHES = [
    { name: "Saddam Shaikh", role: "Head Coach", abbr: "HC" },
    { name: "Skills Coach", role: "AIFF Certified", abbr: "SC" },
    { name: "Fitness Coach", role: "Sports Science", abbr: "FC" },
    { name: "Girls' Coach", role: "AIFF D-License", abbr: "GC" },
];

const CREDS = [
    { icon: "🏅", t: "Certified Professionals", s: "Valid coaching licenses from recognized football bodies." },
    { icon: "💛", t: "Youth Development Focus", s: "Specialists in nurturing talent from grassroots upward." },
    { icon: "🎯", t: "Discipline & Performance", s: "Building champions on and off the field every day." },
];

function Coaches() {
    const { ref, inView } = useInView();
    const { ref: credRef, inView: credInView } = useInView();

    return (
        <section className="bg-white py-16 lg:py-24 px-5 lg:px-16" id="coaches">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 lg:mb-14 gap-4">
                <h2
                    className="font-black uppercase text-[#0B0612] leading-[0.9]"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
                >
                    Licensed <span className="text-[#4B1FA7]">Coaches</span>
                </h2>
                <p className="text-[#6B6B8A] text-sm font-light max-w-xs leading-relaxed">
                    Every coach holds recognized certifications and specializes in youth football development.
                </p>
            </div>

            {/* Coach cards: 4 in a row on desktop, 2x2 on mobile */}
            <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-10 lg:mb-14">
                {COACHES.map((c, i) => (
                    <div
                        key={c.name}
                        className="rounded-2xl overflow-hidden transition-all duration-600"
                        style={{
                            transitionDelay: `${i * 100}ms`,
                            opacity: inView ? 1 : 0,
                            transform: inView ? "none" : "scale(0.92)",
                        }}
                    >
                        <div
                            className="aspect-[3/4] flex flex-col justify-between p-4 lg:p-5"
                            style={{
                                background: i % 2 === 0
                                    ? "linear-gradient(135deg, #1a0540 0%, #4B1FA7 100%)"
                                    : "linear-gradient(135deg, #0B0612 0%, #1a0540 100%)",
                            }}
                        >
                            <span
                                className="font-black text-white/10 leading-none"
                                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3.5rem, 6vw, 6rem)" }}
                            >
                                {c.abbr}
                            </span>
                            <div>
                                <div className="w-8 h-[2px] bg-[#F5C842] mb-3" />
                                <p
                                    className="text-white font-black uppercase leading-tight mb-1"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(0.9rem, 1.5vw, 1.2rem)" }}
                                >
                                    {c.name}
                                </p>
                                <p className="text-[#F5C842] text-[10px] lg:text-xs font-light tracking-wide">{c.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Credentials: 3 cols on desktop, stacked on mobile */}
            <div ref={credRef} className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-6 border-t border-[#4B1FA7]/10">
                {CREDS.map((item, i) => (
                    <div
                        key={item.t}
                        className="flex items-start gap-4 py-5 lg:py-6 border-b lg:border-b-0 border-[#4B1FA7]/10 lg:border-r last:border-r-0 lg:pr-6 transition-all duration-600"
                        style={{
                            transitionDelay: `${i * 100}ms`,
                            opacity: credInView ? 1 : 0,
                            transform: credInView ? "none" : "translateY(16px)",
                        }}
                    >
                        <span className="text-2xl flex-shrink-0">{item.icon}</span>
                        <div>
                            <p className="font-bold text-[#0B0612] uppercase tracking-wide mb-1" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.05rem" }}>{item.t}</p>
                            <p className="text-[#6B6B8A] text-xs font-light leading-snug">{item.s}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

// ─── EVENTS ───────────────────────────────────────────────────────────────────
// Desktop: header left, list right (2-col layout)
// Mobile: stacked

const EVENTS = [
    { num: "01", name: "ACE Cup Championship", detail: "25+ teams · All age groups · Annual", tag: "Annual · Mumbai" },
    { num: "02", name: "School Football League", detail: "Partner school teams compete", tag: "Inter-School · Mumbai" },
    { num: "03", name: "Girls' Football Fiesta", detail: "Dedicated girls' tournament", tag: "Girls' Special" },
    { num: "04", name: "Summer Showdown", detail: "Intensive tournament series", tag: "Summer Special" },
];

function Events() {
    const { ref, inView } = useInView();
    return (
        <section className="bg-[#0B0612] py-16 lg:py-24" id="events">
            <div className="px-5 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
                    {/* Left: header */}
                    <div className="lg:sticky lg:top-24">
                        <p className="text-[#4B1FA7] text-[9px] lg:text-[11px] font-bold tracking-[0.22em] uppercase mb-3">Organized by ACE XI</p>
                        <h2
                            className="font-black uppercase text-white leading-[0.9] mb-4"
                            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
                        >
                            Events &<br /><span className="text-[#F5C842]">Tournaments</span>
                        </h2>
                        <p className="text-white/40 text-sm font-light leading-relaxed">
                            ACE XI has organized and hosted multiple tournaments across Mumbai, bringing together schools and academies citywide.
                        </p>
                    </div>

                    {/* Right: event list */}
                    <div ref={ref} className="divide-y divide-white/[0.08]">
                        {EVENTS.map((ev, i) => (
                            <div
                                key={ev.num}
                                className="flex items-center gap-4 lg:gap-6 py-5 lg:py-6 transition-all duration-600"
                                style={{
                                    transitionDelay: `${i * 100}ms`,
                                    opacity: inView ? 1 : 0,
                                    transform: inView ? "none" : "translateX(20px)",
                                }}
                            >
                                <span
                                    className="font-black text-white/10 flex-shrink-0 leading-none w-10 lg:w-14 text-right"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.6rem" }}
                                >
                                    {ev.num}
                                </span>
                                <div className="flex-1 min-w-0">
                                    <p
                                        className="font-black uppercase text-white leading-tight"
                                        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
                                    >
                                        {ev.name}
                                    </p>
                                    <p className="text-white/35 text-[11px] font-light mt-0.5">{ev.detail}</p>
                                </div>
                                <span className="text-[#F5C842] text-[9px] lg:text-[10px] font-bold tracking-[0.12em] uppercase text-right flex-shrink-0 leading-tight max-w-[80px]">
                                    {ev.tag}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── ACHIEVEMENTS ─────────────────────────────────────────────────────────────

const ACH = [
    {
        emoji: "🏆",
        title: "Mumbai Championship 2024",
        subtitle: "1st Place · Open Category",
        desc: "ACE XI clinched the Mumbai Football Championship, defeating 24 other teams across all age groups.",
        accent: "#F5C842",
        bg: "linear-gradient(145deg, #2a0f6b, #4B1FA7)",
    },
    {
        emoji: "🥇",
        title: "Best Youth Academy Award",
        subtitle: "City Recognition · 2024",
        desc: "Recognized as Mumbai's top youth football academy for structured training and player development.",
        accent: "#F5C842",
        bg: "linear-gradient(145deg, #0f0f2e, #1a1a4e)",
    },
    {
        emoji: "⚽",
        title: "50+ Players Trained",
        subtitle: "All Age Groups",
        desc: "Over 50 players across U6 to U16 have gone through ACE XI's structured training programs.",
        accent: "#4B1FA7",
        bg: "linear-gradient(145deg, #0a1628, #1a3a60)",
    },
    {
        emoji: "🌟",
        title: "State Level Representation",
        subtitle: "Maharashtra State · 2023–24",
        desc: "Multiple ACE XI players were selected to represent Maharashtra at state-level competitions.",
        accent: "#F5C842",
        bg: "linear-gradient(145deg, #1a0530, #2d0f50)",
    },
    {
        emoji: "🎖️",
        title: "3 Partner Schools Signed",
        subtitle: "Mumbai School Network",
        desc: "ACE XI has partnered with 3 schools across Mumbai to run structured in-school football programs.",
        accent: "#4B1FA7",
        bg: "linear-gradient(145deg, #0f0520, #2d1070)",
    },
];

function Achievements() {
    const { ref, inView } = useInView();
    const [active, setActive] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const selected = ACH[active];

    const startLoop = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => setActive(a => (a + 1) % ACH.length), 2500);
    };

    useEffect(() => { startLoop(); return () => { if (timerRef.current) clearInterval(timerRef.current); }; }, []);

    const handleSelect = (i: number) => { setActive(i); startLoop(); };

    return (
        <section className="bg-[#F5F4FF] pt-14 pb-10" id="achievements">
            {/* Header */}
            <div className="px-5 mb-8">
                <p className="text-[#4B1FA7] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Milestones</p>
                <h2
                    className="font-black uppercase text-[#0B0612] leading-[0.88]"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.8rem, 14vw, 4.5rem)" }}
                >
                    Our<br /><span className="text-[#4B1FA7]">Achievements</span>
                </h2>
            </div>

            {/* Detail panel — full width, updates on tap */}
            <div ref={ref} className="px-4 mb-4">
                <div
                    className="rounded-[20px] p-6 transition-all duration-500"
                    style={{ background: selected.bg, minHeight: "230px" }}
                    key={active}
                >
                    <div className="flex flex-col justify-between h-full gap-5">
                        <span style={{ fontSize: "3.2rem", lineHeight: 1 }}>{selected.emoji}</span>
                        <div>
                            <span
                                className="text-[8px] font-bold tracking-[0.18em] uppercase rounded-full px-2.5 py-1 inline-block mb-3"
                                style={{
                                    color: selected.accent,
                                    border: `1px solid ${selected.accent}50`,
                                    background: `${selected.accent}15`,
                                }}
                            >
                                {selected.subtitle}
                            </span>
                            <p
                                className="font-black uppercase text-white leading-[0.92] mb-2"
                                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.65rem" }}
                            >
                                {selected.title}
                            </p>
                            <p className="text-white/50 text-[12px] font-light leading-relaxed">{selected.desc}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-1.5 mb-5">
                {ACH.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handleSelect(i)}
                        className="transition-all duration-300 rounded-full"
                        style={{
                            width: active === i ? "20px" : "6px",
                            height: "6px",
                            background: active === i ? "#4B1FA7" : "#4B1FA7",
                            opacity: active === i ? 1 : 0.25,
                        }}
                    />
                ))}
            </div>



            <style>{`
                @keyframes achMarquee {
                    from { transform: translateX(16px); }
                    to   { transform: translateX(calc(-33.333% - 6px)); }
                }
            `}</style>
        </section>
    );
}

// ─── WHY ACE ─────────────────────────────────────────────────────────────────
// Desktop: header left, 2-col grid of items right
// Mobile: stacked list + CTA

const WHY = [
    { t: "Structured System", d: "Proven progressive curriculum from fundamentals to advanced tactics." },
    { t: "Pro Coaching", d: "Licensed coaches committed to your long-term growth." },
    { t: "Discipline", d: "We build athletes with the right mindset, on and off the pitch." },
    { t: "Competitive Exposure", d: "Regular tournaments and inter-school league play." },
    { t: "Safe Environment", d: "Inclusive, secure, and encouraging for every player." },
    { t: "Growth Oriented", d: "We track every player's journey and celebrate milestones." },
];

function WhyACE() {
    const { ref, inView } = useInView();
    return (
        <section className="bg-white py-16 lg:py-24 px-5 lg:px-16" id="why">
            {/* Desktop: 2-col layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-start">
                {/* Left: sticky header + CTA */}
                <div className="lg:sticky lg:top-24">
                    <p className="text-[#4B1FA7] text-[9px] lg:text-[11px] font-bold tracking-[0.22em] uppercase mb-3">Make the Right Choice</p>
                    <h2
                        className="font-black uppercase text-[#0B0612] leading-[0.9] mb-6"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
                    >
                        Why<br /><span className="text-[#4B1FA7]">Choose</span><br />
                        <span className="text-[#F5C842]" style={{ WebkitTextStroke: "2px #0B0612" }}>ACE?</span>
                    </h2>
                    <p className="text-[#6B6B8A] text-sm font-light leading-relaxed mb-8">
                        We're not just another football academy. We're a system designed to bring out the best in every player.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-[#0B0612] text-[#F5C842] font-black uppercase px-7 py-4 rounded-full"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em", fontSize: "0.9rem" }}
                    >
                        Join ACE XI <ArrowUpRight size={16} />
                    </Link>
                </div>

                {/* Right: 2-col grid of reasons */}
                <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y divide-[#4B1FA7]/10">
                    {WHY.map((item, i) => (
                        <div
                            key={item.t}
                            className="flex items-start gap-4 py-5 lg:py-6 sm:odd:pr-6 sm:even:pl-6 sm:odd:border-r sm:border-[#4B1FA7]/10 transition-all duration-600"
                            style={{
                                transitionDelay: `${i * 80}ms`,
                                opacity: inView ? 1 : 0,
                                transform: inView ? "none" : "translateY(16px)",
                            }}
                        >

                            <div>
                                <p
                                    className="font-black uppercase text-[#0B0612] leading-tight mb-1"
                                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem" }}
                                >
                                    {item.t}
                                </p>
                                <p className="text-[#6B6B8A] text-xs font-light leading-relaxed">{item.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Full-width CTA block */}
            <div className="mt-16 lg:mt-20 rounded-2xl bg-[#0B0612] p-8 lg:p-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <p
                    className="font-black uppercase text-white leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                    Ready to Join <span className="text-[#F5C842]">ACE XI?</span>
                </p>
                <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#F5C842] text-[#0B0612] font-black uppercase px-8 py-4 rounded-full whitespace-nowrap self-start lg:self-auto"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em", fontSize: "0.95rem" }}
                >
                    Get Started Today <ArrowUpRight size={16} />
                </Link>
            </div>
        </section>
    );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function FootballPrograms() {
    return (
        <div className="min-h-screen overflow-x-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <Navbar />
            <Hero />
            <div className="[&>section]:py-10 lg:[&>section]:py-16">
                <Programs />
                <TrustStats />
                <Coaches />
                <Events />
                <Achievements />
                <WhyACE />
            </div>
            <Footer />
        </div>
    );
}