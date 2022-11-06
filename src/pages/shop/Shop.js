import React from "react";
import "./Shop.css";
import ShopBanner from "./sections/shopBanner/ShopBanner";
import AllProducts from "./sections/allProducts/AllProducts";
import Newsletter from "../home/sections/newsletter/Newsletter";

const Shop = () => {
  return (
    <div className="shop-wrapper">
      <ShopBanner />
      <AllProducts />
      <Newsletter />
    </div>
  );
};

export default Shop;
