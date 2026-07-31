import { Star } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import Title from "./Title";

interface TestimonialItem {
  name: string;
  role: string;
  text: string;
  initials: string;
  image: string;
}

const testimonials: TestimonialItem[] = [
  {
    name: "Lionel Yannick",
    role: "Conseiller spécial, Présidence de la république gabonaise",
    text: "Luc-Jeeffel a complètement transformé notre vision digitale. Son expertise technique et son sens du design ont permis de livrer un produit bien au-delà de nos attentes.",
    initials: "LY",
    image: "/lionel.jpeg"
  },
  {
    name: "Sletch Teddy",
    role: "Juriste, TechLegalGroup",
    text: "Travailler avec Luc a été une expérience formidable. Sa réactivité et sa capacité à traduire des concepts complexes en interfaces claires sont exceptionnelles.",
    initials: "ST",
    image: "/sletch.jpeg"
  },
  {
    name: "Krist Gérald",
    role: "Agent Commercial, Airtel Gabon",
    text: "Un développeur brillant qui comprend non seulement le code, mais aussi les enjeux business. Je le recommande vivement pour tout projet ambitieux.",
    initials: "KG",
    image: "/krist.jpeg"
  }
];

const Testimonials = () => {
    const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

    // Dupliquer la liste pour assurer un défilement infini fluide
    const repeatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

    return (
        <section id="Testimonials" className="py-32 bg-[var(--bg-deep)] grid-line-bg border-t border-white/5 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 mb-16 relative z-10">
                <Title title="Témoignages" />
            </div>

            <div ref={ref} className={`marquee-container reveal-hidden ${isVisible ? 'revealed' : ''}`}>
                <div className="marquee-track py-4">
                    {repeatedTestimonials.map((testimonial, index) => (
                        <div 
                            key={index} 
                            className="testimonial-card w-[340px] md:w-[400px] h-[280px] flex flex-col justify-between flex-shrink-0"
                        >
                            <p className="text-[var(--text-muted)] font-mono-label text-xs md:text-sm leading-relaxed relative z-10 tracking-wide flex-1 overflow-hidden">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-4">
                                <div className="testimonial-avatar w-14 h-14 rounded-full flex-shrink-0 font-mono-label overflow-hidden">
                                    {testimonial.image ? (
                                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover rounded-full" />
                                    ) : (
                                        testimonial.initials
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-mono-label font-bold text-white tracking-wide text-sm md:text-base truncate">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-xs font-mono-label text-[var(--accent-mid)] tracking-wide mt-0.5 truncate">
                                        {testimonial.role}
                                    </p>
                                    <div className="flex text-[var(--accent-pink)] mt-1.5 gap-0.5">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} size={13} fill="currentColor" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
