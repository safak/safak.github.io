import React, { useState } from "react";
import "./Header.css";
import { Menu as MenuIcon } from "@material-ui/icons";
import Menu from "../menu/Menu";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="header">
      <MenuIcon onClick={() => setToggle(!toggle)} />
      <Menu toggle={toggle} />
    </div>
  );
};

export default Header;
