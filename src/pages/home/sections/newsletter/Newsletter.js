import React from 'react'
import product from '../../../../assets/images/homepage/product2.png'

import './newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter-main'>
      <div className='newsletter-container'>
        <div className='newsletter-content'>
          <div className='newsletter-desc'>
            Stay Up to Date with All
            News and Exclusive Offers
          </div>
          <div className='actions'>
            <input type="text" placeholder = "Email Address"/>
            <button type="submit" className='submit-btn'>Subscribe</button>
          </div>

        </div>

        <div className="product"> 
          <img src={product} />
          </div>
      </div>
    </div>
  )
}

export default Newsletter