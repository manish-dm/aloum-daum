import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import {SlClose} from "react-icons/sl";

const Navbar = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const onNavBtnClicked = () => {
    setClicked(!clicked);

    onNavigation("/shop");
  };

  const onNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="nav-container">
      {!showSearchBar ? (
        <div className="nav-upper">
          <div className="mobile-nav-hamburger-logo-div">
            {/* hamburger btn */}
            {!clicked && (
              <label
                htmlFor="menu-btn"
                className="nav-btn nav-open-btn"
                onClick={onNavBtnClicked}
              >
                <HiOutlineMenuAlt3 className="hamburger-icon-style" />
              </label>
            )}
            <img
              src={aloumNavLogo}
              alt="logo"
              className="nav-upper-logo"
              onClick={() => onNavigation("/")}
            />
          </div>
          <div className="nav-upper-link-buttons">
            <div className="nav-searchbar">
              <img src={SearchIcon} alt="search here" onClick={() => setShowSearchBar(true)}/>
              <input type="text" placeholder="Search" />
            </div>
            <div className="nav-icon-buttons">
              <img src={profileIcon} alt="profile" />
              <img
                src={favouritesIcon}
                alt="favorites"
                className="navbar-favorite-route-icon"
              />
              <img
                src={cartIcon}
                alt="cart"
                onClick={() => onNavigation("/cart")}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="onMobileSearchBar-container">
          <input type="text" placeholder="Search" className="onMobileSearchBar-styling"/>
          <SlClose className="onMobileSearchBar-close-icon" onClick={() => setShowSearchBar(false)}/>
        </div>
      )}

      {/* ************************************************************ */}
      <div className={clicked ? "nav-lower show-nav" : "nav-lower"}>
        <ul className="nav-lower-menu-links">
          {/* mobile nav cancel btn */}
          <label
            htmlFor="cancel-btn"
            className="nav-btn nav-close-btn"
            onClick={onNavBtnClicked}
          >
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
              <li onClick={onNavBtnClicked}>Conditioner</li>
              <li onClick={onNavBtnClicked}>Hair oil</li>
              <li onClick={onNavBtnClicked}>Shampoo</li>
              <li onClick={onNavBtnClicked}>Volumizer</li>
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
              <li onClick={onNavBtnClicked}>Whitener</li>
              <li onClick={onNavBtnClicked}>Mask</li>
              <li onClick={onNavBtnClicked}>Acne Remover</li>
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
                    <li onClick={onNavBtnClicked}>Body oil</li>
                    <li onClick={onNavBtnClicked}>Tanner</li>
                    <li onClick={onNavBtnClicked}>Moisturiser</li>
                  </ul>
                </div>
                <div className="mega-box-row">
                  <header>Middle</header>
                  <ul className="mega-box-links">
                    <li onClick={onNavBtnClicked}>Spray</li>
                    <li onClick={onNavBtnClicked}>Lotion</li>
                    <li onClick={onNavBtnClicked}>Perfume</li>
                  </ul>
                </div>
                <div className="mega-box-row">
                  <header>Lower</header>
                  <ul className="mega-box-links">
                    <li onClick={onNavBtnClicked}>Cobblouise</li>
                    <li onClick={onNavBtnClicked}>Yorlopi</li>
                    <li onClick={onNavBtnClicked}>Smoothner</li>
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
              <li onClick={onNavBtnClicked}>Grooming</li>
              <li onClick={onNavBtnClicked}>Hygiene</li>
              <li onClick={onNavBtnClicked}>Health</li>
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
              <li onClick={onNavBtnClicked}>Spa Oil</li>
              <li onClick={onNavBtnClicked}>Truffler</li>
              <li onClick={onNavBtnClicked}>Shredlum</li>
              <li onClick={onNavBtnClicked}>Brocolopico</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
