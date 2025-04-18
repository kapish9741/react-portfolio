import React from 'react'

const AboutMe = () => {
  return (
    <div className='w-full px-4 md:w-4/5 mx-auto py-12 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20'>
        <div className='w-full md:w-1/2 flex flex-col items-start justify-center gap-4'>
            <h1 className='text-3xl md:text-4xl font-bold text-gray-100'>About Me</h1>
            <p className='text-sm md:text-md text-gray-400'>I'm Kapish Rohilla — a passionate tech enthusiast and a B.Tech student specializing in Computer Science with a focus on Artificial Intelligence and Machine Learning. I love building seamless digital experiences that blend design and functionality.</p>
            <p className='text-sm md:text-md text-gray-400'>With 1 year of experience in the tech industry, I've had the opportunity to work on a diverse range of projects from e-commerce platforms to data visualization tools. My approach combines technical expertise with creative problem-solving to deliver solutions that are both functional and aesthetically pleasing.</p>
            <p className='text-sm md:text-md text-gray-400'>I believe that great design should be intuitive and accessible to everyone. When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or hiking in the mountains.</p>
            
            <div className='w-full flex flex-col items-start justify-start mt-6 md:mt-10 gap-3 md:gap-5'>
                <h3 className='text-xl md:text-2xl font-bold text-gray-100'>Technologies I work with:</h3>
                <ul className='list-none flex flex-row items-start justify-start gap-2 md:gap-4 flex-wrap'>
                    <li className='bg-neutral-800 text-gray-100 text-xs md:text-sm px-2 py-1 rounded-xl'>JavaScript</li>
                    <li className='bg-neutral-800 text-gray-100 text-xs md:text-sm px-2 py-1 rounded-xl'>React</li>
                    <li className='bg-neutral-800 text-gray-100 text-xs md:text-sm px-2 py-1 rounded-xl'>Tailwind CSS</li>
                    <li className='bg-neutral-800 text-gray-100 text-xs md:text-sm px-2 py-1 rounded-xl'>Figma</li>
                    <li className='bg-neutral-800 text-gray-100 text-xs md:text-sm px-2 py-1 rounded-xl'>Next.js</li>
                    <li className='bg-neutral-800 text-gray-100 text-xs md:text-sm px-2 py-1 rounded-xl'>chart.js</li>
                    <li className='bg-neutral-800 text-gray-100 text-xs md:text-sm px-2 py-1 rounded-xl'>three.js</li>
                    <li className='bg-neutral-800 text-gray-100 text-xs md:text-sm px-2 py-1 rounded-xl'>Spline</li>
                </ul>
            </div>
        </div>

        <div className='w-full md:w-1/2 flex flex-col items-start justify-center gap-4 mt-10 md:mt-0'>
            <h1 className='text-3xl md:text-4xl font-bold text-gray-100'>My Expertise</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4 md:mt-10'>
                <div className='bg-neutral-900 border border-neutral-700 rounded-xl hover:border-violet-600 transition-colors duration-300 ease-in-out p-4'>
                    <div className='w-full h-full flex items-start justify-center flex-col gap-3'>
                        <div className='flex flex-row items-center justify-start gap-3'>
                            <span className='bg-violet-950 px-2 py-1 rounded-md'><i className="bi bi-code text-lg text-violet-600"></i></span>
                            <h3 className='text-md text-gray-100'>Frontend</h3>
                        </div>
                        <p className='text-xs md:text-sm text-neutral-400'>Building responsive and accessible user interfaces with modern frameworks.</p>
                    </div>
                </div>

                <div className='bg-neutral-900 border border-neutral-700 rounded-xl hover:border-violet-600 transition-colors duration-300 ease-in-out p-4'>
                    <div className='w-full h-full flex items-start justify-center flex-col gap-3'>
                        <div className='flex flex-row items-center justify-start gap-3'>
                            <span className='bg-violet-950 px-2 py-1 rounded-md'><i className="bi bi-palette text-lg text-violet-600"></i></span>
                            <h3 className='text-md text-gray-100'>UI / UX</h3>
                        </div>
                        <p className='text-xs md:text-sm text-neutral-400'>Creating intuitive and visually appealing designs focused on user experience.</p>
                    </div>
                </div>

                <div className='bg-neutral-900 border border-neutral-700 rounded-xl hover:border-violet-600 transition-colors duration-300 ease-in-out p-4'>
                    <div className='w-full h-full flex items-start justify-center flex-col gap-3'>
                        <div className='flex flex-row items-center justify-start gap-3'>
                            <span className='bg-violet-950 px-2 py-1 rounded-md'><i className="bi bi-cube text-lg text-violet-600"></i></span>
                            <h3 className='text-md text-gray-100'>3D Web Integration</h3>
                        </div>
                        <p className='text-xs md:text-sm text-neutral-400'>Designing next-gen web experiences with Three.js and Spline 3D.</p>
                    </div>
                </div>

                <div className='bg-neutral-900 border border-neutral-700 rounded-xl hover:border-violet-600 transition-colors duration-300 ease-in-out p-4'>
                    <div className='w-full h-full flex items-start justify-center flex-col gap-3'>
                        <div className='flex flex-row items-center justify-start gap-3'>
                            <span className='bg-violet-950 px-2 py-1 rounded-md'><i className="bi bi-lightning text-lg text-violet-600"></i></span>
                            <h3 className='text-md text-gray-100'>Framer Motion</h3>
                        </div>
                        <p className='text-xs md:text-sm text-neutral-400'>Bringing interfaces to life with fluid, expressive animations using Framer Motion and GSAP.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe