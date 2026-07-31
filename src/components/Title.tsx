import { useScrollReveal } from "../hooks/useScrollReveal"

interface TitleProps {
    title: string;
    className?: string;
}

const Title = ({ title, className }: TitleProps) => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })

    return (
        <div ref={ref} className={`text-center ${className || ''}`}>
            <h1
                className={`glitch-title uppercase font-bold text-3xl md:text-4xl reveal-hidden ${isVisible ? 'revealed' : ''}`}
                data-text={title}
            >
                {title}
            </h1>
            {/* Animated underline */}
            <div
                className="mx-auto mt-3 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"
                style={{
                    width: isVisible ? "120px" : "0px",
                    transition: "width 0.8s cubic-bezier(0.4,0,0.2,1) 0.3s",
                }}
            />
        </div>
    )
}

export default Title
