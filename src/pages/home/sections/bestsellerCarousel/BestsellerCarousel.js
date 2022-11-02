import React, { useRef, useState } from "react";
import "./bestsellerCarousel.css";
import { BestsellerCarouselData } from "./BestsellerCarouselData";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { bestsellerCarouselSettings } from "../../../../utils/bestsellerCarouselSettings";

const BestsellerCarousel = () => {
  const [progressVal, setProgressVal] = useState(1.5);
  const bestsellerSliderRef = useRef();

  const sliderChangeCallback = (currentSlide, nextSlide) => {
    let calc = (nextSlide / (BestsellerCarouselData.length - 1)) * 100;
    setProgressVal(calc);
  };

  return (
    <div className="bestseller-carousel-main">
      <div className="bestseller-carousel-heading">
        <div className="bestseller-carousel-title">Our Bestsellers</div>
        <div className="bestseller-carousel-actions">
          <span onClick={() => bestsellerSliderRef.current.slickPrev()}>
            <div className="left-btn">
              <FaChevronLeft size={20} />
            </div>
          </span>
          <span onClick={() => bestsellerSliderRef.current.slickNext()}>
            <div className="right-btn">
              <FaChevronRight size={20} />
            </div>
          </span>
        </div>
      </div>
      <div className="bestseller-carousel-container">
        <Slider
          ref={bestsellerSliderRef}
          beforeChange={sliderChangeCallback}
          {...bestsellerCarouselSettings}
          className="bestseller-carousel-slider"
        >
          {BestsellerCarouselData.map((item, key) => {
            return <div className="individual-item" key={key}>
              <div className="item-image" style={{backgroundColor :`${item.color}`}} >
                <img src={item.image} alt="bestseller product image" />
              </div>
              <div className="product-details">
                <div className="product-price">{item.priceRange}</div>
                <div className="product-name">{item.name}</div>
              </div>
            </div>

          })}
        </Slider>
        {/* progress bar of slider */}
        {/* <div className="bestseller-slider-progressbar">
                        <div
                          className="bestseller-slider-progressDot"
                          style={{ left: progressVal + "%" }}
                        />
                      </div> */}
      </div>
    </div>
  );
};

export default BestsellerCarousel;
