import React from 'react'

const AboutMe = () => {
  return (
    <div className='w-4/5 h-full flex flex-row items-center justify-center gap-20'>
        <div className='w-1/2 h-full flex flex-col items-start justify-center gap-4'>
            <h1 className='text-4xl font-bold text-gray-100'>About Me</h1>
            <p className='text-md text-gray-400'>I’m Kapish Rohilla — a passionate tech enthusiast and a B.Tech student specializing in Computer Science with a focus on Artificial Intelligence and Machine Learning. I love building seamless digital experiences that blend design and functionality.</p>
            <p className='text-md text-gray-400'>With 1 year of experience in the tech industry, I've had the opportunity to work on a diverse range of projects from e-commerce platforms to data visualization tools. My approach combines technical expertise with creative problem-solving to deliver solutions that are both functional and aesthetically pleasing.</p>
            <p className='text-md text-gray-400'>I believe that great design should be intuitive and accessible to everyone. When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or hiking in the mountains.</p>
            <div className='w-full flex flex-col items-s justify-start mt-10 gap-5'>
                <h3 className='text-2xl font-bold text-gray-100'>Technologies I work with:</h3>
                <ul className='list-none flex flex-row items-start justify-start gap-4 flex-wrap'>
                    <li className='bg-neutral-800 text-gray-100 text-sm px-2 py-1 rounded-xl'>JavaScript</li>
                    <li className='bg-neutral-800 text-gray-100 text-sm px-2 py-1 rounded-xl'>React</li>
                    <li className='bg-neutral-800 text-gray-100 text-sm px-2 py-1 rounded-xl'>Tailwind CSS</li>
                    <li className='bg-neutral-800 text-gray-100 text-sm px-2 py-1 rounded-xl'>Figma</li>
                    <li className='bg-neutral-800 text-gray-100 text-sm px-2 py-1 rounded-xl'>Next.js</li>
                    <li className='bg-neutral-800 text-gray-100 text-sm px-2 py-1 rounded-xl'>chart.js</li>
                    <li className='bg-neutral-800 text-gray-100 text-sm px-2 py-1 rounded-xl'>three.js</li>
                    <li className='bg-neutral-800 text-gray-100 text-sm px-2 py-1 rounded-xl'>Spline</li>
                </ul>
            </div>
        </div>
        <div className='w-1/2 h-full flex flex-col items-start justify-center gap-4 mb-30'>
            <h1 className='text-4xl font-bold text-gray-100'>My Expertise</h1>
            <div className='flex-row flex items-center justify-center gap-4 flex-wrap w-full mt-10'>
                <div className='bg-neutral-900 border border-neutral-700 w-65 h-40 rounded-xl hover:border-violet-600 transition-colors duration-300 ease-in-out'>
                    <div className='w-full h-full flex items-start justify-center flex-col gap-4'>
                        <div className='flex flex-row items-center justify-center gap-4 px-6'>
                            <span className='bg-violet-950 px-2 py-1 rounded-md'><i className="bi bi-code text-lg text-violet-600"></i></span>
                            <h3 className='text-md text-gray-100'>Frontend</h3>
                        </div>
                        <p className='text-sm text-neutral-400 px-6'>Building responsive and accessible user interfaces with modern frameworks.</p>
                    </div>
                </div>
                <div className='bg-neutral-900 border border-neutral-700 w-65 h-40 rounded-xl hover:border-violet-600 transition-colors duration-300 ease-in-out'>
                    <div className='w-full h-full flex items-start justify-center flex-col gap-4'>
                        <div className='flex flex-row items-center justify-center gap-4 px-6'>
                            <span className='bg-violet-950 px-2 py-1 rounded-md'><i className="bi bi-palette text-lg text-violet-600"></i></span>
                            <h3 className='text-md text-gray-100'>UI / UX</h3>
                        </div>
                        <p className='text-sm text-neutral-400 px-6'>Creating intuitive and visually appealing designs focused on user experience.</p>
                    </div>
                </div>
                <div className='bg-neutral-900 border border-neutral-700 w-65 h-40 rounded-xl hover:border-violet-600 transition-colors duration-300 ease-in-out'>
                    <div className='w-full h-full flex items-start justify-center flex-col gap-4'>
                        <div className='flex flex-row items-center justify-center gap-4 px-6'>
                            <span className='bg-violet-950 px-2 py-1 rounded-md'><i className="bi bi-code text-lg text-violet-600"></i></span>
                            <h3 className='text-md text-gray-100'>3D Web Integration</h3>
                        </div>
                        <p className='text-sm text-neutral-400 px-6'>Designing next-gen web experiences with Three.js and Spline 3D.</p>
                    </div>
                </div>
                <div className='bg-neutral-900 border border-neutral-700 w-65 h-40 rounded-xl hover:border-violet-600 transition-colors duration-300 ease-in-out'>
                    <div className='w-full h-full flex items-start justify-center flex-col gap-4'>
                        <div className='flex flex-row items-center justify-center gap-4 px-6'>
                            <span className='bg-violet-950 px-2 py-1 rounded-md'><i className="bi bi-code text-lg text-violet-600"></i></span>
                            <h3 className='text-md text-gray-100'>Framer Motion</h3>
                        </div>
                        <p className='text-sm text-neutral-400 px-6'>Bringing interfaces to life with fluid, expressive animations using Framer Motion and GSAP.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe