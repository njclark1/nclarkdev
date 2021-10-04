import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul className="myNavbar">
        <li>
          <a className="navButton" href="index.html">
            About Me
          </a>
        </li>
        <li>
          <a className="navButton" href="index.html">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
