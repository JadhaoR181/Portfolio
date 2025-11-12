import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, User, MessageSquare, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Form submitted:", formData);
    
    // Simulate submission
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      alert("Message sent successfully! I'll get back to you soon.");
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "jadhaor181@gmail.com",
      link: "mailto:jadhaor181@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      link: "tel:+91XXXXXXXXXX",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Mumbai, Maharashtra",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={28} />,
      label: "GitHub",
      username: "@JadhaoR181",
      link: "https://github.com/JadhaoR181",
      color: "#333",
    },
    {
      icon: <Linkedin size={28} />,
      label: "LinkedIn",
      username: "@ravindrajadhav08",
      link: "https://www.linkedin.com/in/ravindrajadhav08/",
      color: "#0A66C2",
    },
  ];

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        padding: "100px 20px 60px",
        background: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "60px", animation: "fadeInDown 0.8s ease" }}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: "800",
              color: "#fff",
              marginBottom: "15px",
              textShadow: "2px 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            Get in Touch
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            alignItems: "start",
          }}
        >
          {/* Left Side - Contact Info & Social */}
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            {/* Contact Info Cards */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                padding: "30px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#fff",
                  marginBottom: "25px",
                  textShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",
                }}
              >
                Contact Information
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      padding: "15px",
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      transition: "all 0.3s ease",
                      cursor: item.link ? "pointer" : "default",
                    }}
                    onClick={() => item.link && window.open(item.link, "_blank")}
                    onMouseOver={(e) => {
                      if (item.link) {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                        e.currentTarget.style.transform = "translateX(5px)";
                      }
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <div
                      style={{
                        minWidth: "50px",
                        height: "50px",
                        background: "rgba(255, 255, 255, 0.2)",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "rgba(255, 255, 255, 0.7)",
                          margin: "0 0 5px 0",
                          fontWeight: "500",
                        }}
                      >
                        {item.label}
                      </p>
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "#fff",
                          margin: 0,
                          fontWeight: "600",
                        }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Cards */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                borderRadius: "20px",
                padding: "30px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#fff",
                  marginBottom: "25px",
                  textShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",
                }}
              >
                Connect With Me
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "15px",
                      padding: "15px",
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <div
                      style={{
                        minWidth: "50px",
                        height: "50px",
                        background: "rgba(255, 255, 255, 0.95)",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: social.color,
                      }}
                    >
                      {social.icon}
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "1.1rem",
                          color: "#fff",
                          margin: "0 0 5px 0",
                          fontWeight: "600",
                        }}
                      >
                        {social.label}
                      </p>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: "rgba(255, 255, 255, 0.7)",
                          margin: 0,
                        }}
                      >
                        {social.username}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Motion.div>

          {/* Right Side - Contact Form */}
          <Motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(10px)",
              borderRadius: "20px",
              padding: "40px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "700",
                color: "#fff",
                marginBottom: "30px",
                textShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              Send Me a Message
            </h3>

            <div style={{ marginBottom: "25px" }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "10px",
                  fontWeight: "600",
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "0.95rem",
                }}
              >
                <User size={18} /> Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.9)",
                  color: "#333",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  outline: "none",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                }}
                placeholder="Your Name"
                onFocus={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </div>

            <div style={{ marginBottom: "25px" }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "10px",
                  fontWeight: "600",
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "0.95rem",
                }}
              >
                <Mail size={18} /> Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.9)",
                  color: "#333",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  outline: "none",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                }}
                placeholder="you@example.com"
                onFocus={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </div>

            <div style={{ marginBottom: "30px" }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "10px",
                  fontWeight: "600",
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "0.95rem",
                }}
              >
                <MessageSquare size={18} /> Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.9)",
                  color: "#333",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  outline: "none",
                  fontSize: "1rem",
                  resize: "vertical",
                  transition: "all 0.3s ease",
                  fontFamily: "inherit",
                }}
                placeholder="Your message or question..."
                onFocus={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: "16px 32px",
                background: isSubmitting 
                  ? "rgba(255, 255, 255, 0.5)"
                  : "rgba(255, 255, 255, 0.95)",
                color: "#667eea",
                border: "none",
                borderRadius: "12px",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                fontWeight: "700",
                fontSize: "1.05rem",
                width: "100%",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
              }}
              onMouseOver={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.25)";
                }
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.95)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)";
              }}
            >
              <Send size={20} />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </Motion.form>
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

        @media (max-width: 768px) {
          #contact {
            padding: 80px 15px 40px !important;
          }

          #contact h2 {
            font-size: 2rem !important;
          }

          #contact form {
            padding: 30px 20px !important;
          }
        }

        @media (max-width: 480px) {
          #contact {
            padding: 80px 10px 30px !important;
          }
        }
      `}</style>
    </section>
  );
}
