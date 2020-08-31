import React from "react";
import "./Header.css";
import { Menu } from "@material-ui/icons";

const Header = ({ toggle, setToggle, scrollToRef, menuRef }) => {
  return (
    <div className="header">
      <Menu
        onClick={() => {
          setToggle(!toggle);
          scrollToRef(menuRef);
        }}
      />
    </div>
  );
};

export default Header;
