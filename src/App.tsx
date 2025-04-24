import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Skill from "./pages/Skill"


const App = () => {
  return (
    <div className="space-grotesk">
      <nav className="relative">
        <NavBar />
      </nav>

      <main>
        <Home />
        <Skill />
        <Contact />
      </main>

      <footer className="relative">
        <Footer />
      </footer>
    </div>
  )
}

export default App