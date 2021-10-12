import React from "react";
import "./Body.css";

function Body() {
  return (
    <div className="bodyContainer">
      <img className="bodyPicture" src="cat.jpg" alt="cat" />
      <p className="bodyText">
        Hi, I'm Nicholas Clark <br />
        <br />I am a computer science student working hard to begin a
        professional career. <br />
        <br />
        I am currently working towards expanding my skillset in web development
        technologies.
        <br />
        <br />
        This site is currently being developed with React and is my first
        experience with it.
        <br />
        <br />I am planning to dip my toes into other libraries and frameworks
        soon!
      </p>
    </div>
  );
}

export default Body;
