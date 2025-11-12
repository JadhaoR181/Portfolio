import React, { useState, useEffect, useRef } from "react";
import { Download, Award, Briefcase, Code } from "lucide-react";
import BackgroundAnimation from "./BackgroundAnimation";

export default function About() {
  const [counters, setCounters] = useState({ cgpa: 0, projects: 0, experience: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { cgpa: 7.8, projects: 6, experience: 6 };
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        cgpa: Math.min((targets.cgpa * progress).toFixed(1), targets.cgpa),
        projects: Math.min(Math.floor(targets.projects * progress), targets.projects),
        experience: Math.min(Math.floor(targets.experience * progress), targets.experience),
      });

      if (currentStep >= steps) clearInterval(timer);
    }, increment);
  };

  return (
    <section
  id="about"
  ref={sectionRef}
  style={{
    minHeight: "100vh",
    padding: "100px 20px 60px",
    background: "transparent", // Changed from gradient
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
  }}
>
      {/* Same Animated Background as Home */}
      <BackgroundAnimation />

      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1200px" }}>
        {/* Section Header */}
        <div style={{ marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: "800",
              color: "#fff",
              marginBottom: "15px",
              textShadow: "2px 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            About Me
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Building innovative solutions with passion and precision
          </p>
        </div>

        {/* Main Content Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "50px",
            alignItems: "center",
          }}
        >
          {/* Profile Image with Glassmorphism */}
          <div
            style={{
              position: "relative",
              animation: "slideInLeft 0.8s ease-out",
            }}
          >
            <div
              style={{
                padding: "8px",
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              }}
            >
              <img
                src="/img/me.jpg"
                alt="Ravindra Jadhav"
                style={{
                  width: "320px",
                  height: "400px",
                  borderRadius: "16px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
            {/* Decorative Elements */}
            <div
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                width: "60px",
                height: "60px",
                background: "rgba(255, 255, 255, 0.2)",
                borderRadius: "50%",
                border: "2px solid rgba(255, 255, 255, 0.4)",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
          </div>

          {/* Description & Info */}
          <div
            style={{
              flex: 1,
              minWidth: "300px",
              maxWidth: "600px",
              textAlign: "left",
              animation: "slideInRight 0.8s ease-out",
            }}
          >
            {/* About Text with Glassmorphism */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                padding: "30px",
                marginBottom: "30px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              }}
            >
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "rgba(255, 255, 255, 0.95)",
                  marginBottom: "0",
                  textAlign: "justify",
                }}
              >
                I'm a final-year Information Technology engineering student at MCT's
                Rajiv Gandhi Institute of Technology, Mumbai. Passionate about
                building innovative web and mobile applications using the MERN stack,
                Flutter, and Android. With hands-on experience in full-stack development,
                I thrive in collaborative environments and love solving real-world problems
                through technology and creative solutions.
              </p>
            </div>

            {/* Stats Cards with Animation */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "20px",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "16px",
                  padding: "25px 20px",
                  textAlign: "center",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)";
                }}
              >
                <Award size={32} color="#fff" style={{ margin: "0 auto 10px" }} />
                <h3
                  style={{
                    fontSize: "2.5rem",
                    color: "#fff",
                    fontWeight: "800",
                    marginBottom: "5px",
                  }}
                >
                  {counters.cgpa}+
                </h3>
                <p style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "0.95rem", margin: 0 }}>
                  Aggregate CGPA
                </p>
              </div>

              <div
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "16px",
                  padding: "25px 20px",
                  textAlign: "center",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)";
                }}
              >
                <Code size={32} color="#fff" style={{ margin: "0 auto 10px" }} />
                <h3
                  style={{
                    fontSize: "2.5rem",
                    color: "#fff",
                    fontWeight: "800",
                    marginBottom: "5px",
                  }}
                >
                  {counters.projects}+
                </h3>
                <p style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "0.95rem", margin: 0 }}>
                  Projects Completed
                </p>
              </div>

              <div
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "16px",
                  padding: "25px 20px",
                  textAlign: "center",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)";
                }}
              >
                <Briefcase size={32} color="#fff" style={{ margin: "0 auto 10px" }} />
                <h3
                  style={{
                    fontSize: "2.5rem",
                    color: "#fff",
                    fontWeight: "800",
                    marginBottom: "5px",
                  }}
                >
                  {counters.experience}+
                </h3>
                <p style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "0.95rem", margin: 0 }}>
                  Months Experience
                </p>
              </div>
            </div>

            {/* Download CV Button */}
            <a
              href="/Ravindra-Jadhav-CV.pdf"
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 32px",
                background: "rgba(255, 255, 255, 0.95)",
                color: "#667eea",
                borderRadius: "12px",
                fontWeight: "600",
                fontSize: "1.05rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                border: "2px solid transparent",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.25)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.95)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)";
              }}
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Component-specific Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          #about {
            padding: 80px 15px 40px !important;
          }

          #about img {
            width: 100%;
            max-width: 300px;
            height: auto;
          }

          #about > div > div:nth-child(2) {
            text-align: center !important;
          }

          #about > div > div:nth-child(2) > div:first-child {
            text-align: justify !important;
          }

          #about a {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          #about img {
            max-width: 260px;
          }
        }
      `}</style>
    </section>
  );
}
