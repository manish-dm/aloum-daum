import React from 'react';
import "./Shop.css";
import ShopBanner from './sections/shopBanner/ShopBanner';
import AllProducts from './sections/allProducts/AllProducts';

const Shop = () => {
  return (
    <div className='shop-wrapper'>
      <ShopBanner />
      <AllProducts />
    </div>
  )
}

export default Shop;