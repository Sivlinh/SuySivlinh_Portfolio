import { useState, useEffect } from "react";


export default function Nav() {

   const [isOpen, setIsOpen] = useState(false);
   const [currentSection, setCurrentSection] = useState(window.location.hash || '#home');

   useEffect(() => {
     const handleHashChange = () => {
       setCurrentSection(window.location.hash || '#home');
     };
     window.addEventListener('hashchange', handleHashChange);
     return () => window.removeEventListener('hashchange', handleHashChange);
   }, []);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'skill', 'contact'];
    const observerOptions = { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection('#' + entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="font-bold text-indigo-500">Suy Sivlinh</h1>

        {/* Desktop Menu */}
      
        <div className="hidden md:flex gap-8 text-gray-400 font-medium ">
           <a href="#home" className={`inline-block px-3 py-1 rounded-md transition-colors duration-200 ${currentSection === '#home' ? 'text-indigo-400 bg-gray-800/50 shadow-lg' : 'text-gray-400 hover:text-indigo-400'}`}>Home</a>
           <a href="#about" className={`inline-block px-3 py-1 rounded-md transition-colors duration-200 ${currentSection === '#about' ? 'text-indigo-400 bg-gray-800/50 shadow-lg' : 'text-gray-400 hover:text-indigo-400'}`}>About</a>
           <a href="#projects" className={`inline-block px-3 py-1 rounded-md transition-colors duration-200 ${currentSection === '#projects' ? 'text-indigo-400 bg-gray-800/50 shadow-lg' : 'text-gray-400 hover:text-indigo-400'}`}>Projects</a>
           <a href="#skill" className={`inline-block px-3 py-1 rounded-md transition-colors duration-200 ${currentSection === '#skill' ? 'text-indigo-400 bg-gray-800/50 shadow-lg' : 'text-gray-400 hover:text-indigo-400'}`}>Skills</a>
           <a href="#contact" className={`inline-block px-3 py-1 rounded-md transition-colors duration-200 ${currentSection === '#contact' ? 'text-indigo-400 bg-gray-800/50 shadow-lg' : 'text-gray-400 hover:text-indigo-400'}`}>Contact</a>
         </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur border-t border-gray-800/50 mx-2 my-2 rounded-lg shadow-lg">
          <div className="px-6 py-4 space-y-2">
            <a href="#home" className={`block py-2 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200 ${currentSection === '#home' ? 'text-indigo-400 bg-gray-800/50 shadow-lg' : 'text-gray-400'}`} onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className={`block py-2 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200 ${currentSection === '#about' ? 'text-indigo-400 bg-gray-800/50 shadow-lg' : 'text-gray-400'}`} onClick={() => setIsOpen(false)}>About</a>
            <a href="#projects" className={`block py-2 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200 ${currentSection === '#projects' ? 'text-indigo-400 bg-gray-800/50 shadow-lg' : 'text-gray-400'}`} onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#skill" className={`block py-2 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200 ${currentSection === '#skill' ? 'text-indigo-400 bg-gray-800/50 shadow-lg' : 'text-gray-400'}`} onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#contact" className={`block py-2 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200 ${currentSection === '#contact' ? 'text-indigo-400 bg-gray-800/50 shadow-lg' : 'text-gray-400'}`} onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}



