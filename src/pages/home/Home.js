import React from 'react'
import "./Home.css";
import Category from './sections/categories/Category';
import BestsellerCarousel from './sections/bestsellerCarousel/BestsellerCarousel'
import ProductUsp from './sections/homeUsp/ProductUsp'

const Home = () => {
  return (
    <div className='homepage-container'>
      <BestsellerCarousel />
       <Category />
       <ProductUsp />
    </div>
  )
}

export default Home