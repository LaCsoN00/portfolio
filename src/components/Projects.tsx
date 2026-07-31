import Title from "./Title"
import { useScrollReveal } from "../hooks/useScrollReveal"

import cpmImg from '../assets/projects/cpm.png';
import cvbuilderImg from '../assets/projects/cvbuilder.png';
import scolibusImg from '../assets/projects/scolibus.png';
import { Github, Video } from "lucide-react";

const projects = [
    {
        id: 1,
        title: 'CPM App',
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
        title: 'Scoli Bus',
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
    const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })

    return (
        <section className={`bg-[var(--bg-deep)] py-32 scan-section ${className || ''}`} id="Projects">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <Title title="Mes Projets" className="mb-16" />
                <div ref={ref} className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <div
                            key={project.id}
                            className={`glass-card p-6 h-fit group reveal-scale ${isVisible ? 'revealed' : ''}`}
                            style={{ transitionDelay: `${i * 150}ms` }}
                        >
                            {/* Image with overlay on hover */}
                            <div className="project-img-wrap relative rounded-xl mb-6">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-56 object-cover"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-deep)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            <div>
                                <h3 className="mb-2 font-bold font-mono-label text-lg text-white group-hover:text-[var(--accent-pink)] transition-colors duration-300 tracking-wide">
                                    <span className="text-[var(--accent-mid)] text-sm mr-2">&#47;&#47; </span>
                                    {project.title}
                                </h3>
                                <p className="text-xs md:text-sm text-[var(--text-muted)] font-mono-label leading-relaxed tracking-wide">{project.description}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-4 mb-6">
                                {project.technologies.map((tech, ti) => (
                                    <span
                                        key={tech}
                                        className={`chip reveal-scale ${isVisible ? 'revealed' : ''}`}
                                        style={{ transitionDelay: `${i * 150 + 200 + ti * 60}ms` }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3">
                                <a className="btn-gradient flex-1 justify-center text-sm" href={project.demoLink} target="_blank" rel="noopener noreferrer">
                                    Demo
                                    <Video className="w-4 h-4 ml-2" />
                                </a>
                                <a className="flex items-center justify-center p-3 rounded-full bg-white/5 border border-white/10 hover:border-[var(--accent-purple)] hover:bg-[var(--accent-purple)]/20 transition-all duration-300 text-white" href={project.repoLink} target="_blank" rel="noopener noreferrer">
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects

