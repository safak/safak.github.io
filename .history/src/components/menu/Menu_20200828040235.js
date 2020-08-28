import React, { useState } from "react";
import "./Menu.css";

const Menu = () => {
  const [toogle, setToogle] = useState(false);

  return (
    <div className={$toogle ? "deactive" : "menu"}>
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
