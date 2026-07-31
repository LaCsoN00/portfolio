import { Code2, Facebook, Mail } from "lucide-react"

const Footer = () => {
    return (
        <footer className="py-12 bg-[var(--bg-surface)] border-t border-white/5 flex flex-col items-center">
            <aside className="flex flex-col items-center mb-6">
                <div className="flex items-center font-display font-extrabold text-2xl tracking-tighter mb-4 text-white">
                    <Code2 className="mr-2 text-[var(--accent-pink)]" size={28} />
                    LUC-JEEFFEL
                </div>
                <p className="font-body text-[var(--text-muted)] text-sm">
                    Copyright © {new Date().getFullYear()} - Tous droits réservés
                </p>
            </aside>
            <nav>
                <div className="flex gap-6">
                    <a href="mailto:lucmounguengui@gmail.com" className="text-[var(--text-dim)] hover:text-[var(--accent-pink)] transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                        <Mail className="w-6 h-6" />
                    </a>
                    <a href="https://facebook.com/lucmounguengui" className="text-[var(--text-dim)] hover:text-[var(--accent-pink)] transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-6 h-6" />
                    </a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer
