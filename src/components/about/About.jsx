import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="aboutContainer" id="about">
        <p className="aboutText">
          <br />
          My primary hobby for a few years has been fitness.
          <br />
          <br />
          I have been going to the gym regularly for around 3 and a half years
          now.
          <br />
          <br />
          Around a year ago my girlfriend moved in with me and started to join
          me.
          <br />
          <br />
          It can be a struggle staying consistent with our routine, but it has
          been incredibly rewarding as well.
        </p>
        <img className="aboutPicture" src="beefy.jpg" alt="beefy" />
      </div>
      <div className="aboutContainer" id="about">
        <p className="aboutText">
          <br />
          Outside of the gym, my hobbies are primarily related to tech.
          <br />
          <br />
          My father introduced me to computers early in elementary school and
          this created a passion for tech that has stuck ever since.
          <br />
          <br />
          I enjoy building and tinkering with PCs and related gear such as
          keyboards.
          <br />
          <br />
          Another thing I inherited from my father is a passion for audio.
          <br />
          <br />
          While he is more focused on speaker setups, I developed an interest in
          headphones.
        </p>
        <img className="aboutPicture" src="pcs.jpg" alt="computers" />
        <img className="aboutPicture" src="headphones.jpg" alt="headphones" />
      </div>
    </>
  );
}

export default About;
