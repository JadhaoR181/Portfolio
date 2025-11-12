import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.toggle("dark-theme");
  };

  const handleNavClick = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
    history.replaceState(null, "", " ");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "skills", name: "Skills" },
    { id: "qualification", name: "Qualification" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 9999,
        background: scrolled
          ? "rgba(102, 126, 234, 0.95)"
          : "linear-gradient(135deg, rgba(102, 126, 234, 0.85) 0%, rgba(118, 75, 162, 0.85) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        padding: isMobile ? "1rem 1.5rem" : "1.2rem 3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "all 0.3s ease",
        boxShadow: scrolled
          ? "0 4px 30px rgba(0, 0, 0, 0.3)"
          : "0 2px 20px rgba(0, 0, 0, 0.15)",
        borderBottom: scrolled
          ? "1px solid rgba(255, 255, 255, 0.3)"
          : "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      {/* Logo */}
      <div
        onClick={() => handleNavClick("home")}
        style={{
          fontSize: isMobile ? "1.3rem" : "1.6rem",
          fontWeight: "800",
          color: "#fff",
          cursor: "pointer",
          transition: "all 0.3s ease",
          letterSpacing: "-0.5px",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.textShadow = "2px 2px 15px rgba(0, 0, 0, 0.4)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.textShadow = "2px 2px 10px rgba(0, 0, 0, 0.2)";
        }}
      >
        Ravindra Jadhav
      </div>

      {/* Desktop Nav */}
      {!isMobile && (
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "2.5rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "rgba(255, 255, 255, 0.95)",
                    fontWeight: "600",
                    fontSize: "1rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    padding: "8px 0",
                    transition: "all 0.3s ease",
                    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.textShadow = "2px 2px 8px rgba(0, 0, 0, 0.3)";
                    const underline = e.currentTarget.querySelector(".nav-underline");
                    if (underline) underline.style.width = "100%";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.95)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.textShadow = "1px 1px 5px rgba(0, 0, 0, 0.2)";
                    const underline = e.currentTarget.querySelector(".nav-underline");
                    if (underline) underline.style.width = "0%";
                  }}
                >
                  {item.name}
                  <span
                    className="nav-underline"
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      width: "0%",
                      height: "3px",
                      background: "#fff",
                      borderRadius: "2px",
                      transition: "width 0.3s ease",
                      boxShadow: "0 2px 8px rgba(255, 255, 255, 0.5)",
                    }}
                  />
                </button>
              </li>
            ))}
            
            {/* Theme Toggle */}
            <li>
              <button
                onClick={toggleTheme}
                style={{
                  background: "rgba(255, 255, 255, 0.2)",
                  border: "2px solid rgba(255, 255, 255, 0.4)",
                  borderRadius: "50%",
                  width: "42px",
                  height: "42px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.15) rotate(15deg)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.3)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.3)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
                }}
              >
                {theme === "light" ? <Moon size={20} color="#fff" /> : <Sun size={20} color="#fff" />}
              </button>
            </li>
          </ul>
        </nav>
      )}

      {/* Mobile Controls */}
      {isMobile && (
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button
            onClick={toggleTheme}
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              border: "2px solid rgba(255, 255, 255, 0.4)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            {theme === "light" ? <Moon size={18} color="#fff" /> : <Sun size={18} color="#fff" />}
          </button>

          <button
            onClick={toggleMenu}
            style={{
              background: menuOpen
                ? "rgba(255, 255, 255, 0.3)"
                : "rgba(255, 255, 255, 0.2)",
              border: "2px solid rgba(255, 255, 255, 0.4)",
              borderRadius: "10px",
              padding: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
          >
            {menuOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
          </button>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "linear-gradient(135deg, rgba(102, 126, 234, 0.98) 0%, rgba(118, 75, 162, 0.98) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: "0 0 20px 20px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderTop: "none",
            animation: "slideDown 0.4s ease forwards",
            zIndex: 9998,
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              padding: "1rem 0",
              margin: 0,
            }}
          >
            {navItems.map((item, index) => (
              <li
                key={item.id}
                style={{
                  width: "100%",
                  animation: `fadeInUp 0.3s ease forwards ${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <button
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "rgba(255, 255, 255, 0.95)",
                    fontWeight: "600",
                    fontSize: "1.05rem",
                    padding: "1rem 2rem",
                    width: "100%",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    position: "relative",
                    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.paddingLeft = "2.5rem";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.95)";
                    e.currentTarget.style.paddingLeft = "2rem";
                  }}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Ensure navbar doesn't overlap with content */
        #home, #about, #skills, #qualification, #projects, #contact {
          scroll-margin-top: 80px;
        }

        @media (max-width: 768px) {
          #home, #about, #skills, #qualification, #projects, #contact {
            scroll-margin-top: 70px;
          }
        }
      `}</style>
    </header>
  );
}
