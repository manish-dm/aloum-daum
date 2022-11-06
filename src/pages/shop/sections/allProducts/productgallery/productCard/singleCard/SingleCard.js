import React from "react";
import "./SingleCard.css";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

const SingleCard = ({ data }) => {
  return (
    <div className="singlecard-wrapper">
      <div className="singlecard-img-container" style={{ background: data.bg }}>
        <div className="singlecard-img-banner-msg">
          {data.featured ? (
            <span className="img-banner-msg-left">FEATURED</span>
          ) : (
            <span></span>
          )}
          {data.bestseller && (
            <span className="img-banner-msg-right">BESTSELLER</span>
          )}
        </div>
        <img
          src={data.image}
          alt="preview of product"
          className="singlecard-img-styling"
        />
      </div>
      {/* ****************** */}
      <div className="singlecard-text-contents">
        <div className="singlecard-text-info">
          <div className="singlecard-categ-and-qty">
            <span>{data.category}</span>
            <span>{data.qty}</span>
          </div>
          <div className="singlecard-productName-style">{data.productName}</div>
          <div className="ratings-div-style">
            <span>
              {[...new Array(5)].map((arr, index) => {
                return index < data.rating ? (
                  <AiFillStar className="ratingIconCSS" key={index} />
                ) : (
                  <AiOutlineStar className="ratingIconCSS" key={index} />
                );
              })}
            </span>
            <span>{data.personsRated}</span>
          </div>
          <div className="singlecard-product-price">{data.price}</div>
        </div>
        <div className="singlecard-actions">
          <div className="favIcon-div">
            <AiOutlineHeart className="productFavIcon-CSS" />
          </div>
          <div className="addToBag-button">Add To Bag</div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
