import React from "react";
import "./SmallNewsletter.css";
import { TbBrandTelegram } from "react-icons/tb";

const SmallNewsletter = () => {
  return (
    <div className="smallnewsletter-wrapper">
      <div className="smallnewsletter-content">
        <div className="newsletter-icon-and-msg-container">
          <div>
            <TbBrandTelegram className="newsletter-icon-style"/>
          </div>
          <div className="newsletter-msg-div">
            <span>Sign up to Newsletter</span>
            <span>...and receive $20 coupon for first shopping.</span>
          </div>
        </div>
        <div className="newsletter-input-and-button-div">
          <input type="text" placeholder="Enter your email Id" />
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SmallNewsletter;
