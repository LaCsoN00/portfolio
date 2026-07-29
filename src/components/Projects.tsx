import Title from "./Title"

import cpmImg from '../assets/projects/cpm.png';
import cvbuilderImg from '../assets/projects/cvbuilder.png';
import scolibusImg from '../assets/projects/scolibus.png';
import { Github, Video } from "lucide-react";


const projects = [
    {
        id: 1,
        title: 'Gestionnaire de projets',
        description: 'Application de gestion de projets',
        technologies: ['Vite', 'Typescript', 'Docker', 'Express'],
        demoLink: 'https://cpm-new-ajkx.vercel.app/',
        repoLink: 'https://github.com/LaCsoN00/cpm_new.git',
        image: cpmImg,
    },
    {
        id: 4,
        title: 'CV Builder',
        description: 'Application de création de CV',
        technologies: ['Next.js', 'Tailwind CSS', 'JavaScript'],
        demoLink: 'https://cv-builder-sandy-two.vercel.app/',
        repoLink: 'https://github.com/LaCsoN00/cv_builder.git',
        image: cvbuilderImg,
    },
    {
        id: 6,
        title: 'Scolibus',
        description: 'Application de transport scolaire',
        technologies: ['Typescript', 'Javascript', 'HTML', 'CSS'],
        demoLink: 'https://scolibus.vercel.app',
        repoLink: 'https://github.com/LaCsoN00/Scolibus.git',
        image: scolibusImg,
    },
];

interface ProjectsProps {
    className?: string;
}

const Projects = ({ className }: ProjectsProps) => {
    return (
        <div className={`bg-base-300 py-40 ${className || ''}`} id="Projects">
            <div className="max-w-screen-lg mx-auto">
                <Title title="Mes Projets" className="mb-10" />
                <div className="grid md:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg ">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full rounded-xl h-56 object-cover"
                            />
                            <div>
                                <h1 className="my-2 font-bold">
                                    {project.title}
                                </h1>
                                <p className="text-sm">{project.description}</p>

                            </div>
                            <div className="flex flex-wrap gap-2 my-3">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="badge badge-accent badge-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex">
                                <a className="btn btn-accent w-2/3" href={project.demoLink}>
                                    Demo
                                    <Video className="w-4" />
                                </a>

                                <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}>
                                    <Github className="w-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
