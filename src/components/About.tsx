import Title from "./Title"
import img from '../assets/img.jpg'
import { Code, Server, Network } from "lucide-react";

const aboutSections = [
    {
        id: 1,
        title: "Développement Frontend & Mobile",
        description: "Conception d'interfaces web et mobiles modernes, responsives et adaptées aux utilisateurs (React, React Native, Next.js, Vue.js, Vite).",
        icon: <Code className="w-6 h-6 text-accent" />,
    },
    {
        id: 2,
        title: "Développement Backend & API",
        description: "Conception de serveurs robustes et gestion de bases de données (Node.js, PostgreSQL, MySQL, Firebase, Supabase, Docker).",
        icon: <Server className="w-6 h-6 text-accent" />,
    },
    {
        id: 3,
        title: "Réseaux & Administration",
        description: "Administration réseau, protocoles TCP/IP, routage et commutation (Certifié Cisco CCNAv7).",
        icon: <Network className="w-6 h-6 text-accent" />,
    },
];

const About = () => {
    return (
        <div className="bg-base-300 py-40" id="About">
            <div className="max-w-6xl mx-auto px-6">
                <Title title="À propos" className="mb-16" />
                <div className="flex flex-col lg:flex-row items-center gap-12 justify-center">
                    <div className="hidden lg:block w-96 flex-shrink-0">
                        <img src={img} alt="Luc-Jeeffel" className="w-full h-[450px] object-cover object-top rounded-2xl shadow-2xl border-4 border-accent/20" />
                    </div>

                    <div className="flex-1 max-w-2xl space-y-8">
                        <p className="text-lg leading-relaxed text-center lg:text-left text-base-content/95 font-medium">
                            Passionné par le développement d’applications web et mobiles, avec un intérêt particulier pour le design responsive et l’expérience utilisateur. J’ai acquis des compétences en développement frontend et backend, ainsi qu’en gestion de projets numériques. Mon objectif est de concevoir des solutions numériques efficaces, ergonomiques et adaptées aux besoins des utilisateurs.
                        </p>
                        <div className="space-y-4">
                            {aboutSections.map((section) => (
                                <div key={section.id}
                                    className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl shadow-lg border border-base-200 hover:border-accent/40 transition-colors duration-300"
                                >
                                    <div className="mb-4 md:mb-0 md:mr-4 p-3 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        {section.icon}
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h2 className="text-xl font-bold mb-1">
                                            {section.title}
                                        </h2>
                                        <p className="text-sm text-base-content/75 leading-relaxed">
                                            {section.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
