import React from "react";
import Particles from "react-particles-js";

const ParticlesBackground = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
          },
          move: {
            speed: 1,
            direction: "none",
            out_mode: "out",
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
