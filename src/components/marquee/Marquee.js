import React from "react";
import "./Marquee.css";

const Marquee = () => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee">
        <ul className="marquee__content">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
        </ul>

        <ul aria-hidden="true" className="marquee__content">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
        </ul>
      </div>
    </div>
  );
};

export default Marquee;
