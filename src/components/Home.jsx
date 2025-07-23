import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
        padding: "20px 20px",
        animation: "fadeIn 1s ease-in-out",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          maxWidth: "1000px",
          width: "100%",
          textAlign: "center",
          animation: "slideIn 1s ease",
          padding: "0 1rem",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 6vw, 3rem)",
            fontWeight: "bold",
            color: "#333",
            marginTop: "20px",
          }}
        >
          Hi, I'm Ravindra Jadhav 👋
        </h1>
        <h3
          style={{
            fontSize: "clamp(1.1rem, 4vw, 1.5rem)",
            fontWeight: "500",
            color: "#555",
          }}
        >
          Full Stack Developer | MERN Stack Developer | Android Developer
        </h3>

        <p
          style={{
            fontSize: "1rem",
            maxWidth: "700px",
            margin: "0 auto",
            color: "#666",
            lineHeight: "1.6",
            padding: "0 10px",
          }}
        >
          I’m a final-year B.E. Information Technology student at MCT’s RGIT, Mumbai.
          I specialize in React, Node.js, MongoDB, and Flutter. With hands-on experience in
          building full-stack apps. I’m driven to create impactful and user-centric digital solutions.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://github.com/JadhaoR181"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "12px 20px",
              background: "#333",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#555")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#333")}
          >
            <Github size={20} /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ravindrajadhav08/"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "12px 20px",
              background: "#0a66c2",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#084f9c")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#0a66c2")}
          >
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @keyframes slideIn {
          from { transform: translateY(20px); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }

        @media (max-width: 480px) {
          a {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
