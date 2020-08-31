import React from "react";
import "./Introduction.css";
import { ExpandMore } from "@material-ui/icons";
import { useSpring, animated } from "react-spring";

const Introduction = () => {
  const props = useSpring({ margin:0, from: { margin: "110px" } });

  return (
    <div className="introduction">
      <div className="introductionCenter">
        <animated.div style={props}>
          <h1>Welcome to My Kitchen</h1>
        </animated.div>

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
