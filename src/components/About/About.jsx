import {
  GraduationCap,
  MapPin,
  FolderGit2,
  Code2
} from "lucide-react";

import "./About.css";

export default function About() {

  const cards = [
    {
      icon: <GraduationCap size={24}/>,
      title: "Education",
      value: "B.E Information Technology"
    },

    {
      icon: <FolderGit2 size={24}/>,
      title: "Projects",
      value: "6+ Projects"
    },

    {
      icon: <MapPin size={24}/>,
      title: "Location",
      value: "Mumbai, India"
    },

    {
      icon: <Code2 size={24}/>,
      title: "Tech Stack",
      value: "React, Node.js, FastAPI, MongoDB, Flutter, AI"
    }
  ];

  return (
    <section id="about">

      <div className="container">

        <h2 className="section-title">
          About Me
        </h2>

        <p className="section-subtitle">
          Building scalable applications with
          modern technologies and clean user experiences.
        </p>


        <div className="about-container">

          {/* Image */}

          <div className="about-image">

            <img
              src="/img/me.jpg"
              alt="Ravindra Jadhav"
            />

          </div>


          {/* Content */}

          <div className="about-content">

            <p className="about-text">
              I am a final-year Information Technology
              student with a strong interest in building
              modern web applications and AI-powered
              systems.

              I enjoy creating scalable products using
              React, Node.js, FastAPI, and MongoDB while
              focusing on clean architecture and user
              experience.
            </p>

            <div className="about-cards">

              {cards.map((card,index)=>(
                <div
                  key={index}
                  className="about-card"
                >

                  {card.icon}

                  <h4>{card.title}</h4>

                  <p>{card.value}</p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}