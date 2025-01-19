import Navbar from "./navbar/Navbar";
import Hero from "./hero/Hero";
import About from "./about/About";
import Carrer from "./carrer/Carrer";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";


function App() {
    return (
        <div className="bg-primary text-secondary text-2xl font-serif">
            <Navbar />
            <Hero />
            <About />
            <Carrer />
            <Skills />
            {/* <Projects /> */}
            <Contact />

        </div>
    );
}

export default App;
