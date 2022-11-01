import React from 'react'
import "./Home.css";
import Category from './sections/categories/Category';

const Home = () => {
  return (
    <div className='homepage-container'>
       <Category />
    </div>
  )
}

export default Home