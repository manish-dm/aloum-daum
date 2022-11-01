import React from "react";
import "./NavMenu.css";
import instaIcon from "../../assets/images/homepage/Instagram.png";
import fbIcon from "../../assets/images/homepage/facebookIcon.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const NavMenu = () => {
  return (
    <div className="navmenu-wrapper">
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
