import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
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
      <h1 className="headerBox">Nicholas Clark</h1>
      <img className="headerImage" src="me.jpg" alt="logo" />
    </div>
  );
}

export default Header;
