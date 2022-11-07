import React from 'react'
import ProductMainDetails from './sections/product-main-details/ProductMainDetails' 
import ProductDescription from './sections/product-description/ProductDescription'
import RelatedProducts from './sections/relatedProducts/RelatedProducts'
import AddOnProducts from './sections/addOnProducts/AddOnProducts'

const ProductDetails = () => {
  return (
    <div className='product-details-main'>
      <ProductMainDetails />
      <AddOnProducts />
      <ProductDescription />
      <RelatedProducts />
    </div>
  )
}

export default ProductDetails