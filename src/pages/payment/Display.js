import React from 'react'
import './Display.css'
import Card from './cards/Card'
import NetBanking from './cards/NetBanking'
import UPI from './cards/UPI'
import COD from './cards/COD'

const Display = ({prop}) => {
    
  return (
    <div className='display-input-details'>

        {prop === 'card'?<Card  /> : ""}
        {prop === 'netbanking'? <NetBanking  /> : ""}
        {prop === 'upi'? <UPI  />: ""}
        {prop === 'cod'? <COD  />: ""}
    </div>
  )
}

export default Display