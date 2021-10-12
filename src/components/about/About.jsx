import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="aboutContainer" id="about">
        <p className="aboutText">
          <br /> I am currently a student.
          <br />
          <br /> I am currently a student.
        </p>
        <img
          className="aboutPicture"
          src="https://media.istockphoto.com/photos/male-chimpanzee-in-business-clothes-picture-id143921954"
          alt="about"
        />
      </div>
      <div className="aboutContainer" id="about">
        <p className="aboutText">
          <br />
          Outside of the gym, my hobbies are primarily related to tech.
          <br />
          <br />
          Growing up, my father introduced me to computers early in elementary
          school.
          <br />
          <br />
          Because of this, I grew an interest in electronics and computers from
          a young age.
          <br />
          <br />I enjoy building PCs and keyboards.
        </p>
        <img
          className="aboutPicture"
          src="https://media.istockphoto.com/photos/male-chimpanzee-in-business-clothes-picture-id143921954"
          alt="about"
        />
      </div>
      <div className="aboutContainer" id="about">
        <p className="aboutText">
          <br /> I like headphones.Drown out noise of painful existance.
        </p>
        <img
          className="aboutPicture"
          src="https://media.istockphoto.com/photos/male-chimpanzee-in-business-clothes-picture-id143921954"
          alt="about"
        />
      </div>
    </>
  );
}

export default About;
