import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import './productMainDetails.css'
import productImage from '../../../../assets/images/homepage/product6.png'

const ProductMainDetails = () => {
    return (
        <div className='ProductMainDetails-conatiner'>
            <div className='ProductMainDetails-left-conatiner'>
                {/* <div className='productMainDetailsPage-status'>
                    Product
                </div> */}
                <div className='product-images'>
                    <div className='main-img'>
                    <img  src={productImage} alt="product image" />
                    </div>
                    <div className='product-alt-images'>
                       <div className='individual-product-alt-img'><img src={productImage} alt="main-product-alternative-images" /></div>
                       <div className='individual-product-alt-img'><img src={productImage} alt="main-product-alternative-images" /></div>
                       <div className='individual-product-alt-img'><img src={productImage} alt="main-product-alternative-images" /></div>
                       <div className='individual-product-alt-img'><img src={productImage} alt="main-product-alternative-images" /></div>
                    </div>
                </div>
            </div>

            <div className='ProductMainDetails-right-conatiner'>
                <div className='ProductMainDetails-product-price'>
                    $12.00 - $20.00
                </div>
                <div className='ProductMainDetails-product-name'>
                    Sheild Conatiner
                </div>
                <div className='product-ratings-and-reviews'>
                    <div className='product-ratings'>
                        <AiFillStar className='star' size={15} color='#FFCC00'/>
                        <AiFillStar className='star' size={15} color='#FFCC00'/>
                        <AiFillStar className='star' size={15} color='#FFCC00'/>
                        <AiFillStar className='star' size={15} color='#FFCC00'/>
                        <AiFillStar className='star' size={15} color='#FFCC00'/>
                        4.9/5
                    </div>
                    <div className='product-reviews'>
                        10 customer Reviews
                    </div>
                </div>
                <div className='product-desc-para'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor Lorem ipsum Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
                </div>
                <div className='product-selection-dropdown'>
                    <label>Size</label>
                    <select id="" name="" required>
                    <option value="" disabled selected hidden className='select-placeholder'>Choose an Option</option>
                        <option value="Shield Container">Shield Container</option>
                        <option value="Shield Container">Shield Container</option>
                        <option value="Shield Container">Shield Container</option>
                    </select>
                </div>
                <div className='product-quantity'>
                    <div className='quantity-text'>QUYANTITY</div>
                    <div className='quantity-actions'>
                        <div className='inc-dec-btn'>
                        <div className='increase-and-decrease' name='increase'>+</div>
                        <div className='show-quantity'>1</div>
                        <div className='increase-and-decrease' name='decrease'>-</div>
                        </div>
                        <button className='addtoCart-btn' name="addtoCart">Add to Cart</button>
                    </div>
                    <div className='add-wishlist'>
                        <AiOutlineStar size={25}/>
                        <div className='addToWishlist-text'>
                            Add to Wishlist
                        </div>
                    </div>
                    <div className='product-tags'>
                        <div className='tag-text'>Tags:</div>
                        <div className='tag-list'>
                            <div className='tag-1'>Moisturisers</div>
                            <div className='tag-2'>Cleansers</div>
                        </div>
                    </div>
                    <div className='category'>Category: <span>Skin Care</span></div>
                    <div className='Brand'>Brand: <span>Aloumdowm</span></div>
                    <div className='follow-us'>Follow us:-</div>
                </div>
            </div>

        </div>
    )
}

export default ProductMainDetails