import React from "react";
import "./ProductCard.css";
import SingleCard from "./singleCard/SingleCard";
import SingleCardData from "./singleCard/SingleCardData";

const ProductCard = () => {
  return (
    <div className="productcard-wrapper">
      {SingleCardData.map((data) => {
        return <SingleCard key={data.id} data={data} />;
      })}
    </div>
  );
};

export default ProductCard;
