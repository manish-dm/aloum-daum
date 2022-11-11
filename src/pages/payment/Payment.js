import React, {useState} from 'react'
import './payment.css'
import {paymentMethodData} from './paymentMethodData'
import Display from './Display'
import SmallNewsletter from '../../components/smallNewsletter/SmallNewsletter'

const Payment = () => {
  const[showItemName,setShowItemName] = useState("card");
    function showComponenet(prop){
        setShowItemName(prop)
    }
    return (
       <>
       
       <div className='payment-main'>
            <div className='payment-conatiner'>
                <div className='show-checkout-status'>
                    <div className='numbers'>1</div>
                    <div className='status'>Guest Checkout</div>
                    <div className='status-border'></div>
                    <div className='numbers'>2</div>
                    <div className='status'>Shipping Address</div>
                    <div className='status-border'></div>
                    <div className='pending-number'>
                    <div className='numbers last-num'>3</div>
                    </div>
                    <div className='status pending-status'>Payment Method</div>
                    
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
                                        <input className="payment-option-radio-btn" type="radio" name = "check" defaultChecked= {item.value === 'card'} id= {key} onClick={()=> showComponenet(item.value)}/>
                                        <div className='method-icon'>
                                        <img src ={item.icon} alt = "payment method icon"  />
                                         </div>
                                        <label htmlFor = {key} name="check" className="payment-method-name">{item.method}</label>
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
            <SmallNewsletter />
       </>

            )
}

            export default Payment