import React from "react";
import "./AllProducts.css";
import FilterSidebar from "./filtersidebar/FilterSidebar";
import ProductGallery from "./productgallery/ProductGallery";

const AllProducts = () => {
  return (
    <div className="allproducts-wrapper">
      <div className="products-filter-sidebar">
        <FilterSidebar />
      </div>
      <div className="products-whole-gallery">
        <ProductGallery />
      </div>
    </div>
  );
};

export default AllProducts;
