import React from "react";
import "./Home.css";
import HeroSlider from "./sections/herosection/HeroSlider";
import BestsellerCarousel from "./sections/bestsellerCarousel/BestsellerCarousel";
import Category from "./sections/categories/Category";
import ProductUsp from "./sections/homeUsp/ProductUsp";
import Newsletter from "./sections/newsletter/Newsletter";

const Home = () => {
  return (
    <div className="homepage-container">
      <HeroSlider />
      <BestsellerCarousel />
      <Category />
      <ProductUsp />
      <Newsletter />
    </div>
  );
};

export default Home;
