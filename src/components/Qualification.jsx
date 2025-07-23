import React from "react";
import { GraduationCap, School, BookOpen } from "lucide-react";

export default function Qualification() {
  const data = [
    {
      title: "B.E. in Information Technology",
      institute: "MCT's RGIT, Andheri (W)",
      year: "2023 - 2026",
      icon: <GraduationCap size={24} color="#007bff" />,
      summary: [
        "DSA, Embedded Systems, OS, CA, Design & Analysis of Algo",
        "CGPA: 7.8 (till now)",
      ],
    },
    {
      title: "Diploma in Computer Engineering",
      institute: "Government Polytechnic Mumbai, Bandra",
      year: "2020 - 2023",
      icon: <BookOpen size={24} color="#007bff" />,
      summary: [
        "DBMS, Security, Data Analytics, C, Adv Java, etc.",
        "Scored 82.58%",
      ],
    },
    {
      title: "SSC",
      institute: "Anusaya Vidhyalaya",
      year: "2020",
      icon: <School size={24} color="#007bff" />,
      summary: ["Scored 85.40%"],
    },
  ];

  return (
    <section
      id="qualification"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fa",
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#222",
          marginTop: "40px",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        Qualification
      </h2>

      <div
        className="qualification-container"
        style={{
          width: "100%",
          maxWidth: "900px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="qualification-card"
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              animation: "fadeInUp 0.6s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {item.icon}
              <h3 style={{ fontSize: "1.5rem", fontWeight: "600", margin: 0 }}>{item.title}</h3>
            </div>
            <span style={{ fontSize: "1rem", color: "#555" }}>{item.institute}</span>
            <div style={{ fontSize: "0.95rem", color: "#888" }}>{item.year}</div>
            <ul style={{ paddingLeft: "1.2rem", color: "#444", margin: 0 }}>
              {item.summary.map((point, i) => (
                <li key={i} style={{ marginBottom: "6px" }}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .qualification-card h3 {
            font-size: 1.25rem;
          }
          .qualification-card span,
          .qualification-card div,
          .qualification-card li {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}
