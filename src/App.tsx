import { Typewriter } from "react-simple-typewriter";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Skill from "./pages/Skill";

const App = () => {

  const version: string = "V1.2.0";

  const features: string[] = [
    "🚀 New Modern UI Redesign",
    "🌐 Added Social Media Links",
    "🛠️ Minor Bug Fixes and Optimizations",
    "🎨 Improved Dynamic Background",
    "🐣 Something mysterious awaits... 👀",
  ];

  return (
    <div className="space-grotesk w-full h-auto overflow-hidden">
      <nav>
        <NavBar
          version={version}
          feature={
            <Typewriter
              words={features}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          }
        />
      </nav>

      <main>
        <section id="home">
          <Home />
        </section>
        <section id="skills">
          <Skill />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="resume">
          <Resume />
        </section>
      </main>

      <footer className="relative">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
