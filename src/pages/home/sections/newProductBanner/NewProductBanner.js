import React from "react";
import "./NewProductBanner.css";
import trendingImage2 from "../../../../assets/images/homepage/trendingImage2.png";
import {IoMdArrowDropright} from "react-icons/io"

const NewProductBanner = () => {
  return (
    <div className="newproduct-wrapper">
      <img
        src={trendingImage2}
        alt="new product banner"
        className="newproduct-img-style"
      />
      <div className="newproduct-text-content">
        <div className="newproduct-title">NEW COLLECTIVE</div>
        <div className="newproduct-heading">
          Discover Our New Skincare Products
        </div>
        <div className="newproduct-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor Lorem ipsum
        </div>
        <button className="newproduct-button">
          Explore More
          <div className="newproduct-dash-and-arrow">
            <div className="newproduct-dash"></div>
            <IoMdArrowDropright />
          </div>
        </button>
      </div>
    </div>
  );
};

export default NewProductBanner;
