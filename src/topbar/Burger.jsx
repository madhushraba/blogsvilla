import React, { useState } from "react";
import "./burger.css";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <label htmlFor="menu-toggle" className="menu-btn" onClick={toggleMenu}>
        <span></span>
      </label>
      <div className={`menu ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggleMenu}>
          X
        </button>
        <ul onClick={toggleMenu}>
          <li>
            <Link
              to={`/`}
              style={{ textDecoration: "none", color: "var(--bg-pri" }}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to={`/about`}
              style={{ textDecoration: "none", color: "var(--bg-pri" }}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to={`/contact`}
              style={{ textDecoration: "none", color: "var(--bg-pri" }}
            >
              CONTACT
            </Link>
          </li>
          <li>
            <Link
              to={`/write`}
              style={{ textDecoration: "none", color: "var(--bg-pri" }}
            >
              WRITE
            </Link>
          </li>
          <li>
            <Link
              to={`/profile`}
              style={{ textDecoration: "none", color: "var(--bg-pri" }}
            >
              PROFILE
            </Link>
          </li>
         
        </ul>
       
      </div>
    </div>
  );
};

export default HamburgerMenu;
