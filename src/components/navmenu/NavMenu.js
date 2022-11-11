import React from "react";
import "./NavMenu.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const NavMenu = () => {
  return (
    <div className="navmenu-wrapper" id="topOfPageRef">
      <div className="navmenu-icons">
        <AiOutlineInstagram className="navmenu-icons-style insta"/>
        <FaFacebookF className="navmenu-icons-style fb"/>
      </div>
      <div className="navmenu-info">
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </div>
      <div className="navmenu-lang-changer">ENGLISH</div>
    </div>
  );
};

export default NavMenu;
