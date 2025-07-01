import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-dark' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-yellow-400 rounded-xl flex items-center justify-center pulse-glow">
              <Sparkles className="text-white" size={20} />
            </div>
            <span className="text-2xl font-bold gradient-text">Beyond Career</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {['hero', 'about', 'services', 'testimonials', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-300 hover:text-white transition-all duration-300 font-medium relative group"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-yellow-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden glass p-2 rounded-xl"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden glass-dark border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            {['hero', 'about', 'services', 'testimonials', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors font-medium"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation