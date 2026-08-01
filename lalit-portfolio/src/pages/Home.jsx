import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Projects from "../components/Projects";
import HireMe from "../components/HireMe";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackgroundAnimation from "../components/BackgroundAnimation";
import ScrollProgress from "../components/ScrollProgress";
import ScrollTop from "../components/ScrollTop";

function Home() {
    return (
        <>
            <BackgroundAnimation />
            <ScrollProgress />
            <ScrollTop />
            <Navbar />
            <Hero />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Services />
            <Projects />
            <HireMe />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;