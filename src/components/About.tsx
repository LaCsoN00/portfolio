import Title from "./Title"
import img from '../assets/img.jpg'
import { Code, Server, Network } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const aboutSections = [
    {
        id: 1,
        title: "Développement Frontend & Mobile",
        description: "Conception d'interfaces web et mobiles modernes, responsives et adaptées aux utilisateurs (React, React Native, Next.js, Vue.js, Vite).",
        icon: <Code className="w-6 h-6 text-[var(--accent-mid)]" />,
    },
    {
        id: 2,
        title: "Développement Backend & API",
        description: "Conception de serveurs robustes et gestion de bases de données (Node.js, PostgreSQL, MySQL, Firebase, Supabase, Docker).",
        icon: <Server className="w-6 h-6 text-[var(--accent-mid)]" />,
    },
    {
        id: 3,
        title: "Réseaux & Administration",
        description: "Administration réseau, protocoles TCP/IP, routage et commutation (Certifié Cisco CCNAv7).",
        icon: <Network className="w-6 h-6 text-[var(--accent-mid)]" />,
    },
];

const About = () => {
    const { ref: imgRef, isVisible: imgVisible } = useScrollReveal({ threshold: 0.2 })
    const { ref: textRef, isVisible: textVisible } = useScrollReveal({ threshold: 0.15 })

    return (
        <section className="bg-[var(--bg-deep)] py-32 scan-section" id="About">
            <div className="max-w-6xl mx-auto px-6">
                <Title title="À propos" className="mb-16" />
                <div className="flex flex-col lg:flex-row items-center gap-16 justify-center">

                    {/* Image — slides from left */}
                    <div
                        ref={imgRef}
                        className={`hidden lg:block w-[380px] flex-shrink-0 reveal-left ${imgVisible ? 'revealed' : ''}`}
                    >
                        <div className="relative p-1 rounded-2xl bg-[var(--gradient)]">
                            <img
                                src={img}
                                alt="Luc-Jeeffel"
                                className="w-full h-[480px] object-cover object-[50%_15%] rounded-xl"
                            />
                        </div>
                    </div>

                    {/* Text content — slides from right */}
                    <div
                        ref={textRef}
                        className={`flex-1 max-w-2xl space-y-10 reveal-right ${textVisible ? 'revealed' : ''}`}
                    >
                        <p className="text-sm md:text-base leading-relaxed text-center lg:text-left text-[var(--text-primary)] font-mono-label tracking-wide">
                            <span className="text-[var(--accent-pink)] mr-2">&gt;&gt;</span>
                            Passionné par le développement d'applications web et mobiles, avec un intérêt
                            particulier pour le design responsive et l'expérience utilisateur. J'ai acquis
                            des compétences en développement frontend et backend, ainsi qu'en gestion de
                            projets numériques. Mon objectif est de concevoir des solutions numériques
                            efficaces, ergonomiques et adaptées aux besoins des utilisateurs.
                        </p>
                        <div className="space-y-6">
                            {aboutSections.map((section, i) => (
                                <AboutCard
                                    key={section.id}
                                    section={section}
                                    delay={i * 150}
                                    parentVisible={textVisible}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

interface AboutCardProps {
    section: { id: number; title: string; description: string; icon: React.ReactNode }
    delay: number
    parentVisible: boolean
}

const AboutCard = ({ section, delay, parentVisible }: AboutCardProps) => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

    return (
        <div
            ref={ref}
            className={`reveal-hidden ${(isVisible || parentVisible) ? 'revealed' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="glass-card p-6 flex flex-col md:flex-row items-start md:items-center gap-5 group">
                <div className="p-3 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--accent-purple)]/20 transition-colors duration-300">
                    {section.icon}
                </div>
                <div>
                    <h3 className="text-lg font-bold font-mono-label mb-2 text-white tracking-wide">
                        <span className="text-[var(--accent-pink)] text-sm mr-2">[</span>
                        {section.title}
                        <span className="text-[var(--accent-pink)] text-sm ml-2">]</span>
                    </h3>
                    <p className="text-xs md:text-sm text-[var(--text-muted)] font-mono-label leading-relaxed tracking-wide">
                        {section.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About

