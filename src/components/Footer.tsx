import { Container, Facebook, Mail } from "lucide-react"

const Footer = () => {
    return (
        <footer className="footer footer-center  p-10">
            <aside>
                <Container className="w-10 h-10" />
                <p className="font-bold">
                    LUC-
                    <span className="text-accent">JEEFFEL</span>
                </p>
                <p>Copyright © {new Date().getFullYear()} -  Tous droits réservés</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="mailto:lucmounguengui@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Mail className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://facebook.com/lucmounguengui" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-6 h-6 text-current" />
                    </a>
                </div>
            </nav>
        </footer>
    )
}

export default Footer
