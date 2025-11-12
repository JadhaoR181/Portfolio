import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    "Full Stack Developer",
    "MERN Stack Developer", 
    "Flutter Developer",
    "Android Developer"
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 20px 20px",
        position: "relative",
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
          position: "relative",
          zIndex: 10,
          animation: "slideIn 1s ease",
          padding: "0 1.5rem",
        }}
      >
        {/* Profile Image with Glow Effect */}
        <div
          style={{
            width: "160px",
            height: "160px",
            margin: "0 auto 1rem",
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))",
            padding: "5px",
            animation: "glow 2s ease-in-out infinite alternate",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #764ba2, #667eea)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "4rem",
              animation: "float 3s ease-in-out infinite",
            }}
          >
            👨‍💻
          </div>
        </div>

        {/* Greeting with Wave Animation */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: "800",
            color: "#fff",
            marginTop: "0",
            textShadow: "2px 2px 20px rgba(0,0,0,0.3)",
            lineHeight: "1.2",
          }}
        >
          Hi, I'm{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #fff, rgba(255,255,255,0.8))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ravindra Jadhav
          </span>
          <span
            style={{
              display: "inline-block",
              animation: "wave 2s ease-in-out infinite",
              transformOrigin: "70% 70%",
              marginLeft: "10px",
            }}
          >
            👋
          </span>
        </h1>

        {/* Typewriter Role */}
        <div
          style={{
            minHeight: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.3rem, 4vw, 2rem)",
              fontWeight: "600",
              color: "rgba(255, 255, 255, 0.95)",
              margin: 0,
            }}
          >
            I'm a{" "}
            <span
              style={{
                color: "#fff",
                fontWeight: "700",
                borderRight: "3px solid #fff",
                paddingRight: "5px",
                animation: "blink 0.7s steps(2) infinite",
              }}
            >
              {displayedText}
            </span>
          </h2>
        </div>

        {/* Description with Glassmorphism */}
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
            maxWidth: "750px",
            margin: "0 auto",
            color: "rgba(255, 255, 255, 0.95)",
            lineHeight: "1.8",
            padding: "25px 30px",
            background: "rgba(255, 255, 255, 0.15)",
            borderRadius: "20px",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          }}
        >
          Final-year B.E. Information Technology student at MCT's RGIT, Mumbai.
          Specializing in React, Node.js, MongoDB, and Flutter with hands-on experience
          building scalable full-stack applications. Passionate about creating impactful
          and user-centric digital solutions.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            flexWrap: "wrap",
            marginTop: "1rem",
          }}
        >
          <a
            href="https://github.com/JadhaoR181"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "14px 28px",
              background: "rgba(255, 255, 255, 0.95)",
              color: "#667eea",
              borderRadius: "12px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              fontSize: "1rem",
              fontWeight: "600",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
              border: "2px solid transparent",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.95)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)";
            }}
          >
            <Github size={20} /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ravindrajadhav08/"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "14px 28px",
              background: "rgba(255, 255, 255, 0.95)",
              color: "#667eea",
              borderRadius: "12px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              fontSize: "1rem",
              fontWeight: "600",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.95)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)";
            }}
          >
            <Linkedin size={20} /> LinkedIn
          </a>

          <a
            href="mailto:jadhaor181@gmail.com"
            style={{
              padding: "14px 28px",
              background: "rgba(255, 255, 255, 0.95)",
              color: "#667eea",
              borderRadius: "12px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              fontSize: "1rem",
              fontWeight: "600",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.95)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)";
            }}
          >
            <Mail size={20} /> Contact
          </a>

          <a
            href="/Ravindra-Jadhav-CV.pdf"
            download
            style={{
              padding: "14px 28px",
              background: "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))",
              color: "#fff",
              borderRadius: "12px",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              fontSize: "1rem",
              fontWeight: "600",
              transition: "all 0.3s ease",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.2)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
            }}
          >
            <Download size={20} /> Resume
          </a>
        </div>

        {/* Scroll Down Indicator */}
        <a
          href="#about"
          style={{
            marginTop: "3rem",
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            color: "rgba(255, 255, 255, 0.9)",
            textDecoration: "none",
            fontSize: "0.9rem",
            fontWeight: "500",
            animation: "bounce 2s ease-in-out infinite",
          }}
        >
          <span>Scroll Down</span>
          <ArrowDown size={24} />
        </a>
      </div>

      {/* Component-specific Animation Keyframes */}
      <style>{`
        @keyframes slideIn {
          from { 
            transform: translateY(30px); 
            opacity: 0; 
          }
          to { 
            transform: translateY(0); 
            opacity: 1; 
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes glow {
          0% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.3),
                        0 0 40px rgba(255, 255, 255, 0.2);
          }
          100% {
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.5),
                        0 0 60px rgba(255, 255, 255, 0.3);
          }
        }

        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @media (max-width: 768px) {
          #home {
            padding: 80px 10px 20px !important;
          }
          
          #home a {
            padding: 12px 20px !important;
            font-size: 0.9rem !important;
          }
        }

        @media (max-width: 480px) {
          #home > div > div:last-of-type {
            flex-direction: column;
            width: 100%;
          }
          
          #home > div > div:last-of-type a {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
