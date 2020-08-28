import React, { useState } from "react";
import "./Header.css";
import { Menu as MenuIcon } from "@material-ui/icons";
import { Menu } from "@material-ui/core";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="header">
      <MenuIcon />
      <Menu />
    </div>
  );
};

export default Header;
