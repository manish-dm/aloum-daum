import React from "react";
import "./ProductGallery.css";
import { BiChevronDown } from "react-icons/bi";
import {MdGridView} from "react-icons/md";
import {GiHamburgerMenu} from "react-icons/gi";
import ProductCard from "./productCard/ProductCard";

const ProductGallery = () => {
  return (
    <div className="productgallery-wrapper">
      <div className="productgallery-content">
        <div className="product-top-actionbar">
          <div className="showing-results">Showing 1-12 of 16 results</div>
          <div className="product-view-sort-div">
            <div className="product-view-buttons">
              <span>View:</span>
              <span><MdGridView className="sort-view-icon active"/></span>
              <span><GiHamburgerMenu className="sort-view-icon"/></span>
            </div>
            <div className="vr-seperator"></div>
            <div className="product-sort-dropdown">
              <span>Sort by Latest</span>
              <span><BiChevronDown className="sort-drop-icon"/></span>
            </div>
          </div>
        </div>
        {/* ****************************************************************** */}
        <div className="productgallery-cards-container">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
