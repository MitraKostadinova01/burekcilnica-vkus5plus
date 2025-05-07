import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { id: 1, path: "/", text: "Производи" },
    { id: 2, path: "/about", text: "ЗА НАС" },
    { id: 3, path: "/location", text: "Нашата локација" },
  ];

  return (
    <>
      <div className="announcement-bar">
        <p className="scrolling-text">
          Работно време: ПОНЕДЕЛНИК - САБОТА од 06:00 до 14:00, телефонски број:
          071 625 012
        </p>
      </div>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            БУРЕКЧИЛНИЦА ВКУС 5+
          </NavLink>

          <div className={`nav-menu ${isOpen ? "active" : ""}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `nav-item ${isActive ? "active" : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.text}
              </NavLink>
            ))}
          </div>

          <button
            className={`hamburger ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
