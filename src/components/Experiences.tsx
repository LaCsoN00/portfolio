import Title from "./Title"
import { useScrollReveal } from "../hooks/useScrollReveal"

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
        period: "Fév 2025 - Mai 2025",
        description: [
            "Développement d'une application de facturation et de gestion de projet.",
            "Assistance aux utilisateurs et résolution de problèmes techniques.",
        ],
        image: cpm,
    },
    {
        id: 2,
        role: "Agent Informatique",
        company: "IPI9",
        period: "Juin 2022 - Juin 2024",
        description: [
            "Création d'un micro logiciel de gestion de stock.",
            "Utilisation d'outils informatiques pour le suivi et la gestion des demandes.",
        ],
        image: ipi9,
    },
    {
        id: 3,
        role: "Agent Commercial",
        company: "Airtel Gabon",
        period: "Mai 2021 - Mars 2022",
        description: [
            "Ouverture de compte Airtel Money et promotion des produits Airtel.",
            "Gestion de la clientèle, des commandes et des incidents.",
            "Communication et support client.",
        ],
        image: airtel,
    },
];

interface ExperiencesProps {
    className?: string;
}

const Experiences = ({ className }: ExperiencesProps) => {
    const { ref: skillsRef, isVisible: skillsVisible } = useScrollReveal({ threshold: 0.1 })
    const { ref: expRef, isVisible: expVisible } = useScrollReveal({ threshold: 0.1 })

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

                {/* Rubrique 2: Parcours Professionnel */}
                <div
                    ref={expRef}
                    className="w-full lg:w-7/12 flex flex-col space-y-6"
                >
                    <h2 className={`text-sm font-bold mb-8 text-[var(--accent-mid)] text-center lg:text-left font-mono-label tracking-widest uppercase reveal-right ${expVisible ? 'revealed' : ''}`}>
                        &lt;Parcours Professionnel /&gt;
                    </h2>
                    
                    <div className="relative border-l border-white/10 ml-4 lg:ml-0 space-y-8 pb-4">
                        {experiences.map((experience, i) => (
                            <div
                                key={experience.id}
                                className={`relative pl-6 lg:pl-8 reveal-right ${expVisible ? 'revealed' : ''}`}
                                style={{ transitionDelay: `${100 + i * 180}ms` }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[-6px] top-4 w-3 h-3 rounded-full bg-[var(--gradient)] shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
                                
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experiences



