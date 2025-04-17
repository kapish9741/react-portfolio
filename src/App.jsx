import React from 'react';
import Projects from './components/Projects';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <>
      <header className='absolute w-screen h-16 z-10 bg-transparent bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 backdrop-saturate-100 backdrop-contrast-100'>
        <NavBar />
      </header>
      <main className='w-screen h-screen overflow-y-auto'>
        <section className='w-screen h-screen'>
          <Hero />
        </section>
        <section className='w-screen h-screen flex justify-center items-start'>
          <AboutMe />
        </section>
        <section className='w-screen my-20'>
          <Projects />
        </section>
      </main>
    </>
  );
}

export default App;