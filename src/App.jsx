import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion as Motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
    
      <Navbar />

      <Motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Home />
      </Motion.div>

      <Motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <About />
      </Motion.div>

      <Motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Skills />
      </Motion.div>

      <Motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Qualification />
      </Motion.div>

      <Motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Projects />
      </Motion.div>

      <Motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Contact />
      </Motion.div>

      <Footer />

      {/* Scroll Up Button */}
      {showScrollButton && (
        <Motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            padding: '12px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: '#0650acff',
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            zIndex: 999,
          }}
        >
          <ArrowUp size={20} />
        </Motion.button>
      )}
    </>
  );
}

export default App;
