import React, { useState } from "react";
import "./Header.css";
import { Menu } from "@material-ui/icons";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="header">
      <Menu />
    </div>
  );
};

export default Header;
