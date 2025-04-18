import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='w-full py-4 flex items-center justify-between px-4 md:px-10 text-gray-400 relative'>
        <h1 className='bg-gradient-to-l from-indigo-500 via-violet-500 to-purple-400 bg-clip-text text-transparent text-xl md:text-2xl font-bold'>Kapish Rohilla</h1>
        
        <button 
          className='md:hidden text-gray-400 focus:outline-none' 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'} text-2xl`}></i>
        </button>

        <ul className='hidden md:flex items-center gap-5 justify-center'>
            <li className='cursor-pointer hover:text-violet-500 transition-colors'>Home</li>
            <li className='cursor-pointer hover:text-violet-500 transition-colors'>About</li>
            <li className='cursor-pointer hover:text-violet-500 transition-colors'>Projects</li>
            <li className='cursor-pointer hover:text-violet-500 transition-colors'>Contact</li>
            <li className='cursor-pointer hover:text-violet-500 transition-colors'>
              <a href="#" aria-label="GitHub Profile">
                <i className="bi bi-github text-xl"></i>
              </a>
            </li>
            <li className='cursor-pointer hover:text-violet-500 transition-colors'>
              <a href="#" aria-label="LinkedIn Profile">
                <i className="bi bi-linkedin text-xl"></i>
              </a>
            </li>
            <li className='cursor-pointer hover:text-violet-500 transition-colors'>
              <a href="#" aria-label="Email Contact">
                <i className="bi bi-envelope text-xl"></i>
              </a>
            </li>
        </ul>

        {isMenuOpen && (
          <div className='md:hidden absolute top-full right-0 w-full bg-neutral-900 border-t border-neutral-800 z-50'>
            <ul className='flex flex-col items-center gap-4 py-4'>
              <li className='cursor-pointer hover:text-violet-500 transition-colors'>Home</li>
              <li className='cursor-pointer hover:text-violet-500 transition-colors'>About</li>
              <li className='cursor-pointer hover:text-violet-500 transition-colors'>Projects</li>
              <li className='cursor-pointer hover:text-violet-500 transition-colors'>Contact</li>
              <li className='flex gap-6 mt-2'>
                <a href="https://github.com/kapish9741" className='cursor-pointer hover:text-violet-500 transition-colors' aria-label="GitHub Profile">
                  <i className="bi bi-github text-xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/kapishrohilla/" className='cursor-pointer hover:text-violet-500 transition-colors' aria-label="LinkedIn Profile">
                  <i className="bi bi-linkedin text-xl"></i>
                </a>
                <a href="kapishrohilla@gmail.com" className='cursor-pointer hover:text-violet-500 transition-colors' aria-label="Email Contact">
                  <i className="bi bi-envelope text-xl"></i>
                </a>
              </li>
            </ul>
          </div>
        )}
    </nav>
  )
}

export default NavBar