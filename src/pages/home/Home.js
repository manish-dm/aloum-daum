import React from 'react'
import "./Home.css";
import Category from './sections/categories/Category';
import BestsellerCarousel from './sections/bestsellerCarousel/BestsellerCarousel'

const Home = () => {
  return (
    <div className='homepage-container'>
      <BestsellerCarousel />
       <Category />
    </div>
  )
}

export default Home