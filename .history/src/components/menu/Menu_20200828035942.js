import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <ul className="menuList">
        <li className="menuListItem">Home</li>
        <li className="menuListItem">About</li>
        <li className="menuListItem">Portfolio</li>
        <li className="menuListItem">Contact</li>
      </ul>
    </div>
  );
};

export default Menu;
