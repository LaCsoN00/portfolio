import Title from "./Title"

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



const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "Next.js", image: imgNEXT },
    { id: 9, name: "Prisma", image: imgPRISMA },
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
    return (
        <div id="Experiences" className={`py-40 ${className || ''}`}>
            <Title title="Expériences & Compétences" className="mb-16" />
            <div className="flex flex-col-reverse md:flex-row justify-center items-start gap-12 max-w-6xl mx-auto px-6">
                {/* Skills Section */}
                <div className="w-full md:w-5/12 flex flex-col items-center">
                    <h2 className="text-xl font-bold mb-6 text-accent">Technologies</h2>
                    <div className="flex flex-wrap gap-6 justify-center items-center">
                        {skills.map((skill) => (
                            <div key={skill.id} className="flex justify-center items-center flex-col w-20">
                                <div className="w-20 h-20 p-2 rounded-full border-2 border-accent/30 bg-base-200 shadow-md hover:border-accent hover:scale-105 transition-all duration-300 flex items-center justify-center">
                                    <img src={skill.image} alt={skill.name}
                                        className="object-contain rounded-full max-h-full max-w-full"
                                    />
                                </div>
                                <span className="mt-2 text-xs font-semibold text-center">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-10 w-full border-t border-accent/20 pt-6">
                        <h3 className="text-lg font-bold mb-4 text-center">Autres Outils & Compétences</h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {["React Native", "Vue.js", "Python", "WordPress", "PostgreSQL", "MySQL", "Firebase", "Supabase", "Docker", "GitHub", "Linux", "Réseau (CCNAv7)", "Modèles d'IA"].map((tech) => (
                                <span key={tech} className="badge badge-accent badge-outline px-3 py-2.5 text-xs font-semibold">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Experiences Section */}
                <div className="w-full md:w-7/12 flex flex-col space-y-6">
                    <h2 className="text-xl font-bold mb-6 text-accent text-center md:text-left">Parcours Professionnel</h2>
                    {experiences.map((expericence) => (
                        <div
                            key={expericence.id}
                            className="flex flex-col bg-base-200 p-6 rounded-2xl shadow-xl border border-base-100 hover:border-accent/30 transition-all duration-300"
                        >
                            <div className="flex items-center">
                                <div className="p-2 bg-base-100 rounded-xl w-14 h-14 flex items-center justify-center shadow-inner flex-shrink-0">
                                    <img
                                        src={expericence.image}
                                        alt={expericence.company}
                                        className="object-contain max-h-full max-w-full rounded-lg"
                                    />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg text-accent font-bold leading-tight">
                                        {expericence.role}
                                    </h3>
                                    <p className="text-sm font-semibold">{expericence.company}</p>
                                    <span className="text-xs text-base-content/60">{expericence.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-6 mt-4 space-y-1 text-sm text-base-content/80">
                                {expericence.description.map((desc, index) => (
                                    <li key={index} className="pl-1">
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experiences
