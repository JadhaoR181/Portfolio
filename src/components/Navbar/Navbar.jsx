import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const scrollToSection = (id) => {

const section =
document.getElementById(id);

if(section){

section.scrollIntoView({

behavior:"smooth",
block:"start"

});

}

setMenuOpen(false);

};

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container navbar-container">

        <div
          className="logo"
          onClick={() =>
            scrollToSection("home")
          }
        >
          Ravindra.
        </div>

        {/* Desktop */}

        <nav className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                scrollToSection(item.id)
              }
            >
              {item.name}
            </button>
          ))}

          <a
            href="/Ravindra_Jadhav_Resume.pdf"
            download
            className="resume-btn"
          >
            Resume
          </a>
        </nav>

        {/* Mobile */}

        <button
          className="menu-btn"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          {menuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                scrollToSection(item.id)
              }
            >
              {item.name}
            </button>
          ))}

          <a href="/Ravindra_Jadhav_Resume.pdf" download className="resume-btn">
            Resume
          </a>
        </div>
      )}
    </header>
  );
}