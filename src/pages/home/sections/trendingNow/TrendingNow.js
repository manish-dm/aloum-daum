import React from "react";
import "./TrendingNow.css";
import trendingImage3 from "../../../../assets/images/homepage/trendingImage3.png";
import trendingImage4 from "../../../../assets/images/homepage/trendingImage4.png";
import trendingImage1 from "../../../../assets/images/homepage/trendingImage1.png";
import product7 from "../../../../assets/images/homepage/product7.png";

const TrendingNow = () => {
  const productData = [
    {
      image: trendingImage3,
      title: "Bodycare",
      bg: "#EDF1F0",
      width: "39.6rem",
      height: "43.4rem",
    },
    {
      image: trendingImage4,
      title: "Skincare",
      bg: "#F5F5F5",
      width: "38.7rem",
      height: "49rem",
    },
    {
      image: trendingImage1,
      title: "Haircare",
      bg: "#F5F5F5",
      width: "38.2rem",
      height: "38.3rem",
    },
    {
      image: product7,
      title: "Beauty Products",
      bg: "#EDF1F0",
      width: "38.7rem",
      height: "49rem",
    },
  ];

  return (
    <div className="trendingnow-wrapper">
      <div className="trendingnow-header-section">
        <div className="trendingnow-title">Trending Now</div>
        <div className="trendingnow-heading">Blend Beauty In You</div>
      </div>
      <div className="trendingnow-products-section">
        {productData.map((data, idx) => {
          return (
            <div key={idx} className="trendingnow-card">
              <div style={{background: data.bg, overflow: "hidden"}}>
                <img
                  src={data.image}
                  alt="trending products"
                  className="trendingnow-card-image"
                />
              </div>

              <div className="trendingnow-card-desc">
                <p className="trendingnow-card-name">{data.title}</p>
                <p className="trendingnow-card-btn">View All</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingNow;
