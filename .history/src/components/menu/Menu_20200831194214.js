import React from "react";
import "./Menu.css";
import {useSpring, animated} from 'react-spring'

const Menu = ({ toggle }) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  return (
    <div className={!toggle ? "deactive" : "menu"}>
      <animated.div style={props}>I will fade in</animated.div>
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
    </div>
  );
};

export default Menu;
