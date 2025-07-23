import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f9f9ff",
        padding: "40px 20px",
        borderTop: "1px solid #ddd",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "20px",
        }}
      >
        {/* Name and Tagline */}
        <div>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#222" }}>
            Ravindra Jadhav
          </h3>
          <p style={{ fontSize: "0.95rem", color: "#555" }}>
            Passionate Developer | Always learning and building
          </p>
        </div>

        {/* Social Links */}
        <div style={{ display: "flex", gap: "20px" }}>
          <a
            href="https://github.com/JadhaoR181"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#222", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
          >
            <Github size={22} />
          </a>
          <a
            href="mailto:jadhaor181@gmail.com"
            style={{ color: "#222", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
          >
            <Mail size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/ravindrajadhav08/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#222", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
          >
            <Linkedin size={22} />
          </a>
        </div>

        {/* Copyright */}
        <div style={{ fontSize: "0.85rem", color: "#888" }}>
          &copy; {new Date().getFullYear()} Ravindra Jadhav. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
