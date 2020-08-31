import React from "react";
import "./Introduction.css";
import { ExpandMore } from "@material-ui/icons";
import { useSpring, animated } from "react-spring";

const Introduction = () => {
  const props = useSpring({ marginLeft: 0, from: { marginLeft: 500 } });

  return (
    <div className="introduction">
      <animated.div style={props} className="introductionCenter">
        <h1>Welcome to My Kitchen</h1>
        <p>
          Creative and responsive desingn, lightweight and enhanced user
          experience, clean code...
        </p>
      </animated.div>
      <ExpandMore className="animate-flicker" />
    </div>
  );
};

export default Introduction;
