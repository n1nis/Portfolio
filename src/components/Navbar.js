import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("");
  const [scrollLocked, setScrollLocked] = useState(false);

  const handleMenuToggle = (select) => {
    setIsMenuOpen(!isMenuOpen);
    setSelectedSection(select);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      setScrollLocked(true);
    } else {
      document.body.style.overflow = "";
      setScrollLocked(false);
    }
  }, [isMenuOpen]);

  console.log(scrollLocked);

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" className="navLink">
            Home
          </Link>
          <Link to="/About" className="navLink">
            About
          </Link>
          <Link to="/Contact" className="navLink">
            Contact
          </Link>
        </div>
        <div className="burger" onClick={handleMenuToggle}>
          <Hamburger toggled={isMenuOpen} toggle={handleMenuToggle} size={24} />
        </div>
      </nav>
      <nav className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
        <Link to="/">
          <img src={logo} alt="Logo" width="185px" height="42px" />
        </Link>
        <div className="burger" onClick={handleMenuToggle}>
          <Hamburger
            toggled={isMenuOpen}
            toggle={handleMenuToggle}
            size={30}
            distance="lg"
            label="Show menu"
          />
        </div>
        <div
          className={`overlay ${isMenuOpen && selectedSection ? "open" : ""}`}
        >
          <nav className="overlay-menu">
            <Link to="/" onClick={handleMenuToggle} className="navLink">
              Home
            </Link>
            <Link to="/About" onClick={handleMenuToggle} className="navLink">
              About
            </Link>
            <Link to="/Contact" onClick={handleMenuToggle} className="navLink">
              Contact
            </Link>
            <Link to="/" onClick={handleMenuToggle} className="navLink">
              CV
            </Link>
            <Link
              to="https://github.com/n1nis"
              className="navLink"
            >
              GitHub
            </Link>
            <Link
              to="https://www.linkedin.com/in/krzysztof-ruci%C5%84ski-6841a6281/"
              className="navLink"
            >
              LinkedIn
            </Link>
            <Link
              to="https://www.instagram.com/krzvvsiek/"
              className="navLink"
            >
              Instagram
            </Link>
          </nav>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
