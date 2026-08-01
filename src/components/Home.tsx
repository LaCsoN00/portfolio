import { Mail, Download } from "lucide-react"
import { useTypewriter } from "../hooks/useTypewriter"
import { useScrollReveal } from "../hooks/useScrollReveal"
import { FaHtml5, FaReact, FaNodeJs, FaDocker } from "react-icons/fa"
import { SiTypescript, SiNextdotjs } from "react-icons/si"

const roles = [
    "Développeur Web",
    "Développeur Mobile",
    "Développeur Fullstack",
    "Informaticien",
]

const Home = () => {
    const { text, isDeleting } = useTypewriter({
        words: roles,
        typeSpeed: 75,
        deleteSpeed: 100,
        pauseDuration: 1800,
    })

    const { ref: leftRef, isVisible: leftVisible } = useScrollReveal({ threshold: 0.1 });
    const { ref: rightRef, isVisible: rightVisible } = useScrollReveal({ threshold: 0.1 });

    return (
        <section
            id="Home"
            className="grid-hero-bg flex flex-col md:flex-row justify-center items-center py-24 md:py-48 min-h-screen px-4 sm:px-6 overflow-hidden"
        >
            <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between z-10 gap-10 md:gap-8">
                
                {/* Left Side: Content */}
                <div
                    ref={leftRef}
                    className={`flex flex-col items-center md:items-start text-center md:text-left flex-1 hero-left-anim ${leftVisible ? 'revealed' : ''}`}
                >
                    <p className="hero-label font-mono-label text-xs tracking-[0.2em] uppercase mb-4 text-[var(--accent-mid)]">
                        &gt; Bonjour, je suis
                    </p>

                    <h1 className="hero-name font-display text-5xl md:text-7xl font-extrabold mb-2 text-white">
                        Luc-Jeeffel
                    </h1>

                    {/* Typewriter role */}
                    <div className="hero-role flex items-center h-12 mb-6">
                        <span className="font-mono-label font-bold text-2xl md:text-4xl gradient-text tracking-wide">
                            {text}
                        </span>
                        <span
                            className="cursor-blink"
                            style={{ opacity: isDeleting ? 0.5 : 1 }}
                        />
                    </div>

                    <p className="hero-desc font-mono-label text-[var(--text-muted)] text-sm max-w-lg mb-8 leading-loose tracking-wide">
                        <span className="text-[var(--accent-pink)]">// </span>
                        Spécialisé dans la création d'expériences web immersives.<br/>
                        Conception d'interfaces modernes, responsives et performantes.
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

                {/* Right Side: Profile with glowing ring & badges */}
                <div
                    ref={rightRef}
                    className={`flex-1 flex justify-center md:justify-end items-center relative hero-img-anim mt-10 md:mt-0 ${rightVisible ? 'revealed' : ''}`}
                >
                    <div className="profile-ring">
                        <img
                            src="/profil.jpeg"
                            alt="Luc-Jeeffel"
                            className="w-52 h-52 sm:w-64 sm:h-64 md:w-[360px] md:h-[360px] object-cover rounded-full border border-white/10 relative z-10"
                            style={{ objectPosition: '50% 15%' }}
                        />
                        
                        {/* Floating Badges — vague gauche → droite, même durée, delays progressifs */}
                        {/* Gauche haut : HTML  delay 0s */}
                        <div className="tech-badge" style={{ top: '18%', left: '-14%', animation: 'wave-badge 2.4s ease-in-out infinite', animationDelay: '0s' }}>
                            <FaHtml5 size={26} className="text-[#E34F26]" />
                        </div>
                        {/* Centre haut : React  delay 0.4s */}
                        <div className="tech-badge" style={{ top: '-10%', left: '50%', transform: 'translateX(-50%)', animation: 'wave-badge 2.4s ease-in-out infinite', animationDelay: '0.4s' }}>
                            <FaReact size={26} className="text-[#61DAFB]" />
                        </div>
                        {/* Droite haut : TypeScript  delay 0.8s */}
                        <div className="tech-badge" style={{ top: '18%', right: '-14%', animation: 'wave-badge 2.4s ease-in-out infinite', animationDelay: '0.8s' }}>
                            <SiTypescript size={24} className="text-[#3178C6]" />
                        </div>
                        {/* Droite bas : Node.js  delay 1.2s */}
                        <div className="tech-badge" style={{ bottom: '18%', right: '-14%', animation: 'wave-badge 2.4s ease-in-out infinite', animationDelay: '1.2s' }}>
                            <FaNodeJs size={26} className="text-[#339933]" />
                        </div>
                        {/* Centre bas : Docker  delay 1.6s */}
                        <div className="tech-badge" style={{ bottom: '-10%', left: '50%', transform: 'translateX(-50%)', animation: 'wave-badge 2.4s ease-in-out infinite', animationDelay: '1.6s' }}>
                            <FaDocker size={26} className="text-[#2496ED]" />
                        </div>
                        {/* Gauche bas : Next.js  delay 2.0s */}
                        <div className="tech-badge" style={{ bottom: '18%', left: '-14%', animation: 'wave-badge 2.4s ease-in-out infinite', animationDelay: '2.0s' }}>
                            <SiNextdotjs size={24} className="text-white" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Home
