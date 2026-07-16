import Header from './components/Header'
import Hero from './components/Hero'
import DimDivider from './components/DimDivider'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <DimDivider label="From concept to handover" />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
