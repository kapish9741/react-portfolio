import hirelystImg from '../assets/Hirelyst.jpeg';
import portfolioImg from '../assets/Portfolio.jpeg';
import { useState } from 'react';
import Tilt from 'react-parallax-tilt';

export default function Projects() {
  return (
    <>
      <div className='w-full px-4 py-12 flex justify-center items-center flex-col gap-6 md:gap-10'>
        <h2 className='text-neutral-100 text-3xl md:text-4xl text-center'>Projects</h2>
        <p className='w-full md:w-3/4 lg:w-1/2 text-neutral-400 text-base md:text-xl text-center'>A selection of my recent work across web development, design, and interactive experiences.</p>
        
        <div className='w-full flex items-center justify-center gap-6 flex-col md:flex-row flex-wrap'>
          <Tilt 
            className='w-full md:w-[85%] lg:w-[45%] xl:w-[40%]'
            glareEnable={true} 
            glareMaxOpacity={0.2} 
            scale={1.02} 
            transitionSpeed={1200}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
          >
            <div className='bg-neutral-900 border border-neutral-700 w-full rounded-2xl flex items-start justify-center flex-col gap-4 md:gap-6 hover:border-violet-600 transition-colors duration-300 ease-in-out'>
              <img src={hirelystImg} className='w-full h-48 sm:h-64 md:h-72 object-cover rounded-t-2xl' alt="hirelyst image" />
              
              <ul className='list-none flex flex-row items-start justify-start gap-2 md:gap-4 flex-wrap px-4 md:px-6'>
                <li className='bg-neutral-800 text-gray-100 text-xs md:text-sm px-2 py-1 rounded-xl'>JavaScript</li>
                <li className='bg-neutral-800 text-gray-100 text-xs md:text-sm px-2 py-1 rounded-xl'>React</li>
                <li className='bg-neutral-800 text-gray-100 text-xs md:text-sm px-2 py-1 rounded-xl'>Tailwind CSS</li>
                <li className='bg-neutral-800 text-gray-100 text-xs md:text-sm px-2 py-1 rounded-xl'>React PDF</li>
              </ul>
              
              <h3 className='text-gray-100 text-lg md:text-xl px-4 md:px-6'>Hirelyst</h3>
              <p className='text-gray-400 text-sm md:text-md px-4 md:px-6'>Hirelyst is a sleek resume builder for creating professional</p>
              
              <div className='flex flex-row items-center justify-start gap-4 md:gap-6 px-4 md:px-6 pb-6'>
                <a href='https://hirelyst.vercel.app/'><button className='border-none px-3 py-1 md:px-4 md:py-2 bg-neutral-800 hover:bg-violet-600 transition-colors duration-300 ease-in-out text-gray-100 rounded-lg cursor-pointer flex flex-row items-center justify-center gap-2'>
                  <i className="bi bi-code text-lg md:text-xl"></i>
                  <span className='text-sm md:text-base'>Live Preview</span>
                </button></a>
                <a href='https://github.com/kapish9741/resume-builder'><button className='border-none px-3 py-1 md:px-4 md:py-2 bg-neutral-800 hover:bg-violet-600 transition-colors duration-300 ease-in-out text-gray-100 rounded-lg cursor-pointer flex flex-row items-center justify-center gap-2'>
                  <i className="bi bi-github text-lg md:text-xl"></i>
                  <span className='text-sm md:text-base'>Code</span>
                </button></a>
              </div>
            </div>
          </Tilt>

          <Tilt 
            className='w-full md:w-[85%] lg:w-[45%] xl:w-[40%]'
            glareEnable={true} 
            glareMaxOpacity={0.2} 
            scale={1.02} 
            transitionSpeed={1200}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
          >
            <div className='bg-neutral-900 border border-neutral-700 w-full rounded-2xl flex items-start justify-center flex-col gap-4 md:gap-6 hover:border-violet-600 transition-colors duration-300 ease-in-out'>
              <img src={portfolioImg} className='w-full h-48 sm:h-64 md:h-72 object-cover rounded-t-2xl' alt="Portfolio image" />
              
              <ul className='list-none flex flex-row items-start justify-start gap-2 md:gap-4 flex-wrap px-4 md:px-6'>
                <li className='bg-neutral-800 text-gray-100 text-xs md:text-sm px-2 py-1 rounded-xl'>JavaScript</li>
                <li className='bg-neutral-800 text-gray-100 text-xs md:text-sm px-2 py-1 rounded-xl'>React</li>
                <li className='bg-neutral-800 text-gray-100 text-xs md:text-sm px-2 py-1 rounded-xl'>Tailwind CSS</li>
                <li className='bg-neutral-800 text-gray-100 text-xs md:text-sm px-2 py-1 rounded-xl'>Framer Motion</li>
              </ul>
              
              <h3 className='text-gray-100 text-lg md:text-xl px-4 md:px-6'>Portfolio</h3>
              <p className='text-gray-400 text-sm md:text-md px-4 md:px-6'>My personal portfolio website, showcasing my skills and projects.</p>
              
              <div className='flex flex-row items-center justify-start gap-4 md:gap-6 px-4 md:px-6 pb-6'>
              <a href='https://kapishrohilla.vercel.app/'><button className='border-none px-3 py-1 md:px-4 md:py-2 bg-neutral-800 hover:bg-violet-600 transition-colors duration-300 ease-in-out text-gray-100 rounded-lg cursor-pointer flex flex-row items-center justify-center gap-2'>

                  <span className='text-sm md:text-base'>Live Preview</span>
                </button></a>
                <a href='https://github.com/kapish9741/react-portfolio'><button className='border-none px-3 py-1 md:px-4 md:py-2 bg-neutral-800 hover:bg-violet-600 transition-colors duration-300 ease-in-out text-gray-100 rounded-lg cursor-pointer flex flex-row items-center justify-center gap-2'>
                  <i className="bi bi-github text-lg md:text-xl"></i>
                  <span className='text-sm md:text-base'>Code</span>
                </button></a>
              </div>
            </div>
          </Tilt>
        </div>
        
        <a href='https://github.com/kapish9741'><button className='mt-4 border border-neutral-700 text-neutral-100 px-4 py-2 md:px-6 md:py-2 hover:bg-violet-600 transition-colors duration-300 ease-in-out rounded-lg cursor-pointer text-sm md:text-base'>
          View All Projects on GitHub
        </button></a>
      </div>
    </>
  )
}