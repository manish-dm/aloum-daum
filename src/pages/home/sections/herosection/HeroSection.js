import React from 'react';
import "./HeroSection.css";
import product6 from "../../../../assets/images/homepage/product6.png";
import {IoMdArrowDropright} from "react-icons/io"

const HeroSection = () => {
  return (
    <div className='herosection-wrapper'>
        <div className='herosection-textContent'>
            <div className='hero-heading'>
            Be Natural and Glowing
            </div>
            <div className='hero-desc'>
            Take your pick of the best and newest Korean makeup brands and skin care products.
            </div>
            <button className='hero-button'>
                Shop Now
                <div className='hero-dash-and-arrow'>
                    <div className='hero-dash'></div>
                    <IoMdArrowDropright />
                </div>
            </button>
        </div>
        <div className='herosection-imageContent'>
            <img src={product6} alt="hero-section-gallery" className='hero-image-style'/>
        </div>
    </div>
  )
}

export default HeroSection;