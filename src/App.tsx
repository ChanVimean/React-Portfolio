import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Skill from "./pages/Skill"


const App = () => {
  return (
    <div className="space-grotesk w-full h-auto overflow-hidden">
      <nav className="relative">
        <NavBar />
      </nav>

      <main>
        <Home />
        <Skill />
        <Projects />
        <Contact />
      </main>

      <footer className="relative">
        <Footer />
      </footer>
    </div>
  )
}

export default App