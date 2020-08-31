import React from "react";
import "./Menu.css";
import {useSpring, animated} from 'react-spring'

const Menu = ({ toggle }) => {
  const props = useSpring(toggle && { marginLeft: "100vw", from: { marginLeft: "0" } });
  return (
    <animated.div style={props} >
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
