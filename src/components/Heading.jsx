import React from "react";
import "../Heading.css"; // Import the CSS file for styles

const Heading = () => {
  const text = "ADD-GOD";

  return (
    <h1 className="heading">
      {text.split("").map((letter, index) => (
        <span key={index} className="letter" style={{ animationDelay: `${1 + index * 0.2}s` }}>
          {" "}
          {/* Add 1 second delay before the animation starts */}
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default Heading;
