import React, { useEffect, useState } from 'react';
import GlobalBackground from './GlobalBackground';
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
      {/* Single Global Background for entire app */}
      <GlobalBackground />
      
      <Navbar />

      {/* Main content wrapper with relative positioning */}
      <div style={{ position: 'relative', zIndex: 1 }}>
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
      </div>

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
            padding: '14px',
            borderRadius: '50%',
            border: 'none',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 6px 25px rgba(102, 126, 234, 0.4)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1) translateY(0)';
          }}
        >
          <ArrowUp size={22} />
        </Motion.button>
      )}
    </>
  );
}

export default App;
