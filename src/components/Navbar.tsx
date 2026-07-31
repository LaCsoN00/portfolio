import { useState, useEffect } from "react"
import { Code2 } from "lucide-react"

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30)
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 w-full z-50 flex justify-center md:justify-between items-center p-4 md:px-12 transition-all duration-500 border-b ${
                scrolled
                    ? "backdrop-blur-xl bg-[#0D0B1E]/80 border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                    : "bg-transparent border-transparent"
            }`}
            style={{ animation: "fade-up-in 0.6s ease both" }}
        >
            <a href="#" className="flex items-center font-display font-extrabold text-2xl tracking-tighter">
                <Code2 className="mr-2 text-[var(--accent-pink)]" size={28} />
                LUC-JEEFFEL
            </a>

            <ul className="hidden md:flex space-x-8">
                {[
                    { href: "#Home", label: "Accueil" },
                    { href: "#About", label: "À propos" },
                    { href: "#Experiences", label: "Expériences" },
                    { href: "#Projects", label: "Projets" },
                ].map((link) => (
                    <li key={link.href}>
                        <a
                            href={link.href}
                            className="font-mono-label text-xs tracking-[0.15em] uppercase text-[var(--text-muted)] hover:text-white transition-colors duration-300 relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[var(--gradient)] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar

