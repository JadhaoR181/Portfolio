import React from "react";

export default function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        backgroundColor: "#f8f9fa",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#222",
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        About Me
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        {/* Profile Image */}
        <img
          src="/src/assets/img/me.jpg"
          alt="Ravindra"
          style={{
            width: "300px",
            height: "380px",
            borderRadius: "12px",
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            maxWidth: "100%",
          }}
        />

        {/* Description & Info */}
        <div
          style={{
            flex: 1,
            minWidth: "280px",
            textAlign: "left",
            padding: "0 10px",
          }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.6",
              color: "#444",
              marginBottom: "30px",
              textAlign: "justify",
            }}
          >
            I'm a final-year Information Technology engineering student at MCT's
            Rajiv Gandhi Institute of Technology, Mumbai. Passionate about
            building web and mobile applications using MERN stack and Android.
            With hands-on experience in MERN Stack and Android projects, I thrive in
            collaborative environments and love solving real-world problems
            through technology.
          </p>

          {/* Info Cards */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              marginBottom: "30px",
              gap: "20px",
            }}
          >
            <div style={{ textAlign: "center", flex: "1 1 30%" }}>
              <h3 style={{ fontSize: "1.5rem", color: "#111" }}>08+</h3>
              <p style={{ color: "#777" }}>Aggregate CGPA</p>
            </div>
            <div style={{ textAlign: "center", flex: "1 1 30%" }}>
              <h3 style={{ fontSize: "1.5rem", color: "#111" }}>04+</h3>
              <p style={{ color: "#777" }}>Projects</p>
            </div>
            <div style={{ textAlign: "center", flex: "1 1 30%" }}>
              <h3 style={{ fontSize: "1.5rem", color: "#111" }}>06+</h3>
              <p style={{ color: "#777" }}>Months Experience</p>
            </div>
          </div>

          {/* Resume Download */}
           <a
    href="/src/assets/Ravindra Jadhav CV.pdf"
    download
    style={{
      display: "inline-block",
      padding: "12px 24px",
      backgroundColor: "#222",
      color: "#fff",
      borderRadius: "8px",
      fontWeight: "500",
      textAlign:"center",
      textDecoration: "none",
      transition: "background 0.3s",
    }}
    onMouseOver={(e) => (e.currentTarget.style.background = "#444")}
    onMouseOut={(e) => (e.currentTarget.style.background = "#222")}
    className="download-btn"
  >
    Download CV
  </a>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          #about h2 {
            font-size: 2rem;
          }
          #about p {
            font-size: 1rem;
          }
          #about img {
            width: 100%;
            height: auto;
          }
             .download-btn {
      margin: 0 auto;
      display: block !important;
      text-align: center;
    }
        }
      `}</style>
    </section>
  );
}
