import { useRef, useEffect, useState } from "react";
import MoizaImg from "../assets/Moiza.jpeg";
import JakeriyaImg from "../assets/Jakeriya.jpeg";
import SidImg from "../assets/Sid.jpeg";
import RiaanImg from "../assets/Riaan.jpeg";
import SherwinImg from "../assets/Sherwin.jpeg";

const TEAM = [
    {
        dept: "Sales & Growth",
        deptKey: "sales",
        members: [
            {
                role: "Head of Sales",
                badge: "Sales",
                badgeColor: { bg: "rgba(245,200,66,0.15)", text: "#F5C842" },
                cardBg: "linear-gradient(145deg,#1a0a2e,#2d1156)",
                imagePath: MoizaImg,
                name: "Full Name",
                bio: "Short bio or title here.",
            },
            {
                role: "Growth Strategist",
                badge: "Growth",
                badgeColor: { bg: "rgba(245,200,66,0.15)", text: "#F5C842" },
                cardBg: "linear-gradient(145deg,#1a0a2e,#2d1156)",
                imagePath: JakeriyaImg,
                name: "Full Name",
                bio: "Short bio or title here.",
            },
        ],
    },
    {
        dept: "Administration",
        deptKey: "admin",
        members: [
            {
                role: "Programme Administrator",
                badge: "Admin",
                badgeColor: { bg: "rgba(98,39,120,0.25)", text: "#c490d9" },
                cardBg: "linear-gradient(145deg,#0f1a3a,#1a2d5e)",
                imagePath: SidImg,
                name: "Full Name",
                bio: "Short bio or title here.",
            },
        ],
    },
    {
        dept: "Digital & Technology — Apex Digital Studio",
        deptKey: "dev",
        members: [
            {
                role: "Lead Web Developer",
                badge: "Dev",
                badgeColor: { bg: "rgba(29,158,117,0.18)", text: "#5dcaa5" },
                cardBg: "linear-gradient(145deg,#0a1a1a,#0d3030)",
                imagePath: RiaanImg,
                name: "Full Name",
                bio: "Short bio or title here.",
            },
        ],
    },
    {
        dept: "Media & Content",
        deptKey: "media",
        members: [
            {
                role: "Media Head",
                badge: "Media",
                badgeColor: { bg: "rgba(216,90,48,0.18)", text: "#f09b6b" },
                cardBg: "linear-gradient(145deg,#1a0a0a,#3a1010)",
                imagePath: SherwinImg,
                name: "Full Name",
                bio: "Short bio or title here.",
            },
        ],
    },
];

type Member = (typeof TEAM)[0]["members"][0];

const MemberCard = ({ member }: { member: Member }) => {
    const [active, setActive] = useState(false);

    return (
        <div style={{ flex: 1, minWidth: 180, maxWidth: 260 }}>
            <div
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                style={{
                    width: "100%",
                    aspectRatio: "3/4",
                    borderRadius: 16,
                    overflow: "hidden",
                    position: "relative",
                    border: `1.5px solid ${active ? "rgba(245,200,66,0.4)" : "rgba(255,255,255,0.08)"}`,
                    transition:
                        "transform 0.32s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.32s ease, border-color 0.28s ease",
                    transform: active ? "translateY(-6px) scale(1.02)" : "none",
                    boxShadow: active ? "0 20px 40px rgba(75,31,167,0.35)" : "none",
                    cursor: "pointer",
                    background: member.cardBg,
                }}
            >
                {/* ── IMAGE ── just update imagePath in the TEAM array above */}
                <img
                    src={member.imagePath}
                    alt={member.name}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                        display: "block",
                    }}
                />

                {/* Dark gradient overlay so badge stays readable */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(to bottom, rgba(0,0,0,0.0) 55%, rgba(0,0,0,0.55) 100%)",
                        pointerEvents: "none",
                    }}
                />

                {/* Corner badge */}
                <span
                    style={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        fontSize: 8,
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        padding: "4px 8px",
                        borderRadius: 20,
                        background: member.badgeColor.bg,
                        color: member.badgeColor.text,
                        backdropFilter: "blur(6px)",
                    }}
                >
                    {member.badge}
                </span>

                {/* Hover shine ripple */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: 16,
                        background: active ? "rgba(255,255,255,0.05)" : "transparent",
                        transition: "background 0.2s ease",
                        pointerEvents: "none",
                    }}
                />
            </div>

            {/* Info below card */}
            <div style={{ marginTop: 14, padding: "0 4px" }}>
                <p
                    style={{
                        fontSize: 9,
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#F5C842",
                        marginBottom: 4,
                    }}
                >
                    {member.role}
                </p>
                <p
                    style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: 20,
                        color: "#fff",
                        letterSpacing: "0.04em",
                        lineHeight: 1,
                        marginBottom: 6,
                    }}
                >
                    {member.name}
                </p>
                {/* ── NAME + BIO ── update name and bio fields in TEAM array */}
                <p
                    style={{
                        fontSize: 13,
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.55,
                    }}
                >
                    {member.bio}
                </p>
            </div>
        </div>
    );
};

const OurTeam = () => (
    <section
        id="our-team"
        style={{
            background: "#0B0612",
            padding: "clamp(48px, 8vw, 96px) clamp(16px, 5vw, 64px)",
        }}
    >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p
                style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "#F5C842",
                    marginBottom: 12,
                }}
            >
                The people behind the programme
            </p>
            <h2
                style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(2.8rem, 8vw, 5rem)",
                    color: "#fff",
                    lineHeight: 0.88,
                    textTransform: "uppercase",
                    margin: 0,
                }}
            >
                Our <span style={{ color: "#4B1FA7" }}>Team</span>
            </h2>
        </div>

        {/* Departments */}
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            {TEAM.map((dept) => (
                <div key={dept.deptKey} style={{ marginBottom: 52 }}>
                    {/* Department label */}
                    <p
                        style={{
                            fontSize: 10,
                            fontWeight: 700,
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.35)",
                            marginBottom: 20,
                            paddingBottom: 10,
                            borderBottom: "1px solid rgba(255,255,255,0.08)",
                        }}
                    >
                        {dept.dept}
                    </p>

                    {/* Members row */}
                    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                        {dept.members.map((m, i) => (
                            <MemberCard key={i} member={m} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default OurTeam;