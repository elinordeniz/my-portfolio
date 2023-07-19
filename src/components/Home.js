import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = ({setDarkMode}) => {
  return (
    <div className="min-h-screen scroll-smooth dark:bg-slate-600">
    <Navbar setDarkMode={setDarkMode} />
    <Hero />
    <Projects />
    <About />
    <Contact />
    <Footer />
  </div>
  )
}

export default Home