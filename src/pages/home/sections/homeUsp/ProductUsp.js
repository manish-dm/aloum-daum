import React from 'react'
import './productUsp.css'
import { productUspData } from './productUspData'
const ProductUsp = () => {
    return (
        <div className='usp-main'>
            <div className='usp-heading'>
                <div className='usp-title'>
                    Give your skin a healing feeling
                </div>
                <div className='usp-desc'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </div>
            </div>
            <div className='usp-images-and-text'>
                {
                    productUspData.map((item, key) => {
                        return <div className='indiviual-usp-cards' key={key}>
                            <img className= "usp-images"src={item.image} alt="image of our USP" />
                            <div className='usp-card-title'>{item.title}</div>
                            <div className='usp-card-desc'>{item.desc}</div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ProductUsp