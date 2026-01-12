// import { useState } from "react";

// export default function Nav() {
  
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur z-50">
//       <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
//         <h1 className="font-medium">Suy Sivlinh</h1>

//         {/* Desktop Menu */}
      

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-400 hover:text-white transition-colors duration-200"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-gray-900/95 backdrop-blur border-t border-gray-800/50">
//           <div className="px-6 py-4 space-y-2">
//             <a href="#home" className="block py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded transition-all duration-200" onClick={() => setIsOpen(false)}>Home</a>
//             <a href="#about" className="block py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded transition-all duration-200" onClick={() => setIsOpen(false)}>About</a>
//             <a href="#projects" className="block py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded transition-all duration-200" onClick={() => setIsOpen(false)}>Projects</a>
//             <a href="#skill" className="block py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded transition-all duration-200" onClick={() => setIsOpen(false)}>Skills</a>
//             <a href="#contact" className="block py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded transition-all duration-200" onClick={() => setIsOpen(false)}>Contact</a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    // only toggle menu on mobile
    if (window.innerWidth < 768) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="font-medium text-white">Suy Sivlinh</h1>

        <div className="flex items-center gap-6">
          {/* Desktop links */}
          <div className="hidden md:flex gap-8 text-gray-400 font-medium">
            <a href="#home" className="hover:text-indigo-400">Home</a>
            <a href="#about" className="hover:text-indigo-400">About</a>
            <a href="#projects" className="hover:text-indigo-400">Projects</a>
            <a href="#skill" className="hover:text-indigo-400">Skills</a>
            <a href="#contact" className="hover:text-indigo-400">Contact</a>
          </div>

          {/* Button visible on all screens */}
          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-white transition"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown ONLY */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 border-t border-gray-800">
          <div className="px-6 py-4 space-y-2">
            {["home", "about", "projects", "skill", "contact"].map(item => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
