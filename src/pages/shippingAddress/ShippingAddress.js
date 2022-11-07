import React from 'react'
import './shippingAddress.css'

import {orderSummaryData} from './orderSummaryData.js'

const ShippingAddress = () => {
    return (
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
                        <textarea  placeholder="Address" rows="10"
                        cols="100"/>
                    </div>
                </div>
            </div>
            <div className="order-details">
                   <div className='order-details-title'>
                     Order Dtails
                   </div>
                 <div className='order-summary'>
                   {
                    orderSummaryData.map((item,key)=>{
                        return  <div className='order-summary-card-products'>
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
                 </div>
                 <button>Proceed To Payment</button>
            </div>
        </div>
    )
}

export default ShippingAddress