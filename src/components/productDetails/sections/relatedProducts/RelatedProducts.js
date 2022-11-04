import React from 'react'
import './relatedProducts.css'
import  {RelatedProductData } from './relatedProductData'

const RelatedProducts = () => {
    return (
        <div className='RelatedProducts-main'>
            <div className="RelatedProducts-heading">
                Related Products
            </div>
          <div className='RelatedProducts-imagaes'>
          { RelatedProductData.map((item,key)=>{
            return  <div className="individual-item" key={key}>
            <div className="item-image" style={{backgroundColor :`${item.color}`}} >
              <img src={item.image} alt="bestseller product image" />
            </div>
            <div className="product-details">
              <div className="product-price">{item.priceRange}</div>
              <div className="product-name">{item.name}</div>
            </div>
          </div>
           })
           }
          </div>
        </div>
    )
}

export default RelatedProducts