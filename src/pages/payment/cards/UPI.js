import React from 'react'
import './upi.css'

const UPI = () => {
  return (
    <div className='UPI-main'>
      <div className='enter-upi'>
        Enter UPI Id
      </div>
      <input type="text" placeholder="example@upi"/>
      <button type="submit">Proceed to Pay</button>
    </div>
  )
}

export default UPI