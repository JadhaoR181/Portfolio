import React from "react";
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
  { name: "React", icon: <FaReact />, color: "#61DBFB" },
  { name: "React Native", icon: <SiReact />, color: "#61DBFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "Vite", icon: <SiVite />, color: "#646CFF" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#3C873A" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
  { name: "Android", icon: <FaAndroid />, color: "#3DDC84" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
  { name: "MySQL", icon: <FaDatabase />, color: "#00758F" },
  { name: "Python", icon: <FaPython />, color: "#FFCA28" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        backgroundColor: "#f4f4f4",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "10px",
          color: "#222",
          marginTop: "40px",
        }}
      >
        Skills
      </h2>
      <p style={{ color: "#666", marginBottom: "40px" }}>
        Technologies I work frequently
      </p>

      <div
  className="skills-grid"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "30px",
    maxWidth: "1000px",
    margin: "0 auto",
    width: "100%",
  }}
>

        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              padding: "20px",
              borderRadius: "16px",
              background: "#fff",
              boxShadow: "0 8px 16px rgba(0,0,0,0.08)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              transformStyle: "preserve-3d",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "rotateY(10deg) scale(1.05)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "rotateY(0deg) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 8px 16px rgba(0,0,0,0.08)";
            }}
          >
            <div style={{ fontSize: "2.5rem", color: skill.color }}>
              {skill.icon}
            </div>
            <p
              style={{
                marginTop: "10px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* Responsive Styling */}
      <style>{`
  @media (max-width: 768px) {
    .skills-grid {
      max-height: 450px;
      overflow-y: auto;
      padding-right: 10px;
    gridTemplateColumns: repeat(2, 1fr);
    }

    /* Optional: smooth scroll bar appearance for mobile */
    .skills-grid::-webkit-scrollbar {
      width: 6px;
    }
    .skills-grid::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 4px;
    }
  }
`}</style>

    </section>
  );
}
