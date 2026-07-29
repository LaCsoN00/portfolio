import { Mail } from "lucide-react"
import img from '../assets/img.jpg'

const Home = () => {
    return (
        <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center py-40">

            <div className="flex flex-col ">
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0 mb-10">
                    Bonjour , <br /> je suis {" "}
                    <span className="text-accent">Luc-Jeeffel</span>
                </h1>

                <p className="my-4 text-md text-center md:text-left max-w-lg leading-relaxed">
                    Informaticien et Développeur passionné par le développement d'applications web et mobiles, 
                    spécialisé dans la création d'interfaces intuitives et performantes.
                </p>
                <a href="https://wa.me/24177401848" className="btn btn-accent md:w-fit" target="_blank" rel="noopener noreferrer">
                    <Mail className="w-5 h-5" />
                    Contactez-moi
                </a>

            </div>

            <div className="md:ml-60">
                <img src={img} alt="" className="w-96 h-96 object-cover object-[50%_25%] border-8 border-accent shadow-xl" 
                style={{
                    borderRadius : "30% 70% 70% 30% / 67% 62% 38% 33%"
                }}
                />
            </div>
        </div>
    )
}

export default Home
