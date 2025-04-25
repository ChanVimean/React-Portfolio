import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Skill from "./pages/Skill";

const App = () => {
  return (
    <div className="space-grotesk w-full h-auto overflow-hidden">
      <nav>
        <NavBar />
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
