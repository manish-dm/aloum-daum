// import React from "react";
// import product6 from "../../../../assets/images/homepage/product6.png";
// import product1 from "../../../../assets/images/homepage/product1.png";
// import product4 from "../../../../assets/images/homepage/product4.png";
// import product5 from "../../../../assets/images/homepage/product5.png";
// import product7 from "../../../../assets/images/homepage/product7.png";
// import { IoMdArrowDropright } from "react-icons/io";
// import Slider from "react-slick";

// const HeroSection = () => {
//   const heroStaticData = [
//     {
//       heading: "Be Natural and Glowing",
//       description:
//         "Take your pick of the best and newest Korean makeup brands and skin care products.",
//       image: product6,
//     },

//     {
//       heading: "Be Cool Out There",
//       description:
//         "Take your pick of the best and newest Korean makeup brands and skin care products.",
//       image: product1,
//     },

//     {
//       heading: "Be Zeal and Inspiring",
//       description:
//         "Take your pick of the best and newest Korean makeup brands and skin care products.",
//       image: product4,
//     },

//     {
//       heading: "Be Vivid and Perceptive",
//       description:
//         "Take your pick of the best and newest Korean makeup brands and skin care products.",
//       image: product5,
//     },

//     {
//       heading: "Be Beautiful and Fun",
//       description:
//         "Take your pick of the best and newest Korean makeup brands and skin care products.",
//       image: product7,
//     },
//   ];
//   return (
//     <Slider slidesToShow={1} arrows={true} swipe={true}>
//       {heroStaticData.length > 0 &&
//         heroStaticData.map((data, idx) => {
//           return (
//             <div className="herosection-wrapper" key={idx}>
//               <div className="herosection-textContent">
//                 <div className="hero-heading">{data.heading}</div>
//                 <div className="hero-desc">
//                     {data.description}
//                 </div>
//                 <button className="hero-button">
//                   Shop Now
//                   <div className="hero-dash-and-arrow">
//                     <div className="hero-dash"></div>
//                     <IoMdArrowDropright />
//                   </div>
//                 </button>
//               </div>
//               <div className="herosection-imageContent">
//                 <img
//                   src={data.image}
//                   alt="hero-section-gallery"
//                   className="hero-image-style"
//                 />
//               </div>
//             </div>
//           );
//         })}
//     </Slider>
//   );
// };

// export default HeroSection;
