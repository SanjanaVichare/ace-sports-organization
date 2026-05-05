import { useRef, useEffect, useState } from "react";
import MoizaImg from "../assets/Moiza.jpeg";
import JakeriyaImg from "../assets/Jakeriya.jpeg";
import SidImg from "../assets/Sid.jpeg";
import RiaanImg from "../assets/image.jpeg";
import SherwinImg from "../assets/sherwin1.jpg";

// ─── TEAM DATA ────────────────────────────────────────────────────────────────
const TEAM = [
    {
        dept: "Sales & Growth",
        deptKey: "sales",
        accentColor: "#F5C842",
        members: [
            {
                role: "Head of Sales",
                badge: "Sales",
                imagePath: MoizaImg,
                name: "Moiza Sherkar",
                bio: "Drives partnerships and revenue strategy across ACE's academy network — turning relationships into results.",
            },
        ],
    },
    {
        dept: "Digital & Technology — Apex Digital Studio",
        deptKey: "dev",
        accentColor: "#1A1A2E",
        members: [
            {
                role: "Growth Strategist",
                badge: "Growth",
                imagePath: JakeriyaImg,
                name: "Jakeriya Sherkar",
                bio: "Identifies and unlocks new market opportunities — from sponsorships to memberships — with a sharp eye for scalable growth.",
            },
        ],
    },
    {
        dept: "Administration",
        deptKey: "admin",
        accentColor: "#632082",
        members: [
            {
                role: "Programme Director",
                badge: "Admin",
                imagePath: SidImg,
                name: "Siddhesh Ghatkar",
                bio: "Keeps every programme running without a hitch — managing operations, scheduling, and compliance so nothing falls through the cracks.",
            },
        ],
    },
    {
        dept: "Digital & Technology — Apex Digital Studio",
        deptKey: "dev",
        accentColor: "#1A1A2E",
        members: [
            {
                role: "Digital Products Lead",
                badge: "Dev",
                imagePath: RiaanImg,
                name: "Riaan Parab",
                bio: "Architects and ships the digital products that power ACE — from registration platforms to performance dashboards built for real sport.",
            },
        ],
    },
    {
        dept: "Media & Content",
        deptKey: "media",
        accentColor: "#F5C842",
        members: [
            {
                role: "Head of Media & Content",
                badge: "Media",
                imagePath: SherwinImg,
                name: "Sherwin Misquitta",
                bio: "Captures the stories that matter — match-day coverage, brand storytelling, and content built to reach real audiences.",
            },
        ],
    },
];

type Member = (typeof TEAM)[0]["members"][0] & { accentColor: string; dept: string };

// ─── MEMBER CARD — styled exactly like ServiceCard ────────────────────────────
const MemberCard = ({
    member,
    inView,
    delay,
}: {
    member: Member;
    inView: boolean;
    delay: number;
}) => {
    const [active, setActive] = useState(false);
    const isYellow = member.accentColor === "#F5C842";
    const cardBg = member.accentColor;
    const textColor = isYellow ? "#0B0612" : "#fff";

    return (
        <div
            className="rounded-2xl overflow-hidden flex flex-col relative"
            style={{
                background: cardBg,
                minHeight: "clamp(300px, 42vw, 400px)",
                opacity: inView ? 1 : 0,
                transform: inView
                    ? active
                        ? "scale(0.965) translateY(3px)"
                        : "scale(1) translateY(0)"
                    : "translateY(48px) scale(0.97)",
                transition: inView
                    ? `transform 0.32s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.32s ease, opacity 0.7s ease ${delay}ms`
                    : `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
                boxShadow: active
                    ? "0 2px 10px rgba(0,0,0,0.18)"
                    : "0 6px 24px rgba(0,0,0,0.09)",
                cursor: "pointer",
                WebkitTapHighlightColor: "transparent",
                userSelect: "none",
                willChange: "transform",
            }}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
        >
            {/* Shine ripple on hover */}
            <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                    background: active ? "rgba(255,255,255,0.07)" : "transparent",
                    transition: "background 0.2s ease",
                    zIndex: 2,
                }}
            />

            {/* ── PHOTO ── */}
            <div style={{ position: "relative", height: "clamp(260px, 32vw, 340px)", flexShrink: 0 }}>
                <img
                    src={member.imagePath}
                    alt={member.name}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                        display: "block",
                        transition: "transform 0.4s ease",
                        transform: active ? "scale(1.04)" : "scale(1)",
                    }}
                />
                {/* Gradient — fades in on hover only, low opacity */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(to bottom, transparent 50%, ${cardBg} 100%)`,
                        pointerEvents: "none",
                        opacity: active ? 0.45 : 0,
                        transition: "opacity 0.35s ease",
                    }}
                />
                {/* Badge pill */}
                <span
                    style={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        fontSize: 9,
                        fontWeight: 700,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        padding: "4px 10px",
                        borderRadius: 999,
                        background: isYellow ? "rgba(0,0,0,0.12)" : "rgba(245,200,66,0.15)",
                        color: isYellow ? "#0B0612" : "#F5C842",
                        backdropFilter: "blur(6px)",
                        zIndex: 1,
                    }}
                >
                    {member.badge}
                </span>
            </div>

            {/* ── TEXT — same padding & style as WhyChooseAce service cards ── */}
            <div className="relative p-6 lg:p-8 flex flex-col flex-1">
                {/* Role — small uppercase label */}
                <p
                    style={{
                        fontSize: 9,
                        fontWeight: 700,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: isYellow ? "rgba(0,0,0,0.45)" : "#F5C842",
                        marginBottom: 6,
                    }}
                >
                    {member.role}
                </p>

                {/* Name — big Bebas Neue, same size as service card h3 */}
                <h3
                    style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "clamp(1.75rem, 5vw, 2.6rem)",
                        color: textColor,
                        letterSpacing: active ? "0.025em" : "0em",
                        lineHeight: 0.9,
                        textTransform: "uppercase",
                        transition: "letter-spacing 0.3s ease",
                        marginBottom: 10,
                        fontWeight: 900,
                    }}
                >
                    {member.name}
                </h3>

                {/* Animated underline — identical to service cards */}
                <div
                    style={{
                        height: "1.5px",
                        marginBottom: 10,
                        background: isYellow ? "rgba(0,0,0,0.18)" : "rgba(255,255,255,0.22)",
                        width: active ? "100%" : "36%",
                        transition: "width 0.45s cubic-bezier(0.34,1.4,0.64,1)",
                    }}
                />

                {/* Bio */}
                <p
                    style={{
                        fontSize: 13,
                        fontWeight: 300,
                        lineHeight: 1.6,
                        flex: 1,
                        color: isYellow ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.65)",
                    }}
                >
                    {member.bio}
                </p>
            </div>
        </div>
    );
};

// ─── MAIN SECTION ─────────────────────────────────────────────────────────────
const OurTeam = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold: 0.05 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    // Flatten all members for the unified grid
    const allCards: Member[] = TEAM.flatMap((dept) =>
        dept.members.map((m) => ({ ...m, accentColor: dept.accentColor, dept: dept.dept }))
    );

    return (
        <section
            id="our-team"
            className="pt-8 pb-14 lg:pt-12 lg:pb-20 px-4 sm:px-6 lg:px-16"
            style={{ background: "#F5F4FF" }}
        >
            {/* ── HEADER — pixel-perfect match to WhyChooseAce ── */}
            <div className="text-center mb-8 lg:mb-14">
                <p
                    className="text-[10px] font-bold tracking-[0.28em] uppercase mb-3"
                    style={{ color: "#4B1FA7" }}
                >
                    The people behind the programme
                </p>
                <h2
                    className="font-black uppercase leading-[0.88]"
                    style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "clamp(2.8rem, 8vw, 5rem)",
                        color: "#0B0612",
                    }}
                >
                    Our <span style={{ color: "#4B1FA7" }}>Team</span>
                </h2>
            </div>

            {/* ── GRID — same 1→2→3 col responsive grid as WhyChooseAce ── */}
            <div
                ref={ref}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5"
            >
                {allCards.map((m, i) => (
                    <MemberCard
                        key={i}
                        member={m}
                        inView={inView}
                        delay={i * 120}
                    />
                ))}
            </div>
        </section>
    );
};

export default OurTeam;