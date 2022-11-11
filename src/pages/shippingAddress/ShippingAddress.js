import React from 'react'
import './shippingAddress.css'
import SmallNewsletter from '../../components/smallNewsletter/SmallNewsletter'
import {orderSummaryData} from './orderSummaryData.js'
import { useNavigate } from 'react-router-dom'

const ShippingAddress = () => {
    const navigate = useNavigate();
    return (
       <>
             <div className='ShippingAddress-status show-checkout-status'>
                        <div className='payment-status-div-1'>
                            <div className='payment-status-numbers'>1</div>
                            <div className='status'>Guest Checkout</div>
                        </div>
                        <div className='status-border'></div>

                        <div className='payment-status-div-2'>
                            <div className='payment-status-numbers payment-status-numbers-active'>2</div>
                            <div className='status'>Shipping Address</div>
                        </div>
                        <div className='status-border'></div>
                        <div className='payment-status-div-3'>
                            <div className='pending-number'>
                                <div className='payment-status-numbers payment-status-numbers-pending'>3</div>
                            </div>
                            <div className='status pending-status'>Payment Method</div>

                        </div>

                    </div>
        <div className='ShippingAddress-content'>
            <div className='delivery-details'>
                <div className='deliver-address-heading'>
                    Delivery Details
                </div>
                <div className='user-details'>
                    <div className='first-name'>
                        <label>Full Name</label> <br />
                        <input type="text" placeholder='Full Name' />
                    </div>
                    <div className='last-name'>
                        <label>Last Name</label> <br />
                        <input type="text" placeholder='Last Name' />
                    </div>
                </div>
                <div className='contact-details'>
                    <div className='email-address'>
                        <label>Email Address</label> <br />
                        <input type="email" placeholder='Email Address' />
                    </div>
                </div>
                <div className='address-details'>
                    <div className='address-title'>Address</div><br />
                    <div className='country-city-zip-div'>
                        <div className='country-div'>
                            <label>Country</label><br />
                            <input type="text" placeholder="Country"/>
                        </div>
                        <div className='city-div'>
                            <label>City</label><br />
                            <input type="text" placeholder="City"/>
                        </div>
                        <div className='zip-div'>
                            <label>Province</label><br />
                            <input type="text" placeholder="Province"/>
                        </div>
                    </div>
                    <div className='address-div'>
                        <label>Address</label><br />
                        <input  placeholder="Address" />
                    </div>
                </div>
            </div>
            <div className="order-details">
                   <div className='order-details-title'>
                     Order Details
                   </div>
                  <div className='order-details-container'>
                        <div className='order-summary'>
                        {
                            orderSummaryData.map((item,key)=>{
                                return  <div className='order-summary-card-products' key={key}>
                                <div className='order-summary-product-image'>
                                    <img src = {item.image} alt = "Product selected to buy" />
                                </div>
                                <div className='order-summary-product-name-price'>
                                    <div className='order-summary-product-name'>
                                    {item.productName}
                                    </div>
                                    <div className='order-summary-product-price'>
                                    {item.productPrice}
                                    </div>
                                </div>
                            </div>
                            })
                        }
                        </div>
                        <div className='promo-code-div'>
                        <div className='promo-code'>
                                <label>Promo Code</label><br />
                                <input type="text" placeholder='Promo Code' />
                            </div>
                            <div className='total-promo-price'>
                                <div className='total-text'>Total</div>
                                <div className='promo-price'>$150</div>
                            </div>
                            <button onClick={() => navigate("/payment")}>Proceed To Payment</button>
                        </div>
                  </div>
                 
            </div>
        </div>
            <SmallNewsletter />
       </>
    )
}

export default ShippingAddress