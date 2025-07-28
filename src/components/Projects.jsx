import React, { useRef } from "react";
import { Github } from "lucide-react";

const projects = [
  {
    title: "WearYourDesign (E-commerce Platform)",
    description:
      "A full-fledged clothing platform with T-shirt customization using canvas and 3D previews. Includes admin panel for product management.",
    technologies: ["React", "Vite", "Node.js", "MongoDB", "Stripe", "Cloudinary"],
    image: "/project-banner/wyd.jpg",
    link: "https://github.com/JadhaoR181/WYD-WearYourDesignMain",
  },
  {
    title: "Majha Shetkari (Farmer App)",
    description:
      "An Android app for farmers to buy/sell equipment and crops. Features commodity prices and news in multiple languages.",
    technologies: ["Android", "Java", "Firebase", "MySQL"],
    image: "/project-banner/majha-shetkari.jpg",
    link: "https://github.com/JadhaoR181/Majha_Shetkari",
  },
  {
    title: "Task Management App",
    description:
      "React Native app to manage daily tasks with features like add/delete/edit tasks.",
    technologies: ["React Native", "JavaScript"],
    image: "/project-banner/task-management-app.jpg",
    link: "https://github.com/JadhaoR181/Task-Management-App",
  },
  {
    title: "Mart2Mart (B2B Marketplace)",
    description:
      "B2B app for retailers. Includes secure APIs, product listing, payments, and messaging.",
    technologies: ["Java", "PHP", "MySQL", "Firebase"],
    image: "/project-banner/mart2mart.jpg",
    link: "#",
  },
];

export default function Projects() {
  const carouselRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    const container = carouselRef.current;
    if (!container) return;

    if (diff > 50) {
      container.scrollBy({ left: 350, behavior: "smooth" });
    } else if (diff < -50) {
      container.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        background: "#f9f9ff",
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginTop: "30px", marginBottom: "10px" }}>
        Projects
      </h2>
      <span style={{ fontSize: "1.1rem", color: "#666", marginBottom: "30px" }}>
        My recent work and experience
      </span>

      <div
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          gap: "30px",
          width: "100%",
          maxWidth: "1200px",
          paddingBottom: "20px",
          scrollSnapType: "x mandatory",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 auto",
              minWidth: "320px",
              maxWidth: "320px",
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              scrollSnapAlign: "center",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            />
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "10px" }}>
              {project.title}
            </h3>
            <p style={{ color: "#555", marginBottom: "10px" }}>{project.description}</p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                justifyContent: "center",
                marginBottom: "12px",
              }}
            >
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    background: "#007bff",
                    color: "#fff",
                    padding: "5px 10px",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#007bff",
                  fontWeight: "500",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <Github size={18} /> View Code
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
