import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Awards from './components/Awards.jsx'
import Strengths from './components/Strengths.jsx'
import Skills from './components/Skills.jsx'
import Direction from './components/Direction.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Awards />
        <Strengths />
        <Skills />
        <Direction />
        <Contact />
      </main>
    </>
  )
}
