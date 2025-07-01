import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="mesh-gradient fixed inset-0 -z-10" />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default App