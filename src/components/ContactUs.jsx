import React from 'react'

const ContactUs = () => {
  return (
    <div className='w-full flex flex-col flex-wrap items-center justify-center gap-6 px-4 md:px-6 lg:px-8'>
        <h2 className='text-neutral-100 text-3xl md:text-4xl text-center'>Get In Touch</h2>
        <p className='text-neutral-400 text-lg md:text-xl w-full md:w-3/4 lg:w-1/2 text-center'>Have a project in mind or want to collaborate? I'd love to hear from you. Drop me a message and I'll get back to you soon.</p>
        
        <div className='w-full flex flex-col md:flex-row justify-center items-center md:items-start gap-6'>
            <div className='w-full md:w-2/5 lg:w-1/3 flex flex-col justify-center items-start gap-4 bg-neutral-900 border border-neutral-700 rounded-xl py-6 px-4 md:px-6'>
                <h3 className='text-neutral-100 text-xl'>Contact Details</h3>
                <p className='text-neutral-500 text-md'>Feel free to reach out through any of these channels.</p>
                
                <div className='flex justify-center items-start flex-row gap-2'>
                    <i className="bi bi-geo-alt text-md text-violet-700"></i>
                    <div className='flex justify-center items-start flex-col'>
                        <h3 className='text-neutral-100 text-md'>Location</h3>
                        <p className='text-neutral-400 text-sm'>Haryana, India</p>
                    </div>
                </div>
                
                <div className='flex justify-center items-start flex-row gap-2'>
                    <i className="bi bi-envelope text-md text-violet-700"></i>
                    <div className='flex justify-center items-start flex-col'>
                        <h3 className='text-neutral-100 text-md'>Email</h3>
                        <p className='text-neutral-400 text-sm break-words'>kapishrohilla@gmail.com</p>
                    </div>
                </div>
                
                <p className='text-neutral-100 text-md'>Find me on</p>
                <ul className='flex items-center gap-5 justify-center'>
                    <li className='cursor-pointer py-1 px-2 rounded-full bg-neutral-800'>
                        <a aria-label="GitHub profile" href='https://github.com/kapish9741'>
                            <i className="bi bi-github text-neutral-100 text-xl"></i>
                        </a>
                    </li>
                    <li className='cursor-pointer py-1 px-2 rounded-full bg-neutral-800'>
                        <a aria-label="LinkedIn profile" href='https://www.linkedin.com/in/kapishrohilla/'>
                            <i className="bi bi-linkedin text-neutral-100 text-xl"></i>
                        </a>
                    </li>
                </ul>
            </div>
            
            <div className='w-full md:w-3/5 lg:w-2/5 flex flex-col justify-center items-start gap-6 bg-neutral-900 border border-neutral-700 rounded-xl py-6 px-4 md:px-6'>
                <form action="" className='w-full flex flex-col items-start justify-center gap-2'>
                    <label htmlFor="name" className='text-md text-neutral-100'>Your Name</label>
                    <input 
                        type="text" 
                        name='name' 
                        id="name"
                        placeholder='Kapish Rohilla' 
                        className='text-neutral-100 focus:outline-none placeholder:text-neutral-500 border border-neutral-700 px-2 py-1 rounded-lg bg-neutral-800 w-full' 
                    />
                    
                    <label htmlFor="email" className='text-md text-neutral-100 mt-2'>Your Email</label>
                    <input 
                        type="email" 
                        name='email' 
                        id="email"
                        placeholder='kapishrohilla@gmail.com' 
                        className='text-neutral-100 focus:outline-none placeholder:text-neutral-500 border border-neutral-700 px-2 py-1 rounded-lg bg-neutral-800 w-full' 
                    />
                    
                    <label htmlFor="message" className='text-md text-neutral-100 mt-2'>Your Message</label>
                    <textarea 
                        name="message" 
                        id="message" 
                        placeholder='Tell me about your project...' 
                        className="text-neutral-100 focus:outline-none placeholder:text-neutral-500 border border-neutral-700 px-2 py-1 rounded-lg bg-neutral-800 w-full h-24 md:h-32 resize-none"
                    />
                    
                    <button className='w-full px-2 py-2 mt-2 bg-violet-500 border-none rounded-md text-md text-neutral-100 hover:bg-violet-600 cursor-pointer'>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactUs