import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul className="socialsBar">
        <li>
          <a href="https://www.facebook.com/nclark11" target="_blank">
            <img className="socialsButton" src="fb.png" alt="fb" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nicholas-clarkutk/"
            target="_blank"
          >
            <img className="socialsButton" src="li.png" alt="fb" />
          </a>
        </li>
        <li>
          <a href="https://github.com/njclark1" target="_blank">
            <img className="socialsButton" src="gh.png" alt="fb" />
          </a>
        </li>
      </ul>
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
