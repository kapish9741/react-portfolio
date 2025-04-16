import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavBar = () => {
  return (
    <div className='w-full h-full flex items-center justify-between px-10 text-gray-400'>
        <h1 className='bg-gradient-to-l from-indigo-500 via-violet-500 to-purple-400 bg-clip-text text-transparent text-2xl font-bold'>Kapish Rohilla</h1>
        <ul className='flex items-center gap-5 justify-center'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Projects</li>
            <li className='cursor-pointer'>Contact</li>
            <li className='cursor-pointer'><a><i className="bi bi-github text-xl"></i></a></li>
            <li className='cursor-pointer'><a><i className="bi bi-linkedin text-xl"></i></a></li>
            <li className='cursor-pointer'><a><i className="bi bi-envelope text-xl"></i></a></li>
        </ul>
    </div>
  )
}

export default NavBar