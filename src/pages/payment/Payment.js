import React from 'react'
import './payment.css'

const Payment = () => {
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

                        </div>
                        <div className='show-selected-payment-method'>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Payment