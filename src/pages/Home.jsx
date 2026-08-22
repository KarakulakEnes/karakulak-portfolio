import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToSection } from '../hooks/useScrollSpy'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Education from '../components/Education/Education'
import Experience from '../components/Experience/Experience'
import Projects from '../components/Projects/Projects'
import Footer from '../components/Footer/Footer'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => scrollToSection(location.state.scrollTo), 100)
      window.history.replaceState({}, '')
    }
  }, [location.state])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
