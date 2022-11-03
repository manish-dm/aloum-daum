import React from "react";
import "./Home.css";
import HeroSlider from "./sections/herosection/HeroSlider";
import BestsellerCarousel from "./sections/bestsellerCarousel/BestsellerCarousel";
import Category from "./sections/categories/Category";
import ProductUsp from "./sections/homeUsp/ProductUsp";
import Newsletter from "./sections/newsletter/Newsletter";
import Marquee from "../../components/marquee/Marquee";
import NewProductBanner from "./sections/newProductBanner/NewProductBanner";
import TrendingNow from "./sections/trendingNow/TrendingNow";

const Home = () => {
  return (
    <div className="homepage-container">
      <HeroSlider />
      <Marquee />
      <BestsellerCarousel />
      <NewProductBanner />
      <Category />
      <ProductUsp />
      <TrendingNow />
      <Newsletter />
    </div>
  );
};

export default Home;
