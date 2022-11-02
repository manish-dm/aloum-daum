import React from "react";
import "./Navbar.css";
import aloumNavLogo from "../../assets/images/homepage/aloumNavLogo.png";
import SearchIcon from "../../assets/images/homepage/searchIcon.png";
import profileIcon from "../../assets/images/homepage/profileIcon.png";
import favouritesIcon from "../../assets/images/homepage/favouritesIcon.png";
import cartIcon from "../../assets/images/homepage/cartIcon.png";
import { FiChevronDown } from "react-icons/fi";
import trendingImage1 from "../../assets/images/homepage/trendingImage1.png";
import { CgClose } from "react-icons/cg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-upper">
        <img src={aloumNavLogo} alt="logo" className="nav-upper-logo" />
        <input type="radio" name="slide" id="menu-btn"/>
        <input type="radio" name="slide" id="cancel-btn"/>
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
        {/* hamburger btn */}
        <label htmlFor="menu-btn" className="nav-btn nav-open-btn">
          <HiOutlineMenuAlt3 />
        </label>
      </div>
      {/* ************************************************************ */}
      <div className="nav-lower">
        <ul className="nav-lower-menu-links">
          {/* mobile nav cancel btn */}
          <label htmlFor="cancel-btn" className="nav-btn nav-close-btn">
            <CgClose />
          </label>
          <li>
            <div className="menu-name-and-arrow">
              HAIR <FiChevronDown />
            </div>
            <input type="checkbox" id="showDropdown1" />
            <label
              htmlFor="showDropdown1"
              className="mobile-menu-name-and-arrow"
            >
              HAIR <FiChevronDown />
            </label>
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
            <input type="checkbox" id="showDropdown2" />
            <label
              htmlFor="showDropdown2"
              className="mobile-menu-name-and-arrow"
            >
              FACE <FiChevronDown />
            </label>
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
            <input type="checkbox" id="showMobileMega" />
            <label
              htmlFor="showMobileMega"
              className="mobile-menu-name-and-arrow"
            >
              BODY <FiChevronDown />
            </label>
            <div className="mega-box">
              <div className="mega-box-content">
                <div className="mega-box-row">
                  <img
                    src={trendingImage1}
                    alt="menu dropdown view"
                    className="megabox-row-image"
                  />
                </div>
                <div className="mega-box-row">
                  <header>Head</header>
                  <ul className="mega-box-links">
                    <li>Body oil</li>
                    <li>Tanner</li>
                    <li>Moisturiser</li>
                  </ul>
                </div>
                <div className="mega-box-row">
                  <header>Middle</header>
                  <ul className="mega-box-links">
                    <li>Spray</li>
                    <li>Lotion</li>
                    <li>Perfume</li>
                  </ul>
                </div>
                <div className="mega-box-row">
                  <header>Lower</header>
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
            <input type="checkbox" id="showDropdown3" />
            <label
              htmlFor="showDropdown3"
              className="mobile-menu-name-and-arrow"
            >
              WELLNESS <FiChevronDown />
            </label>
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
            <input type="checkbox" id="showDropdown4" />
            <label
              htmlFor="showDropdown4"
              className="mobile-menu-name-and-arrow"
            >
              INTIMATE <FiChevronDown />
            </label>
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
