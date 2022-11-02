import React from "react";
import "./Home.css";
import Category from "./sections/categories/Category";
import BestsellerCarousel from "./sections/bestsellerCarousel/BestsellerCarousel";
import HeroSection from "./sections/herosection/HeroSection";

const Home = () => {
  return (
    <div className="homepage-container">
      <HeroSection />
      <BestsellerCarousel />
      <Category />
    </div>
  );
};

export default Home;
