import React from "react";
import "./Menu.css";

const Menu = ({ toggle }) => {
  return (
    <div className={!toggle ? "deactive" : "menu"}>
      <img
        src=""
        alt="menu"
      />
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
