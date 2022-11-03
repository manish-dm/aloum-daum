import React from "react";
import "./HeroSlider.css";
import product6 from "../../../../assets/images/homepage/product6.png";
import product1 from "../../../../assets/images/homepage/product1.png";
import product4 from "../../../../assets/images/homepage/product4.png";
import product5 from "../../../../assets/images/homepage/product5.png";
import Slider from "react-slick";
import HeroSection from "./HeroSection";

const HeroSlider = () => {
  const heroStaticData = [
    {
      heading: "Be Natural and Glowing",
      description:
        "Take your pick of the best and newest Korean makeup brands and skin care products.",
      image: product6,
    },

    {
      heading: "Be Cool and Prosperous",
      description:
        "Take your pick of the best and newest Korean makeup brands and skin care products.",
      image: product1,
    },

    {
      heading: "Be Zeal and Inspiring",
      description:
        "Take your pick of the best and newest Korean makeup brands and skin care products.",
      image: product4,
    },

    {
      heading: "Be Vivid and Perceptive",
      description:
        "Take your pick of the best and newest Korean makeup brands and skin care products.",
      image: product5,
    },
  ];
  return (
    <div className="hero-slider-wrapper">
      <Slider slidesToShow={1} arrows={false} swipe={true} dots={true}>
        {heroStaticData.length > 0 &&
          heroStaticData.map((staticData, idx) => {
            return <HeroSection key={idx} staticData={staticData} />;
          })}
      </Slider>
    </div>
  );
};

export default HeroSlider;
