import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Project from "./components/Project/Project"
import Qualification from "./components/Qualification/Qualification"
import Scrollup from "./components/Scrollup/Scrollup"
import Services from "./components/Services/Services"
import Skills from "./components/Skills/Skills"

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Project />
        <Contact />
      </main>

      <Footer />
      <Scrollup />
    </>
  )
}

export default App
