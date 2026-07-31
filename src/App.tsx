import About from "./components/About";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div>

      <Navbar />
      <Home />

      <About />

      <Experiences />

      <Projects />
      
      <Testimonials />

      <Footer/>

      <ScrollToTop />

    </div>
  )
}