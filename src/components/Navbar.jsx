import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
      const header = document.getElementById("header");
      if (window.scrollY >= 80) {
        header.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      } else {
        header.style.boxShadow = "none";
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { id: "home", icon: "uil-estate", name: "Home" },
    { id: "about", icon: "uil-user", name: "About" },
    { id: "skills", icon: "uil-file-alt", name: "Skills" },
    { id: "qualification", icon: "uil-briefcase-alt", name: "Qualification" },
    { id: "projects", icon: "uil-scenery", name: "Projects" },
    { id: "contact", icon: "uil-message", name: "Contact-Me" },
  ];

  return (
    <header
      id="header"
      style={{
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 1000,
        backgroundColor: "#fff",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "0.3s",
        flexWrap: "wrap",
      }}
    >
      <div
        onClick={() => handleNavClick("home")}
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#222",
          cursor: "pointer",
        }}
      >
        Ravindra
      </div>

      {/* Desktop Nav */}
      {!isMobile && (
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "2rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#000",
                    fontWeight: "600",
                    fontSize: "1rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#0650ac")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#000")}
                >
                  <i className={`uil ${item.icon}`}></i>
                  {item.name}
                </button>
              </li>
            ))}
            <li>
              <i
                className="uil uil-moon"
                onClick={toggleTheme}
                style={{ cursor: "pointer", fontSize: "1.25rem" }}
              ></i>
            </li>
          </ul>
        </nav>
      )}

      {/* Mobile Hamburger + Theme */}
      {isMobile && (
        <div style={{ display: "flex", alignItems: "center" }}>
          <i
            className="uil uil-moon"
            onClick={toggleTheme}
            style={{ cursor: "pointer", fontSize: "1.25rem" }}
          ></i>
          <button
            onClick={toggleMenu}
            style={{ background: "none", border: "none", padding: 0 }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      )}

      {isMobile && menuOpen && (
  <ul
    style={{
      position: "absolute",
      top: "50px",
      left: 0,
      right: 0,
      background: "#fff",
      borderRadius: "0 0 12px 12px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "1rem 0",
      gap: "1rem",
      zIndex: 9999,
      animation: "slideDown 0.4s ease forwards",
    }}
  >
    {navItems.map((item) => (
      <li key={item.id} style={{ width: "100%" }}>
        <button
          onClick={() => handleNavClick(item.id)}
          style={{
            background: "transparent",
            border: "none",
            color: "#111827",
            fontWeight: "600",
            fontSize: "1rem",
            padding: "0.75rem 1.5rem",
            width: "100%",
            textAlign: "left",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "#f3f4f6")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
        >
          <i className={`uil ${item.icon}`} style={{ fontSize: "1.2rem" }}></i>
          {item.name}
        </button>
      </li>
    ))}
  </ul>
      )}

      <style>{`
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`}</style>

    </header>
    
  );
  
}
