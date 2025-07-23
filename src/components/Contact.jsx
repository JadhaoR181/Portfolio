import React, { useState } from "react";
import { motion as Motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        backgroundColor: "#f4f4f4",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2 style={{
        fontSize: "2.2rem",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "40px",
        color: "#222",
      }}>
        💬 Get in Touch
      </h2>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "center",
        }}
      >
        {/* Left Side Info */}
        <Motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            flex: "1 1 320px",
            maxWidth: "500px",
            color: "#222",
          }}
        >
          <h3 style={{ fontSize: "1.6rem", marginBottom: "10px", color: "#555" }}>Let's Connect</h3>
          <p style={{ marginBottom: "20px" }}>
            Feel free to reach out to me for collaborations, freelance projects,
            or any questions regarding development or tech.
          </p>
          <div style={{ lineHeight: "1.8", color: "#333" }}>
            <p><strong>Name:</strong> Ravindra Jadhav</p>
            <p><strong>Email:</strong> jadhaor181@gmail.com</p>
            <p><strong>Location:</strong> Mumbai, Maharashtra</p>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/JadhaoR181"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#0650acff",
                  textDecoration: "underline",
                  wordBreak: "break-word",
                }}
              >
                github.com/JadhaoR181
              </a>
            </p>
          </div>
        </Motion.div>

        {/* Right Side Form */}
        <Motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            flex: "1 1 320px",
            maxWidth: "500px",
            background: "#f9f9ff",
            borderRadius: "12px",
            padding: "30px",
            border: "1px solid #0650acff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#444" }}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: "8px",
                background: "#f9f9ff",
                color: "#222",
                border: "1px solid #0650acff",
                outline: "none",
              }}
              placeholder="Your Name"
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#444" }}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: "8px",
                background: "#f9f9ff",
                color: "#222",
                border: "1px solid #0650acff",
                outline: "none",
              }}
              placeholder="you@example.com"
            />
          </div>

          <div style={{ marginBottom: "25px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "500", color: "#444" }}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: "8px",
                background: "#f9f9ff",
                color: "#222",
                border: "1px solid #0650acff",
                outline: "none",
                resize: "none",
              }}
              placeholder="Your message or question"
            ></textarea>
          </div>

          <button
            type="submit"
            style={{
              padding: "12px 24px",
              background: "#222",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
              width: "100%",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#0056b3")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#222")}
          >
            Send Message
          </button>
        </Motion.form>
      </div>
    </section>
  );
}
