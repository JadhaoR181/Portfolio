import React from "react";
import { GraduationCap, School, BookOpen, Calendar, Award } from "lucide-react";

export default function Qualification() {
  const data = [
    {
      title: "B.E. in Information Technology",
      institute: "MCT's Rajiv Gandhi Institute of Technology",
      location: "Andheri (W), Mumbai",
      year: "2023 - 2026",
      icon: <GraduationCap size={32} />,
      iconColor: "#FFD700",
      summary: [
        "Core: DSA, Embedded Systems, Operating Systems, Computer Architecture",
        "Advanced: Design & Analysis of Algorithms, Database Management",
        "CGPA: 7.8/10 (Current)",
      ],
      status: "Pursuing",
    },
    {
      title: "Diploma in Computer Engineering",
      institute: "Government Polytechnic Mumbai",
      location: "Bandra, Mumbai",
      year: "2020 - 2023",
      icon: <BookOpen size={32} />,
      iconColor: "#4CAF50",
      summary: [
        "Core: DBMS, Network Security, Data Analytics",
        "Languages: C, C++, Advanced Java, Python",
        "Percentage: 82.58%",
      ],
      status: "Completed",
    },
    {
      title: "SSC (10th Standard)",
      institute: "Anusaya Vidhyalaya",
      location: "Mumbai",
      year: "2020",
      icon: <School size={32} />,
      iconColor: "#2196F3",
      summary: [
        "Maharashtra State Board",
        "Percentage: 85.40%",
      ],
      status: "Completed",
    },
  ];

  return (
    <section
      id="qualification"
      style={{
        minHeight: "100vh",
        background: "transparent",
        padding: "100px 20px 60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "1000px" }}>
        {/* Section Header */}
        <div style={{ marginBottom: "60px", textAlign: "center", animation: "fadeInDown 0.8s ease" }}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: "800",
              color: "#fff",
              marginBottom: "15px",
              textShadow: "2px 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            Education & Qualification
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            My academic journey and educational achievements
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            position: "relative",
            width: "100%",
          }}
        >
          {/* Vertical Timeline Line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "0",
              bottom: "0",
              width: "3px",
              background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))",
              transform: "translateX(-50%)",
              zIndex: 1,
            }}
            className="timeline-line"
          />

          {/* Timeline Items */}
          {data.map((item, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                marginBottom: index === data.length - 1 ? "0" : "60px",
                animation: `fadeInUp 0.8s ease ${index * 0.2}s backwards`,
              }}
            >
              {/* Timeline Dot */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "40px",
                  transform: "translateX(-50%)",
                  width: "24px",
                  height: "24px",
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                  borderRadius: "50%",
                  border: "4px solid rgba(255, 255, 255, 0.3)",
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
                  zIndex: 2,
                  animation: "pulse 2s ease-in-out infinite",
                }}
                className="timeline-dot"
              />

              {/* Content Card - Alternating sides */}
              <div
                style={{
                  display: "flex",
                  justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                  width: "100%",
                }}
                className="timeline-item"
              >
                <div
                  style={{
                    width: "calc(50% - 40px)",
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "20px",
                    padding: "30px",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 16px 48px rgba(0, 0, 0, 0.25)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.15)";
                  }}
                >
                  {/* Status Badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      padding: "6px 14px",
                      background: item.status === "Pursuing" 
                        ? "linear-gradient(135deg, #4CAF50, #45a049)"
                        : "rgba(255, 255, 255, 0.2)",
                      borderRadius: "20px",
                      fontSize: "0.75rem",
                      fontWeight: "600",
                      color: "#fff",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    {item.status}
                  </div>

                  {/* Icon and Title */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "15px", marginBottom: "20px" }}>
                    <div
                      style={{
                        minWidth: "60px",
                        height: "60px",
                        background: "rgba(255, 255, 255, 0.2)",
                        borderRadius: "15px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: item.iconColor,
                        backdropFilter: "blur(5px)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontSize: "1.4rem",
                          fontWeight: "700",
                          color: "#fff",
                          margin: "0 0 8px 0",
                          textShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "rgba(255, 255, 255, 0.9)",
                          margin: "0 0 5px 0",
                          fontWeight: "500",
                        }}
                      >
                        {item.institute}
                      </p>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: "rgba(255, 255, 255, 0.7)",
                          margin: 0,
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        📍 {item.location}
                      </p>
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "8px 16px",
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "12px",
                      marginBottom: "20px",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <Calendar size={16} color="rgba(255, 255, 255, 0.9)" />
                    <span
                      style={{
                        fontSize: "0.95rem",
                        color: "rgba(255, 255, 255, 0.9)",
                        fontWeight: "600",
                      }}
                    >
                      {item.year}
                    </span>
                  </div>

                  {/* Summary Points */}
                  <div style={{ marginTop: "15px" }}>
                    {item.summary.map((point, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          marginBottom: "10px",
                          color: "rgba(255, 255, 255, 0.85)",
                          fontSize: "0.95rem",
                          lineHeight: "1.6",
                        }}
                      >
                        <span style={{ color: item.iconColor, fontWeight: "bold", minWidth: "20px" }}>
                          •
                        </span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Achievement Badge */}
                  {(item.summary.some(s => s.includes("CGPA") || s.includes("Percentage"))) && (
                    <div
                      style={{
                        marginTop: "20px",
                        padding: "12px",
                        background: "rgba(255, 215, 0, 0.15)",
                        borderRadius: "12px",
                        border: "1px solid rgba(255, 215, 0, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Award size={20} color="#FFD700" />
                      <span style={{ color: "#FFD700", fontSize: "0.9rem", fontWeight: "600" }}>
                        Academic Excellence
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: translateX(-50%) scale(1);
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
          }
          50% {
            transform: translateX(-50%) scale(1.2);
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.8);
          }
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 30px !important;
          }

          .timeline-dot {
            left: 30px !important;
          }

          .timeline-item {
            justify-content: flex-end !important;
          }

          .timeline-item > div {
            width: calc(100% - 70px) !important;
          }

          #qualification {
            padding: 80px 15px 40px !important;
          }
        }

        @media (max-width: 480px) {
          .timeline-item > div {
            padding: 20px !important;
          }

          #qualification h2 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
