import React from 'react'
import ProductDescriptionCard from './sections/ProductDescriptionCard'
import AboutBrandCard from './sections/AboutBrandCard'
import ReviewsCard from './sections/ReviewsCard'

const DisplayCard = ({prop}) => {
  
  return (
    <div>
      {prop === "description"? <ProductDescriptionCard />: ""}
      {prop === "aboutBrands"? <AboutBrandCard />: ""}
      {prop === "reviews"? <ReviewsCard />: ""}
    </div>
  )
}

export default DisplayCard