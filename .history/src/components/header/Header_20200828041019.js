import React from "react";
import "./Header.css";
import { Menu } from "@material-ui/icons";

const Header = ({toggle, setToggle}) => {
  return (
    <div className="header">
      <Menu onClick={()=>setToggle(!toggle)}/>
    </div>
  );
};

export default Header;
