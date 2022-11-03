import React from 'react'
import './card.css'

const Card = () => {
  return (
    <div className='card-method-main'>
      <form  className="formCSS" autoComplete="off">
        <div className='card-number'>
          <label htmlFor="name">Enter Card Number:</label>
          <input type="number" name="card-number" /><br />
        </div>
        <div className='expDate-and-cvv'>
          <div className='expDate'>
            <label name="name">Expiry Date</label>
            <input type="date" />
          </div>
          <div className='cvv'>
            <label name="name">CVV</label>
            <input type = "number" />
          </div>
        </div>
      </form>
      <button type='submit'>Pay Rs. 247</button>
    </div>
  )
}

export default Card