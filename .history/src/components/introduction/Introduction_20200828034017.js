import React from "react";
import "./Introduction.css";
import { ExpandMore } from "@material-ui/icons";

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="introductionCenter">
        <h1>Welcome to My Kitchen</h1>
        <p>
          Creative and responsive desingn, lightweight and enhanced user
          experience, clean code...
        </p>
      </div>
      <ExpandMore />
    </div>
  );
};

export default Introduction;
