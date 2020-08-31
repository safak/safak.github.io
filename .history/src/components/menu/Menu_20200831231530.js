import React from "react";
import "./Menu.css";

const Menu = ({
  toggle,
  setToggle,
  scrollToRef,
  homeRef,
  portfolioRef,
  aboutRef,
}) => {
  return (
    <div className={!toggle ? "deactive" : "menu"}>
      <img
        src="https://images.pexels.com/photos/262896/pexels-photo-262896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="menu"
      />
      <ul className="menuList">
        <li
          className="menuListItem"
          onClick={() => {
            scrollToRef(homeRef);
            setToggle(false)
          }}
        >
          Home
        </li>
        <li className="menuListItem" onClick={() => scrollToRef(portfolioRef)}>
          Portfolio
        </li>
        <li className="menuListItem" onClick={() => scrollToRef(aboutRef)}>
          About
        </li>
        <li className="menuListItem" onClick={() => scrollToRef(aboutRef)}>
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Menu;
