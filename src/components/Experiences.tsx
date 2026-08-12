import Title from "./Title"
import { useScrollReveal } from "../hooks/useScrollReveal"
import { GraduationCap, Award, Globe } from "lucide-react"

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

/* ─────────────────────────────────────────────
   SUB COMPONENTS
   ───────────────────────────────────────────── */

const SectionLabel = ({ children }: { children: React.ReactNode }) => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
    return (
        <h2
            ref={ref}
            className={`text-sm font-bold mb-10 text-[var(--accent-mid)] font-mono-label tracking-widest uppercase text-center lg:text-left sda-reveal ${isVisible ? 'revealed' : ''}`}
        >
            {children}
        </h2>
    );
};

const ExperienceCard = ({ experience }: { experience: typeof experiences[0] }) => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`sda-reveal ${isVisible ? 'revealed' : ''}`}
        >
            <div className="glass-card p-6 group">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div className="p-2 bg-white/5 rounded-xl w-14 h-14 flex items-center justify-center flex-shrink-0 border border-white/5">
                        <img
                            src={experience.image}
                            alt={experience.company}
                            className="object-contain max-h-full max-w-full rounded-md"
                        />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold font-mono-label text-white mb-1 tracking-wide group-hover:text-[var(--accent-pink)] transition-colors duration-300">
                            {experience.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm">
                            <span className="font-semibold font-mono-label text-[var(--text-muted)] tracking-wide">{experience.company}</span>
                            {experience.location && (
                                <>
                                    <span className="text-[var(--text-dim)]">•</span>
                                    <span className="font-mono-label text-[var(--text-dim)] text-xs">{experience.location}</span>
                                </>
                            )}
                            <span className="text-[var(--text-dim)]">•</span>
                            <span className="font-mono-label text-[var(--accent-mid)] text-xs tracking-wide">{experience.period}</span>
                        </div>
                    </div>
                </div>
                <ul className="space-y-2 text-[var(--text-primary)] font-mono-label text-xs md:text-sm leading-relaxed mt-4 list-disc list-outside ml-4 tracking-wide">
                    {experience.description.map((desc, index) => (
                        <li key={index} className="pl-2">{desc}</li>
                    ))}
                </ul>
                {experience.stack && (
                    <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2 font-mono-label">
                        <span className="text-xs font-bold text-[var(--accent-mid)] tracking-widest uppercase mr-1">&lt;Stack /&gt;</span>
                        {experience.stack.split(',').map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 rounded-full text-xs font-mono-label font-bold bg-white/5 border border-white/10 shadow-sm hover:border-[var(--accent-pink)] hover:bg-white/10 transition-all duration-300"
                            >
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
        <div ref={ref} className={`sda-reveal ${isVisible ? 'revealed' : ''}`}>
            <div className="glass-card p-5 flex items-start gap-4">
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
        <div ref={ref} className={`sda-reveal ${isVisible ? 'revealed' : ''}`}>
            <div className="glass-card p-5 flex items-start gap-4">
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
            className={`flex justify-center items-center flex-col w-20 sda-reveal ${isVisible ? 'revealed' : ''}`}
            style={{ transitionDelay: `${index * 40}ms` }}
        >
            <div className="w-16 h-16 p-2 rounded-full border border-[var(--border-glass)] bg-white/5 backdrop-blur-md shadow-lg hover:border-[var(--accent-purple)] hover:scale-110 transition-all duration-300 flex items-center justify-center">
                {skill.image ? (
                    <img src={skill.image} alt={skill.name} className="object-contain max-h-full max-w-full" />
                ) : (
                    skill.icon
                )}
            </div>
            <span className="mt-2 text-[11px] font-semibold text-center font-mono-label text-[var(--text-muted)] tracking-wide">{skill.name}</span>
        </div>
    );
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */

interface ExperiencesProps {
    className?: string;
}

const Experiences = ({ className }: ExperiencesProps) => {
    return (
        <section id="Experiences" className={`py-32 bg-[var(--bg-deep)] grid-line-bg border-t border-white/5 ${className || ''}`}>
            <Title title="Expériences & Compétences" className="mb-20" />
            
            <div className="max-w-5xl mx-auto px-6 relative z-10 space-y-24">

                {/* ── Section 1 : Parcours Professionnel ── */}
                <div>
                    <SectionLabel>&lt;Parcours Professionnel /&gt;</SectionLabel>
                    <div className="space-y-8">
                        {experiences.map((experience) => (
                            <ExperienceCard key={experience.id} experience={experience} />
                        ))}
                    </div>
                </div>

                {/* ── Section 2 : Éducation & Formation ── */}
                <div>
                    <SectionLabel>&lt;Éducation &amp; Formation /&gt;</SectionLabel>
                    <div className="space-y-4">
                        {educationList.map((edu) => (
                            <EducationCard key={edu.id} edu={edu} />
                        ))}
                    </div>
                </div>

                {/* ── Section 3 : Certifications & Langues ── */}
                <div>
                    <SectionLabel>&lt;Certifications &amp; Langues /&gt;</SectionLabel>
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

                {/* ── Section 4 : Technologies ── */}
                <div>
                    <SectionLabel>&lt;Technologies /&gt;</SectionLabel>
                    <div className="flex flex-wrap gap-5 justify-center lg:justify-start items-center">
                        {allTechnologies.map((skill, i) => (
                            <TechIcon key={skill.id} skill={skill} index={i} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Experiences
