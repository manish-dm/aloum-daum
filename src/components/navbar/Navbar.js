import React from "react";
import "./Navbar.css";
import aloumNavLogo from "../../assets/images/homepage/aloumNavLogo.png";
import SearchIcon from "../../assets/images/homepage/searchIcon.png";
import profileIcon from "../../assets/images/homepage/profileIcon.png";
import favouritesIcon from "../../assets/images/homepage/favouritesIcon.png";
import cartIcon from "../../assets/images/homepage/cartIcon.png";
import { FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-upper">
        <img src={aloumNavLogo} alt="logo" className="nav-upper-logo" />
        <div className="nav-upper-link-buttons">
          <div className="nav-searchbar">
            <img src={SearchIcon} alt="search here" />
            <input type="text" placeholder="Search" />
          </div>
          <div className="nav-icon-buttons">
            <img src={profileIcon} alt="profile" />
            <img src={favouritesIcon} alt="favorites" />
            <img src={cartIcon} alt="cart" />
          </div>
        </div>
      </div>
      {/* ************************************************************ */}
      <div className="nav-lower">
        <ul className="nav-lower-menu-links">
          <li>
            <div className="menu-name-and-arrow">
              HAIR <FiChevronDown />
            </div>
            <ul className="dropDown-list">
              <li>Conditioner</li>
              <li>Hair oil</li>
              <li>Shampoo</li>
              <li>Volumizer</li>
            </ul>
          </li>
          <li>
            <div className="menu-name-and-arrow">
              FACE <FiChevronDown />
            </div>
            <ul className="dropDown-list">
              <li>Whitener</li>
              <li>Mask</li>
              <li>Acne Remover</li>
            </ul>
          </li>
          <li>
            <div className="menu-name-and-arrow">
              BODY <FiChevronDown />
            </div>
            <div className="mega-box">
                <div className="mega-box-content">
                    <div className="mega-box-row">
                        <header>Heading 1</header>
                        <ul className="mega-box-links">
                            <li>Body oil</li>
                            <li>Tanner</li>
                            <li>Moisturiser</li>
                        </ul>
                    </div>
                    <div className="mega-box-row">
                        <header>Heading 2</header>
                        <ul className="mega-box-links">
                            <li>Spray</li>
                            <li>Lotion</li>
                            <li>Perfume</li>
                        </ul>
                    </div>
                    <div className="mega-box-row">
                        <header>Heading 3</header>
                        <ul className="mega-box-links">
                            <li>Cobblouise</li>
                            <li>Yorlopi</li>
                            <li>Smoothner</li>
                        </ul>
                    </div>
                </div>
            </div>
          </li>
          <li>
            <div className="menu-name-and-arrow">
              WELLNESS <FiChevronDown />
            </div>
            <ul className="dropDown-list">
              <li>Grooming</li>
              <li>Hygiene</li>
              <li>Health</li>
            </ul>
          </li>
          <li>
            <div className="menu-name-and-arrow">
              INTIMATE <FiChevronDown />
            </div>
            <ul className="dropDown-list">
              <li>Spa Oil</li>
              <li>Truffler</li>
              <li>Shredlum</li>
              <li>Brocolopico</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
