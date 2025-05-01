import React from "react";
import Tilt from "react-parallax-tilt";

const TiltCard = ({ children }) => {
  return (
    <Tilt>
      <div className="tilt-card">{children}</div>
    </Tilt>
  );
};

export default TiltCard;
