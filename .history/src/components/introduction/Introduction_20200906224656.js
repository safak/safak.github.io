import React from "react";
import "./Introduction.css";
import { ExpandMore } from "@material-ui/icons";
import { useSpring, animated } from "react-spring";

const Introduction = ({ scrollToRef, portfolioRef }) => {
  const props = useSpring({ marginTop: 0, from: { marginTop: 500 } });

  return (
    <div className="introduction">
      <animated.div style={props} className="introductionCenter">
        <h1>Welcome to My Kitchen</h1>
        <p>
          Creative and responsive design, lightweight and clean code, enhanced user
          experience...
        </p>
      </animated.div>
      <ExpandMore
        className="animate-flicker"
        onClick={() => scrollToRef(portfolioRef)}
      />
    </div>
  );
};

export default Introduction;
