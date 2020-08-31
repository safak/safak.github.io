import React from "react";
import "./Introduction.css";
import { ExpandMore } from "@material-ui/icons";
import { useSpring, animated } from "react-spring";

const Introduction = () => {
  const props = useSpring({ marginTop: 0, from: { marginTop: 500 } });

  return (
    <div className="introduction">
      <div className="introductionCenter">
        <animated.div style={props}>I will fade in</animated.div>

        <h1>Welcome to My Kitchen</h1>
        <p>
          Creative and responsive desingn, lightweight and enhanced user
          experience, clean code...
        </p>
      </div>
      <ExpandMore className="animate-flicker" />
    </div>
  );
};

export default Introduction;
