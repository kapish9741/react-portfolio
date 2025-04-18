import React from 'react';
import Projects from './components/Projects';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-x-hidden">
      <header className='fixed top-0 w-full h-16 z-10 bg-transparent bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 backdrop-saturate-100 backdrop-contrast-100'>
        <NavBar />
      </header>
      <main className='overflow-x-hidden'>
        <section className='w-screen'>
          <Hero />
        </section>
        <section className='w-full min-h-screen px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center'>
          <AboutMe />
        </section>
        <section className='w-full px-4 md:px-6 my-10'>
          <Projects />
        </section>
        <section className='w-full min-h-screen px-4 md:px-6 lg:px-8 flex justify-center items-center'>
          <ContactUs />
        </section>
      </main>
      <footer className='w-full'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;