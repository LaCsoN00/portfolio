import { Mail, Download } from "lucide-react";
import { useTypewriter } from "../hooks/useTypewriter";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { FaHtml5, FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiTypescript, SiNextdotjs } from "react-icons/si";
import About from "./About";

const roles = [
    "Assistant Data & SI",
    "Développeur Web & Mobile",
    "Informaticien & Réseaux",
];

const ProfileRing = () => (
    <div className="profile-ring">
        <img
            src="/profil.jpeg"
            alt="Luc-Jeeffel"
            className="w-52 h-52 sm:w-64 sm:h-64 md:w-[360px] md:h-[360px] object-cover rounded-full border border-white/10 relative z-10"
            style={{ objectPosition: '50% 15%' }}
        />
        
        {/* Floating Badges */}
        <div className="tech-badge" style={{ top: '18%', left: '-14%', animation: 'wave-badge 2.4s ease-in-out infinite', animationDelay: '0s' }}>
            <FaHtml5 size={26} className="text-[#E34F26]" />
        </div>
        <div className="tech-badge" style={{ top: '-10%', left: '50%', transform: 'translateX(-50%)', animation: 'wave-badge 2.4s ease-in-out infinite', animationDelay: '0.4s' }}>
            <FaReact size={26} className="text-[#61DAFB]" />
        </div>
        <div className="tech-badge" style={{ top: '18%', right: '-14%', animation: 'wave-badge 2.4s ease-in-out infinite', animationDelay: '0.8s' }}>
            <SiTypescript size={24} className="text-[#3178C6]" />
        </div>
        <div className="tech-badge" style={{ bottom: '18%', right: '-14%', animation: 'wave-badge 2.4s ease-in-out infinite', animationDelay: '1.2s' }}>
            <FaNodeJs size={26} className="text-[#339933]" />
        </div>
        <div className="tech-badge" style={{ bottom: '-10%', left: '50%', transform: 'translateX(-50%)', animation: 'wave-badge 2.4s ease-in-out infinite', animationDelay: '1.6s' }}>
            <FaDocker size={26} className="text-[#2496ED]" />
        </div>
        <div className="tech-badge" style={{ bottom: '18%', left: '-14%', animation: 'wave-badge 2.4s ease-in-out infinite', animationDelay: '2.0s' }}>
            <SiNextdotjs size={24} className="text-white" />
        </div>
    </div>
);

const Home = () => {
    const { text, isDeleting } = useTypewriter({
        words: roles,
        typeSpeed: 75,
        deleteSpeed: 100,
        pauseDuration: 1800,
    });

    const { ref: leftRef, isVisible: leftVisible } = useScrollReveal({ threshold: 0.1, once: true });
    const { ref: rightRef, isVisible: rightVisible } = useScrollReveal({ threshold: 0.1, once: true });
    const { ref: mobileRef, isVisible: mobileVisible } = useScrollReveal({ threshold: 0.1, once: true });

    return (
        <div className="grid-hero-bg relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32 flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
                
                {/* Left Side Column: Home content + About section */}
                <div className="w-full lg:w-7/12 space-y-24 z-10">
                    
                    {/* HERO (HOME) SECTION */}
                    <section
                        id="Home"
                        className="scroll-mt-32 flex flex-col justify-center min-h-[calc(100vh-12rem)]"
                    >
                        {/* Mobile Profile Photo (At top on mobile screens) */}
                        <div
                            ref={mobileRef}
                            className={`lg:hidden flex justify-center items-center mb-8 py-2 hero-img-anim ${mobileVisible ? 'revealed' : ''}`}
                        >
                            <ProfileRing />
                        </div>

                        <div
                            ref={leftRef}
                            className={`flex flex-col items-center md:items-start text-center md:text-left hero-left-anim ${leftVisible ? 'revealed' : ''}`}
                        >
                            <p className="hero-label font-mono-label text-xs tracking-[0.2em] uppercase mb-4 text-[var(--accent-mid)]">
                                &gt; Bonjour, je suis
                            </p>

                            <h1 className="hero-name font-display text-5xl md:text-7xl font-extrabold mb-2 text-white">
                                Luc-Jeeffel
                            </h1>

                            {/* Typewriter role */}
                            <div className="hero-role flex items-center h-12 mb-6 max-w-full overflow-hidden">
                                <span className="font-mono-label font-bold text-lg sm:text-2xl md:text-4xl gradient-text tracking-wide whitespace-nowrap">
                                    {text}
                                </span>
                                <span
                                    className="cursor-blink flex-shrink-0"
                                    style={{ opacity: isDeleting ? 0.5 : 1 }}
                                />
                            </div>

                            <p className="hero-desc font-mono-label text-[var(--text-muted)] text-sm max-w-lg mb-8 leading-loose tracking-wide">
                                <span className="text-[var(--accent-pink)]">// </span>
                                Spécialisé en Systèmes d'Information, gestion & structuration de données<br/>
                                et développement d'applications web & mobiles performantes.
                            </p>
                            
                            <div className="hero-cta flex flex-row gap-3 items-center w-full md:w-auto">
                                <a
                                    href="https://wa.me/24177401848"
                                    className="btn-gradient flex-1 md:flex-none justify-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Mail className="w-5 h-5" />
                                    Contactez-moi
                                </a>
                                <a
                                    href="/cv.pdf"
                                    download="CV_Luc-Jeeffel_Mounguengui.pdf"
                                    className="btn-outline flex-1 md:flex-none justify-center"
                                >
                                    <Download className="w-5 h-5" />
                                    Télécharger CV
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* ABOUT SECTION */}
                    <About />

                </div>

                {/* Right Side Column: Desktop Sticky Profile Ring & Badges */}
                <div
                    ref={rightRef}
                    className={`hidden lg:flex w-5/12 justify-center lg:justify-end items-center sticky top-28 self-start z-20 py-8 hero-img-anim ${rightVisible ? 'revealed' : ''}`}
                >
                    <ProfileRing />
                </div>

            </div>
        </div>
    );
};

export default Home;
