import React from "react";
import "./Body.css";

function Body() {
  return (
    <div className="bodyContainer">
      <img
        className="myPicture"
        src="https://media.istockphoto.com/photos/office-worker-of-the-past-picture-id476924948"
        alt="me"
      />
      <p className="bodyText">
        Hi, I'm Nicholas Clark <br />
        <br />I am a computer science student working hard to begin a
        professional career. <br />
      </p>
    </div>
  );
}

export default Body;
