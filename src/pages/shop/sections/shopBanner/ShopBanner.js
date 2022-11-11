import React from 'react';
import "./ShopBanner.css";
import BannerImg from "../../../../assets/images/cartpage/cartBanner.png";

const ShopBanner = () => {
  return (
    <div className='shopbanner-wrapper'>
      <img
        src={BannerImg}
        alt="cart banner"
        className="shopBanner-img-styling"
      />
        <div className='shopbanner-title'>
            Shop
        </div>
    </div>
  )
}

export default ShopBanner;