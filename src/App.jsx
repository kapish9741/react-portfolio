import React from 'react';
import Projects from './components/Projects';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <header className="fixed top-0 w-full h-16 z-10 bg-transparent backdrop-blur-md">
        <NavBar />
      </header>
      <main className="flex-grow w-full pt-16">
        <section className="min-h-screen w-full py-8 md:py-12">
          <Hero />
        </section>
        <section className="min-h-screen w-full py-12 flex justify-center items-start">
          <AboutMe />
        </section>
        <section className="w-full py-12 md:py-20">
          <Projects />
        </section>
        <section className="min-h-screen w-full py-12 flex justify-center items-center">
          <ContactUs />
        </section>
      </main>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default App;