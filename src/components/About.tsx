import Title from "./Title";
import { Code, Network, Database } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const aboutSections = [
    {
        id: 1,
        title: "Systèmes d'Information & Data",
        description: "Structuration et exploitation de bases de données (MySQL, PostgreSQL, Firebase, Supabase), modélisation, reporting, tableaux de bord et fiabilisation des données.",
        icon: <Database className="w-6 h-6 text-[var(--accent-mid)]" />,
    },
    {
        id: 2,
        title: "Développement Web & Mobile",
        description: "Conception et développement d'applications web et mobiles modernes, responsives et ergonomiques (React, React Native, Next.js, Vue.js, Node.js, Vite).",
        icon: <Code className="w-6 h-6 text-[var(--accent-mid)]" />,
    },
    {
        id: 3,
        title: "Réseaux & Support Utilisateurs",
        description: "Administration réseau TCP/IP, routage, commutation, assistance utilisateurs et résolution d'incidents informatiques (Certifié Cisco CCNAv7).",
        icon: <Network className="w-6 h-6 text-[var(--accent-mid)]" />,
    },
];

const About = () => {
    const { ref: textRef, isVisible: textVisible } = useScrollReveal({ threshold: 0.15 });

    return (
        <section className="scan-section scroll-mt-32 pt-8 pb-16" id="About">
            <Title title="À propos" className="mb-10 text-center lg:text-left" />
            <div
                ref={textRef}
                className={`space-y-8 sda-reveal ${textVisible ? 'revealed' : ''}`}
            >
                <p className="text-sm md:text-base leading-relaxed text-center lg:text-left text-[var(--text-primary)] font-mono-label tracking-wide">
                    <span className="text-[var(--accent-pink)] mr-2">&gt;&gt;</span>
                    Passionné par la technologie et les systèmes d'information, je combine la gestion de données avec le développement d'applications web et mobiles modernes. Fort de mes expériences dans la conception d'outils de gestion et la structuration de bases de données, je mets ma rigueur et ma réactivité au service de solutions fiables, d'un reporting précis, de l'amélioration continue des processus et de l'expérience utilisateur. 
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
        </section>
    );
};

interface AboutCardProps {
    section: { id: number; title: string; description: string; icon: React.ReactNode };
    delay: number;
    parentVisible: boolean;
}

const AboutCard = ({ section, delay, parentVisible }: AboutCardProps) => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

    return (
        <div
            ref={ref}
            className={`sda-reveal ${(isVisible || parentVisible) ? 'revealed' : ''}`}
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
    );
};

export default About;
