import React from "react";
import "./HeroSection.css";
import { IoMdArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ staticData }) => {
  const navigate = useNavigate();

  const onNavigation = (id) => {
    if(id === "sdf") navigate("/product-detail", {state: {image: staticData.image}});
    else navigate("shop");
  }

  return (
    <div className="herosection-wrapper">
      <div className="herosection-textContent">
        <div className="hero-heading">{staticData.heading}</div>
        <div className="hero-desc">{staticData.description}</div>
        <button className="hero-button" onClick={() => onNavigation(staticData.id)}>
          Shop Now
          <div className="hero-dash-and-arrow">
            <div className="hero-dash"></div>
            <IoMdArrowDropright />
          </div>
        </button>
      </div>
      <div className="herosection-imageContent">
        <img
          src={staticData.image}
          alt="hero-section-gallery"
          className="hero-image-style"
        />
      </div>
    </div>
  );
};

export default HeroSection;
