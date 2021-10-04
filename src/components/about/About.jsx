import React from "react";
import "./About.css";

function About() {
  return (
    <div className="aboutContainer">
      <p className="aboutText">
        About <br />
        <br /> I like gym. Lift big at gym. GRR. <br />
        <br />I like headphones. Drown out noise of painful existance. <br />
        <br />I like games, but no time for games. Must go hard or no job.
      </p>
      <img
        className="aboutPicture"
        src="https://media.istockphoto.com/photos/male-chimpanzee-in-business-clothes-picture-id143921954"
        alt="about"
      />
    </div>
  );
}

export default About;
