import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"


const App = () => {
  return (
    <div className="space-grotesk">
      <nav className="relative">
        <NavBar />
      </nav>

      <main>
        <Home />
      </main>

      <footer className="relative">
        <Footer />
      </footer>
    </div>
  )
}

export default App