import React from 'react';
import "./HeroSection.css";
import {IoMdArrowDropright} from "react-icons/io"

const HeroSection = ({staticData}) => {
  return (
    <div className='herosection-wrapper'>
        <div className='herosection-textContent'>
            <div className='hero-heading'>
            {staticData.heading}
            </div>
            <div className='hero-desc'>
            {staticData.description}
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
            <img src={staticData.image} alt="hero-section-gallery" className='hero-image-style'/>
        </div>
    </div>
  )
}

export default HeroSection;