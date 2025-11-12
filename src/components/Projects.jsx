import React, { useRef, useState } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { motion as Motion } from "framer-motion";

const projects = [
  {
    title: "HealthMateX - Smart Health Companion",
    description:
      "AI-powered mobile app using OCR to extract and analyze 25+ medical parameters from lab reports, providing instant insights for 15+ common diseases with 90%+ accuracy.",
    technologies: ["Flutter", "Firebase", "MongoDB", "Google ML Kit", "Python", "Scikit-learn"],
    image: "/project-banner/healthmatex.png",
    github: "https://github.com/JadhaoR181/HealthMateX",
    live: null,
    featured: true,
  },
  {
    title: "Reado AI - AI README Generator",
    description:
      "AI-driven README generator leveraging Google Gemini API with GitHub OAuth integration, cutting documentation time by 50% and generating results under 25 seconds.",
    technologies: ["Next.js", "TypeScript", "FastAPI", "MongoDB", "GitHub API", "Gemini API", "WebSocket"],
    image: "/project-banner/reado_ai.png",
    github: "https://github.com/JadhaoR181/ReadoAI-Readme_Generator",
    live: "https://reado-ai.vercel.app",
    featured: true,
  },
  {
    title: "WearYourDesign - Custom E-commerce",
    description:
      "Full-stack clothing store with live T-shirt customization, admin dashboard, and Stripe-integrated payments. Supports instant 3D product previews.",
    technologies: ["React", "Next.js", "Express.js", "MongoDB", "Stripe", "Cloudinary"],
    image: "/project-banner/wyd.jpg",
    github: "https://github.com/JadhaoR181/WYD-WearYourDesignMain",
    live: "https://wearyourdesign.vercel.app",
    featured: true,
  },
  {
    title: "Majha Shetkari (Farmer App)",
    description:
      "Android app enabling farmers to buy/sell crops and tools with multilingual support, live commodity prices, and community news.",
    technologies: ["Android", "Java", "Firebase", "MySQL"],
    image: "/project-banner/majha-shetkari.jpg",
    github: "https://github.com/JadhaoR181/Majha_Shetkari",
  },
  {
    title: "Task Management App",
    description:
      "Cross-platform React Native app for daily task management with CRUD operations and intuitive UI.",
    technologies: ["React Native", "JavaScript"],
    image: "/project-banner/task-management-app.jpg",
    github: "https://github.com/JadhaoR181/Task-Management-App",
  },
];

export default function Projects() {
  const carouselRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        direction === "left"
          ? carouselRef.current.scrollLeft - scrollAmount
          : carouselRef.current.scrollLeft + scrollAmount;

      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        background: "transparent",
        padding: "100px 20px 60px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1400px", position: "relative", zIndex: 5 }}>
        {/* Title */}
        <Motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: "800",
              color: "#fff",
              textShadow: "0 0 25px rgba(118,75,162,0.6)",
              marginBottom: "10px",
            }}
          >
            Featured Projects
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "1.1rem",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            A showcase of my latest full-stack, AI, and mobile app projects demonstrating modern engineering and design.
          </p>
        </Motion.div>

        {/* Navigation Arrows */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            style={navArrowStyle("left")}
          >
            <ChevronLeft size={24} color="#fff" />
          </button>
        )}
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            style={navArrowStyle("right")}
          >
            <ChevronRight size={24} color="#fff" />
          </button>
        )}

        {/* Project Cards */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "35px",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            padding: "10px 0 40px",
          }}
          className="hide-scrollbar"
        >
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{
                flex: "0 0 auto",
                width: "360px",
                borderRadius: "22px",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                color: "#fff",
                overflow: "hidden",
                scrollSnapAlign: "center",
                transition: "all 0.3s ease",
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    background: "linear-gradient(135deg, #667eea, #764ba2)",
                    color: "#fff",
                    fontSize: "0.8rem",
                    padding: "5px 14px",
                    borderRadius: "20px",
                    fontWeight: "600",
                    boxShadow: "0 0 10px rgba(118,75,162,0.6)",
                  }}
                >
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div
                style={{
                  height: "200px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "22px 24px" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px" }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.8)", marginBottom: "15px", lineHeight: "1.6" }}>
                  {project.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "18px" }}>
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      style={{
                        padding: "6px 10px",
                        borderRadius: "8px",
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        background: "rgba(118,75,162,0.15)",
                        border: "1px solid rgba(118,75,162,0.4)",
                        color: "#b29fff",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      style={buttonStyle("filled")}
                    >
                      <Github size={18} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      style={buttonStyle("outline")}
                    >
                      <ExternalLink size={18} /> Live
                    </a>
                  )}
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @media (max-width: 768px) {
          #projects {
            padding: 80px 10px 40px !important;
          }
        }
      `}</style>
    </section>
  );
}

/* --- Helper Style Functions --- */
const navArrowStyle = (position) => ({
  position: "absolute",
  [position]: "-15px",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(255,255,255,0.1)",
  border: "1px solid rgba(255,255,255,0.2)",
  borderRadius: "50%",
  width: "48px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
  transition: "all 0.3s ease",
  backdropFilter: "blur(8px)",
  zIndex: 10,
});

const buttonStyle = (type) =>
  type === "filled"
    ? {
        flex: 1,
        textDecoration: "none",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        color: "#fff",
        padding: "10px 14px",
        borderRadius: "10px",
        fontSize: "0.9rem",
        fontWeight: "600",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        transition: "all 0.3s ease",
      }
    : {
        flex: 1,
        textDecoration: "none",
        color: "#b29fff",
        border: "1px solid rgba(178,159,255,0.5)",
        padding: "10px 14px",
        borderRadius: "10px",
        fontSize: "0.9rem",
        fontWeight: "600",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        transition: "all 0.3s ease",
      };
