import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-gray-900">MyPortfolio</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-primary transition-colors">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-primary transition-colors">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-900 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors text-left">Home</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-primary transition-colors text-left">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-primary transition-colors text-left">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors text-left">Contact</button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}