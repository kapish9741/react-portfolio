import hirelystImg from '../assets/Hirelyst.jpeg';
import portfolioImg from '../assets/Portfolio.jpeg';
import { useState } from 'react';
import Tilt from 'react-parallax-tilt';

export default function Projects() {
  return (
    <>
      <div className='w-full h-full flex justify-center items-center flex-col gap-10 py-6'>
        <h2 className='text-gray-100 text-4xl'>Projects</h2>
        <p className='w-1/2 text-gray-400 text-xl text-center'>A selection of my recent work across web development, design, and interactive experiences.</p>
        <div className='w-full flex items-center justify-center gap-4 flex-row flex-wrap'>
          <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.02} transitionSpeed={1200}>
            <div className='bg-neutral-900 border border-neutral-700 w-[40vw] rounded-2xl flex items-start justify-center flex-col gap-6 hover:border-violet-600 transition-colors duration-300 ease-in-out'>
              <img src={hirelystImg} className='w-full overflow-none object-cover rounded-t-2xl' alt="hirelyst image" />
              <ul className='list-none flex flex-row items-start justify-start gap-6 flex-wrap px-6'>
                <li className='bg-neutral-800 text-gray-100 text-sm px-2 py-1 rounded-xl'>JavaScript</li>
                <li className='bg-neutral-800 text-gray-100 text-sm px-2 py-1 rounded-xl'>React</li>
                <li className='bg-neutral-800 text-gray-100 text-sm px-2 py-1 rounded-xl'>Tailwind CSS</li>
                <li className='bg-neutral-800 text-gray-100 text-sm px-2 py-1 rounded-xl'>React PDF Renderer</li>
              </ul>
              <h3 className='text-gray-100 text-xl px-6'>Hirelyst</h3>
              <p className='text-gray-400 text-md px-6'>Hirelyst is a sleek resume builder for creating professional, PDF-ready resumes with ease.</p>
              <div className='flex flex-row items-center justify-start gap-6 px-6 pb-6'>
                <button className='border-none px-4 py-2  hover:bg-violet-600 transition-colors duration-300 ease-in-out text-gray-100 rounded-lg cursor-pointer flex flex-row items-center justify-center gap-2'><a><i className="bi bi-code text-xl"></i></a>Live Preview</button>
                <button className='border-none px-4 py-2  hover:bg-violet-600 transition-colors duration-300 ease-in-out text-gray-100 rounded-lg cursor-pointer flex flex-row items-center justify-center gap-2'><a><i className="bi bi-github text-xl"></i></a>Code</button>
              </div>
            </div>
          </Tilt>
          <Tilt glareEnable={true} glareMaxOpacity={0.2} scale={1.02} transitionSpeed={1200}>
            <div className='bg-neutral-900 border border-neutral-700 w-[40vw] rounded-2xl flex items-start justify-center flex-col gap-6 hover:border-violet-600 transition-colors duration-300 ease-in-out'>
              <img src={portfolioImg} className='w-full overflow-none object-cover rounded-t-2xl' alt="Portfolio image" />
              <ul className='list-none flex flex-row items-start justify-start gap-6 flex-wrap px-6'>
                <li className='bg-neutral-800 text-gray-100 text-sm px-2 py-1 rounded-xl'>JavaScript</li>
                <li className='bg-neutral-800 text-gray-100 text-sm px-2 py-1 rounded-xl'>React</li>
                <li className='bg-neutral-800 text-gray-100 text-sm px-2 py-1 rounded-xl'>Tailwind CSS</li>
                <li className='bg-neutral-800 text-gray-100 text-sm px-2 py-1 rounded-xl'>Framer Motion</li>
              </ul>
              <h3 className='text-gray-100 text-xl px-6'>Portfolio</h3>
              <p className='text-gray-400 text-md px-6'>My personal portfolio website, showcasing my skills, projects, and experiences.</p>
              <div className='flex flex-row items-center justify-start gap-6 px-6 pb-6'>
                <button className='border-none px-4 py-2  hover:bg-violet-600 transition-colors duration-300 ease-in-out text-gray-100 rounded-lg cursor-pointer flex flex-row items-center justify-center gap-2'><a><i className="bi bi-code text-xl"></i></a>Live Preview</button>
                <button className='border-none px-4 py-2  hover:bg-violet-600 transition-colors duration-300 ease-in-out text-gray-100 rounded-lg cursor-pointer flex flex-row items-center justify-center gap-2'><a><i className="bi bi-github text-xl"></i></a>Code</button>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </>
  )
}