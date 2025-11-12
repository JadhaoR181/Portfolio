import React, { useState, useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaAndroid,
  FaDatabase,
  FaPython,
  FaPhp,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiFlutter,
  SiVite,
  SiFirebase,
  SiReact,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact />, color: "#61DBFB", category: "Frontend" },
  { name: "React Native", icon: <SiReact />, color: "#61DBFB", category: "Mobile" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#fff", category: "Frontend" },
  { name: "Vite", icon: <SiVite />, color: "#646CFF", category: "Frontend" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#3C873A", category: "Backend" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", category: "Database" },
  { name: "Flutter", icon: <SiFlutter />, color: "#02569B", category: "Mobile" },
  { name: "Android", icon: <FaAndroid />, color: "#3DDC84", category: "Mobile" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28", category: "Backend" },
  { name: "PHP", icon: <FaPhp />, color: "#777BB4", category: "Backend" },
  { name: "MySQL", icon: <FaDatabase />, color: "#00758F", category: "Database" },
  { name: "Python", icon: <FaPython />, color: "#FFD43B", category: "Backend" },
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cardRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    setHoveredIndex(null);
  };

  return (
    <section
      id="skills"
      style={{
        minHeight: "100vh",
        padding: "100px 20px 60px",
        background: "transparent",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ marginBottom: "60px", animation: "fadeInDown 0.8s ease" }}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: "800",
              color: "#fff",
              marginBottom: "15px",
              textShadow: "2px 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            Skills & Technologies
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Tools and technologies I work with to build amazing products
          </p>
        </div>

        {/* Skills Grid */}
        <div
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "30px",
            width: "100%",
            animation: "fadeInUp 1s ease",
          }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              style={{
                position: "relative",
                padding: "30px 20px",
                borderRadius: "20px",
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                transformStyle: "preserve-3d",
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              {/* Glowing background effect on hover */}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: hoveredIndex === index ? "150%" : "0%",
                  height: hoveredIndex === index ? "150%" : "0%",
                  background: `radial-gradient(circle, ${skill.color}30, transparent 70%)`,
                  borderRadius: "50%",
                  transition: "all 0.6s ease",
                  zIndex: 0,
                  filter: "blur(20px)",
                }}
              />

              {/* Category Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  fontSize: "0.65rem",
                  fontWeight: "600",
                  color: "rgba(255, 255, 255, 0.8)",
                  background: "rgba(255, 255, 255, 0.1)",
                  padding: "4px 10px",
                  borderRadius: "12px",
                  backdropFilter: "blur(5px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  opacity: hoveredIndex === index ? 1 : 0,
                  transition: "opacity 0.3s ease",
                  zIndex: 2,
                }}
              >
                {skill.category}
              </div>

              {/* Icon */}
              <div
                style={{
                  fontSize: "3.5rem",
                  color: skill.color,
                  marginBottom: "15px",
                  transition: "all 0.3s ease",
                  transform: hoveredIndex === index ? "scale(1.2) translateZ(30px)" : "scale(1) translateZ(0px)",
                  filter: hoveredIndex === index ? `drop-shadow(0 0 20px ${skill.color}80)` : "none",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {skill.icon}
              </div>

              {/* Skill Name */}
              <p
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  color: "#fff",
                  margin: 0,
                  position: "relative",
                  zIndex: 1,
                  textShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",
                  transform: hoveredIndex === index ? "translateZ(20px)" : "translateZ(0px)",
                  transition: "transform 0.3s ease",
                }}
              >
                {skill.name}
              </p>

              {/* Shine effect */}
              <div
                style={{
                  position: "absolute",
                  top: "-50%",
                  left: "-50%",
                  width: "200%",
                  height: "200%",
                  background: "linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)",
                  transform: hoveredIndex === index ? "translate(50%, 50%) rotate(45deg)" : "translate(-100%, -100%) rotate(45deg)",
                  transition: "transform 0.6s ease",
                  pointerEvents: "none",
                }}
              />
            </div>
          ))}
        </div>

        {/* Skill Categories Summary */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "50px",
            animation: "fadeInUp 1.2s ease",
          }}
        >
          {["Frontend", "Backend", "Mobile", "Database"].map((category, idx) => (
            <div
              key={idx}
              style={{
                padding: "12px 24px",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "25px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "0.95rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {category} • {skills.filter(s => s.category === category).length}
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }

          #skills {
            padding: 80px 15px 40px !important;
          }
        }

        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 15px !important;
          }
        }
      `}</style>
    </section>
  );
}
