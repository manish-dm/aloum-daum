import React from "react";
import "./CartBanner.css";
import CartBannerImg from "../../../../assets/images/cartpage/cartBanner.jpg";

const CartBanner = () => {
  return (
    <div className="cartbanner-wrapper">
      <img
        src={CartBannerImg}
        alt="cart banner"
        className="cartbanner-img-styling"
      />
      <div className="cartbanner-heading">Shopping Cart</div>
    </div>
  );
};

export default CartBanner;
