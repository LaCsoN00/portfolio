import { useEffect, useRef, useState } from "react";
import Title from "./Title";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { GraduationCap, Award, Globe, Briefcase, Code, BookOpen, Layers } from "lucide-react";

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPRISMA from "../assets/techno/prisma.webp";

import airtel from "../assets/companies/airtel.png";
import ipi9 from "../assets/companies/ipi9.jpeg";
import cpm from "../assets/companies/cpm.png";

import { FaReact, FaPython, FaWordpress, FaDocker, FaGithub, FaLinux, FaBrain } from "react-icons/fa";
import { SiVuedotjs, SiPostgresql, SiMysql, SiFirebase, SiSupabase, SiCisco } from "react-icons/si";

/* ─────────────────────────────────────────────
   DATA DEFINITIONS
   ───────────────────────────────────────────── */

const allTechnologies = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "TypeScript", image: imgTYPE },
    { id: 5, name: "React", image: imgREACT },
    { id: 6, name: "React Native", icon: <FaReact className="text-[#61DAFB] w-8 h-8" /> },
    { id: 7, name: "Vue.js", icon: <SiVuedotjs className="text-[#4FC08D] w-8 h-8" /> },
    { id: 8, name: "Next.js", image: imgNEXT },
    { id: 9, name: "Node.js", image: imgNODE },
    { id: 10, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 11, name: "Prisma", image: imgPRISMA },
    { id: 12, name: "Python", icon: <FaPython className="text-[#3776AB] w-8 h-8" /> },
    { id: 13, name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1] w-8 h-8" /> },
    { id: 14, name: "MySQL", icon: <SiMysql className="text-[#4479A1] w-8 h-8" /> },
    { id: 15, name: "Firebase", icon: <SiFirebase className="text-[#FFCA28] w-8 h-8" /> },
    { id: 16, name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E] w-8 h-8" /> },
    { id: 17, name: "Docker", icon: <FaDocker className="text-[#2496ED] w-8 h-8" /> },
    { id: 18, name: "GitHub", icon: <FaGithub className="text-white w-8 h-8" /> },
    { id: 19, name: "Linux", icon: <FaLinux className="text-[#FCC624] w-8 h-8" /> },
    { id: 20, name: "WordPress", icon: <FaWordpress className="text-[#21759B] w-8 h-8" /> },
    { id: 21, name: "CCNAv7", icon: <SiCisco className="text-[#1BA0D7] w-8 h-8" /> },
    { id: 22, name: "Modèles IA", icon: <FaBrain className="text-[#EC4899] w-8 h-8" /> },
];

const experiences = [
    {
        id: 1,
        role: "Informaticien Stagiaire",
        company: "Consulting Public Management",
        location: "Libreville, Gabon",
        period: "Fév 2025 — Mai 2025",
        description: [
            "Participation au développement d'une application de gestion de projet et de facturation.",
            "Conception et structuration des données métier dans une base MySQL.",
            "Participation au traitement, à l'organisation et à la gestion des informations de l'application.",
            "Assistance aux utilisateurs et résolution des incidents techniques.",
            "Participation à l'amélioration des outils et processus informatiques.",
        ],
        stack: "Node.js, React, Vite, MySQL, Docker",
        image: cpm,
    },
    {
        id: 2,
        role: "Agent Informatique",
        company: "IPI9",
        location: "Libreville, Gabon",
        period: "Jui 2023 — Oct 2024",
        description: [
            "Développement d'un outil de gestion et de suivi des stocks.",
            "Structuration et gestion des données relatives aux produits et aux mouvements de stock.",
            "Utilisation d'une base MySQL pour l'enregistrement et l'exploitation des données.",
            "Suivi des demandes et traitement des informations associées.",
        ],
        stack: "HTML, CSS, JavaScript, MySQL",
        image: ipi9,
    },
    {
        id: 3,
        role: "Agent Commercial",
        company: "Airtel Gabon",
        location: "Libreville, Gabon",
        period: "Mai 2021 — Mar 2022",
        description: [
            "Gestion et traitement des demandes clients.",
            "Collecte et vérification des informations nécessaires à l'ouverture des comptes (Airtel Money).",
            "Gestion des incidents et communication avec les utilisateurs.",
            "Promotion des produits et services auprès de la clientèle.",
        ],
        stack: "",
        image: airtel,
    },
];

const educationList = [
    {
        id: 1,
        degree: "Diplôme de Technicien Supérieur (DTS) | Métier du Multimédia et Internet (MMI)",
        institution: "Institut National de la Poste, Technologies de l'Information et de la Communication",
        period: "2025 — 2026",
    },
    {
        id: 2,
        degree: "Baccalauréat | Économie",
        institution: "Lubin Martial NTOUNTOUME OBAME",
        period: "2019 — 2020",
    },
];

const certificationsList = [
    {
        id: 1,
        title: "CCNAv7 : Introduction to Networks",
        issuer: "Cisco Networking Academy",
        year: "2022",
        certId: "50a12efb-1be8-47c2-bfd5-86fc430135cd",
    },
];

/* Sticky Chapter Configuration */
const CHAPTERS = [
    {
        id: "prof",
        num: "01",
        title: "Parcours Professionnel",
        subtitle: "Expériences terrain & gestion de projet",
        icon: <Briefcase className="w-5 h-5 text-[var(--accent-pink)]" />,
        summary: "3 expériences clés en entreprise combinant développement web, gestion de bases de données MySQL, assistance technique et relation client."
    },
    {
        id: "edu",
        num: "02",
        title: "Éducation & Formation",
        subtitle: "Parcours académique & diplômes",
        icon: <BookOpen className="w-5 h-5 text-[var(--accent-purple)]" />,
        summary: "Formation spécialisée en Métiers du Multimédia et de l'Internet (MMI) à l'INPTIC et Baccalauréat Économie."
    },
    {
        id: "cert",
        num: "03",
        title: "Certifications & Langues",
        subtitle: "Reconnaissances & compétences linguistiques",
        icon: <Award className="w-5 h-5 text-[var(--accent-pink)]" />,
        summary: "Certification réseau officielle Cisco CCNAv7 et maîtrise de la langue française avec notions d'anglais technique."
    },
    {
        id: "tech",
        num: "04",
        title: "Technologies & Stack",
        subtitle: "Outils, frameworks & bases de données",
        icon: <Code className="w-5 h-5 text-[var(--accent-mid)]" />,
        summary: "Ensemble des technologies maîtrisées : React, Node.js, TypeScript, Next.js, MySQL, PostgreSQL, Docker, Linux & Réseaux."
    },
];

/* ─────────────────────────────────────────────
   SUB COMPONENTS
   ───────────────────────────────────────────── */

const ExperienceCard = ({ experience }: { experience: typeof experiences[0] }) => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
    return (
        <div ref={ref} className={`sda-reveal ${isVisible ? "revealed" : ""}`}>
            <div className="glass-card p-6 group transition-all duration-300 hover:border-[var(--accent-purple)]/50">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div className="p-2 bg-white/5 rounded-xl w-14 h-14 flex items-center justify-center flex-shrink-0 border border-white/5 shadow-inner">
                        <img src={experience.image} alt={experience.company} className="object-contain max-h-full max-w-full rounded-md" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold font-mono-label text-white mb-1 tracking-wide group-hover:text-[var(--accent-pink)] transition-colors duration-300">
                            {experience.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                            <span className="font-semibold font-mono-label text-[var(--text-muted)] tracking-wide">{experience.company}</span>
                            {experience.location && (
                                <>
                                    <span className="text-[var(--text-dim)]">•</span>
                                    <span className="font-mono-label text-[var(--text-dim)]">{experience.location}</span>
                                </>
                            )}
                            <span className="text-[var(--text-dim)]">•</span>
                            <span className="font-mono-label text-[var(--accent-mid)] tracking-wide">{experience.period}</span>
                        </div>
                    </div>
                </div>
                <ul className="space-y-2 text-[var(--text-primary)] font-mono-label text-xs md:text-sm leading-relaxed mt-4 list-disc list-outside ml-4 tracking-wide">
                    {experience.description.map((desc, i) => (
                        <li key={i} className="pl-1">{desc}</li>
                    ))}
                </ul>
                {experience.stack && (
                    <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2 font-mono-label">
                        <span className="text-xs font-bold text-[var(--accent-mid)] tracking-widest uppercase mr-1">&lt;Stack /&gt;</span>
                        {experience.stack.split(",").map((tech, idx) => (
                            <span key={idx} className="px-3 py-1 rounded-full text-xs font-bold bg-white/5 border border-white/10 hover:border-[var(--accent-pink)] hover:bg-white/10 transition-all duration-300">
                                <span className="gradient-text">{tech.trim()}</span>
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const EducationCard = ({ edu }: { edu: typeof educationList[0] }) => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });
    return (
        <div ref={ref} className={`sda-reveal ${isVisible ? "revealed" : ""}`}>
            <div className="glass-card p-5 flex items-start gap-4 hover:border-[var(--accent-pink)]/40 transition-all duration-300">
                <div className="p-2.5 bg-white/5 rounded-lg text-[var(--accent-pink)] flex-shrink-0">
                    <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-mono-label font-bold text-white text-sm md:text-base mb-1">{edu.degree}</h4>
                    <p className="font-mono-label text-xs text-[var(--text-muted)] mb-1">{edu.institution}</p>
                    <span className="font-mono-label text-xs text-[var(--accent-mid)]">{edu.period}</span>
                </div>
            </div>
        </div>
    );
};

const CertificationCard = ({ cert }: { cert: typeof certificationsList[0] }) => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });
    return (
        <div ref={ref} className={`sda-reveal ${isVisible ? "revealed" : ""}`}>
            <div className="glass-card p-5 flex items-start gap-4 hover:border-[var(--accent-purple)]/40 transition-all duration-300">
                <div className="p-2.5 bg-white/5 rounded-lg text-[var(--accent-purple)] flex-shrink-0">
                    <Award className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-mono-label font-bold text-white text-sm md:text-base mb-1">{cert.title}</h4>
                    <p className="font-mono-label text-xs text-[var(--text-muted)] mb-1">{cert.issuer} • {cert.year}</p>
                    <p className="font-mono-label text-[11px] text-[var(--text-dim)]">ID : {cert.certId}</p>
                </div>
            </div>
        </div>
    );
};

const TechIcon = ({ skill, index }: { skill: typeof allTechnologies[0]; index: number }) => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
    return (
        <div
            ref={ref}
            className={`flex flex-col items-center w-20 sda-reveal ${isVisible ? "revealed" : ""}`}
            style={{ transitionDelay: `${index * 30}ms` }}
        >
            <div className="w-16 h-16 p-2 rounded-full border border-[var(--border-glass)] bg-white/5 backdrop-blur-md shadow-lg hover:border-[var(--accent-purple)] hover:scale-110 transition-all duration-300 flex items-center justify-center">
                {skill.image
                    ? <img src={skill.image} alt={skill.name} className="object-contain max-h-full max-w-full" />
                    : skill.icon
                }
            </div>
            <span className="mt-2 text-[11px] font-semibold text-center font-mono-label text-[var(--text-muted)] tracking-wide">{skill.name}</span>
        </div>
    );
};

/* ─────────────────────────────────────────────
   MAIN STICKY SCROLLETYLLING COMPONENT
   ───────────────────────────────────────────── */

interface ExperiencesProps { className?: string }

const Experiences = ({ className }: ExperiencesProps) => {
    const [activeIdx, setActiveIdx] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null]);

    /* Scroll tracking: updates activeIdx (0 -> 3) and progress bar (0% -> 100%) */
    useEffect(() => {
        const handleScroll = () => {
            const firstEl = sectionRefs.current[0];
            const lastEl = sectionRefs.current[sectionRefs.current.length - 1];
            if (!firstEl || !lastEl) return;

            // 1. Update active section index (0, 1, 2, 3)
            let currentActive = 0;
            sectionRefs.current.forEach((el, index) => {
                if (!el) return;
                const rect = el.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.45) {
                    currentActive = index;
                }
            });
            setActiveIdx(currentActive);

            // 2. Calculate continuous scroll progress percentage (0% -> 100%)
            const firstTop = firstEl.getBoundingClientRect().top + window.scrollY;
            const lastBottom = lastEl.getBoundingClientRect().bottom + window.scrollY;
            const viewportHeight = window.innerHeight;

            const startY = firstTop - 150;
            const endY = lastBottom - viewportHeight + 100;
            const totalDistance = endY - startY;

            if (totalDistance <= 0) return;

            const currentY = window.scrollY - startY;
            const pct = Math.min(Math.max(Math.round((currentY / totalDistance) * 100), 0), 100);
            setScrollProgress(pct);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (i: number) => {
        const target = sectionRefs.current[i];
        if (target) {
            const yOffset = -90;
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    const currentChapter = CHAPTERS[activeIdx];

    return (
        <section
            id="Experiences"
            className={`bg-[var(--bg-deep)] grid-line-bg border-t border-white/5 py-24 ${className || ""}`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
                <Title title="Expériences & Compétences" className="mb-4" />
            </div>

            {/* MAIN LAYOUT WRAPPER (Relative container for sticky positioning) */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative flex flex-col lg:flex-row items-start gap-12">

                {/* ── DESKTOP STICKY LEFT DASHBOARD PANEL ── */}
                <div className="hidden lg:block w-5/12 sticky top-24 self-start z-20">
                    <div className="glass-card p-8 border border-white/15 shadow-2xl relative overflow-hidden bg-[#101224]/90 backdrop-blur-xl rounded-2xl">
                        
                        {/* Background Number Watermark */}
                        <span className="absolute -bottom-6 -right-4 font-display font-extrabold text-9xl text-white/5 select-none pointer-events-none">
                            {currentChapter.num}
                        </span>

                        {/* Top Tag */}
                        <div className="flex items-center justify-between mb-6">
                            <span className="flex items-center gap-2 font-mono-label text-xs tracking-widest text-[var(--accent-mid)] uppercase font-bold">
                                <Layers className="w-4 h-4 text-[var(--accent-pink)]" />
                                &lt;SCROLLETYLLING /&gt;
                            </span>
                            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-label text-[var(--accent-pink)] font-bold">
                                {currentChapter.num} / 04
                            </span>
                        </div>

                        {/* Dynamic Active Chapter Icon & Title */}
                        <div key={`chapter-head-${activeIdx}`} className="space-y-2 mb-6 transition-all duration-300">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                                    {currentChapter.icon}
                                </div>
                                <h2 className="font-display font-extrabold text-2xl xl:text-3xl text-white tracking-wide">
                                    {currentChapter.title}
                                </h2>
                            </div>
                            <p className="text-xs font-mono-label text-[var(--accent-mid)] tracking-wide">
                                {currentChapter.subtitle}
                            </p>
                        </div>

                        {/* Active Chapter Summary Box */}
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                            <p className="text-xs font-mono-label leading-relaxed text-[var(--text-primary)] tracking-wide">
                                {currentChapter.summary}
                            </p>
                        </div>

                        {/* Interactive Navigation List */}
                        <div className="space-y-3 mb-8 font-mono-label">
                            {CHAPTERS.map((ch, i) => {
                                const isActive = i === activeIdx;
                                const isPassed = i < activeIdx;
                                return (
                                    <button
                                        key={ch.id}
                                        onClick={() => scrollToSection(i)}
                                        className={`w-full text-left p-3 rounded-xl transition-all duration-300 flex items-center justify-between border ${
                                            isActive
                                                ? "bg-white/10 border-[var(--accent-purple)] text-white shadow-lg shadow-purple-900/20 translate-x-1"
                                                : isPassed
                                                    ? "bg-white/5 border-transparent text-[var(--text-muted)] hover:bg-white/10"
                                                    : "bg-transparent border-transparent text-[var(--text-dim)] hover:text-[var(--text-muted)]"
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                                isActive
                                                    ? "bg-[var(--gradient)] text-white"
                                                    : isPassed
                                                        ? "bg-white/10 text-[var(--accent-pink)]"
                                                        : "bg-white/5 text-[var(--text-dim)]"
                                            }`}>
                                                {isPassed ? "✓" : ch.num}
                                            </span>
                                            <span className="text-xs font-bold tracking-wide">{ch.title}</span>
                                        </div>
                                        {isActive && (
                                            <span className="w-2 h-2 rounded-full bg-[var(--accent-pink)] animate-ping" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Progress Bar */}
                        <div className="space-y-2">
                            <div className="flex justify-between text-xs font-mono-label">
                                <span className="text-[var(--text-dim)]">Progression</span>
                                <span className="text-[var(--accent-pink)] font-bold">{scrollProgress}%</span>
                            </div>
                            <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden p-0.5 border border-white/10">
                                <div
                                    className="h-full rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_rgba(236,72,153,0.5)]"
                                    style={{
                                        width: `${scrollProgress}%`,
                                        background: "linear-gradient(90deg, #7C3AED 0%, #A855F7 50%, #EC4899 100%)",
                                    }}
                                />
                            </div>
                        </div>

                    </div>
                </div>

                {/* ── RIGHT SCROLLABLE CONTENT COLUMN ── */}
                <div className="w-full lg:w-7/12 space-y-24">

                    {/* BLOCK 01: Parcours Professionnel */}
                    <div
                        ref={(el) => { sectionRefs.current[0] = el; }}
                        className="scroll-mt-32 space-y-8"
                    >
                        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                            <span className="px-3 py-1 rounded-full bg-[var(--accent-purple)]/20 text-[var(--accent-pink)] font-mono-label font-bold text-xs">
                                01
                            </span>
                            <h2 className="font-display font-extrabold text-2xl text-white tracking-wide">
                                Parcours Professionnel
                            </h2>
                        </div>
                        <div className="space-y-6">
                            {experiences.map((exp) => (
                                <ExperienceCard key={exp.id} experience={exp} />
                            ))}
                        </div>
                    </div>

                    {/* BLOCK 02: Éducation & Formation */}
                    <div
                        ref={(el) => { sectionRefs.current[1] = el; }}
                        className="scroll-mt-32 space-y-8"
                    >
                        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                            <span className="px-3 py-1 rounded-full bg-[var(--accent-purple)]/20 text-[var(--accent-pink)] font-mono-label font-bold text-xs">
                                02
                            </span>
                            <h2 className="font-display font-extrabold text-2xl text-white tracking-wide">
                                Éducation &amp; Formation
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {educationList.map((edu) => (
                                <EducationCard key={edu.id} edu={edu} />
                            ))}
                        </div>
                    </div>

                    {/* BLOCK 03: Certifications & Langues */}
                    <div
                        ref={(el) => { sectionRefs.current[2] = el; }}
                        className="scroll-mt-32 space-y-8"
                    >
                        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                            <span className="px-3 py-1 rounded-full bg-[var(--accent-purple)]/20 text-[var(--accent-pink)] font-mono-label font-bold text-xs">
                                03
                            </span>
                            <h2 className="font-display font-extrabold text-2xl text-white tracking-wide">
                                Certifications &amp; Langues
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {certificationsList.map((cert) => (
                                <CertificationCard key={cert.id} cert={cert} />
                            ))}
                            <div className="sda-reveal revealed">
                                <div className="glass-card p-5 flex items-center gap-4">
                                    <div className="p-2.5 bg-white/5 rounded-lg text-[var(--accent-pink)] flex-shrink-0">
                                        <Globe className="w-5 h-5" />
                                    </div>
                                    <div className="font-mono-label text-xs md:text-sm text-[var(--text-muted)] flex flex-wrap gap-4">
                                        <span><strong className="text-white">Français :</strong> Excellent</span>
                                        <span>•</span>
                                        <span><strong className="text-white">Anglais :</strong> Notion</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BLOCK 04: Technologies */}
                    <div
                        ref={(el) => { sectionRefs.current[3] = el; }}
                        className="scroll-mt-32 space-y-8"
                    >
                        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                            <span className="px-3 py-1 rounded-full bg-[var(--accent-purple)]/20 text-[var(--accent-pink)] font-mono-label font-bold text-xs">
                                04
                            </span>
                            <h2 className="font-display font-extrabold text-2xl text-white tracking-wide">
                                Technologies &amp; Outils
                            </h2>
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                            {allTechnologies.map((skill, i) => (
                                <TechIcon key={skill.id} skill={skill} index={i} />
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Experiences;
