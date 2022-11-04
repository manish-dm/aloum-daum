import React from 'react'
import './singleAddonCard.css'

const SingleAddonCard = ({imageUrl}) => {
    console.log(imageUrl)
  return (
    <div className='SingleAddonCard-main'>
        <div className='SingleAddonCard-image'>
            <img src ={imageUrl} alt="add on product image" />
        </div>
        <div className='SingleAddonCard-product-name'>
            Pure Vitamin C Serum Face
        </div>
        <div className='SingleAddonCard-product-price'>
            <s style={{color: "#ABABAB"}}>$20.22</s> <span>   $19.00</span>
        </div>
    </div>
  )
}

export default SingleAddonCard