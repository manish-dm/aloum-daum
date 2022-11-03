import React from "react";
import "./Home.css";
import HeroSection from "./sections/herosection/HeroSection";
import BestsellerCarousel from "./sections/bestsellerCarousel/BestsellerCarousel";
import Category from "./sections/categories/Category";
import ProductUsp from "./sections/homeUsp/ProductUsp";
import Newsletter from "./sections/newsletter/Newsletter";

const Home = () => {
  return (
    <div className="homepage-container">
      <HeroSection />
      <BestsellerCarousel />
      <Category />
      <ProductUsp />
      <Newsletter />
    </div>
  );
};

export default Home;
