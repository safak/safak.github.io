import React from "react";
import "./Menu.css";
import { useSpring, animated } from "react-spring";

const Menu = ({ toggle }) => {
  const props = useSpring(
    toggle
      ? {
          config: { duration: 500 },
          display: "flex",
          marginLeft:"0",
          from: { display: "none", marginLeft:"1000"},
        }
      : {
          config: { duration: 500 },
          display: "none",
          marginLeft:"1000",
          from: { display: "flex" },
        }
  );
  return (
    <animated.div style={props} className="menu">
      <img
        src="https://images.pexels.com/photos/262896/pexels-photo-262896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="menu"
      />
      <ul className="menuList">
        <li className="menuListItem">Home</li>
        <li className="menuListItem">Portfolio</li>
        <li className="menuListItem">About</li>
        <li className="menuListItem">Contact</li>
      </ul>
    </animated.div>
  );
};

export default Menu;
