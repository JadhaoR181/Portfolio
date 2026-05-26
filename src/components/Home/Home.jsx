import {
  Github,
  Linkedin,
  Mail,
  ArrowRight
} from "lucide-react";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "./Home.css";


export default function Home() {

  const roles = [
  "Full Stack Developer",
  "Mobile App Developer",
  "AI Enthusiast",
  "Backend Developer",
  "Problem Solver"
];

const [currentRole, setCurrentRole] = useState(0);

useEffect(() => {

  const interval = setInterval(() => {

    setCurrentRole(
      (prev) => (prev + 1) % roles.length
    );

  },3000);

  return () => clearInterval(interval);

},[]);


  const scrollToSection = (id) => {

const section =
document.getElementById(id);

if(section){

section.scrollIntoView({

behavior:"smooth",
block:"start"

});

}

};

  return (
    <section id="home" className="hero">

      <div className="container hero-container">

        {/* Left */}

        <div className="hero-content">

         <div className="hero-tag">

<AnimatePresence mode="wait">

<motion.p

key={currentRole}

initial={{
opacity:0,
y:10
}}

animate={{
opacity:1,
y:0
}}

exit={{
opacity:0,
y:-10
}}

transition={{
duration:.4
}}

>

👋 {roles[currentRole]}

</motion.p>

</AnimatePresence>

</div>

          <h1 className="hero-title">
            Hi, I'm
            <span> Ravindra Jadhav</span>
          </h1>

          <h2 className="hero-subtitle">
            Building modern web applications
            and AI-powered experiences.
          </h2>

        <p className="hero-description">
Information Technology graduate specializing in Full Stack development,
mobile applications, and AI-powered solutions with experience building
scalable web platforms and user-focused digital products using modern
technologies and clean architecture principles.
</p>

          <div className="hero-buttons">

            <button
onClick={() =>
scrollToSection("projects")
}
className="primary-btn"
>

View Projects

<ArrowRight size={18}/>

</button>

            <a
              href="/Ravindra_Jadhav_Resume.pdf"
              download
              className="secondary-btn"
            >
              Download Resume
            </a>

          </div>

          <div className="hero-socials">

            <a
              href="https://github.com/JadhaoR181"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={20}/>
            </a>

            <a
              href="https://www.linkedin.com/in/ravindrajadhav08/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={20}/>
            </a>

            <a
              href="mailto:jadhaor181@gmail.com"
            >
              <Mail size={20}/>
            </a>

          </div>

        </div>


        {/* Right */}

        <div className="hero-image">

<motion.div
className="center-orb"
animate={{
rotate:360
}}
transition={{
duration:30,
repeat:Infinity,
ease:"linear"
}}
>

<div className="orbit orbit1"></div>
<div className="orbit orbit2"></div>

<div className="center-icon">

💻

</div>

</motion.div>

<div className="tech-badge react">
⚛ React
</div>

<div className="tech-badge fastapi">
⚡ FastAPI
</div>

<div className="tech-badge flutter">
📱 Flutter
</div>

<div className="tech-badge ai">
🤖 AI
</div>

<div className="tech-badge mongo">
🍃 MongoDB
</div>

<div className="tech-badge node">
🟢 Node
</div>

</div>
</div>

    </section>
  );
}