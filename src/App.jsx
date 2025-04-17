import React from 'react';
import Projects from './components/Projects';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <header className='fixed top-0 w-screen h-16 z-10 bg-transparent backdrop-blur-md'>
        <NavBar />
      </header>
      <main className='w-screen'>
        <section className='w-screen h-screen pt-20'>
          <Hero />
        </section>
        <section className='w-screen h-screen flex justify-center items-start'>
          <AboutMe />
        </section>
        <section className='w-screen my-20'>
          <Projects />
        </section>
        <section className='w-screen h-screen flex justify-center items-center'>
          <ContactUs />
        </section>
      </main>
      <footer className='w-screen'>
        <Footer />
      </footer>
    </>
  );
}

export default App;