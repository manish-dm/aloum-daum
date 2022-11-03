import React, {useState} from 'react'
import './payment.css'
import {paymentMethodData} from './paymentMethodData'
import Display from './Display'

const Payment = () => {
  const[showItemName,setShowItemName] = useState("");
    function showComponenet(prop){
        setShowItemName(prop)
    }
    return (
        <div className='payment-main'>
            <div className='payment-conatiner'>
                <div className='show-checkout-status'>
                    status
                </div>
                <div className='payment-content'>
                    <div className='payment-heading'>
                        Payment Method
                    </div>
                    <div className='payment-box'>
                        <div className='payment-options'>
                            {
                                paymentMethodData.map((item,key)=>{
                                    return <div className='individual-methods' key = {key}>
                                        <input type="radio" name = "check" onClick={()=> showComponenet(item.value)}/>
                                        <div className='method-icon'>
                                        <img src ={item.icon} alt = "payment method icon"  />
                                         </div>
                                        <div className="payment-method name">{item.method}</div>
                                        </div>
                                })
                            }
                                </div>
                                <div className='show-selected-payment-method'>
                                         <Display prop = {showItemName}/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            )
}

            export default Payment