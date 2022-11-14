import React from 'react'
import './productDescription.css'
import DisplayCard from './DisplayCard'


const ProductDescription = () => {
    const [switchTab, setSwitchTab] = React.useState("description");

    function onClickHandler(prop) {
        setSwitchTab(prop)
    }
    return (
        <div className='ProductDescription-main'>
            <div className="product-desc-nav">
                <div
                    className={switchTab === 'description' ? "product-description productDesc-active" : 'product-description'}
                    onClick={() => onClickHandler("description")}>
                    Product Description

                </div>
                <div
                    className={switchTab === 'aboutBrands' ? "About-Brand productDesc-active" : 'About-Brand'}
                    onClick={() => onClickHandler("aboutBrands")}>
                    About Brand
                </div>
                <div
                    className={switchTab === 'reviews' ? "Reviews productDesc-active" : 'Reviews'}
                    onClick={() => onClickHandler("reviews")}>
                    Reviews
                </div>
            </div>
            <div className='productDescriptionCards'>
                <DisplayCard prop={switchTab} />
            </div>
        </div>
    )
}

export default ProductDescription