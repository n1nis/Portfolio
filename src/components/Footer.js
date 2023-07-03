import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/logo.png";
import pdf from '../assets/CV.pdf'

function Footer() {
  return (
    <footer>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <span></span>
          <a href={pdf}>CV</a>
          <Link to="https://github.com/n1nis">GitHub</Link>
          <Link to="https://www.linkedin.com/in/krzysztof-ruci%C5%84ski-6841a6281/">
            LinkedIn
          </Link>
          <Link to="https://www.instagram.com/krzvvsiek/">Instagram</Link>
        </nav>
      </div>
      <p>
        <small>Build by Chris Rucinski</small>
        <img src={logo} alt="Logo" height="42px" width="160px"></img>
      </p>
    </footer>
  );
}

export default Footer;
