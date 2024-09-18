import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeNav = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeNav(); 
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeNav(); 
    }
  }, []);

  return (
    <div>
      <nav className={`navbar ${navActive ? "active" : ""}`}>
        <div>
          <RouterLink to="/" style={{ textDecoration: "none" }}>
            <h2 style={{ color: "black" }}>Vishal Mishra</h2>
          </RouterLink>
        </div>
        <RouterLink
          to="/"
          className={`nav__hamburger ${navActive ? "active" : ""}`}
          onClick={toggleNav}
        >
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
          <span className="nav__hamburger__line"></span>
        </RouterLink>
        <div className={`navbar--items ${navActive ? "active" : ""}`}>
          <ul>
            <li>
              <RouterLink to="/" onClick={closeNav}>
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/Education" onClick={closeNav}>
                Education
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/Experience" onClick={closeNav}>
                Experience
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/Project" onClick={closeNav}>
                Project
              </RouterLink>
            </li>
          </ul>
        </div>
        <RouterLink to="/ContactMe" className="btn btn-outline-primary" onClick={closeNav}>
          Contact Me
        </RouterLink>
      </nav>
      {/* Mobile sidebar overlay */}
      <div
        className={`mobile-sidebar-overlay ${navActive ? "active" : ""}`}
        onClick={closeNav}
      ></div>
    </div>
  );
}

export default Navbar;
