import { useState, useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Masquer si on est tout en haut de la page (< 150px)
            if (currentScrollY < 150) {
                setVisible(false);
                if (timerRef.current) clearTimeout(timerRef.current);
                lastScrollY.current = currentScrollY;
                return;
            }

            // S'afficher lors des mouvements de scroll vers le bas ou activité
            if (currentScrollY > lastScrollY.current || currentScrollY > 200) {
                setVisible(true);
            }

            lastScrollY.current = currentScrollY;

            // Réinitialiser le timer de 3 secondes d'inactivité
            if (timerRef.current) clearTimeout(timerRef.current);

            timerRef.current = setTimeout(() => {
                setVisible(false);
            }, 2000);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "auto" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`scroll-top-btn ${visible ? "visible" : ""}`}
            aria-label="Remonter en haut"
            title="Remonter en haut"
        >
            <ArrowUp className="w-5 h-5" />
        </button>
    );
};

export default ScrollToTop;
