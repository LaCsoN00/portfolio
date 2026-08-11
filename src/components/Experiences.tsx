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

interface ExperienceItemProps {
    experience: {
        id: number;
        role: string;
        company: string;
        location?: string;
        period: string;
        description: string[];
        stack?: string;
        image: string;
    };
}

const ExperienceCard = ({ experience }: ExperienceItemProps) => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

    return (
        <div
            ref={ref}
            className={`relative pl-0 lg:pl-8 reveal-right ${isVisible ? 'revealed' : ''}`}
        >
            {/* Timeline Dot (desktop only) */}
            <div className="hidden lg:block absolute left-[-6px] top-4 w-3 h-3 rounded-full bg-[var(--gradient)] shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
            
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
                            <span className="text-[var(--text-dim)] hidden sm:inline">•</span>
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
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2 font-mono-label text-xs text-[var(--accent-pink)]">
                        <span className="text-[var(--text-dim)]">Stack:</span>
                        <span>{experience.stack}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

const EducationCard = ({ edu }: { edu: typeof educationList[0] }) => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });
    return (
        <div ref={ref} className={`glass-card p-5 reveal-hidden ${isVisible ? 'revealed' : ''}`}>
            <div className="flex items-start gap-4">
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
        <div ref={ref} className={`glass-card p-5 reveal-hidden ${isVisible ? 'revealed' : ''}`}>
            <div className="flex items-start gap-4">
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

interface ExperiencesProps {
    className?: string;
}

const Experiences = ({ className }: ExperiencesProps) => {
    const { ref: skillsRef, isVisible: skillsVisible } = useScrollReveal({ threshold: 0.1 });
    const { ref: expTitleRef, isVisible: expTitleVisible } = useScrollReveal({ threshold: 0.1 });

    return (
        <section id="Experiences" className={`py-32 bg-[var(--bg-deep)] grid-line-bg border-t border-white/5 ${className || ''}`}>
            <Title title="Expériences & Compétences" className="mb-16" />
            
            <div className="flex flex-col-reverse lg:flex-row justify-center items-start gap-12 max-w-6xl mx-auto px-6 relative z-10">

                {/* Rubrique 1: Technologies */}
                <div
                    ref={skillsRef}
                    className={`w-full lg:w-5/12 flex flex-col items-center lg:items-start reveal-left ${skillsVisible ? 'revealed' : ''}`}
                >
                    <h2 className="text-sm font-bold mb-8 text-[var(--accent-mid)] font-mono-label tracking-widest uppercase">
                        &lt;Technologies /&gt;
                    </h2>
                    <div className="flex flex-wrap gap-5 justify-center lg:justify-start items-center">
                        {allTechnologies.map((skill, i) => (
                            <div
                                key={skill.id}
                                className={`flex justify-center items-center flex-col w-20 reveal-scale ${skillsVisible ? 'revealed' : ''}`}
                                style={{ transitionDelay: `${i * 40}ms` }}
                            >
                                <div
                                    className="float-icon w-16 h-16 p-2 rounded-full border border-[var(--border-glass)] bg-white/5 backdrop-blur-md shadow-lg hover:border-[var(--accent-purple)] hover:scale-110 transition-all duration-300 flex items-center justify-center"
                                    style={{ animationDelay: `${(i % 5) * 0.4}s` }}
                                >
                                    {skill.image ? (
                                        <img
                                            src={skill.image}
                                            alt={skill.name}
                                            className="object-contain max-h-full max-w-full"
                                        />
                                    ) : (
                                        skill.icon
                                    )}
                                </div>
                                <span className="mt-2 text-[11px] font-semibold text-center font-mono-label text-[var(--text-muted)] tracking-wide">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Rubrique 2: Parcours Professionnel & Éducation */}
                <div className="w-full lg:w-7/12 flex flex-col space-y-6">
                    <h2
                        ref={expTitleRef}
                        className={`text-sm font-bold mb-8 text-[var(--accent-mid)] text-center lg:text-left font-mono-label tracking-widest uppercase reveal-right ${expTitleVisible ? 'revealed' : ''}`}
                    >
                        &lt;Parcours Professionnel /&gt;
                    </h2>
                    
                    <div className="relative border-l-0 lg:border-l border-white/10 ml-0 lg:ml-0 space-y-8 pb-4">
                        {experiences.map((experience) => (
                            <ExperienceCard key={experience.id} experience={experience} />
                        ))}
                    </div>

                    {/* Éducation */}
                    <div className="pt-8 space-y-6">
                        <h2 className="text-sm font-bold text-[var(--accent-mid)] text-center lg:text-left font-mono-label tracking-widest uppercase">
                            &lt;Éducation & Formation /&gt;
                        </h2>
                        <div className="space-y-4">
                            {educationList.map((edu) => (
                                <EducationCard key={edu.id} edu={edu} />
                            ))}
                        </div>
                    </div>

                    {/* Certifications & Langues */}
                    <div className="pt-6 space-y-6">
                        <h2 className="text-sm font-bold text-[var(--accent-mid)] text-center lg:text-left font-mono-label tracking-widest uppercase">
                            &lt;Certifications & Langues /&gt;
                        </h2>
                        <div className="space-y-4">
                            {certificationsList.map((cert) => (
                                <CertificationCard key={cert.id} cert={cert} />
                            ))}
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
            </div>
        </section>
    )
}

export default Experiences



